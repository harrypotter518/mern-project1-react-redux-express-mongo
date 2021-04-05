import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './contact-jss';

function PlaceLoader(props) {
  const { loop, classes } = props;
  const renderElm = [...Array(loop)].map((e, i) => (
    <ListItem
      component="div"
      key={i.toString()}
      role={undefined}
      dense
      className={classNames(classes.listItem, classes.placeLoader)}
    >
      <figure className={classNames(classes.img, classes.avatar)} />
      <div className={classes.textContent}>
        <span className={classes.title} />
        <span className={classes.subtitle} />
      </div>
    </ListItem>
  ));
  return (
    <List className={classes.contactList}>
      {renderElm}
    </List>
  );
}

PlaceLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  loop: PropTypes.number.isRequired,
};

export default withStyles(styles)(PlaceLoader);
