import { eventChannel } from 'redux-saga';
import {
  call, cancel, fork, put, take
} from 'redux-saga/effects';

import ContactModels from '../models';
import Init from '../models/init';

import {
  loadContactSuccess,
  createActionSuccess,
  createActionFailed,
  updateActionSuccess,
  updateActionFailed,
  deleteActionSuccess,
  deleteActionFailed,
} from './contactActions';

import {
  FETCH_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from './contactConstants';

const contactList = new ContactModels({
  onAdd: createActionSuccess,
  onChange: updateActionSuccess,
  onLoad: loadContactSuccess,
  onRemove: deleteActionSuccess
}, Init);


function subscribe() {
  return eventChannel(emit => contactList.subscribe(emit));
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

const createContact = write.bind(null, contactList, contactList.push, createActionFailed);
const removeContact = write.bind(null, contactList, contactList.remove, deleteActionFailed);
const updateContact = write.bind(null, contactList, contactList.update, updateActionFailed);


//= ====================================
//  WATCHERS
//-------------------------------------

function* watchContact() {
  while (true) {
    contactList.path = 'contacts/';
    const job = yield fork(read);

    yield take([FETCH_CONTACT]);
    yield cancel(job);
  }
}

function* watchCreateContact() {
  while (true) {
    const { payload } = yield take(CREATE_CONTACT);
    yield fork(createContact, payload);
  }
}

function* watchRemoveContact() {
  while (true) {
    const { payload } = yield take(DELETE_CONTACT);
    yield fork(removeContact, payload.key);
  }
}

function* watchUpdateContact() {
  while (true) {
    const { payload } = yield take(UPDATE_CONTACT);
    yield fork(updateContact, payload.contact.key, payload.changes);
  }
}


//= ====================================
//  CONTACT SAGAS
//-------------------------------------

const contactSagas = [
  fork(watchContact),
  fork(watchCreateContact),
  fork(watchRemoveContact),
  fork(watchUpdateContact)
];

export default contactSagas;
