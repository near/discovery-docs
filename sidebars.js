// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    'welcome',
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> Building Applications </small></b></span>"
    },
    'discovery/home',
    {
      "type": "category",
      "label": "Components",
      "link": {
        "type": "doc",
        "id": "discovery/widgets/home"
      },
      "items": [
        'discovery/widgets/widgets',
        'discovery/widgets/ipfs',
        'discovery/widgets/files',
        'discovery/widgets/markdown',
        'discovery/widgets/overlay-trigger'
      ]
    },
    {
      "type": "category",
      "label": "Discovery API",
      "link": {
        "type": "doc",
        "id": "discovery/api/home"
      },
      "items": [
        'discovery/api/cache',
        'discovery/api/clipboard',
        'discovery/api/fetch',
        'discovery/api/near',
        'discovery/api/primitives',
        'discovery/api/social',
        'discovery/api/state',
        'discovery/api/storage',
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> Tutorials </small></b></span>"
    },
    'tutorial/welcome',
    {
      "Basics": [
        'tutorial/hello-world',
        'tutorial/hello-account',
        'tutorial/checked',
        'tutorial/add-html',
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> Tools </small></b></span>"
    },
    {
      "type": "link",
      "label": "Discovery CLI",
      "href": "https://github.com/FroVolod/near-social"
    },
    {
      "type": "link",
      "label": "VSCODE Extension",
      "href": "https://github.com/near/near-vscode"
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> NEAR Social </small></b></span>"
    },
    'social/intro',
    'social/contract',
    'social/standards',
    'social/tech',
  ],
};

module.exports = sidebars;