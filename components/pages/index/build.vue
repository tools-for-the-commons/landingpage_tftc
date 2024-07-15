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
    class="min-h-[32rem] flex flex-col items-center justify-center gap-8 px-4 lg:px-8 xl:px-32 py-8 bg-zinc-50 dark:bg-slate-900"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-center text-3xl font-bold">Build</h3>
      <span class="text-muted-foreground text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        nulla, rutrum nec venenatis sit amet, auctor in lectus. Nulla facilisi.
        Cras sed tortor vel augue molestie porttitor volutpat eget lacus.
      </span>
    </div>
    <ui-horizontal-list
      class="w-full"
      :logos="[
        {
          name: 'Blockchain Developers',
          url: BlockChainDevelopers,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Creators',
          url: Creators,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Designers',
          url: Designers,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Key Opinion Leaders',
          url: KeyOpinionLeaders,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Refugees',
          url: SoftwareEngineers,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Top Voices',
          url: TopVoices,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
      ]"
    />
  </section>
</template>
