import { fromJS, List, Map } from 'immutable';
import notif from 'enl-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'enl-redux/constants/notifConstants';
import {
  FETCH_EMAIL_DATA,
  OPEN_MAIL,
  FILTER_MAIL,
  COMPOSE_MAIL,
  SUBMIT_MAIL,
  DISCARD_MESSAGE,
  SEARCH_MAIL,
  REMOVE_MAIL,
  MOVE_TO,
  TOGGLE_STARED,
} from './emailConstants';

const initialState = {
  inbox: List([]),
  selectedMail: 0,
  selectedMailId: '',
  keywordValue: '',
  currentPage: 'inbox',
  openFrm: false,
  notifMsg: '',
};

// buildMessage to append unique Id attribute
const buildMessage = mail => {
  const key = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  const newData = Map({
    key,
    ...mail
  });
  return newData;
};

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_EMAIL_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('inbox', items);
      });
    case SUBMIT_MAIL:
      return state.withMutations((mutableState) => {
        const newMail = buildMessage(action.payload);
        mutableState
          .update('inbox', inbox => inbox.unshift(newMail))
          .set('selectedMailId', '')
          .set('openFrm', false)
          .set('notifMsg', notif.sent);
      });
    case REMOVE_MAIL:
      return state.withMutations((mutableState) => {
        const index = state.get('inbox').indexOf(action.mail);
        mutableState
          .update('inbox', inbox => inbox.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case TOGGLE_STARED:
      return state.withMutations((mutableState) => {
        const index = state.get('inbox').indexOf(action.mail);
        mutableState.update('inbox', inbox => inbox
          .setIn([index, 'stared'], !state.getIn(['inbox', index, 'stared']))
        );
      });
    case MOVE_TO:
      return state.withMutations((mutableState) => {
        const index = state.get('inbox').indexOf(action.mail);
        mutableState
          .update('inbox', inbox => inbox
            .setIn([index, 'category'], action.group.category)
          )
          .set('notifMsg', notif.labeled);
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
