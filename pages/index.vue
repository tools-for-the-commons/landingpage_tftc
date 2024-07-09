<script lang="ts" setup>
import HomeHeroSection from "~/components/pages/index/hero.vue";
import HomeAboutSection from "~/components/pages/index/about.vue";
import HomeProductSection from "~/components/pages/index/product.vue";

useHead({
  title: "Home",
});
</script>

<template>
  <main id="home-page">
    <home-hero-section class="max-w-7xl mx-auto" />
    <home-about-section class="max-w-7xl mx-auto" />
    <home-product-section class="max-w-7xl mx-auto" />
  </main>
</template>

<style lang="css"></style>
