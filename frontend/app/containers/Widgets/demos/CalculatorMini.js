import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CalculatorWidget } from 'enl-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

function CalculatorMini(props) {
  const { classes } = props;
  return (
    <div className={classes.miniWrap}>
      <CalculatorWidget />
    </div>
  );
}

CalculatorMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalculatorMini);
