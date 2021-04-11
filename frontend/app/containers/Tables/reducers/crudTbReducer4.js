import axios from "axios";

import { fromJS, List, Map } from 'immutable';
import notif from 'enl-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'enl-redux/constants/notifConstants';
import {
  FETCH_DATA,
  ADD_EMPTY_ROW,
  UPDATE_ROW,
  REMOVE_ROW,
  EDIT_ROW,
  SAVE_ROW,
} from './crudTbConstants4';

const initialState = {
  dataTable: List([]),
  dataInit: List([
    {
      id: '0',
      name: '',
      email:'',
      phone:'',
      address:'',
      country:'',
      companyName:''
      // available: false,
      // edited: true,
    }
  ]),
  notifMsg: '',
  responseData: 'res'
};

const initialItem = (keyTemplate, anchor) => {
  const [...rawKey] = keyTemplate.keys();
  const staticKey = {
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
  };
  for (let i = 0; i < rawKey.length; i += 1) {
    if (rawKey[i] !== 'id' && rawKey[i] !== 'edited') {
      staticKey[rawKey[i]] = anchor[i].initialValue;
    }
  }
  // Push another static key
  staticKey.edited = true;

  return Map(staticKey);
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (action.type) {
    // case `${branch}/${FETCH_DATA}`:
    //   return state.withMutations((mutableState) => {
    //     const items = fromJS(action.items);

    //     mutableState.set('dataTable', items);
    //   });
    case `${branch}/${ADD_EMPTY_ROW}`:
      return state.withMutations((mutableState) => {
        const raw = fromJS(state.get('dataInit').last());
        const initial = initialItem(raw, action.anchor);
        mutableState.update('dataTable', dataTable => dataTable.unshift(initial));
      });
    case `${branch}/${REMOVE_ROW}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        const data = action.item._root.entries;
        const delete_id= data[0][1];

        mutableState
          .update('dataTable', dataTable => dataTable.splice(index, 1))
          .set('notifMsg', notif.removed);
        
        const response = axios.get('http://localhost:5000/supplier/delete/'+delete_id)
          .then(res => console.log(res.data));
      });
    case `${branch}/${UPDATE_ROW}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        const cellTarget = action.event.target.name;
        const newVal = type => {
          if (type === 'checkbox') {
            return action.event.target.checked;
            
          }
          return action.event.target.value;
        };
        mutableState.update('dataTable', dataTable => dataTable
          .setIn([index, cellTarget], newVal(action.event.target.type))
        );
      });
    case `${branch}/${EDIT_ROW}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        mutableState.update('dataTable', dataTable => dataTable
          .setIn([index, 'edited'], true)
        );
      });
    case `${branch}/${SAVE_ROW}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        const data = action.item._root.entries;
        const update_id= data[0][1];        

        mutableState
          .update('dataTable', dataTable => dataTable
            .setIn([index, 'edited'], false)
          )
          .set('notifMsg', notif.saved);
        
          const response = axios.post('http://localhost:5000/supplier/update/'+update_id, data)
          .then(res => console.log(res.data));
      });
    case `${branch}/${CLOSE_NOTIF}`:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });

    case `ADD_DATA`:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', 'ADD');
        const response = axios.post('http://localhost:5000/supplier/add', action.payload)
          .then(res => console.log(res.data));
      });

    case `GET_DATA`:
      return state.withMutations((mutableState) => {
        console.log(action.payload);
       mutableState.set('dataTable', fromJS(action.payload));
      });

    default:
      return state;
  }
}
