import { List, Record } from 'immutable';
import {
  ADD_TASK,
  FILTER_TASKS_DATA,
  LOAD_TASKS_DATA,
  DELETE_TASK,
  EDIT_TASK
} from './todoConstants';


export const TasksState = new Record({
  filter: '',
  list: new List()
});


function todoReducer(state = new TasksState(), { payload, type }) {
  switch (type) {
    case LOAD_TASKS_DATA:
      return state.set('list', new List(payload.tasks.reverse()));
    case ADD_TASK:
      return state.set('list', state.list.unshift(payload.task));
    case DELETE_TASK:
      return state.set('list', state.list.filter(task => task.key !== payload.task.key));
    case EDIT_TASK:
      return state.set('list', state.list.map(task => (task.key === payload.task.key ? payload.task : task)));
    case FILTER_TASKS_DATA:
      return state.set('filter', payload.filterType || '');
    default:
      return state;
  }
}

export default todoReducer;
