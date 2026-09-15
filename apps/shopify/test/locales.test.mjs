import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { LOCALES } from '../scripts/locales.mjs'

const directory = new URL('../extensions/purchase-barriers/locales/', import.meta.url)

test('committed extension locales cover every supported language', async () => {
  for (const locale of LOCALES) {
    const file = new URL(`${locale === 'en' ? 'en.default' : locale}.json`, directory)
    const { name, description } = JSON.parse(await readFile(file, 'utf8'))
    assert.ok(typeof name === 'string' && name.trim(), `${locale} name`)
    assert.ok(typeof description === 'string' && description.trim(), `${locale} description`)
  }
})

test('committed extension locales record their source package version', async () => {
  const source = (await readFile(new URL('SOURCE', directory), 'utf8')).trim()
  assert.match(source, /^@minds-ai-co\/locales@\S+$/)
})
