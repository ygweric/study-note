/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
// /* eslint-disable no-unused-vars */
// import { input } from '@inquirer/prompts'
// import pinyin from 'chinese-to-pinyin'

import path from 'path'
import fs from 'fs'

const sortedPaths = ['/note/basic', '/note/case', '/note/advance']
const pathTitleMap = {
  '/note/basic': '基础',
  '/note/advance': '高级用法',
  '/note/case': '用例',
}

function getMarkdownFiles(dir, baseDir) {
  // eslint-disable-next-line prefer-template
  const relativepath = '/' + path.relative(baseDir, dir).replace(/\\/g, '/')
  const result = {
    path: relativepath, // 将路径转换为相对于基目录的相对路径，并替换反斜杠为正斜杠
    text: pathTitleMap[relativepath] || relativepath,
    children: [],
  }

  // 读取当前目录下的所有文件和文件夹
  const items = fs.readdirSync(dir)

  items.forEach((item) => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 如果是目录，递归获取子文件夹的 md 文件
      const children = getMarkdownFiles(fullPath, baseDir)
      if (children.children.length > 0) {
        result.children.push(children)
      }
    } else if (stat.isFile() && path.extname(fullPath) === '.md') {
      // 如果是 .md 文件，添加到结果中
      result.children.push(
        // eslint-disable-next-line prefer-template
        '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/'),
      ) // 转换为相对路径
    }
  })

  return result
}

const sourcePath = path.resolve('docs/note')
const targetPath = path.resolve('docs/.vuepress/configs/sidebar/note.json')
const baseDir = path.resolve('docs')

const syncFilesToJson = () => {
  const noteConfigObject = getMarkdownFiles(sourcePath, baseDir).children.sort(
    (a, b) =>
      sortedPaths.indexOf(a.path) - sortedPaths.indexOf(b.path) > 0 ? 1 : -1,
  )

  console.log(JSON.stringify(noteConfigObject, null, 2))

  fs.writeFileSync(targetPath, JSON.stringify(noteConfigObject, null, 2))
}
syncFilesToJson()

fs.watch(sourcePath, { recursive: true }, (eventType, filename) => {
  // could be either 'rename' or 'change'. new file event and delete
  // also generally emit 'rename'
  console.log(`eventType: ${eventType}, filename: ${filename}`)
  syncFilesToJson()
})

// function ensureFileExists(filePath, fileContent = '') {
//   const dirPath = path.dirname(filePath)

//   // 确保目录存在
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true })
//   }

//   // 确保文件存在
//   if (!fs.existsSync(filePath)) {
//     fs.writeFileSync(filePath, fileContent)
//   }
// }

// function isNumberBetween(str, from, to) {
//   const num = Number(str)
//   return /^\d+$/.test(str) && num >= from && num <= to
// }
// function isDayOfMonth(str) {
//   // 判断是否为纯数字且在1到31之间
//   const num = Number(str)
//   return /^\d+$/.test(str) && num >= 1 && num <= 31
// }

// const getMdxContent = ({ title, year, month, date, tags }) => `---
// title: '${title}'
// date: '${year}-${month}-${date}'
// tags: ${JSON.stringify(tags)}
// draft: false
// summary:
// ---

// # 这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容
// # 这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容
// # 这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容
// # 这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容，这里写博客内容

// # 关于我
// 国 wei (Eric)
// [Github](https://github.com/ygweric)

// # [扫码加入独立开发微信群-二维码经常更新](https://raw.githubusercontent.com/ygweric/ygweric.github.io/main/assets/qr-schedule-update/indenpendent_dev.png)

// # 关注公众号 [开发副业](https://github.com/ygweric/ygweric.github.io/blob/main/assets/jinjing/wx_office_account_qr.png?raw=true)，闲谈代码人生
// `

// const title = await input({
//   message: 'Enter blog title',
//   validate: (val) => !!val,
// })
// const tagsStr = await input({
//   message: 'Enter tags, split with comma (English or Chinese)',
// })
// const tags = tagsStr.split(/[,，\s]/)

// const fileName = await input({
//   message: 'Enter file name',
//   default: pinyin(title, { removeTone: true }).replace(/\s+/gi, '-'),
// })
// const year = await input({
//   message: 'Enter year',
//   default: new Date().getFullYear(),
//   validate: (val) => isNumberBetween(val, 2020, 2080),
// })
// const month = await input({
//   message: 'Enter month',
//   default: new Date().getMonth() + 1,
//   validate: (val) => isNumberBetween(val, 1, 12),
// })
// const date = await input({
//   message: 'Enter date',
//   default: new Date().getDate(),
//   validate: (val) => isNumberBetween(val, 1, 31),
// })

// const basePath = process.cwd()
// const dataBlogPath = 'data/blog'
// const blogFilePath = path.join(
//   basePath,
//   // this script will be run either on root or "data/blog", so I need prevent duplicated path
//   path.normalize(basePath).includes(path.normalize(dataBlogPath))
//     ? ''
//     : dataBlogPath,
//   String(year),
//   String(month),
//   String(date),
//   `${fileName}.md`,
// )

// // console.log(getMdxContent({ title, year, month, date, tags }))
// // console.log(`blogFilePath: ${blogFilePath}`)

// ensureFileExists(
//   blogFilePath,
//   getMdxContent({ title, year, month, date, tags }),
// )
