// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Comments from './components/Comments.vue'
import ReadingTime from './components/ReadingTime'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Comments),
    })
  },
  enhanceApp({ app }) {
    app.component('ReadingTime', ReadingTime)
  },
} as Theme
