// eslint-disable-next-line import/no-rename-default
import syncDirectory from 'sync-directory'


const folders = [
  'cesium',
  'tools',
]
export const syncImagesToPublic = (watch = true) => {

  folders.forEach(folder => {
    syncDirectory(`./docs/${folder}`, `./docs/.vuepress/public/images/docs/${folder}`, {
      watch,
      exclude: [/.*(md|mdx)$/i],
    })
  })

}
