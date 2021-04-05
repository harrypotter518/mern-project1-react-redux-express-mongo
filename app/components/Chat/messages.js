/*
 * Dashboard and Widgets Messages
 *
 * This contains all the text for the Dashboard and Widgets page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Chat';

export default defineMessages({
  online: {
    id: `${scope}.ChatHeader.online`,
    defaultMessage: 'Online',
  },
  delete: {
    id: `${scope}.ChatHeader.delete`,
    defaultMessage: 'Delete Conversation',
  },
  placeholder: {
    id: `${scope}.ChatRoom.placeholder`,
    defaultMessage: 'Type a message',
  },
  send: {
    id: `${scope}.ChatRoom.send`,
    defaultMessage: 'Send',
  }
});
