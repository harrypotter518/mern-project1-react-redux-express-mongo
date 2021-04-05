import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: 190,
    marginBottom: 6,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: 126,
      marginBottom: -1,
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
    fontWeight: 400
  },
  counter: {
    color: theme.palette.common.white,
    fontSize: 28,
    fontWeight: 500
  },
  customContent: {
    textAlign: 'right'
  },
  primaryLight: {
    background: theme.palette.primary.light,
    '& $title, $counter': {
      color: theme.palette.primary.main,
    }
  },
  primaryMain: {
    border: `1px solid ${fade(theme.palette.primary.main, 0.7)}`,
    '& $title, $counter': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  primaryDark: {
    background: theme.palette.primary.main,
    '& $title, $counter': {
      color: theme.palette.common.white,
    },
    '& svg': {
      color: theme.palette.primary.light,
    },
  },
  secondaryLight: {
    background: theme.palette.secondary.light,
    '& $title, $counter': {
      color: theme.palette.secondary.main,
    }
  },
  secondaryMain: {
    border: `1px solid ${fade(theme.palette.secondary.main, 0.7)}`,
    '& $title, $counter': {
      color: theme.palette.secondary.main,
    },
    '& svg': {
      color: theme.palette.secondary.main,
    },
  },
  secondaryDark: {
    background: theme.palette.secondary.main,
    '& $title, $counter': {
      color: theme.palette.common.white,
    },
    '& svg': {
      color: theme.palette.secondary.light,
    },
  }
});

function CounterWidget(props) {
  const {
    classes,
    color,
    start,
    end,
    duration,
    title,
    children,
    unitBefore,
    unitAfter
  } = props;

  const bgColor = clr => {
    switch (clr) {
      case 'primary-light':
        return classes.primaryLight;
      case 'primary-dark':
        return classes.primaryDark;
      case 'secondary-light':
        return classes.secondaryLight;
      case 'secondary-main':
        return classes.secondaryMain;
      case 'secondary-dark':
        return classes.secondaryDark;
      default:
        return classes.primaryMain;
    }
  };

  return (
    <Paper className={classNames(classes.root, bgColor(color))}>
      <div>
        <Typography className={classes.counter}>
          { unitBefore }
          <CountUp start={start} end={end} duration={duration} useEasing />
          { unitAfter }
        </Typography>
        <Typography className={classes.title} variant="subtitle1">{title}</Typography>
      </div>
      <div className={classes.customContent}>
        {children}
      </div>
    </Paper>
  );
}

CounterWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  unitBefore: PropTypes.string,
  unitAfter: PropTypes.string,
};

CounterWidget.defaultProps = {
  unitBefore: '',
  unitAfter: '',
};

export default withStyles(styles)(CounterWidget);
