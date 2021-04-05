import React from 'react';
import { List } from 'immutable';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListWrap from '@material-ui/core/List';
import styles from './todo-jss';
import TaskItem from './TaskItem';
import PlaceLoader from './PlaceLoader';

function TaskList(props) {
  const {
    removeTask,
    tasks,
    updateTask,
    loading,
    classes
  } = props;
  const taskItems = tasks.map((task, index) => (
    <TaskItem
      removeTask={removeTask}
      key={index.toString()}
      task={task}
      updateTask={updateTask}
    />
  ));

  return (
    <div>
      {loading
        ? <PlaceLoader loop={5} />
        : (
          <ListWrap className={classes.taskList}>
            {taskItems}
          </ListWrap>
        )
      }
    </div>
  );
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List),
  updateTask: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

TaskList.defaultProps = {
  tasks: null,
  loading: false
};

export default withStyles(styles)(TaskList);
