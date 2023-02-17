/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

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
      "value": "<span class='menu__link'><b><small> NEAR Social </small></b></span>"
    },
    'social/home',
    'social/contract',
    'social/standards',
    'social/tech',
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> Widgets </small></b></span>"
    },
    'widgets/widgets',
    {"Tutorials":[
      'widgets/tutorial/welcome',
      'widgets/tutorial/add-html',
      'widgets/tutorial/checked',
      'widgets/tutorial/hello-account',
      'widgets/tutorial/hello-world',
    ]},
    {
      "type": "html",
      "value": "<hr/>"
    },

    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> API Reference </small></b></span>"
    },
    'api/home',
    'api/primitives',
    'api/components',
    'api/state',
    'api/fetch',
    'api/storage',
    'api/near',
    'api/social',
    'api/cache',
  ],
};

module.exports = sidebars;
