/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
// /* eslint-disable no-unused-vars */
// import { input } from '@inquirer/prompts'
// import pinyin from 'chinese-to-pinyin'

import path from 'path'
import fs from 'fs'

function extractMdPaths(data) {
  const mdPaths = []

  function recursiveSearch(items) {
    for (let item of items) {
      if (typeof item === 'string' && item.endsWith('.md')) {
        mdPaths.push(item) // 如果是 .md 文件路径，添加到数组中
      } else if (item.children && Array.isArray(item.children)) {
        recursiveSearch(item.children) // 递归处理子节点
      }
    }
  }

  recursiveSearch(data) // 开始递归
  return mdPaths
}

function getMarkdownFiles(dir, baseDir, usedPaths) {
  // eslint-disable-next-line prefer-template
  const relativepath = '/' + path.relative(baseDir, dir).replace(/\\/g, '/')
  const result = {
    path: relativepath, // 将路径转换为相对于基目录的相对路径，并替换反斜杠为正斜杠
    text: relativepath,
    children: [],
  }

  // 读取当前目录下的所有文件和文件夹
  const items = fs.readdirSync(dir)

  items.forEach((item) => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 如果是目录，递归获取子文件夹的 md 文件
      const children = getMarkdownFiles(fullPath, baseDir, usedPaths)
      if (children.children.length > 0) {
        result.children.push(children)
      }
    } else if (stat.isFile() && path.extname(fullPath) === '.md') {
      // 如果是 .md 文件，添加到结果中
      // eslint-disable-next-line prefer-template
      const mdPath = '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/') // 转换为相对路径

      if (!usedPaths.includes(mdPath)) {
        result.children.push(mdPath)
      }
    }
  })

  return result
}

const sourcePaths = [
  path.resolve('docs/cesium'),
  path.resolve('docs/fe'),
  path.resolve('docs/tools'),
]

const baseDir = path.resolve('docs')

const syncFilesToJson = (sourcePath) => {
  const targetPath = path.resolve(
    'docs/config',
    `${path.basename(sourcePath)}-sync.json`,
  )
  const configFilePath = path.resolve(
    'docs/config',
    `${path.basename(sourcePath)}.json`,
  )

  const usedPaths = extractMdPaths(fs.readFileSync(configFilePath, 'utf-8'))

  const noteConfigObject = getMarkdownFiles(
    sourcePath,
    baseDir,
    usedPaths,
  ).children

  // console.log(JSON.stringify(noteConfigObject, null, 2))

  fs.writeFileSync(targetPath, JSON.stringify(noteConfigObject, null, 2))
}

sourcePaths.forEach((sourcePath) => {
  syncFilesToJson(sourcePath)

  fs.watch(sourcePath, { recursive: true }, (eventType, filename) => {
    // could be either 'rename' or 'change'. new file event and delete
    // also generally emit 'rename'
    console.log(`eventType: ${eventType}, filename: ${filename}`)
    syncFilesToJson(sourcePath)
  })
})
