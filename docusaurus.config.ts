import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '주현:)',
  tagline: '읽고 듣고 쓰고 말하고 밥먹고 코딩하고 자고 일어나고',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ohju96.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ohju96', // Usually your GitHub org/user name.
  projectName: 'ohju96.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          routeBasePath: '/dev',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogTitle: '읽고 듣고 쓰고 말하고 밥먹고 코딩하고 자고 일어나고',
          blogDescription: '주현의 기술 블로그입니다.',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '주현:)',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          type: 'docsSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '공부',
        },
        {
          to: '/service',
          type: 'serviceSidebar',
          sidebarId: 'serviceSidebar',
          position: 'left',
          label: '서비스',
        },
        { to: '/dev',
          label: '개발',
          position: 'left'
        },
        {
          to: '/life',
          label: '일상',
          position: 'left'
        },
        {
          href: 'https://github.com/ohju96',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Velog (Deprecated)',
              href: 'https://velog.io/@ohju96',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ohju96',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JuHyeon, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'life',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'life',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './life',
      },
    ],
  ],
};

export default config;
