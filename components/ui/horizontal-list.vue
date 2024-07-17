<script setup lang="ts">
import type { VNodeRef } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const carouselRef = ref<VNodeRef | undefined>(undefined);
let autoPlay: NodeJS.Timeout;
interface Props {
  logos: {
    name: string;
    url: string;
    description: string;
  }[];
}

defineProps<Props>();

const breakpoints = {
  360: {
    itemsToShow: 1,
  },
  700: {
    itemsToShow: 4,
  },
};

onMounted(() => {
  autoPlay = setInterval(() => {
    carouselRef.value.next();
  }, 2000);
});

onUnmounted(() => {
  clearInterval(autoPlay);
});
</script>

<template>
  <Carousel
    class="shadow-md"
    ref="carouselRef"
    :wrap-around="true"
    :auto-play="2000"
    :items-to-show="4"
    :breakpoints="breakpoints"
  >
    <Slide v-for="(logo, index) in logos" :key="logo.name">
      <div
        class="w-full flex flex-col gap-8 border border-slate-200 dark:border-zinc-600 p-4 h-[250px]"
      >
        <img class="w-20 h-24" :src="logo.url" :alt="logo.name" />
        <div class="flex flex-col gap-2">
          <span class="font-semibold text-justify">{{ logo.name }}</span>
          <span class="text-gray-500 text-xs text-start">{{
            logo.description
          }}</span>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<style scoped>
.carousel__slide {
  padding: 10px;
}
</style>
