<script lang="ts" setup>
const items = [
  {
    title: "Common Cast",
    description: "Podcast on the TftC project",
    image: "/images/common-cast.png",
    url: "/",
  },
  {
    title: "Common Stack",
    description: "NFT collection on the TftC project",
    image: "/images/common-stack.png",
    url: "/",
  },
  {
    title: "Common X",
    description: "NFT collection on the TftC project",
    image: "/images/common-x.png",
    url: "/",
  },
];
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 py-8 px-4 lg:px-24 min-h-screen bg-zinc-50 dark:bg-slate-900"
  >
    <div class="flex flex-col py-6">
      <p class="text-3xl font-semibold">Learn more about TftC</p>
      <p class="mt-4 text-base max-w-sm font-normal">
        TftC is at the forefront of open governance solutions harnessing
        blockchain, distributed public utility, and public goods management
        technologies to build network-managed cities and societies.
      </p>
    </div>
    <div
      class="flex flex-col max-w-sm md:max-w-none cursor-pointer overflow-hidden border-2 border-slate-200 dark:border-zinc-600 rounded-md hover:shadow-lg dark:bg-zinc-950"
      v-for="item of items"
      :key="item.title"
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
