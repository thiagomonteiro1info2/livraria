<script setup>
import HeaderComp from '@/components/template/HeaderComp.vue';
</script>

<template>
  <HeaderComp />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: auto;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}

main {
  min-height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>