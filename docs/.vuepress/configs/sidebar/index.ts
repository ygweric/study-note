import type { SidebarOptions } from '@vuepress/theme-default'
import cesium from '../../../config/cesium.json'
import fe from '../../../config/fe.json'
import interview from '../../../config/interview.json'
import tools from '../../../config/tools.json'

export const sidebarZh: SidebarOptions = {
  '/cesium/': cesium,
  '/fe/': fe,
  '/tools/': tools,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  '/interview/': interview,
}
