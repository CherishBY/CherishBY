import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherishBY's Blog",
  description: "A Blog Site",
  locales: {
    root: {
      label: '中文',
      lang: 'zh-cn'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/posts/web/html/什么是HTML？' }
    ],

    sidebar: {
      '/posts/web/': [
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: '什么是HTML？', link: '/posts/web/html/什么是HTML？' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
