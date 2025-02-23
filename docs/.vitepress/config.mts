import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fin Orr",
  description: "Thing's by Fin",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Portfolio", link: "/portfolio" },
      { text: "Blog", link: "/blog" },
      { text: "Resources", link: "/resources" },
      { text: "Resume", link: "/resume" },
    ],

    sidebar: [
      {
        text: "Section Title A",
        items: [
          { text: "Item A", link: "/item-a" },
          { text: "Item B", link: "/item-b" },
        ],
      },
      {
        text: "Section Title B",
        items: [
          { text: "Item C", link: "/item-c" },
          { text: "Item D", link: "/item-d" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/finorr" },
      { icon: "linkedin", link: "https://linkedin.com/in/finorr" },
    ],
  },
});
