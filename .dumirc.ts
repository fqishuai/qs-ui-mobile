import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    logo: '/logo.png',
    name: 'QS UI Mobile',
    nav: [
      { title: '指南', link: '/guide/theming' },
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
  alias: {
    'demos': '/src/components/demos/index.ts'
  }
});
