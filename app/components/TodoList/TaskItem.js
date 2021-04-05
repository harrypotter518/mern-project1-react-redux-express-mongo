import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './todo-jss';

function TaskItem(props) {
  const {
    task,
    removeTask,
    updateTask,
    classes
  } = props;
  const [editing, setEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const save = (event) => {
    if (editing) {
      const title = event.target.value.trim();
      if (title.length && title !== task.title) {
        updateTask(task, { title });
      }
      setEditing(false);
    }
  };
  const stopEditing = () => {
    setEditing(false);
  };
  const handleClose = () => setAnchorEl(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const edit = () => {
    setAnchorEl(null);
    setEditing(true);
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      save(event);
    } else if (event.keyCode === 27) {
      setEditing(false);
    }
  };
  const remove = () => {
    removeTask(task);
    setAnchorEl(null);
  };
  const toggleStatus = () => {
    updateTask(task, { completed: !task.completed });
  };

  const renderTitleInput = (newTask) => (
    <input
        autoFocus // eslint-disable-line
      autoComplete="off"
      defaultValue={newTask.title}
      maxLength="64"
      onKeyUp={handleKeyUp}
      type="text"
    />
  );

  const open = Boolean(anchorEl);
  const renderTitle = taskParam => (
    <div className={classNames(classes.taskTitle, task.completed && classes.completed)}>
      {taskParam.title}
    </div>
  );
  const containerClasses = classNames('task-item', {
    'task-item--completed': task.completed,
    'task-item--editing': editing
  });

  return (
    <Fragment>
      <ListItem
        role={undefined}
        dense
        className={
          classNames(
            containerClasses,
            classes.listItem,
          )
        }
      >
        <IconButton
          className={
            classNames(
              classes.button,
              task.completed && classes.completed,
              editing && classes.hide
            )
          }
          size="small"
          onClick={toggleStatus}
        >
          <CheckIcon />
        </IconButton>

        <Typography noWrap component="div" className={classes.text}>
          {editing ? renderTitleInput(task) : renderTitle(task)}
        </Typography>

        <ListItemSecondaryAction>
          <Hidden xsDown>
            <IconButton
              className={
                classNames(
                  classes.button,
                  editing && classes.hide
                )
              }
              size="small"
              onClick={edit}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className={
                classNames(
                  classes.button,
                  editing && classes.hide
                )
              }
              size="small"
              onClick={remove}
            >
              <DeleteIcon />
            </IconButton>
          </Hidden>
          <Hidden smUp>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className={editing ? classes.hide : ''}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={edit}>
                Edit
              </MenuItem>
              <MenuItem onClick={remove}>
                Remove
              </MenuItem>
            </Menu>
          </Hidden>
          <IconButton
            className={
              classNames(
                classes.button,
                !editing && classes.hide
              )
            }
            size="small"
            onClick={stopEditing}
          >
            <CancelIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired
};


export default withStyles(styles)(TaskItem);
