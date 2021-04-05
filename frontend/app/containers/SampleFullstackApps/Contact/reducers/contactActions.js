import * as notification from 'enl-redux/constants/notifConstants';
import * as types from './contactConstants';

/* Load */
export const loadContactSuccess = payload => ({
  type: types.FETCH_CONTACT_SUCCESS,
  payload,
});

/* Create */
export const createAction = payload => ({
  type: types.CREATE_CONTACT,
  payload,
});

export const createActionSuccess = payload => ({
  type: types.CREATE_CONTACT_SUCCESS,
  payload,
});

export const createActionFailed = error => ({
  type: types.CREATE_CONTACT_FAILED,
  payload: { error },
});

/* Update */
export const updateAction = (contact, changes) => ({
  type: types.UPDATE_CONTACT,
  payload: { contact, changes },
});

export const updateActionSuccess = payload => ({
  type: types.UPDATE_CONTACT_SUCCESS,
  payload
});

export const updateActionFailed = error => ({
  type: types.UPDATE_CONTACT_FAILED,
  payload: { error },
});

/* Delete */
export const deleteAction = payload => ({
  type: types.DELETE_CONTACT,
  payload,
});

export const deleteActionSuccess = payload => ({
  type: types.DELETE_CONTACT_SUCCESS,
  payload,
});

export const deleteActionFailed = error => ({
  type: types.DELETE_CONTACT_FAILED,
  payload: { error },
});


/*---------------------*/
/* UI constant */
/*---------------------*/

export const showDetailAction = item => ({
  type: types.SHOW_DETAIL_CONTACT,
  item,
});

export const hideDetailAction = {
  type: types.HIDE_DETAIL,
};

export const addAction = {
  type: types.ADD_CONTACT,
};

export const editAction = item => ({
  type: types.EDIT_CONTACT,
  item,
});

export const searchAction = keyword => ({
  type: types.SEARCH_CONTACT,
  keyword,
});

export const closeAction = {
  type: types.CLOSE_CONTACT_FORM,
};

export const closeNotifAction = {
  type: notification.CLOSE_NOTIF
};
