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
      text: 'Laatste aanpassing',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    outline: {
      label: 'Op deze pagina'
    },

    editLink: {
      pattern: 'https://github.com/vl-wbk/documentatie-portaal/edit/develop/docs/:path',
      text: 'Wijzig deze pagina op GitHub',
    },

    nav: [
      { text: 'Contributing', link: '', 'target': '_blank' },
      { text: 'Code of conduct', link: '', 'target': '_blank' },
      { text: 'LICENSE', link: '', 'target': '_blank' }
    ],

    sidebar: [
      { text: 'Introductie', link: '/introductie' },

      {
        text: 'Gebruikers',
        collapsed: true,
        items: [
            { text: 'Machtigingen', link: '/gebruikers/machtigingen' },
            { text: 'Account deactivatie', link: '/gebruikers/deactivatie' }
        ]
      },

      {
        text: 'Developer documentatie',
        collapsed: true,
        items: [
            { text: 'Featurebeheer', link: '/technical/feature-manager' },
        ]
      },

      {
        text: 'Varia', 
        collapsed: true, 
        items: [
          { text: 'Dataset releases', link: 'other/dataset-release-guideline', },
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Vrijgegeven onder de MIT Licentie', 
      copyright: 'Copyright © 2024-heden Vlaams-Woordenboek',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vl-wbk' }
    ]
  }
})
