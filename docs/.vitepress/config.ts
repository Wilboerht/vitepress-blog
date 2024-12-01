import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site settings
  title: "Wilboerht's Blog",
  description: "A personal blog about technology, life, and everything in between",
  
  // Default locale config
  lang: 'en',
  
  // Base URL - if deploying to a subdirectory, update this
  base: '/vitepress-blog/',

  // Ignore dead links
  ignoreDeadLinks: [
    // Regex pattern for paths that should be ignored
    /\/vitepress-blog\/.*posts\/life\/.*/,
    /\/vitepress-blog\/.*posts\/vue3-composition-api.*/,
    /\/vitepress-blog\/.*posts\/using-images.*/
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
              { text: 'Tech', link: '/posts/tech/' },
              { text: 'Life', link: '/posts/life/' }
            ]
          },
          { text: 'About', link: '/about' }
        ],
        sidebar: {
          '/posts/tech/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Getting Started', link: '/posts/getting-started' },
                { text: 'Markdown Examples', link: '/posts/markdown-examples' },
                { text: 'Using Images and Media', link: '/posts/using-images' }
              ]
            },
            {
              text: 'Vue.js',
              items: [
                { text: 'Vue 3 Composition API Guide', link: '/posts/vue3-composition-api' }
              ]
            }
          ],
          '/posts/life/': [
            {
              text: 'Life Stories',
              items: [
                { text: 'Latest Stories', link: '/posts/life/' }
              ]
            }
          ]
        }
      }
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
              { text: '技术', link: '/zh/posts/tech/' },
              { text: '生活', link: '/zh/posts/life/' }
            ]
          },
          { text: '关于', link: '/zh/about' }
        ],
        sidebar: {
          '/zh/posts/tech/': [
            {
              text: '入门指南',
              items: [
                { text: '开始使用', link: '/zh/posts/getting-started' },
                { text: 'Markdown 示例', link: '/zh/posts/markdown-examples' },
                { text: '使用图片和媒体', link: '/zh/posts/using-images' }
              ]
            },
            {
              text: 'Vue.js',
              items: [
                { text: 'Vue 3 组合式 API 入门指南', link: '/zh/posts/vue3-composition-api' }
              ]
            }
          ],
          '/zh/posts/life/': [
            {
              text: '生活随笔',
              items: [
                { text: '最新文章', link: '/zh/posts/life/' }
              ]
            }
          ]
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },

  // Security headers
  head: [
    ['meta', { 
      'http-equiv': 'Content-Security-Policy', 
      content: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;" 
    }],
    ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' }],
    ['meta', { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }],
    ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
    ['link', { rel: 'icon', href: '/images/common/vue-logo.svg' }]
  ],

  // Theme related configurations
  themeConfig: {
    // Logo in the navigation bar
    logo: '/images/common/vue-logo.svg',

    // Add language selection to nav
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Blog',
        items: [
          { text: 'Tech', link: '/posts/tech/' },
          { text: 'Life', link: '/posts/life/' }
        ]
      },
      { text: 'About', link: '/about' },
      {
        text: 'Language',
        items: [
          { text: 'English', link: '/' },
          { text: '简体中文', link: '/zh/' }
        ]
      }
    ],

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com/wilboerht' }
    ],

    // Search
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 2,
              text: 1
            }
          }
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询',
                backButtonTitle: '关闭搜索',
                noResultsText: '未找到结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024-present'
    }
  } satisfies DefaultTheme.Config
})
