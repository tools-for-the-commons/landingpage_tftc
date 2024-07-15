<script lang="ts" setup>
import Diasporas from "~/assets/images/use/Diasporas.png";
import Governments from "~/assets/images/use/Governments.png";
import OnlineCommunities from "~/assets/images/use/Online Communities.png";
import PrivateCities from "~/assets/images/use/Private Cities.png";
import Refugees from "~/assets/images/use/Refugees.png";
import SpecialEconomicZones from "~/assets/images/use/Special Economic Zones.png";
import StartupSocieties from "~/assets/images/use/Startup Societies.png";
import Tribes from "~/assets/images/use/Tribes.png";
</script>

<template>
  <section
    id="home-about-page"
    class="min-h-[32rem] flex flex-col items-center justify-around gap-8 px-4 lg:px-8 xl:px-32 py-8"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-center text-3xl font-bold">Use</h3>
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
          name: 'Diasporas',
          url: Diasporas,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Governments',
          url: Governments,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Online Communities',
          url: OnlineCommunities,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Private Cities',
          url: PrivateCities,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Refugees',
          url: Refugees,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Special Economic Zones',
          url: SpecialEconomicZones,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Startup Societies',
          url: StartupSocieties,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
        {
          name: 'Tribes',
          url: Tribes,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
        Cras lacus.`,
        },
      ]"
    />
  </section>
</template>
