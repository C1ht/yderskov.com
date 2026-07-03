import sharp from 'sharp'
import { readdir, mkdir, stat } from 'fs/promises'
import path from 'path'

// Limit concurrency to 1 and disable cache to prevent out-of-memory errors on limited CI environments
sharp.concurrency(1)
sharp.cache(false)

const WIDTHS = [200, 400, 768, 1200, 1920]
const QUALITY = 85
const QUALITY_AVIF = 75 // AVIF at 75 is visually superior to WebP at 85 and has much smaller file sizes
const SOURCE_DIR = 'public/images'
const OUTPUT_BASE = 'public/_opt'

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)))
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

const files = await findImages(SOURCE_DIR)
console.log(`Optimizing ${files.length} images to WebP and AVIF at widths ${WIDTHS.join(', ')}px...`)

let skipped = 0
let generated = 0

for (let i = 0; i < files.length; i++) {
  const file = files[i]
  const relative = path.relative('public', file).replace(/\\/g, '/')
  const withoutExt = relative.replace(/\.[^.]+$/, '')

  for (const width of WIDTHS) {
    const outPathWebp = path.join(OUTPUT_BASE, String(width), `${withoutExt}.webp`)
    const outPathAvif = path.join(OUTPUT_BASE, String(width), `${withoutExt}.avif`)
    const outDir = path.dirname(outPathWebp)

    // Check WebP
    let needWebp = true
    try {
      const [srcStat, outStat] = await Promise.all([stat(file), stat(outPathWebp)])
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        needWebp = false
      }
    } catch {
      // doesn't exist
    }

    // Check AVIF
    let needAvif = true
    try {
      const [srcStat, outStat] = await Promise.all([stat(file), stat(outPathAvif)])
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        needAvif = false
      }
    } catch {
      // doesn't exist
    }

    if (!needWebp && !needAvif) {
      skipped += 2
      continue
    }

    await mkdir(outDir, { recursive: true })

    const image = sharp(file).resize(width, null, { withoutEnlargement: true })

    if (needWebp) {
      try {
        await image.clone().webp({ quality: QUALITY }).toFile(outPathWebp)
        generated++
      } catch (err) {
        console.warn(`  Warning: WebP error on ${file} — ${err.message}`)
      }
    } else {
      skipped++
    }

    if (needAvif) {
      try {
        await image.clone().avif({ quality: QUALITY_AVIF }).toFile(outPathAvif)
        generated++
      } catch (err) {
        console.warn(`  Warning: AVIF error on ${file} — ${err.message}`)
      }
    } else {
      skipped++
    }
  }

  if ((i + 1) % 20 === 0 || i === files.length - 1) {
    process.stdout.write(`\r  ${i + 1}/${files.length} images processed`)
  }
}

console.log(`\nDone. ${generated} generated, ${skipped} up-to-date.`)
