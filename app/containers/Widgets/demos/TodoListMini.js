import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TaskWidget } from 'enl-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

function TodoListMini(props) {
  const { classes } = props;
  return (
    <div className={classes.miniWrap}>
      <TaskWidget />
    </div>
  );
}

TodoListMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoListMini);
