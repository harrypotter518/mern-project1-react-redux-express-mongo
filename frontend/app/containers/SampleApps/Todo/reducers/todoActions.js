import * as types from './todoConstants';

export const fetchTasksAction = tasks => ({
  type: types.LOAD_TASKS_DATA,
  payload: { tasks }
});

export const createTaskAction = title => ({
  type: types.ADD_TASK,
  payload: { task: { title, completed: false } }
});

export const removeTaskAction = task => ({
  type: types.DELETE_TASK,
  payload: { task }
});

export const updateTaskAction = (task, changes) => {
  const updatedData = { ...task, ...changes };
  return {
    type: types.EDIT_TASK,
    payload: { task: updatedData }
  };
};

export const filterTasksAction = filterType => ({
  type: types.FILTER_TASKS_DATA,
  payload: { filterType }
});
