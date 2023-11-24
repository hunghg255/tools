import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Tools',
  description: 'Frontend tools',
  icon: '/rspress-icon.png',
  outDir: 'dist',
  logo: {
    light: 'https://api.iconify.design/carbon:tools-alt.svg?color=%2378909c',
    dark: 'https://api.iconify.design/carbon:tools-alt.svg?color=%2378909c',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/hunghg255/tools' },
    ],
  },
});
