import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    logo: false,
    name: 'qs-ui-mobile',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/button' },
    ],
    footer: false,
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src/components',
      }
    ],
  },
});
