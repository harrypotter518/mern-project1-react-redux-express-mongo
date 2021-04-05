/*
 * Dashboard and Widgets Messages
 *
 * This contains all the text for the Dashboard and Widgets page.
 */
import {
  defineMessages
} from 'react-intl';

export const scope = 'boilerplate.containers.Ecommerce';

export default defineMessages({
  discount: {
    id: `${scope}.Detail.discount`,
    defaultMessage: 'Discount',
  },
  add_to_cart: {
    id: `${scope}.Detail.add_to_cart`,
    defaultMessage: 'Add to cart',
  },
  related_product: {
    id: `${scope}.Detail.related_product`,
    defaultMessage: 'Related Products',
  },
  shipping_address: {
    id: `${scope}.Checkout.shipping_address`,
    defaultMessage: 'Shipping address',
  },
  payment_details: {
    id: `${scope}.Checkout.payment_details`,
    defaultMessage: 'Payment details',
  },
  review_order: {
    id: `${scope}.Checkout.review_order`,
    defaultMessage: 'Review your order',
  },
  next: {
    id: `${scope}.Checkout.next`,
    defaultMessage: 'Next',
  },
  back: {
    id: `${scope}.Checkout.back`,
    defaultMessage: 'Back',
  },
  place: {
    id: `${scope}.Checkout.place`,
    defaultMessage: 'Place Order',
  },
  thank: {
    id: `${scope}.Checkout.thank`,
    defaultMessage: 'Thank you for your order.',
  },
  your_order: {
    id: `${scope}.Checkout.your_order`,
    defaultMessage: 'Your order number is',
  },
  we_have: {
    id: `${scope}.Checkout.we_have`,
    defaultMessage: 'We have emailed your order confirmation, and will send you an update when your order has shipped.',
  },
  shopping_again: {
    id: `${scope}.Checkout.shopping_again`,
    defaultMessage: 'Shopping Again',
  },
  invoice_title: {
    id: `${scope}.Checkout.invoice_title`,
    defaultMessage: 'Editable Invoice',
  },
  invoice_desc: {
    id: `${scope}.Checkout.invoice_desc`,
    defaultMessage: 'An Editable/Printable HTML Invoice',
  }
});
