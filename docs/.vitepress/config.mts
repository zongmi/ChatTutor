import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "ChatTutor",
  description: "Visual and Interactive AI Tutor",
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Try it now', link: 'https://chattutor.app' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Blog', link: '/blog' }
        ],

        sidebar: {
          '/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/getting-started' },
                { text: 'Environment Configuration', link: '/environment' },
                { text: 'Running with Nuxt', link: '/run-nuxt' },
                { text: 'Running with Docker', link: '/run-docker' }
              ]
            },
          ],
          '/blog/': [
            {
              text: 'Blog',
              items: [
                { text: 'DevLog@2025-11-20: 关于ChatTutor，我们做了什么', link: '/blog/2025-11-20' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/HugeCatLab/ChatTutor' }
        ]
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '在线体验', link: 'https://chattutor.app' },
          { text: '快速开始', link: '/zh/getting-started' },
          { text: '博客', link: '/blog' }
        ],

        sidebar: {
          '/zh/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/zh/getting-started' },
                { text: '环境变量配置', link: '/zh/environment' },
                { text: '使用 Nuxt 运行', link: '/zh/run-nuxt' },
                { text: '使用 Docker 运行', link: '/zh/run-docker' }
              ]
            }
          ],
          '/blog/': [
            {
              text: '博客',
              items: [
                { text: '博客首页', link: '/blog/' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/HugeCatLab/ChatTutor' }
        ],
        
        outline: {
          label: '目录'
        },
        
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        
        lastUpdated: {
          text: '最后更新于'
        }
      }
    }
  },
  
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    }
  },


})
