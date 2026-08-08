/**
 * Recompress site image assets to WebP.
 * Safe to re-run: skips missing sources and writes via temp files.
 *
 * Usage: node scripts/compress-assets.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const assets = path.join(root, 'src/assets')
const publicDir = path.join(root, 'public')
const report = []

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function writeWebp(inputPath, outputPath, { maxEdge, quality, effort = 6 } = {}) {
  if (!(await exists(inputPath))) return

  const meta = await sharp(inputPath, { failOn: 'none' }).metadata()
  const width = meta.width ?? 0
  const height = meta.height ?? 0
  const longEdge = Math.max(width, height)

  let pipeline = sharp(inputPath, { failOn: 'none' }).rotate()
  if (maxEdge && longEdge > maxEdge) {
    pipeline = pipeline.resize({
      width: width >= height ? maxEdge : undefined,
      height: height > width ? maxEdge : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  const samePath = path.resolve(inputPath) === path.resolve(outputPath)
  const target = samePath ? `${outputPath}.tmp` : outputPath
  await fs.mkdir(path.dirname(target), { recursive: true })
  await pipeline.webp({ quality, effort, smartSubsample: true }).toFile(target)
  if (samePath) await fs.rename(target, outputPath)

  const inStat = await fs.stat(inputPath === outputPath ? outputPath : inputPath)
  // After in-place replace, report output size from final file.
  const outStat = await fs.stat(outputPath)
  const outMeta = await sharp(outputPath).metadata()
  report.push({
    file: path.relative(root, outputPath),
    outKb: +(outStat.size / 1024).toFixed(1),
    outPx: `${outMeta.width}×${outMeta.height}`,
    sourceKb: +(inStat.size / 1024).toFixed(1),
  })
}

const galleryDir = path.join(assets, 'Photos')
const heroDir = path.join(assets, 'Photos/hero')

for (const file of (await fs.readdir(galleryDir)).filter((f) => f.endsWith('.webp') && !f.startsWith('.'))) {
  const input = path.join(galleryDir, file)
  await writeWebp(input, input, { maxEdge: file === 'IMG_0509.webp' ? 1200 : 1400, quality: file === 'IMG_0509.webp' ? 68 : 72 })
}

for (const file of (await fs.readdir(heroDir)).filter((f) => f.endsWith('.webp') && !f.startsWith('.'))) {
  const input = path.join(heroDir, file)
  await writeWebp(input, input, { maxEdge: 1600, quality: 76 })
}

const conversions = [
  ['Bodhi Logo Big Footer.webp', 900, 82],
  ['Bodhi Logo Small.webp', 256, 82],
  ['Facebook_Logo_Primary.webp', 128, 80],
  ['Facebook_Logo_Secondary.webp', 128, 80],
  ['Instagram_Glyph_Gradient.webp', 128, 80],
]

for (const [name, maxEdge, quality] of conversions) {
  const file = path.join(assets, name)
  await writeWebp(file, file, { maxEdge, quality })
}

const favicon = path.join(publicDir, 'favicon.webp')
if (await exists(favicon)) {
  await writeWebp(favicon, favicon, { maxEdge: 192, quality: 82 })
} else if (await exists(path.join(assets, 'Bodhi Logo Small.webp'))) {
  await writeWebp(path.join(assets, 'Bodhi Logo Small.webp'), favicon, { maxEdge: 192, quality: 82 })
}

console.log(JSON.stringify(report, null, 2))
const totalOut = report.reduce((sum, row) => sum + row.outKb, 0)
console.log(`\nCompressed ${report.length} files · ~${(totalOut / 1024).toFixed(2)} MB total`)
