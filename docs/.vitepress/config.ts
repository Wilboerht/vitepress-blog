import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site settings
  title: "Wilboerht's Blog",
  description: 'A personal blog about technology, life, and everything in between',
  lang: 'en',
  base: '/vitepress-blog/',

  // Head meta tags for SEO
  head: [
    ['meta', { name: 'author', content: 'Wilboerht' }],
    ['meta', { name: 'keywords', content: 'blog,vitepress,vue,tech,programming,personal-blog' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: "Wilboerht's Blog" }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'A personal blog about technology, life, and everything in between',
      },
    ],
    ['meta', { property: 'og:image', content: '/images/common/vue-logo.svg' }],
    ['link', { rel: 'icon', href: '/images/common/vue-logo.svg' }],
    // Security headers
    [
      'meta',
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://giscus.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-src https://giscus.app; connect-src 'self' https:;",
      },
    ],
    ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' }],
    ['meta', { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }],
    ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
    // PWA configuration
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.3/dist/lazyload.min.js' },
    ],
  ],

  // Ignore dead links
  ignoreDeadLinks: [
    /\/vitepress-blog\/.*posts\/life\/.*/,
    /\/vitepress-blog\/.*posts\/vue3-composition-api.*/,
    /\/vitepress-blog\/.*posts\/using-images.*/,
  ],

  // Locales configuration
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Blog',
            items: [
              { text: 'All Posts', link: '/posts/' },
              { text: 'Tech', link: '/posts/tech/' },
              { text: 'Life', link: '/posts/life/' },
            ],
          },
          { text: 'About', link: '/about' },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          {
            text: '博客',
            items: [
              { text: '所有文章', link: '/zh/posts/' },
              { text: '技术', link: '/zh/posts/tech/' },
              { text: '生活', link: '/zh/posts/life/' },
            ],
          },
          { text: '关于', link: '/zh/about' },
        ],
      },
    },
  },

  themeConfig: {
    // Search configuration
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search docs',
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
            },
          },
        },
      },
    },

    // Logo in the navigation bar
    logo: '/images/common/vue-logo.svg',

    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Blog',
        items: [
          { text: 'All Posts', link: '/posts/' },
          { text: 'Tech', link: '/posts/tech/' },
          { text: 'Life', link: '/posts/life/' },
        ],
      },
      { text: 'About', link: '/about' },
    ],

    // Sidebar configuration
    sidebar: {
      '/posts/tech/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Getting Started', link: '/posts/getting-started' },
            { text: 'Markdown Examples', link: '/posts/markdown-examples' },
            { text: 'Using Images and Media', link: '/posts/using-images' },
          ],
        },
        {
          text: 'Vue.js',
          items: [{ text: 'Vue 3 Composition API Guide', link: '/posts/vue3-composition-api' }],
        },
      ],
      '/posts/life/': [
        {
          text: 'Life Stories',
          items: [{ text: 'Latest Stories', link: '/posts/life/' }],
        },
      ],
    },
  },
})
