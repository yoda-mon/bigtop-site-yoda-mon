// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Bigtop',
  tagline: 'Packaging and Testing Apache Hadoop ecosystem.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/bigtop-site-yoda-mon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apache', // Usually your GitHub org/user name.
  projectName: 'bigtop', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apache Bigtop',
        logo: {
          alt: 'Apache Bigtop Logo',
          src: 'img/bigtop-logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Releases',
            items: [
              {
                label: 'Release Notes',
                href: 'https://bigtop.apache.org/release-notes.html',
              },
              {
                label: '3.0.0',
                href: 'https://archive.apache.org/dist/bigtop/bigtop-3.0.0/',
              },
              {
                label: '1.5.0',
                href: 'https://archive.apache.org/dist/bigtop/bigtop-1.5.0/',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Documentation',
            items: [
              {
                type: 'doc',
                docId: 'getting-started/quickstart-guide',
                label: 'Documentation',
              },
              {
                label: 'Wiki',
                href: 'https://cwiki.apache.org/confluence/display/BIGTOP',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Project Information',
            items: [
              {
                label: 'Powered by',
                href: 'https://cwiki.apache.org/confluence/display/BIGTOP/Powered+By+Bigtop',
              },
              {
                label: 'Who we are',
                href: 'https://bigtop.apache.org/team-list.html',
              },
              {
                label: 'Feedback',
                href: 'https://bigtop.apache.org/issue-tracking.html',
              },
              {
                label: 'JIRA',
                href: 'https://issues.apache.org/jira/projects/BIGTOP/issues',
              },
              {
                label: 'Blog',
                href: 'https://blogs.apache.org/bigtop/',
              },
              {
                label: 'Maling List',
                href: 'https://bigtop.apache.org/mail-lists.html',
              },
              {
                label: 'IRC Channel',
                href: 'https://bigtop.apache.org/irc-channel.html',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/apache/bigtop',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'Apache Software Foundation',
            items: [
              {
                label: 'How Apache Works',
                href: 'https://www.apache.org/foundation/how-it-works.html',
              },
              {
                label: 'Foundation',
                href: 'https://www.apache.org/foundation/',
              },
              {
                label: 'Sponsering Apache',
                href: 'https://www.apache.org/foundation/sponsorship.html',
              },
              {
                label: 'Thanks',
                href: 'https://www.apache.org/foundation/thanks.html',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/getting-started/quickstart-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/bigtop',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/apache/bigtop',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apache Bigtop`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
