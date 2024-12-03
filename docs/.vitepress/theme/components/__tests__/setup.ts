import { vi, afterEach } from 'vitest'
import { config } from '@vue/test-utils'
import '@testing-library/jest-dom'

// 扩展 expect 类型
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T> {}
  }
}

// 模拟 VitePress 的 useData 和 useRoute hooks
vi.mock('vitepress', () => ({
  useData: vi.fn().mockReturnValue({
    frontmatter: { value: {} },
    isDark: { value: false },
  }),
  useRoute: vi.fn().mockReturnValue({
    path: '/test',
  }),
}))

// 全局配置
config.global.stubs = {}
config.global.mocks = {
  $route: {
    path: '/test',
  },
}

// 模拟 window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// 清理函数
afterEach(() => {
  // 清理 DOM
  document.body.innerHTML = ''
  // 重置所有的 mock
  vi.clearAllMocks()
})
