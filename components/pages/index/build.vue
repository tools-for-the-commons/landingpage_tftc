<script lang="ts" setup>
import BlockChainDevelopers from "~/assets/images/build/Blockchain Developers.png";
import Creators from "~/assets/images/build/Creators.png";
import Designers from "~/assets/images/build/Designers.png";
import KeyOpinionLeaders from "~/assets/images/build/Key Opinion Leaders.png";
import SoftwareEngineers from "~/assets/images/build/Software Engineers.png";
import TopVoices from "~/assets/images/build/Top Voices.png";
</script>

<template>
  <section
    id="home-about-page"
    class="flex flex-col items-center justify-center gap-8 px-4 lg:px-8 xl:px-32 py-8 bg-zinc-50 dark:bg-slate-900"
  >
    <h3 class="text-center text-3xl font-bold">Build</h3>
    <ui-horizontal-list
      class="w-full"
      :logos="[
        {
          name: 'Blockchain Developers',
          url: BlockChainDevelopers,
        },
        {
          name: 'Creators',
          url: Creators,
        },
        {
          name: 'Designers',
          url: Designers,
        },
        {
          name: 'Key Opinion Leaders',
          url: KeyOpinionLeaders,
        },
        {
          name: 'Refugees',
          url: SoftwareEngineers,
        },
        {
          name: 'Top Voices',
          url: TopVoices,
        },
      ]"
    />
  </section>
</template>
