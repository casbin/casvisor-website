const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casvisor · An open-source security log auditing & RDP, VNC, SSH and databases management bastion platform",
  url: "https://casvisor.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "casvisor", // Usually your GitHub org/user name.
  projectName: "casvisor-website", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "fr", "de", "ko", "ru", "ja"],
  },
  themeConfig: {
    metadata: [{name: "Casvisor", content: "An open-source security log auditing & RDP, VNC, SSH and databases management bastion platform"}],
    // algolia: {
    //   appId: "",
    //   apiKey: "",
    //   indexName: "casvisor",
    //   contextualSearch: true,
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hotjar: {
      applicationId: "3620236",
    },
    navbar: {
      title: "Casvisor",
      logo: {
        alt: "My Site Logo",
        src: "img/casbin.svg",
      },
      // hideOnScroll: true,
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Docs",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          label: "Help",
          to: "/help",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "For Enterprise",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "Hosting Plan (SaaS)",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: "<hr style=\"margin: 0.3rem 0;\">",
            },
            {
              to: "https://crowdin.com/project/casvisor-website",
              label: "Help translate",
            },
          ],
        },
        {
          href: "https://github.com/casvisor/casvisor",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "custom-community",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "custom-casdoor",
          label: "Sign Up",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-signup casdoor-link",
        },
        {
          type: "custom-casdoor",
          label: "Login",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-login casdoor-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/docs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/casvisor/casvisor",
            },
            {
              label: "Discord",
              href: "https://discord.gg/yfKcuHVAHB",
            },
            {
              label: "QQ Group",
              href: "https://qm.qq.com/cgi-bin/qm/qr?k=TgDE42f-w4V3_Scq-2eX-f3bVEspS_tX&jump_from=webapi&authKey=ZLfUKo0GfAMoKWieUx6oJR37M8Z5HQ1aSy7nGSniims26hA8AoP75tNbnZJXPsBy",
            },
            {
              label: "Wechat Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/casvisor/casvisor",
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casbin&repo=casvisor&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casvisor</iframe>
              `,
            },
            {
              html: `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c539599342b1638ad91188a0aacb7b53";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
            },
            {
              html: "<div class=\"placeholderads\"></div>",
            },
          ],
        },
      ],
      logo: {
        alt: "Casbin Logo",
        src: "img/casbin_min.svg",
        href: "https://casvisor.org/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casvisor contributors.`,
    },
    prism: {
      additionalLanguages: ["nginx", "java", "properties", "groovy", "ruby"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    announcementBar: {
      id: "announcement", // ID of the announcement bar
      content:
        "<a target=\"_blank\" rel=\"noreferrer\" href=\"https://casbin.org/\">💖 Looking for an open-source and cross-platform authorization solution that supports ACL, RBAC, ABAC? Learn more about: Casbin</a>",
      isCloseable: true,
    },
    docs: {
      sidebar: {hideable: true},
    },
  },
  // // https://docusaurus.io/docs/markdown-features/diagrams#configuration
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // gtag: {
        //   trackingID: "",
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: ({docPath}) => {
            return `https://github.com/casvisor/casvisor-website/edit/master/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/casvisor/casvisor-website/edit/master/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-hotjar"],
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
    {
      src: "/js/tawk.js",
      async: true,
    },
  ],
};
