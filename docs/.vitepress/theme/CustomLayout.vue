<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="box-busuanzi">
        本站总访问量：<span id="busuanzi_site_pv">0</span>次
        访客数：<span id="busuanzi_site_uv">0</span>人
      </div>
    </template>

    <template #doc-top>
      <div class="box-busuanzi">
        本章总访问量：<span id="busuanzi_page_pv">0</span>次
        访客数：<span id="busuanzi_page_uv">0</span>人
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.box-busuanzi {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 11;
  display: none;
}
</style>