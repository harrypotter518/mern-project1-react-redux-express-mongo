/*
 * Dashboard and Widgets Messages
 *
 * This contains all the text for the Dashboard and Widgets page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.SocialMedia';

export default defineMessages({
  placeholder: {
    id: `${scope}.WritePost.placeholder`,
    defaultMessage: 'What\'s on your mind?',
  },
  upload: {
    id: `${scope}.WritePost.upload`,
    defaultMessage: 'Upload Photo',
  },
  public: {
    id: `${scope}.WritePost.public`,
    defaultMessage: 'Public',
  },
  friends: {
    id: `${scope}.WritePost.friends`,
    defaultMessage: 'Friends',
  },
  only_me: {
    id: `${scope}.WritePost.only_me`,
    defaultMessage: 'Only Me',
  },
  post: {
    id: `${scope}.WritePost.post`,
    defaultMessage: 'Post',
  },
  comments: {
    id: `${scope}.comments`,
    defaultMessage: 'Comments',
  },
  write_comments: {
    id: `${scope}.comments.write_comments`,
    defaultMessage: 'Write Comment',
  },
  connection: {
    id: `${scope}.aside.connection`,
    defaultMessage: 'Connection',
  },
  my_profile: {
    id: `${scope}.aside.my_profile`,
    defaultMessage: 'My Profile',
  },
  people: {
    id: `${scope}.aside.people`,
    defaultMessage: 'People You May Know',
  },
  connect: {
    id: `${scope}.aside.connect`,
    defaultMessage: 'Connect',
  },
  mutual_connection: {
    id: `${scope}.aside.mutual_connection`,
    defaultMessage: 'Mutual Connection',
  },
  see_all: {
    id: `${scope}.aside.see_all`,
    defaultMessage: 'See All',
  },
  trend: {
    id: `${scope}.aside.trend`,
    defaultMessage: 'Trends For You',
  },
});
