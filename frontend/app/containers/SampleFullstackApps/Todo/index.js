import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import {
  TaskFilters,
  TaskForm,
  TaskList,
  PapperBlock
} from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from 'enl-components/TodoList/messages';
import { getVisibleTasks } from './reducers/selectors';
import {
  createTaskAction,
  filterTasksAction,
  removeTaskAction,
  updateTaskAction
} from './reducers/todoActions';


function Todo(props) {
  const { intl } = props;
  const title = brand.name + ' - Todo App';
  const description = brand.desc;

  // Redux State
  const reducer = 'todoFullstack';
  const tasks = useSelector(state => getVisibleTasks(state.get(reducer)));
  const filterType = useSelector(state => state.getIn([reducer, 'filter']));
  const loading = useSelector(state => state.getIn([reducer, 'loading']));

  // Dispatcher
  const createTask = useDispatch();
  const filterTasks = useDispatch();
  const removeTask = useDispatch();
  const updateTask = useDispatch();

  const handleUpdate = (todo, change) => {
    updateTask(updateTaskAction(todo, change));
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock
        title={intl.formatMessage(messages.title)}
        icon="playlist_add_check"
        noMargin
        whiteBg
        colorMode="light"
        desc={intl.formatMessage(messages.subtitle)}
      >
        <TaskForm handleSubmit={(payload) => createTask(createTaskAction(payload))} />
        <div className="g-col">
          <TaskFilters filter={(payload) => filterTasks(filterTasksAction(payload))} type={filterType} />
          <TaskList
            loading={loading}
            removeTask={(payload) => removeTask(removeTaskAction(payload))}
            tasks={tasks}
            updateTask={handleUpdate}
          />
        </div>
      </PapperBlock>
    </div>
  );
}

Todo.propTypes = {
  intl: intlShape.isRequired
};

Todo.defaultProps = {
  tasks: null,
  loading: false,
  filterType: ''
};

export default injectIntl(Todo);
