import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing(3),
  },
  exampleWrapper: {
    position: 'relative',
    height: 380,
  },
  radioGroup: {
    margin: `${theme.spacing(1)}px 0`,
  },
  speedDial: {
    position: 'absolute',
    '&$directionUp, &$directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    '&$directionDown, &$directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(3),
    },
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

function DialSimple(props) {
  const { classes } = props;

  const [direction, setDirection] = useState('up');
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDirectionChange = (event, value) => {
    setDirection(value);
  };

  const handleHiddenChange = (event, value) => {
    setHidden(value);
    setOpen(value ? false : open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const speedDialClassName = classNames(
    classes.speedDial
  );

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <FormControlLabel
          control={(
            <Switch
              checked={hidden}
              onChange={handleHiddenChange}
              value="hidden"
              color="primary"
            />
          )}
          label="Hidden"
        />
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="Direction"
          name="direction"
          className={classes.radioGroup}
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </div>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={speedDialClassName}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={handleClose}
          onClick={handleClick}
          onClose={handleClose}
          onFocus={handleOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          open={open}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

DialSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialSimple);
