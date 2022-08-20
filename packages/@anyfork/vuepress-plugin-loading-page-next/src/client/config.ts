import { defineClientConfig } from '@vuepress/client'
import loadingPage from './components/loadingPage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component("LoadingPage", loadingPage)
  }
})
