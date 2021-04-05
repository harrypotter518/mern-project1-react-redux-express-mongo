/*
 * Dashboard and Widgets Messages
 *
 * This contains all the text for the Dashboard and Widgets page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Product';

export default defineMessages({
  total: {
    id: `${scope}.Cart.total`,
    defaultMessage: 'Total',
  },
  unique_item: {
    id: `${scope}.Cart.unique_item`,
    defaultMessage: 'Unique items in Cart',
  },
  quantity: {
    id: `${scope}.Cart.quantity`,
    defaultMessage: 'Quantity',
  },
  emptyTitle: {
    id: `${scope}.Cart.emptyTitle`,
    defaultMessage: 'Empty Cart',
  },
  emptyDesc: {
    id: `${scope}.Cart.emptyDesc`,
    defaultMessage: 'Your shopping items will be listed here',
  },
  checkout: {
    id: `${scope}.Cart.checkout`,
    defaultMessage: 'Checkout',
  },
  discount: {
    id: `${scope}.Detail.discount`,
    defaultMessage: 'Discount',
  },
  sold_out: {
    id: `${scope}.Detail.sold_out`,
    defaultMessage: 'Sold Out',
  },
  add_to_cart: {
    id: `${scope}.Detail.add_to_cart`,
    defaultMessage: 'Add to cart',
  },
  comments: {
    id: `${scope}.Detail.comments`,
    defaultMessage: 'Comments',
  },
  description: {
    id: `${scope}.Detail.description`,
    defaultMessage: 'Description',
  },
  spesification: {
    id: `${scope}.Detail.spesification`,
    defaultMessage: 'Specification',
  }
});
