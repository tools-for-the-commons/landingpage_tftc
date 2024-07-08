<script lang="ts" setup>
import { useTheme } from "~/composable/theme";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | TftC` : "TftC";
  },
});

const themeUtils = useTheme();
themeUtils?.setThemePreference();
</script>

<template>
  <nuxt-layout />
</template>

<style lang="css"></style>
