# @anyfork/vuepress-plugin-cursor-effects-next

> Mouse click effect plugin for vuepress v2.x

## install

```
yarn add @anyfork/vuepress-plugin-cursor-effects-next
or
npm install @anyfork/vuepress-plugin-cursor-effects-next
```

## usage

1、Import dependent packages into the configuration file config ts

```
import { cursorEffects } from '@anyfork/vuepress-plugin-cursor-effects-next'
```

2、Refer to vuepress 2 X Official Website configuration plug-in

```
plugins: [
    cursorEffects({
      size:2,
      shape:'star'
    })
  ]

```

3、Configuration parameter type declaration

```

export interface effectOption {
  //size of the particle, default: 2
  size?: Number
  // shape of the particle('star' | 'circle'), default: 'star'
  shape?: string
  // z-index property of the canvas, default: 999999999
  zIndex?: Number
}

```
