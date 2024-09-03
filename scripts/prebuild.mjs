import { syncImagesToPublic } from './syncImagesToPublic.mjs'

async function prebuild() {
  await syncImagesToPublic(process.env.WATCH === 'true')
}

prebuild()
