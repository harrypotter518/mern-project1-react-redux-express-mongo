import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import {
  TaskFilters,
  TaskForm,
  TaskList,
  PapperBlock
} from 'enl-components';
import styles from 'enl-components/TodoList/todo-jss';
import { injectIntl, intlShape } from 'react-intl';
import messages from 'enl-components/TodoList/messages';
import { getVisibleTasks } from './reducers/selectors';
import {
  createTaskAction,
  filterTasksAction,
  removeTaskAction,
  updateTaskAction,
  fetchTasksAction
} from './reducers/todoActions';
import data from './api/todoData';

function Todo(props) {
  const { classes, intl } = props;
  const title = brand.name + ' - Todo App';
  const description = brand.desc;

  // Redux State
  const reducer = 'todo';
  const tasks = useSelector(state => getVisibleTasks(state.get(reducer)));
  const filterType = useSelector(state => state.getIn([reducer, 'filter']));

  // Dispatcher
  const fetchData = useDispatch();
  const createTask = useDispatch();
  const filterTasks = useDispatch();
  const removeTask = useDispatch();
  const updateTask = useDispatch();

  const handleUpdate = (todo, change) => {
    updateTask(updateTaskAction(todo, change));
  };

  useEffect(() => {
    fetchData(fetchTasksAction(data));
  }, []);

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
        className={classes.root}
      >
        <TaskForm handleSubmit={(payload) => createTask(createTaskAction(payload))} />
        <div className="g-col">
          <TaskFilters filter={(payload) => filterTasks(filterTasksAction(payload))} type={filterType} />
          <TaskList
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
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

Todo.defaultProps = {
  tasks: null
};

export default withStyles(styles)(injectIntl(Todo));
