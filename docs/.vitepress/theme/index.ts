// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CreateDocInfo from './components/CreateDocInfo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CreateDocInfo', CreateDocInfo);

    // 配置不蒜子
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      document.head.appendChild(script)
    }
  }
} satisfies Theme
