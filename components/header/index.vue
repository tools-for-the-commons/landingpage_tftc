<script lang="ts" setup>
import { useTheme } from "~/composable/theme";

const navLinks = [
  { label: "Team", path: "/" },
  { label: "Manifesto", path: "/#home-about-page" },
  { label: "Learn", path: "/" },
  { label: "Use", path: "/" },
  { label: "Invest", path: "/" },
];
const themeUtils = useTheme();

const showMenu = ref(false);
</script>

<template>
  <header
    id="header"
    class="sticky top-0 z-10 border-solid border-b-2 border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
  >
    <div class="flex gap-8 items-center max-w-7xl mx-auto px-6 py-2">
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
        <client-only>
          <div class="relative">
            <button
              class="header-menu hover:text-sky-600 material-symbols-outlined"
              @click="showMenu = !showMenu"
            >
              menu
            </button>
            <ul
              class="transition-all flex-col w-screen max-w-44 right-0 gap-2 pt-3 pb-4 px-6 rounded-md absolute shadow-lg bg-white dark:bg-zinc-800"
              :class="{ flex: showMenu, hidden: !showMenu }"
            >
              <li
                v-for="link in navLinks"
                :key="link.label"
                class="hover:text-sky-400 cursor-pointer"
                @click.stop="showMenu = false"
              >
                <nuxt-link class="text-sm" :to="link.path">
                  {{ link.label }}
                </nuxt-link>
              </li>
              <li
                class="hover:text-sky-400 cursor-pointer"
                @click="themeUtils?.toggleThemePreference()"
              >
                <button class="flex items-center gap-1 capitalize text-sm">
                  {{ themeUtils?.currentTheme.value }} theme
                </button>
              </li>
            </ul>
          </div>
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
#header .header-menu,
#header .header-menu-options {
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
