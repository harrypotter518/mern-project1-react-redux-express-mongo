import { eventChannel } from 'redux-saga';
import {
  call, cancel, fork, put, take
} from 'redux-saga/effects';

import EmailModels from '../models';
import Init from '../models/init';

import {
  loadMailSuccess,
  sendActionSuccess,
  sendActionFailed,
  updateActionSuccess,
  updateActionFailed,
  deleteActionSuccess,
  deleteActionFailed,
} from './emailActions';

import {
  FETCH_EMAIL,
  SEND_MAIL,
  UPDATE_MAIL,
  DELETE_MAIL,
} from './emailConstants';

const emailList = new EmailModels({
  onAdd: sendActionSuccess,
  onChange: updateActionSuccess,
  onLoad: loadMailSuccess,
  onRemove: deleteActionSuccess
}, Init);


function subscribe() {
  return eventChannel(emit => emailList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  } catch (error) {
    yield put(onError(error));
  }
}

const sendMail = write.bind(null, emailList, emailList.push, sendActionFailed);
const removeMail = write.bind(null, emailList, emailList.remove, deleteActionFailed);
const updateMail = write.bind(null, emailList, emailList.update, updateActionFailed);


//= ====================================
//  WATCHERS
//-------------------------------------

function* watchEmail() {
  while (true) {
    emailList.path = 'emails/';
    const job = yield fork(read);

    yield take([FETCH_EMAIL]);
    yield cancel(job);
  }
}

function* watchSendEmail() {
  while (true) {
    const { payload } = yield take(SEND_MAIL);
    yield fork(sendMail, payload);
  }
}

function* watchRemoveEmail() {
  while (true) {
    const { payload } = yield take(DELETE_MAIL);
    yield fork(removeMail, payload.key);
  }
}

function* watchUpdateEmail() {
  while (true) {
    const { payload } = yield take(UPDATE_MAIL);
    yield fork(updateMail, payload.mail.key, payload.changes);
  }
}


//= ====================================
//  EMAIL SAGAS
//-------------------------------------

const emailSagas = [
  fork(watchEmail),
  fork(watchSendEmail),
  fork(watchRemoveEmail),
  fork(watchUpdateEmail)
];

export default emailSagas;
