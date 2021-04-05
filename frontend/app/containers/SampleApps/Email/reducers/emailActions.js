import * as notification from 'enl-redux/constants/notifConstants';
import * as types from './emailConstants';

export const fetchMailAction = items => ({
  type: types.FETCH_EMAIL_DATA,
  items,
});

export const sendAction = payload => ({
  type: types.SUBMIT_MAIL,
  payload,
});

export const deleteAction = mail => ({
  type: types.REMOVE_MAIL,
  mail,
});

export const toggleStaredAction = mail => ({
  type: types.TOGGLE_STARED,
  mail,
});

export const moveAction = (mail, group) => ({
  type: types.MOVE_TO,
  mail,
  group
});

export const openMailAction = mail => ({
  type: types.OPEN_MAIL,
  mail,
});

export const filterAction = filter => ({
  type: types.FILTER_MAIL,
  filter,
});

export const composeAction = {
  type: types.COMPOSE_MAIL,
};

export const discardAction = {
  type: types.DISCARD_MESSAGE,
};

export const searchAction = keyword => ({
  type: types.SEARCH_MAIL,
  keyword,
});

export const closeNotifAction = {
  type: notification.CLOSE_NOTIF
};
