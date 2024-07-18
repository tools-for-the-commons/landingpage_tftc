<script lang="ts" setup>
import Diasporas from "~/assets/images/use/Diasporas.png";
import Governments from "~/assets/images/use/Governments.png";
import OnlineCommunities from "~/assets/images/use/Online Communities.png";
import PrivateCities from "~/assets/images/use/Private Cities.png";
import Refugees from "~/assets/images/use/Refugees.png";
import DigitalFreeZones from "~/assets/images/use/Digital Free Zones.png";
import StartupSocieties from "~/assets/images/use/Startup Societies.png";
import Tribes from "~/assets/images/use/Tribes.png";
</script>

<template>
  <section
    id="use-page"
    class="min-h-[32rem] flex flex-col items-center justify-around gap-8 px-4 lg:px-8 xl:px-32 py-8"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-center text-3xl font-bold">Use</h3>
      <span class="text-muted-foreground text-center">
        Wherever you are and whoever you are, we equip you to thrive in a
        constantly evolving 21st-century world with modular digital tools.
      </span>
    </div>
    <ui-horizontal-list
      class="w-full"
      :logos="[
        {
          name: 'Diasporas',
          url: Diasporas,
          description: `Cultures across continents.`,
        },
        {
          name: 'Governments',
          url: Governments,
          description: `Governance for today's challenges.`,
        },
        {
          name: 'Online Communities',
          url: OnlineCommunities,
          description: `Virtual spaces, real connections.`,
        },
        {
          name: 'Private Cities',
          url: PrivateCities,
          description: `Innovative urban living, redefining community.`,
        },
        {
          name: 'Refugees',
          url: Refugees,
          description: `Safety, built anew.`,
        },
        {
          name: 'Digital Free Zones',
          url: DigitalFreeZones,
          description: `Global entrepreneurship with regulatory flexibility.`,
        },
        {
          name: 'Startup Societies',
          url: StartupSocieties,
          description: `New business models for a contemporary civilization.`,
        },
        {
          name: 'Tribes',
          url: Tribes,
          description: `Heritage in a modern world.`,
        },
      ]"
    />
  </section>
</template>
