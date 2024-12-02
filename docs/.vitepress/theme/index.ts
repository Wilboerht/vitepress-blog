// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { DefaultThemeConfig } from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h('div', { class: 'custom-layout-top' }),
      'doc-before': () => h('div', { class: 'custom-doc-before' }),
      'doc-after': () => h('div', { class: 'custom-doc-after' })
    })
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext<DefaultThemeConfig>) {
    // Register components & other app enhancements
    app.config.globalProperties.$site = siteData
    
    // Add router guards if needed
    router.onBeforeRouteChange = (to) => {
      // Add analytics or other route handling
      console.log('Route changing to:', to)
    }
  }
} satisfies Theme
