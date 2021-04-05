import { fromJS, List } from 'immutable';
import notif from 'enl-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'enl-redux/constants/notifConstants';
import {
  FETCH_EMAIL_SUCCESS,
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  UPDATE_MAIL,
  UPDATE_MAIL_SUCCESS,
  DELETE_MAIL_SUCCESS,
  OPEN_MAIL,
  FILTER_MAIL,
  COMPOSE_MAIL,
  DISCARD_MESSAGE,
  SEARCH_MAIL,
} from './emailConstants';

const initialState = {
  inbox: new List([]),
  selectedMail: 0,
  selectedMailId: '',
  keywordValue: '',
  currentPage: 'inbox',
  openFrm: false,
  notifMsg: '',
  loading: true,
  processing: false,
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_EMAIL_SUCCESS:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.payload);
        mutableState
          .set('inbox', new List(items))
          .set('loading', false);
      });
    case SEND_MAIL:
    case UPDATE_MAIL:
      return state.withMutations((mutableState) => {
        mutableState.set('processing', true);
      });
    case SEND_MAIL_SUCCESS:
      return state.withMutations((mutableState) => {
        const items = action.payload;
        mutableState.set('inbox', state.get('inbox').unshift(items));
        mutableState
          .set('selectedMailId', '')
          .set('openFrm', false)
          .set('notifMsg', notif.sent)
          .set('processing', false);
      });
    case DELETE_MAIL_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState
          .set('inbox',
            state.get('inbox').filter(mail => mail.key !== action.payload.key)
          )
          .set('notifMsg', notif.removed);
      });
    case UPDATE_MAIL_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState
          .set(
            'inbox',
            state.get('inbox').map(mail => (mail.key === action.payload.key ? action.payload : mail))
          )
          .set('notifMsg', notif.updated);
      });
    case OPEN_MAIL:
      return state.withMutations((mutableState) => {
        const index = state.get('inbox').indexOf(action.mail);
        mutableState.set('selectedMail', index);
      });
    case FILTER_MAIL:
      return state.withMutations((mutableState) => {
        mutableState.set('currentPage', action.filter);
      });
    case COMPOSE_MAIL:
      return state.withMutations((mutableState) => {
        mutableState.set('openFrm', true);
      });
    case DISCARD_MESSAGE:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('selectedMailId', '')
          .set('notifMsg', notif.discard);
      });
    case SEARCH_MAIL:
      return state.withMutations((mutableState) => {
        action.keyword.persist();
        const keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
