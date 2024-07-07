// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03", // for Nitro
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  app: {
    head: {
      meta: [
        // Primary Meta Tags
        { name: "title", content: "TftC" },
        {
          name: "description",
          content:
            "TftC is at the forefront of open governance solutions, harnessing blockchain, distributed public utility, and public goods management technologies to build network-managed cities and societies. The diagram illustrates the central node and its connections with Regenerative Finance, Digital Native Institutions, Single Identity System, and Multipurpose Exchange Platform.",
        },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://metatags.io/" },
        { property: "og:title", content: "TftC" },
        {
          property: "og:description",
          content:
            "TftC is at the forefront of open governance solutions, harnessing blockchain, distributed public utility, and public goods management technologies to build network-managed cities and societies. The diagram illustrates the central node and its connections with Regenerative Finance, Digital Native Institutions, Single Identity System, and Multipurpose Exchange Platform.",
        },
        {
          property: "og:image",
          content: "https://metatags.io/images/meta-tags.png",
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://metatags.io/" },
        { name: "twitter:title", content: "TftC" },
        {
          name: "twitter:description",
          content:
            "TftC is at the forefront of open governance solutions, harnessing blockchain, distributed public utility, and public goods management technologies to build network-managed cities and societies. The diagram illustrates the central node and its connections with Regenerative Finance, Digital Native Institutions, Single Identity System, and Multipurpose Exchange Platform.",
        },
        {
          name: "twitter:image",
          content: "https://metatags.io/images/meta-tags.png",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
