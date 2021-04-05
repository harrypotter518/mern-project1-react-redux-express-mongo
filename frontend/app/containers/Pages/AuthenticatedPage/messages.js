/*
 * Blank Page Messages
 *
 * This contains all the text for the Blank Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Authenticated';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Authenticated Page',
  },
  paperTitle: {
    id: `${scope}.paper.title`,
    defaultMessage: 'Authenticated Page',
  },
  paperSubtitle: {
    id: `${scope}.paper.subtitle`,
    defaultMessage: 'Only logged user can see this page',
  },
  content: {
    id: `${scope}.paper.content`,
    defaultMessage: 'Please Login to see this page To see hows this work please go through containers/Session/withAuthorizationRouter.js',
  },
});
