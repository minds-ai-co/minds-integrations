export function productResearchLink(id: unknown): string | null {
  if (typeof id !== 'string' || !/^gid:\/\/shopify\/Product\/[1-9]\d*$/.test(id)) return null
  return `app:?productId=${encodeURIComponent(id)}`
}
