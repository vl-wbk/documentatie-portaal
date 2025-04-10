import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
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

    editLink: {
      pattern: 'https://github.com/vl-wbk/documentatie-portaal/edit/develop/docs/:path'
    },

    nav: [
      { text: 'Contributing', link: '', 'target': '_blank' },
      { text: 'Code of conduct', link: '', 'target': '_blank' },
      { text: 'LICENSE', link: '', 'target': '_blank' }
    ],

    sidebar: [
      { text: 'Introductie', link: '/introductie' },

      {
        text: 'Artikelen', 
        collapsed: true, 
        link: '/artikelen',
        items: [
          { text: 'Levenscyclus', link: '/artikelen/levenscyclus' },
          { text: 'Labelsysteem', link: '/artikelen/labelsysteem' },
        ]
      },
      {
        text: 'Gebruikers',
        collapsed: true,
        items: [
            { text: 'Machtigingen', link: '/gebruikers/machtigingen' },
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

    footer: {
      message: 'Vrijgegeven onder de MIT Licentie', 
      copyright: 'Copyright © 2024-heden Vlaams-Woordenboek',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
