import syncDirectory from 'sync-directory'

export const syncImagesToPublic = (watch = true) => {

  syncDirectory('./docs/note', './docs/.vuepress/public/images/docs/note', {
    watch,
    exclude: [/.*(md|mdx)$/i],
  })
}
