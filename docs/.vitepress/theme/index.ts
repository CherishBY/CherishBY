// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue';
// import CreateDocInfo from './components/CreateDocInfo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    // app.component('CreateDocInfo', CreateDocInfo);

    // 配置不蒜子
    if (typeof window !== 'undefined') {
      document.head.insertAdjacentHTML('beforeend', `
        <script
          src="https://busuanzi.9420.ltd/js"
          defer
          pjax
          data-style="short"
        >
        </script>
      `);
    }
  }
} satisfies Theme
