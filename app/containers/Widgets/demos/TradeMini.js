import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TradingFormWidget } from 'enl-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

function TradeMini(props) {
  const { classes } = props;
  return (
    <div className={classes.miniWrap}>
      <TradingFormWidget />
    </div>
  );
}

TradeMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TradeMini);
