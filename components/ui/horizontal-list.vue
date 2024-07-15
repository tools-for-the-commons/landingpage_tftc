<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

interface Props {
  logos: {
    name: string;
    url: string;
  }[];
}

const props = defineProps<Props>();

const breakpoints = {
  360: {
    itemsToShow: 1,
  },
  700: {
    itemsToShow: 4,
  },
};
</script>

<template>
  <Carousel :items-to-show="4" :breakpoints="breakpoints">
    <Slide v-for="(logo, index) in logos" :key="logo.name">
      <div
        :class="[
          'w-full flex flex-col gap-8 border border-slate-200 dark:border-zinc-600 p-2',
          index === logos.length - 1 ? 'border-r-2' : 'border-r-0',
        ]"
      >
        <img class="w-20 h-24" :src="logo.url" :alt="logo.name" />
        <span class="font-semibold text-justify">{{ logo.name }}</span>
      </div>
    </Slide>
  </Carousel>
</template>
