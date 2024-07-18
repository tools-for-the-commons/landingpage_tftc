<script lang="ts" setup>
import BlockChainDevelopers from "~/assets/images/build/Blockchain_Developers.png";
import Creators from "~/assets/images/build/Creators.png";
import LegalEngineers from "~/assets/images/build/Legal_Engineers.png";
import FinancialEngineers from "~/assets/images/build/Financial_Engineers.png";
import Designers from "~/assets/images/build/UI_UX Designers.png";
import KeyOpinionLeaders from "~/assets/images/build/Key_Opinion_Leaders.png";
import SoftwareEngineers from "~/assets/images/build/Software_Engineers.png";
import TopVoices from "~/assets/images/build/Top_Voices.png";
</script>

<template>
  <section
    id="home-about-page"
    class="min-h-[32rem] flex flex-col items-center justify-center gap-8 px-4 lg:px-8 xl:px-32 py-8 bg-zinc-50 dark:bg-slate-900"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-center text-3xl font-bold">Build</h3>
      <span class="text-muted-foreground text-center">
        We attract outside-the-box thinkers and collaborate with proactive,
        talented individuals dedicated to shaping a collective-focused future.
      </span>
    </div>
    <ui-horizontal-list
      class="w-full"
      :logos="[
        {
          name: 'Software Architects',
          url: SoftwareEngineers,
          description: `Architects of innovative digital solutions.`,
        },
        {
          name: 'Blockchain Developers',
          url: BlockChainDevelopers,
          description: `Builders of the future in decentralized technologies.`,
        },
        {
          name: 'UI/UX Designers',
          url: Designers,
          description: `Creators of captivating experiences for savvy users to beginners.`,
        },
        {
          name: 'Financial Engineers',
          url: FinancialEngineers,
          description: `Designers of sophisticated financial algorithm models.`,
        },
        {
          name: 'Legal Engineers',
          url: LegalEngineers,
          description: `Developers of adaptive legal frameworks for digital compliance.`,
        },
        {
          name: 'Content Creators',
          url: Creators,
          description: `Crafters of compelling narratives resonating across audiences.`,
        },
        {
          name: 'Key Opinion Leaders',
          url: KeyOpinionLeaders,
          description: `Shapers of perspectives and meaningful public discourse.`,
        },

        {
          name: 'Top Voices',
          url: TopVoices,
          description: `Drivers of conversations with authority in their niche.`,
        },
      ]"
    />
  </section>
</template>
