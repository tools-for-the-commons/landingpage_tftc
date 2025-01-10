<script lang="ts" setup>
const mutedVideo = ref(true)
</script>

<template>
  <section id="home-hero-page" class="flex flex-col gap-4 items-center pb-4 text-center relative">
    <div class="hero-video flex w-full relative">
      <video
        class="w-full object-cover pointer-events-none object-center h-[80vh] max-h-[700px] rounded-sm filter sepia-[0.4] brightness-50"
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
    <div class="absolute px-4 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 class="xl:text-6xl text-2xl font-bold text-zinc-50">Be sovereign and prosper</h1>
      <h2 class="mt-6 xl:text-2xl text-base font-normal italic text-zinc-50">
        We build 21st-century countries (/societies/cities): fair, decentralized, and sustainable.
        <br />
        <span class="font-light">
          Empowering progress with Digital Public Infrastructures for the information age.
        </span>
      </h2>
    </div>
  </section>
</template>

<style lang="css"></style>
