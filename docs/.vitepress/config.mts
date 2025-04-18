import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fin Orr",
  description: "Thing's by Fin",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Portfolio", link: "/portfolio" },
      { text: "Resume", link: "https://drive.google.com/file/d/12vh2X7LBF4Il6uqTi0lR7_pOblDZ1i2V" },
      { text: "Blog", link: "https://finorr.substack.com/" },
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
