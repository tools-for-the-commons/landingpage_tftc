<script lang="ts" setup>
const items = [
  {
    title: "Singularity",
    description: "Community",
    image: "/images/singularity-community.png",
    url: "/",
  },
  {
    title: "Quintessential",
    description: "Newsletter",
    image: "/images/quintessential-newsletter.png",
    url: "/",
  },
  {
    title: "Diffusion",
    description: "Podcast",
    image: "/images/diffusion-podcast.png",
    url: "/",
  },
];
</script>

<template>
  <section
    id="learn-page"
    class="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 py-8 px-4 lg:px-24 min-h-screen bg-zinc-50 dark:bg-slate-900"
  >
    <div
      class="py-6 order-0 lg:order-1 w-full text-center lg:text-right max-w-sm justify-self-center lg:justify-self-end"
    >
      <p class="text-3xl font-semibold">Learn more about TftC</p>
      <p class="mt-4 text-base font-normal w-full">
        If you're unsure where to begin, fear not. We're leading educational
        initiatives to keep you informed about open governance and connect you
        with industry leaders. From bulletins to think tanks, we bring it all
        together in a unified network.
      </p>
    </div>
    <div
      v-for="(item, index) of items"
      class="flex flex-col max-w-sm md:max-w-none cursor-pointer overflow-hidden border-2 border-slate-200 dark:border-zinc-600 rounded-md hover:shadow-lg dark:bg-zinc-950"
      :key="item.title"
      :style="{ order: index }"
    >
      <img
        class="flex object-cover object-center h-56"
        :src="item.image"
        :alt="item.title"
      />
      <div class="flex flex-col py-5 px-6">
        <p class="text-lg font-semibold">{{ item.title }}</p>
        <p class="mt-2 text-sm font-normal">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="css"></style>
