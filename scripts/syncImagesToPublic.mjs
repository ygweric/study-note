import syncDirectory from 'sync-directory'

export const syncImagesToPublic = (watch = true) => {

  syncDirectory('./docs/cesium', './docs/.vuepress/public/images/docs/cesium', {
    watch,
    exclude: [/.*(md|mdx)$/i],
  })
}
