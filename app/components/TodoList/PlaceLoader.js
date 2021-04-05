import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import styles from './todo-jss';

function PlaceLoader(props) {
  const { loop, classes } = props;
  const renderElm = [...Array(loop)].map((e, i) => (
    <Fragment key={i.toString()}>
      <ListItem
        role={undefined}
        dense
        className={classes.listItem}
      >
        <div className={classes.placeLoader}>
          <span className={classNames(classes.img, classes.button)} />
          <span className={classes.title} />
        </div>
      </ListItem>
      <Divider />
    </Fragment>
  ));
  return (
    <List className={classes.taskList}>
      {renderElm}
    </List>
  );
}

PlaceLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  loop: PropTypes.number.isRequired,
};

export default withStyles(styles)(PlaceLoader);
