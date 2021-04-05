/*
 * Dashboard and Widgets Messages
 *
 * This contains all the text for the Dashboard and Widgets page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Search';

export default defineMessages({
  placeholder: {
    id: `${scope}.Product.placeholder`,
    defaultMessage: 'Search Product',
  },
  result: {
    id: `${scope}.Product.result`,
    defaultMessage: 'Results',
  },
});
