/*
 * Sidebar Component
 *
 * This contains all the text for the Sidebar Componen.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Landing';

export default defineMessages({
  feature: {
    id: `${scope}.header.feature`,
    defaultMessage: 'Feature',
  },
  showcase: {
    id: `${scope}.header.showcase`,
    defaultMessage: 'Showcase',
  },
  technology: {
    id: `${scope}.header.technology`,
    defaultMessage: 'Technology',
  },
  contact: {
    id: `${scope}.header.contact`,
    defaultMessage: 'Contact',
  },
  login: {
    id: `${scope}.header.login`,
    defaultMessage: 'Sign In',
  },
  register: {
    id: `${scope}.header.register`,
    defaultMessage: 'Register',
  },
  subtitle: {
    id: `${scope}.banner.subtitle`,
    defaultMessage: 'React.js full stack template for expert and experienced developer',
  },
  demo: {
    id: `${scope}.banner.demo`,
    defaultMessage: 'See Demo',
  },
  buy: {
    id: `${scope}.banner.buy`,
    defaultMessage: 'Buy Now',
  },
  titleFeature: {
    id: `${scope}.feature.title`,
    defaultMessage: 'Main Features',
  },
  titleShowcase: {
    id: `${scope}.showcase.title`,
    defaultMessage: 'Showcase',
  },
  tryShowcase: {
    id: `${scope}.showcase.try`,
    defaultMessage: 'Try it',
  },
  demoShowcase: {
    id: `${scope}.showcase.demo`,
    defaultMessage: 'See Demo',
  },
  titleTech: {
    id: `${scope}.tech.title`,
    defaultMessage: 'Technologies',
  },
  buttonTech: {
    id: `${scope}.tech.button`,
    defaultMessage: 'Request To Implement Technology',
  },
  titleContact: {
    id: `${scope}.contact.title`,
    defaultMessage: 'Say hello to us',
  },
  nameContact: {
    id: `${scope}.contact.name`,
    defaultMessage: 'Who are You?',
  },
  emailContact: {
    id: `${scope}.contact.email`,
    defaultMessage: 'You\'r email?',
  },
  messagesContact: {
    id: `${scope}.contact.messages`,
    defaultMessage: 'Messages',
  },
  sendContact: {
    id: `${scope}.contact.send`,
    defaultMessage: 'Send',
  },
  copyright: {
    id: `${scope}.footer.copyright`,
    defaultMessage: 'Designs. All Right Reserved',
  }
});
