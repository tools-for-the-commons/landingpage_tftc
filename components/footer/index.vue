<script lang="ts" setup>
const socialLinks = [
  {
    label: "Linkdin",
    icon: "fab fa-linkedin",
    path: "https://www.linkedin.com/company/toolsforthecommonsxyz/",
  },
  {
    label: "Twitter",
    icon: "fab fa-twitter",
    path: "https://x.com/tftcxyz",
  },
  {
    label: "Youtube",
    icon: "fab fa-youtube",
    path: "https://www.youtube.com/@commoncastxyz",
  },
  {
    label: "Substrack",
    icon: "fas fa-bookmark",
    path: "https://substack.com/@commonstack",
  },
];

const legalLinks = [
  {
    label: "Terms of Service",
    path: "/",
  },
  {
    label: "Privacy Policy",
    path: "/",
  },
];

const internalLinks = {
  "ABOUT US": {
    path: "/#home-about-page",
    items: [
      { label: "Manifest", path: "/" },
      { label: "Knowledge", path: "/" },
      { label: "Insights", path: "/" },
      { label: "Contact", path: "/" },
    ],
  },
  ECOSYSTEM: {
    path: "/#home-about-page",
    items: [
      { label: "OpenGov", path: "/" },
      { label: "Solutions", path: "/" },
      { label: "Projects", path: "/" },
      { label: "Community", path: "/" },
    ],
  },
  GROWTH: {
    path: "/#home-about-page",
    items: [
      { label: "Roadmap", path: "/" },
      { label: "Team", path: "/" },
      { label: "Partners", path: "/" },
    ],
  },
};
</script>

<template>
  <footer id="footer" class="bg-white dark:bg-zinc-900">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row gap-8 items-center justify-between py-4 px-2 sm:px-12"
      >
        <div class="flex flex-col gap-3">
          <img
            class="flex w-36 max-w-lg pointer-events-none dark:invert"
            src="~/assets/images/logo.png"
            alt="TftC"
          />
          <div class="flex gap-3 ml-2">
            <a
              class="text-base hover:text-sky-400"
              v-for="socialLink of socialLinks"
              :class="socialLink.icon"
              :key="socialLink.label"
              :href="socialLink.path"
              :title="socialLink.label"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </div>
        <div class="flex gap-8 md:gap-12 flex-wrap md:flex-nowrap">
          <div v-for="(internalLink, key) of internalLinks" :key="key">
            <nuxt-link
              class="text-sm font-bold"
              :to="internalLink.path"
              :title="key"
            >
              {{ key }}
            </nuxt-link>
            <div class="flex flex-col gap-1 mt-2">
              <nuxt-link
                class="text-sm font-medium text-zinc-600 dark:text-zinc-200"
                v-for="item of internalLink.items"
                :key="item.label"
                :to="item.path"
                :title="item.label"
              >
                {{ item.label }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between items-center gap-2 flex-col md:flex-row px-2 sm:px-12 pb-4 pt-6 border-solid border-t-2 border-gray-100 dark:border-zinc-800"
      >
        <div class="flex flex-col gap-1 text-center sm:text-left">
          <p class="text-sm font-medium">
            TftC | Tools for the Commons | Copyright © 2024
          </p>
          <p class="text-xs font-light text-zinc-500 dark:text-zinc-400">
            All trademarks and copyrights belong to their respective owners.
          </p>
        </div>
        <div class="flex gap-4">
          <a
            class="text-sm text-zinc-600 dark:text-zinc-200 hover:text-sky-600"
            v-for="legalLink of legalLinks"
            :href="legalLink.path"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ legalLink.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css"></style>
