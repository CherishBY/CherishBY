<script setup lang="ts">
import { useData } from 'vitepress'

const { tags } = useData().frontmatter.value;
</script>

<template>
  <div class="box-doc-info">
    <!-- 标签、创建时间、分类等等 -->
  </div>
</template>

<style lang="scss" scoped></style>