import type { SidebarOptions } from '@vuepress/theme-default'
import algorithm from '../../../config/algorithm.json'
import cesium from '../../../config/cesium.json'
import fe from '../../../config/fe.json'
import tools from '../../../config/tools.json'

export const sidebarZh: SidebarOptions = {
  '/cesium/': cesium,
  '/fe/': fe,
  '/tools/': tools,
  '/algorithm/': algorithm,
}
