import * as notification from 'enl-redux/constants/notifConstants';
import * as types from './emailConstants';

/* Load */
export const loadMailSuccess = payload => ({
  type: types.FETCH_EMAIL_SUCCESS,
  payload,
});

/* Create */
export const sendAction = payload => ({
  type: types.SEND_MAIL,
  payload,
});

export const sendActionSuccess = payload => ({
  type: types.SEND_MAIL_SUCCESS,
  payload,
});

export const sendActionFailed = error => ({
  type: types.SEND_MAIL_FAILED,
  payload: { error },
});

/* Update */
export const updateAction = (mail, changes) => ({
  type: types.UPDATE_MAIL,
  payload: { mail, changes },
});

export const updateActionSuccess = payload => ({
  type: types.UPDATE_MAIL_SUCCESS,
  payload,
});

export const updateActionFailed = error => ({
  type: types.UPDATE_MAIL_SUCCESS,
  payload: { error },
});

/* Delete */
export const deleteAction = payload => ({
  type: types.DELETE_MAIL,
  payload,
});

export const deleteActionSuccess = payload => ({
  type: types.DELETE_MAIL_SUCCESS,
  payload,
});

export const deleteActionFailed = error => ({
  type: types.DELETE_MAIL_FAILED,
  payload: { error },
});

/*---------------------*/
/* UI constant */
/*---------------------*/

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
