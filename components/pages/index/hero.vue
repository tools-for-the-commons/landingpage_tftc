<script lang="ts" setup>
const mutedVideo = ref(true);
</script>

<template>
  <section
    id="home-hero-page"
    class="flex flex-col gap-4 items-center text-center"
  >
    <div class="hero-video mb-8 flex w-full relative">
      <video
        class="w-full object-cover object-bottom rounded-b-md"
        autoplay
        :muted="mutedVideo"
        loop
      >
        <source src="~/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute inset-0 bg-black opacity-5 pointer-events-none"
      ></div>
      <button
        class="absolute bottom-2 right-2 material-symbols-outlined text-2xl text-slate-300 :hover:text-white"
        :title="mutedVideo ? 'Unmute' : 'Mute'"
        @click="mutedVideo = !mutedVideo"
      >
        {{ mutedVideo ? "volume_off" : "volume_up" }}
      </button>
    </div>
    <h1 class="text-4xl font-black">Welcome to the United Network Nations</h1>
    <h2 class="text-2xl">
      TftC: A Community-Powered Protocol for Public Goods.
    </h2>
  </section>
</template>

<style lang="css">
#home-page #home-hero-page {
  min-height: calc(100vh - 4.4rem);

  .hero-video {
    height: 70vh;
    max-height: 38rem;
  }
}
</style>
