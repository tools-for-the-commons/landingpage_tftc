<script lang="ts" setup>
const mutedVideo = ref(true)
</script>

<template>
  <section
    id="home-hero-page"
    class="flex flex-col gap-4 items-center pb-4 text-center justify-center"
  >
    <div class="hero-video mb-8 flex w-full relative">
      <video
        class="w-full object-cover object-center rounded-b-md filter grayscale"
        autoplay
        :muted="mutedVideo"
        loop
      >
        <source src="~/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>
      <button
        class="absolute bottom-2 right-2 material-symbols-outlined text-2xl text-slate-300 :hover:text-white"
        :title="mutedVideo ? 'Unmute' : 'Mute'"
        @click="mutedVideo = !mutedVideo"
      >
        {{ mutedVideo ? 'volume_off' : 'volume_up' }}
      </button>
    </div>
    <h1 class="text-4xl font-black">Welcome to the United Network Nations</h1>
    <h2 class="text-2xl font-black">Tools for the Commons</h2>
    <h3 class="text-xl">A Community-Powered Protocol for Public Goods</h3>
    <nuxt-link
      class="mt-4 py-2 px-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 border-2 border-zinc-600 dark:border-zinc-400 rounded-md"
      to="/#home-about-page"
    >
      Learn More Below
    </nuxt-link>
  </section>
</template>

<style lang="css">
#home-page #home-hero-page {
  min-height: calc(100vh - 4.4rem);

  .hero-video {
    height: 64vh;
    max-height: 14rem;
  }

  @media screen and (min-width: 768px) {
    .hero-video {
      max-height: 38rem;
    }
  }
}
</style>
