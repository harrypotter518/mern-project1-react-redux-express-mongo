

/*
 * Todo App Messages
 *
 * This contains all the text for the Todo App.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Todo';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'To Do Apps',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'All Your to do list. Just check it whenever You done.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'What needs to be done?',
  },
  hint: {
    id: `${scope}.hint`,
    defaultMessage: 'Press enter to submit task',
  },
  view_all: {
    id: `${scope}.filter.view_all`,
    defaultMessage: 'View All',
  },
  active: {
    id: `${scope}.filter.active`,
    defaultMessage: 'Active',
  },
  completed: {
    id: `${scope}.filter.completed`,
    defaultMessage: 'Completed',
  },
});
