import { eventChannel } from 'redux-saga';
import {
  call, cancel, fork, put, take
} from 'redux-saga/effects';

import TodoModels from '../models';
import Init from '../models/init';

import {
  createTaskFulfilled,
  updateTaskFulfilled,
  loadTasksFulfilled,
  removeTaskFulfilled,
  createTaskFailed,
  removeTaskFailed,
  updateTaskFailed,
} from './todoActions';

import {
  LOAD_TASK, CREATE_TASK, REMOVE_TASK, UPDATE_TASK
} from './todoConstants';

const taskList = new TodoModels({
  onAdd: createTaskFulfilled,
  onChange: updateTaskFulfilled,
  onLoad: loadTasksFulfilled,
  onRemove: removeTaskFulfilled
}, Init);


function subscribe() {
  return eventChannel(emit => taskList.subscribe(emit));
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

const createTask = write.bind(null, taskList, taskList.push, createTaskFailed);
const removeTask = write.bind(null, taskList, taskList.remove, removeTaskFailed);
const updateTask = write.bind(null, taskList, taskList.update, updateTaskFailed);


//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadTask() {
  while (true) {
    taskList.path = 'tasks/';
    const job = yield fork(read);

    yield take([LOAD_TASK]);
    yield cancel(job);
  }
}

function* watchCreateTask() {
  while (true) {
    const { payload } = yield take(CREATE_TASK);
    yield fork(createTask, payload.task);
  }
}

function* watchRemoveTask() {
  while (true) {
    const { payload } = yield take(REMOVE_TASK);
    yield fork(removeTask, payload.task.key);
  }
}

function* watchUpdateTask() {
  while (true) {
    const { payload } = yield take(UPDATE_TASK);
    yield fork(updateTask, payload.task.key, payload.changes);
  }
}


//= ====================================
//  TASK SAGAS
//-------------------------------------

const taskSagas = [
  fork(watchLoadTask),
  fork(watchCreateTask),
  fork(watchRemoveTask),
  fork(watchUpdateTask)
];

export default taskSagas;
