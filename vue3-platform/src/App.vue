<script setup>
import { RouterView } from 'vue-router'

</script>

<template>

  <RouterView />
</template>

<style>
/** 公共样式 */
body,html,#app {
  height: 100%;
}

/** 去掉 element menu 的右侧边框*/
.el-menu {
  border-right: 0 !important;
}

</style>
