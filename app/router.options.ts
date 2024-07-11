import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 92,
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
};
