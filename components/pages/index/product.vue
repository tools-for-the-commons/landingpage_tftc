<script lang="ts" setup>
const items = [
  {
    label: "Digital Self",
    image: "/images/digital-self.webp",
  },
  {
    label: "AI assistant",
    image: "/images/ai-assistant.webp",
  },
  {
    label: "Capital Rails",
    image: "/images/capital-rails.webp",
  },
  {
    label: "Professional and Entrepreneurial Network",
    image: "/images/professional-and-entrepreneurial-network.webp",
  },
  {
    label: "Integrated Exchange Platform",
    image: "/images/integrated-exchange-platform.webp",
  },
  {
    label: "Inexpensive Borderless Transaction Fees",
    image: "/images/inexpensive-borderless-transaction-fees.webp",
  },
];

const selectedItem = ref(items[0]);
const transitionInterval = ref<NodeJS.Timeout | null>(null);

function handleSelectItem(item: (typeof items)[number]) {
  selectedItem.value = item;
  startTransition();
}

function startTransition() {
  if (transitionInterval.value) {
    endTransition();
  }

  transitionInterval.value = setInterval(() => {
    const index = items.findIndex(
      (item) => item.label === selectedItem.value.label
    );
    selectedItem.value = items[index + 1] || items[0];
  }, 8 * 1000);
}

function endTransition() {
  if (!transitionInterval.value) {
    return;
  }
  clearInterval(transitionInterval.value);
}

if (import.meta.client) {
  onMounted(startTransition);
  onUnmounted(endTransition);
}
</script>

<template>
  <section
    id="home-product-page"
    class="min-h-screen flex flex-col lg:flex-row items-center gap-4 lg:gap-8 p-4 md:px-24"
  >
    <div class="flex flex-col w-full max-w-lg">
      <h3 class="text-lg font-medium">
        Introducing CommonWorld, a gateway to the future of open governance,
        digital assets, and digital commerce, facilitating secure data exchange
        and equitable resource sharing across multiple world regions.
      </h3>
      <ul class="mt-4 lg:mt-12 list-disc px-6">
        <li
          class="my-2 cursor-pointer"
          v-for="item of items"
          :key="item.label"
          @click="handleSelectItem(item)"
        >
          <span class="text-zinc-900 dark:text-zinc-100">
            {{ item.label }}
          </span>
        </li>
      </ul>
    </div>
    <div class="flex lg:mx-auto">
      <template v-for="item of items">
        <transition>
          <img
            class="product-image flex dark:invert w-full max-w-72 lg:max-w-sm pointer-events-none transition-all"
            :src="item.image"
            :alt="item.label"
            v-if="selectedItem.label === item.label"
          />
        </transition>
      </template>
    </div>
  </section>
</template>

<style lang="css"></style>
