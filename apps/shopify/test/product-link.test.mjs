import assert from 'node:assert/strict'
import test from 'node:test'
import { build } from 'esbuild'
const result = await build({ entryPoints: [new URL('../extensions/purchase-barriers/src/product-link.ts', import.meta.url).pathname], bundle: true, format: 'esm', write: false })
const { productResearchLink } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`)
test('opens the embedded app with only the selected product identifier', () => {
  assert.equal(productResearchLink('gid://shopify/Product/123'), 'app:?productId=gid%3A%2F%2Fshopify%2FProduct%2F123')
})
test('rejects missing products, other resources and URL injection', () => {
  for (const value of [undefined, '', 'https://evil.example', 'gid://shopify/Customer/123', 'gid://shopify/Product/123?confirm=true']) assert.equal(productResearchLink(value), null)
})
