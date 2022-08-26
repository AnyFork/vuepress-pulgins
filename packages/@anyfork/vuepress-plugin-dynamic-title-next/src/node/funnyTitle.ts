import { path } from '@vuepress/utils'
import type { Plugin } from '@vuepress/core'
import { dynamicOption } from '../types'
export * from '../types'

export const dynamicTitle =
  (options?: dynamicOption): Plugin =>
    (app) => {
      return {
        name: '@anyfork/vuepress-plugin-dynamic-title-next',
        define() {
          return {
            SHOW_ICON: options?.showIcon || '/favicon.ico',
            SHOW_TEXT: options?.showText || '(/≧▽≦/)咦！又好了！',
            HIDE_ICON: options?.hideIcon || '/favicon.ico',
            HIDE_TEXT: options?.hideText || '(●—●)喔哟，崩溃啦！',
            RECOVER_TIME: options?.recoverTime || 2000
          }
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js')
      }
    }
