import { build } from 'esbuild'
import { access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { LOCALES } from './locales.mjs'
const extension = new URL('../extensions/purchase-barriers/', import.meta.url)
// Extension locales are committed (see scripts/sync-locales.mjs), so CI needs no GitHub Packages access.
for (const locale of LOCALES) await access(new URL(`locales/${locale === 'en' ? 'en.default' : locale}.json`, extension))
await build({ entryPoints: [fileURLToPath(new URL('src/ProductAction.tsx', extension))], outfile: fileURLToPath(new URL('dist/index.js', extension)), bundle: true, format: 'esm', target: 'es2022', jsx: 'automatic', jsxImportSource: 'preact' })
