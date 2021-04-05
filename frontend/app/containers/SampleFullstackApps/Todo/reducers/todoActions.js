import * as types from './todoConstants';

export const createTaskAction = title => ({
  type: types.CREATE_TASK,
  payload: { task: { title, completed: false } }
});

export const createTaskFailed = error => ({
  type: types.CREATE_TASK_FAILED,
  payload: { error }
});

export const createTaskFulfilled = task => ({
  type: types.CREATE_TASK_FULFILLED,
  payload: { task }
});

export const removeTaskAction = task => ({
  type: types.REMOVE_TASK,
  payload: { task }
});

export const removeTaskFailed = error => ({
  type: types.REMOVE_TASK_FAILED,
  payload: { error }
});

export const removeTaskFulfilled = task => ({
  type: types.REMOVE_TASK_FULFILLED,
  payload: { task }
});

export const updateTaskAction = (task, changes) => ({
  type: types.UPDATE_TASK,
  payload: { task, changes }
});

export const updateTaskFailed = error => ({
  type: types.UPDATE_TASK_FAILED,
  payload: { error }
});

export const updateTaskFulfilled = task => ({
  type: types.UPDATE_TASK_FULFILLED,
  payload: { task }
});

export const filterTasksAction = filterType => ({
  type: types.FILTER_TASKS,
  payload: { filterType }
});

export const loadTasksFulfilled = tasks => ({
  type: types.LOAD_TASKS_FULFILLED,
  payload: { tasks }
});
