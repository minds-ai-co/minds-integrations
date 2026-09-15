// Regenerates the committed extension locale files from @minds-ai-co/locales.
// Maintainers only: the package lives in GitHub Packages, so CI builds from the
// committed files instead. Usage (with the package available):
//   LOCALES_PACKAGE_DIR=/path/to/node_modules/@minds-ai-co/locales npm run sync:locales --workspace minds-shopify-integration
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { LOCALES } from './locales.mjs'

const require = createRequire(import.meta.url)
const packageDir = process.env.LOCALES_PACKAGE_DIR || dirname(require.resolve('@minds-ai-co/locales/package.json'))
const { version } = JSON.parse(await readFile(join(packageDir, 'package.json'), 'utf8'))
const target = new URL('../extensions/purchase-barriers/locales/', import.meta.url)
await mkdir(target, { recursive: true })
for (const locale of LOCALES) {
  // The package exports `./*.json` from `./src/*.json`.
  const { shopifyResearch } = JSON.parse(await readFile(join(packageDir, 'src', `${locale}.json`), 'utf8'))
  await writeFile(new URL(`${locale === 'en' ? 'en.default' : locale}.json`, target), JSON.stringify({ name: shopifyResearch.title, description: shopifyResearch.subtitle }, null, 2) + '\n')
}
await writeFile(new URL('SOURCE', target), `@minds-ai-co/locales@${version}\n`)
console.log(`Synced ${LOCALES.length} extension locales from @minds-ai-co/locales@${version}`)
