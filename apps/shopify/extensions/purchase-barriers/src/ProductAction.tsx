import '@shopify/ui-extensions/preact'
import { render } from 'preact'
import { productResearchLink } from './product-link'

declare const shopify: import('@shopify/ui-extensions/admin.product-details.action.render').Api

export default function renderAction() {
  const href = productResearchLink(shopify.data.selected?.[0]?.id)
  render(
    <s-admin-action heading={shopify.i18n.translate('name')}>
      <s-paragraph>{shopify.i18n.translate('description')}</s-paragraph>
      <s-button slot="primary-action" href={href ?? undefined} disabled={!href}>
        {shopify.i18n.translate('name')}
      </s-button>
    </s-admin-action>,
    document.body,
  )
}
