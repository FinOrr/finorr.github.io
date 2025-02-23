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
      { text: "Resume", link: "/resume" }
    ],

    sidebar: [
      {
        text: "",
        items: [
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/finorr" },
      { icon: "linkedin", link: "https://linkedin.com/in/finorr" }
    ],
  },
});
