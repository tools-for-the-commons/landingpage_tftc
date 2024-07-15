<script lang="ts" setup>
import HomeHeroSection from "~/components/pages/index/hero.vue";
import HomeAboutSection from "~/components/pages/index/about.vue";
import HomeProductSection from "~/components/pages/index/product.vue";
import HomeLearnSection from "~/components/pages/index/learn.vue";
import InvestSection from "~/components/pages/index/invest.vue";
import UseSection from "~/components/pages/index/use.vue";
import BuildSection from "~/components/pages/index/build.vue";

useHead({
  title: "Home",
});
</script>

<template>
  <main id="home-page">
    <home-hero-section class="max-w-7xl mx-auto" />
    <home-about-section class="max-w-7xl mx-auto" />
    <home-product-section class="max-w-7xl mx-auto" />
    <home-learn-section class="max-w-7xl mx-auto" />
    <use-section class="max-w-7xl mx-auto" />
    <build-section class="max-w-7xl mx-auto" />
    <invest-section class="max-w-7xl mx-auto" />
  </main>
</template>

<style lang="css"></style>
