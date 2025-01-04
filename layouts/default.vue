<script lang="ts" setup>
import HeaderComponent from '~/components/header/index.vue'
import FooterComponent from '~/components/footer/index.vue'
</script>

<template>
  <div
    id="default-layout"
    class="font-poppins text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900"
  >
    <header-component />
    <nuxt-page />
    <footer-component />
  </div>
</template>

<style lang="css"></style>
