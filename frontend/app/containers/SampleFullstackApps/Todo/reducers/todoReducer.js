import { List, Record } from 'immutable';
import {
  CREATE_TASK_FULFILLED,
  FILTER_TASKS,
  LOAD_TASKS_FULFILLED,
  REMOVE_TASK_FULFILLED,
  UPDATE_TASK_FULFILLED
} from './todoConstants';


export const TasksState = new Record({
  filter: '',
  list: new List(),
  loading: true,
});

function todoReducer(state = new TasksState(), { payload, type }) {
  switch (type) {
    case LOAD_TASKS_FULFILLED:
      return state.merge({
        list: new List(payload.tasks.reverse()),
        loading: false,
      });

    case CREATE_TASK_FULFILLED:
      return state.set('list', state.list.unshift(payload.task));

    case FILTER_TASKS:
      return state.set('filter', payload.filterType || '');

    case REMOVE_TASK_FULFILLED:
      return state.set('list', state.list.filter(task => task.key !== payload.task.key));

    case UPDATE_TASK_FULFILLED:
      return state.set('list', state.list.map(task => (task.key === payload.task.key ? payload.task : task)));

    default:
      return state;
  }
}

export default todoReducer;
