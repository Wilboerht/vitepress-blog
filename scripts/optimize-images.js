import { readdir, stat } from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const IMAGES_DIR = 'docs/public/images'
const MAX_WIDTH = 1920
const QUALITY = 80

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name)
    if (dirent.isDirectory()) {
      yield* getFiles(res)
    } else {
      yield res
    }
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return
  }

  try {
    const stats = await stat(filePath)
    const originalSize = stats.size

    const image = sharp(filePath)
    const metadata = await image.metadata()

    if (metadata.width > MAX_WIDTH) {
      await image
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY })
        .toBuffer()
        .then((buffer) => sharp(buffer).toFile(filePath))
    }

    const newStats = await stat(filePath)
    const savings = ((originalSize - newStats.size) / originalSize) * 100

    console.log(`Optimized ${path.basename(filePath)}: ${savings.toFixed(2)}% reduction`)
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

async function main() {
  try {
    for await (const filePath of getFiles(IMAGES_DIR)) {
      await optimizeImage(filePath)
    }
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
