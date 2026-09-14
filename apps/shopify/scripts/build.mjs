import { build } from 'esbuild'
import { createRequire } from 'node:module'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const require = createRequire(import.meta.url)
const extension = new URL('../extensions/purchase-barriers/', import.meta.url)
await mkdir(new URL('locales/', extension), { recursive: true })
for (const locale of ['en', 'de', 'es', 'fr', 'zh', 'tr', 'ar', 'ja', 'ko']) {
  const { shopifyResearch } = JSON.parse(await readFile(require.resolve(`@minds-ai-co/locales/${locale}.json`), 'utf8'))
  await writeFile(new URL(`locales/${locale === 'en' ? 'en.default' : locale}.json`, extension), JSON.stringify({ name: shopifyResearch.title, description: shopifyResearch.subtitle }, null, 2) + '\n')
}
await build({ entryPoints: [fileURLToPath(new URL('src/ProductAction.tsx', extension))], outfile: fileURLToPath(new URL('dist/index.js', extension)), bundle: true, format: 'esm', target: 'es2022', jsx: 'automatic', jsxImportSource: 'preact' })
