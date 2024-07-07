<script lang="ts" setup>
import { useTheme } from "~/composable/theme";

const navLinks = [
  { label: "Explanation", path: "/#home-about-page" },
  { label: "Use", path: "/" },
  { label: "Build", path: "/" },
  { label: "Participate", path: "/" },
  { label: "Research", path: "/" },
];
const themeUtils = useTheme();
</script>

<template>
  <header
    id="header"
    class="sticky top-0 z-10 border-solid border-b-2 border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
  >
    <div class="flex gap-8 items-center max-w-7xl mx-auto px-4 py-2">
      <div class="flex">
        <nuxt-link to="/#home-hero-page" class="text-3xl font-bold">
          <img
            class="w-full max-w-24 md:max-w-32 pointer-events-none dark:invert"
            src="~/assets/images/logo.png"
            alt="TftC"
          />
        </nuxt-link>
      </div>
      <nav class="hidden md:flex">
        <ul class="flex gap-6">
          <li v-for="link in navLinks" :key="link.label">
            <nuxt-link class="hover:text-sky-400" :to="link.path">
              {{ link.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex gap-4 ml-auto">
        <button class="material-symbols-outlined hover:text-sky-900">
          search
        </button>
        <client-only>
          <button
            class="header-menu hover:text-sky-900 material-symbols-outlined"
          >
            menu
          </button>
          <button
            class="hidden md:flex hover:text-sky-900 material-symbols-outlined"
            @click="themeUtils?.toggleThemePreference()"
          >
            {{
              themeUtils?.currentTheme.value === "light"
                ? "dark_mode"
                : "light_mode"
            }}
          </button>
        </client-only>
      </div>
    </div>
  </header>
</template>

<style lang="css">
#header .header-menu {
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
