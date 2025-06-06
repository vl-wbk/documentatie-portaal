import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "VL-WBK",
  description: "Met dit portaal willen we inzichten delen omtrent hoe het vlaams woordenboek is opgebouwd en intern werkt.",
  base: '/documentatie-portaal/',
  cleanUrls: false,
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,

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
        text: 'Artikelen', 
        collapsed: true, 
        link: '/artikelen',
        items: [
          { text: 'Bronvermelding criteria', link: '/artikelen/richtlijn-bronvermelding' },
          { text: 'Levenscyclus', link: '/artikelen/levenscyclus' },
          { text: 'Labelsysteem', link: '/artikelen/labelsysteem' },
          { text: 'Opname criteria', link: '/artikelen/opname-richtlijn' }
        ]
      },
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
        text: "Communicatie",
        collapsed: true, 
        link: '/communicatie',
        items: [
          //
        ],
      },

      {
        text: 'Varia', 
        collapsed: true, 
        items: [
          { text: 'Feedback module', link: 'other/feedback-module' },
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
      { icon: 'facebook', link: 'https://www.facebook.com/vlaamswoordenboek' },
      { icon: 'github', link: 'https://github.com/vl-wbk' }, 
      { icon: 'discord', link: 'https://discord.gg/eXsyvdgx' },
    ]
  }
})
