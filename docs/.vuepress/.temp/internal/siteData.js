export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"小紫念沁\",\"description\":\"资料文档汇集网站\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"type\":\"image/x-icon\",\"href\":\"/favicon.ico\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width,initial-scale=1,user-scalable=no\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
