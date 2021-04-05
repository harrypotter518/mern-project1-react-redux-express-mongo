

/*
 * Email App Messages
 *
 * This contains all the text for the Email App.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Email';

export default defineMessages({
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search Email',
  },
  compose: {
    id: `${scope}.compose`,
    defaultMessage: 'Compose'
  },
  inbox: {
    id: `${scope}.sidebar.inbox`,
    defaultMessage: 'Inbox'
  },
  stared: {
    id: `${scope}.sidebar.stared`,
    defaultMessage: 'Stared'
  },
  sent: {
    id: `${scope}.sidebar.sent`,
    defaultMessage: 'Sent'
  },
  spam: {
    id: `${scope}.sidebar.spam`,
    defaultMessage: 'Spam'
  },
  updates: {
    id: `${scope}.sidebar.updates`,
    defaultMessage: 'Updates'
  },
  social: {
    id: `${scope}.sidebar.social`,
    defaultMessage: 'Social'
  },
  promos: {
    id: `${scope}.sidebar.promos`,
    defaultMessage: 'Promos'
  },
  forums: {
    id: `${scope}.sidebar.forums`,
    defaultMessage: 'Forums'
  },
  from: {
    id: `${scope}.content.from`,
    defaultMessage: 'From'
  },
  mark_to: {
    id: `${scope}.content.mark_to`,
    defaultMessage: 'Mark to'
  },
  remove: {
    id: `${scope}.content.remove`,
    defaultMessage: 'Remove Mail'
  },
  forward: {
    id: `${scope}.content.forward`,
    defaultMessage: 'Forward'
  },
  reply: {
    id: `${scope}.content.reply`,
    defaultMessage: 'Repply'
  },
  title: {
    id: `${scope}.form.title`,
    defaultMessage: 'Compose Email'
  },
  to: {
    id: `${scope}.form.to`,
    defaultMessage: 'To'
  },
  subject: {
    id: `${scope}.form.subject`,
    defaultMessage: 'Subject'
  },
  discard: {
    id: `${scope}.form.discard`,
    defaultMessage: 'Discard'
  },
  send: {
    id: `${scope}.form.send`,
    defaultMessage: 'Send'
  },
});
