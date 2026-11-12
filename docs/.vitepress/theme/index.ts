import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import PracticeIllustration from './PracticeIllustration.vue'
import DownloadLink from './DownloadLink.vue'
import '@fontsource/noto-sans-thai/400.css'
import '@fontsource/noto-sans-thai/600.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PracticeIllustration', PracticeIllustration)
    app.component('DownloadLink', DownloadLink)
  }
} satisfies Theme
