import { fromJS, List, Map } from 'immutable';
import notif from 'enl-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'enl-redux/constants/notifConstants';
import {
  FETCH_CONTACT_SUCCESS,
  CREATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  SEARCH_CONTACT,
  SHOW_DETAIL_CONTACT,
  HIDE_DETAIL,
  EDIT_CONTACT,
  ADD_CONTACT,
  CLOSE_CONTACT_FORM,
} from './contactConstants';

const initialState = {
  formValues: Map(),
  selectedIndex: 0,
  selectedId: '',
  keywordValue: '',
  avatarInit: '',
  openFrm: false,
  showMobileDetail: false,
  notifMsg: '',
  contactList: new List(),
  loading: true,
};
// let editingIndex = 0;

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.payload);
        mutableState
          .set('contactList', new List(items))
          .set('loading', false);
      });
    case CREATE_CONTACT_SUCCESS:
      return state.withMutations((mutableState) => {
        const items = action.payload;
        mutableState.set('contactList', state.get('contactList').unshift(items));
        mutableState
          .set('formValues', Map())
          .set('avatarInit', '')
          .set('openFrm', false)
          .set('notifMsg', notif.saved);
      });
    case UPDATE_CONTACT_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState.set(
          'contactList',
          state.get('contactList').map(contact => (contact.key === action.payload.key ? action.payload : contact))
        );
        mutableState
          .set('formValues', Map())
          .set('avatarInit', '')
          .set('openFrm', false)
          .set('notifMsg', notif.updated);
      });
    case DELETE_CONTACT_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState
          .set(
            'contactList',
            state.get('contactList').filter(contact => contact.key !== action.payload.key)
          )
          .set('notifMsg', notif.removed);
      });
    case SEARCH_CONTACT:
      return state.withMutations((mutableState) => {
        action.keyword.persist();
        const keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case ADD_CONTACT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('formValues', Map())
          .set('avatarInit', '');
      });
    case CLOSE_CONTACT_FORM:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('formValues', Map())
          .set('avatarInit', '')
          .set('notifMsg', notif.discard);
      });
    case EDIT_CONTACT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('selectedId', action.item.get('key'))
          .set('formValues', action.item)
          .set('avatarInit', action.item.get('avatar'));
      });
    case SHOW_DETAIL_CONTACT:
      return state.withMutations((mutableState) => {
        const index = state.get('contactList').indexOf(action.item);
        mutableState
          .set('selectedIndex', index)
          .set('showMobileDetail', true);
      });
    case HIDE_DETAIL:
      return state.withMutations((mutableState) => {
        mutableState.set('showMobileDetail', false);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
