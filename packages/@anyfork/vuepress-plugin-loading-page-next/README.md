# vuepress-plugin-loading-page-next

> vuepress plugin loading page for vuepress v2.x

## install

```
yarn add @anyfork/vuepress-plugin-loading-page-next
or
npm install @anyfork/vuepress-plugin-loading-page-next
```

## usage

1、Import dependent packages into the configuration file config ts

```
import { loadingPage } from '@anyfork/vuepress-plugin-loading-page-next'
```

2、Refer to vuepress 2 X Official Website configuration plug-in

```
plugins: [
    loadingPage()
  ]

```

3、options

```
export interface loadingOption {
  /*
   * 加载模式，内置组件(RotateLoading,BoxLoading,CircleLoading,DefaultLoading,LineLoading,PointLoading)
   */
  mode: string
  /*
   * 动画颜色
   */
  color: string

  /*
   * 是否随机,默认是
   */
  random: boolean
}

```
