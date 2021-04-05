import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import styles from './email-jss';

function PlaceLoader(props) {
  const { loop, classes } = props;
  const renderElm = [...Array(loop)].map((e, i) => (
    <ExpansionPanel className={classes.emailList} key={i.toString()}>
      <ExpansionPanelSummary className={classNames(classes.emailSummary, classes.placeLoader)}>
        <div className={classes.fromHeading}>
          <span className={classNames(classes.img, classes.avatar)} />
        </div>
        <div className={classes.textContent}>
          <span className={classes.title} />
          <span className={classes.subtitle} />
        </div>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  ));

  return (
    <div>
      {renderElm}
    </div>
  );
}

PlaceLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  loop: PropTypes.number.isRequired,
};

export default withStyles(styles)(PlaceLoader);
