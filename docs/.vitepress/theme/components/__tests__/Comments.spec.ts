import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils/dist/index'
import { useData, useRoute } from 'vitepress'
import type { Mock } from 'vitest'
import Comments from '../Comments.vue'

vi.mock('vitepress')

const useDataMock = useData as Mock
const useRouteMock = useRoute as Mock

// 创建模拟的 iframe 和 window
function createMockIframe() {
  const postMessage = vi.fn()
  const iframe = document.createElement('iframe')
  iframe.classList.add('giscus-frame')

  // 使用 Object.defineProperty 来模拟 contentWindow
  Object.defineProperty(iframe, 'contentWindow', {
    value: {
      postMessage,
      // 添加必要的 Window 接口属性
      location: window.location,
      navigator: window.navigator,
      document: window.document,
    },
  })

  document.body.appendChild(iframe)
  return { iframe, postMessage }
}

describe('Comments.vue', () => {
  let wrapper: ReturnType<typeof mount>
  const mountOptions = {
    shallow: true,
  }

  beforeEach(() => {
    // 重置 DOM
    document.body.innerHTML = ''
    // 重置所有的 mock
    vi.clearAllMocks()
    // 重置 VitePress hooks
    useDataMock.mockReturnValue({
      frontmatter: { value: {} },
      isDark: { value: false },
    })
    useRouteMock.mockReturnValue({
      path: '/test',
    })
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('renders properly', () => {
    wrapper = mount(Comments, mountOptions)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.comments')).toBeVisible()
  })

  it('does not load comments on non-post pages', () => {
    useDataMock.mockReturnValue({
      frontmatter: { value: { layout: 'page' } },
      isDark: { value: false },
    })
    wrapper = mount(Comments, mountOptions)
    expect(wrapper.find('iframe.giscus-frame').exists()).toBe(false)
  })

  it('loads comments on post pages', async () => {
    useDataMock.mockReturnValue({
      frontmatter: { value: { layout: 'post' } },
      isDark: { value: false },
    })
    wrapper = mount(Comments, mountOptions)
    await wrapper.vm.$nextTick()
    const script = document.querySelector('script[src*="giscus.app"]')
    expect(script).toBeInTheDocument()
    expect(script?.getAttribute('data-theme')).toBe('light')
  })

  it('updates theme when dark mode changes', async () => {
    const { postMessage } = createMockIframe()

    useDataMock.mockReturnValue({
      frontmatter: { value: { layout: 'post' } },
      isDark: { value: true },
    })

    wrapper = mount(Comments, mountOptions)
    await vi.dynamicImportSettled()

    expect(postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        giscus: { setConfig: { theme: 'dark' } },
      }),
      'https://giscus.app'
    )
  })

  it('reloads comments when route changes', async () => {
    const { postMessage } = createMockIframe()

    wrapper = mount(Comments, mountOptions)
    await wrapper.vm.$nextTick()

    useRouteMock.mockReturnValue({
      path: '/new-path',
    })

    await vi.dynamicImportSettled()

    expect(postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        giscus: { setConfig: { term: '/new-path' } },
      }),
      'https://giscus.app'
    )
  })
})
