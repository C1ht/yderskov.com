import sharp from 'sharp'
import { readdir, mkdir, stat } from 'fs/promises'
import path from 'path'

const WIDTHS = [400, 768, 1200, 1920]
const QUALITY = 80
const SOURCE_DIR = 'public/images'
const OUTPUT_BASE = 'public/_opt'

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)))
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

const files = await findImages(SOURCE_DIR)
console.log(`Optimizing ${files.length} images at widths ${WIDTHS.join(', ')}px...`)

let skipped = 0
let generated = 0

for (let i = 0; i < files.length; i++) {
  const file = files[i]
  // relative to public/ → e.g. "images/Karetmagervej/IMG_9184.jpeg"
  const relative = path.relative('public', file).replace(/\\/g, '/')
  const withoutExt = relative.replace(/\.[^.]+$/, '')

  for (const width of WIDTHS) {
    const outPath = path.join(OUTPUT_BASE, String(width), `${withoutExt}.webp`)
    const outDir = path.dirname(outPath)

    try {
      const [srcStat, outStat] = await Promise.all([stat(file), stat(outPath)])
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        skipped++
        continue
      }
    } catch {
      // output doesn't exist yet
    }

    await mkdir(outDir, { recursive: true })
    try {
      await sharp(file)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath)
      generated++
    } catch (err) {
      console.warn(`  Warning: ${file} — ${err.message}`)
    }
  }

  if ((i + 1) % 20 === 0 || i === files.length - 1) {
    process.stdout.write(`\r  ${i + 1}/${files.length} images processed`)
  }
}

console.log(`\nDone. ${generated} generated, ${skipped} up-to-date.`)
