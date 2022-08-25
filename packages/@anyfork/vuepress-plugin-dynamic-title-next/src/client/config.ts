import { defineClientConfig } from '@vuepress/client'
import DynamicTitle from './components/DynamicTitle.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component(DynamicTitle.name, DynamicTitle)
  },
  rootComponents: [DynamicTitle]
})
