import * as notification from 'enl-redux/constants/notifConstants';
import * as types from './crudTbConstants5';
import axios from 'axios';

export const fetchAction = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA}`,
  items
});

export const addAction = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_EMPTY_ROW}`,
  anchor,
});

export const removeAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW}`,
  item
});
export const updateAction = (event, item, branch) => ({
  branch,
  type: `${branch}/${types.UPDATE_ROW}`,
  event,
  item
});
export const editAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW}`,
  item
});
export const saveAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.SAVE_ROW}`,
  item
});
export const closeNotifAction = branch => ({
  branch,
  type: `${branch}/${notification.CLOSE_NOTIF}`,
});

export const addDataAction = item => ({
  branch: 'FifthcrudTableDemo',
  type: 'ADD_DATA',
  payload: item
})

export const getDataAction = (dispatch) => {  
    return axios.get('http://localhost:5000/mill/').then(res => {      
      dispatch({
        branch: 'FifthcrudTableDemo',
        type: 'GET_DATA',
        payload: res.data
      })
    })
}



