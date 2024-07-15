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
    class="flex flex-col items-center justify-center gap-8 px-4 lg:px-8 xl:px-32 py-8"
  >
    <h3 class="text-center text-3xl font-bold">Use</h3>
    <ui-horizontal-list
      class="w-full"
      :logos="[
        {
          name: 'Diasporas',
          url: Diasporas,
        },
        {
          name: 'Governments',
          url: Governments,
        },
        {
          name: 'Online Communities',
          url: OnlineCommunities,
        },
        {
          name: 'Private Cities',
          url: PrivateCities,
        },
        {
          name: 'Refugees',
          url: Refugees,
        },
        {
          name: 'Special Economic Zones',
          url: SpecialEconomicZones,
        },
        {
          name: 'Startup Societies',
          url: StartupSocieties,
        },
        {
          name: 'Tribes',
          url: Tribes,
        },
      ]"
    />
  </section>
</template>
