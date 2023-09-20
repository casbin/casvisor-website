/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "The Basics",
      link: {type: "generated-index"},
      items: [
        "overview",
        {
          type: "link",
          label: "PDF Download",
          href: "/pdf",
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {type: "generated-index"},
      items: [
        "asset/overview",
        "asset/rdp",
        "asset/vnc",
      ],
    },
  ],
};
