import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VL-WBK",
  description: "Met dit portaal willen we inzichten delen omtrent hoe het vlaams woordenboek is opgebouwd en intern werkt.",
  base: '/documentatie-portaal/',
  cleanUrls: false,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/vl-wbk/documentatie-portaal/edit/develop/docs/:path'
    },

    nav: [
      { text: 'Contributing', link: '' },
      { text: 'Code of conduct', link: '' },
      { text: 'LICENSE', link: '' }
    ],

    sidebar: [
      { text: 'Introductie', link: '/introductie' },
    ],

    footer: {
      message: 'Vrijgegeven onder de MIT Licentie', 
      copyright: 'Copyright © 2024-heden Vlaams-Woordenboek',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
