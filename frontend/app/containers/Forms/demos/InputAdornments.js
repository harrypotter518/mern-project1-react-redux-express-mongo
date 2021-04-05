import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
    '& > div': {
      alignItems: 'center'
    }
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

function InputAdornments(props) {
  const { classes } = props;
  const [dataState, setDataState] = useState({
    amount: '',
    password: '',
    weight: 40,
    weightRange: '',
    showPassword: false
  });

  const handleChange = prop => event => {
    setDataState({
      ...dataState,
      [prop]: event.target.value
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    const { showPassword } = dataState;
    setDataState({
      ...dataState,
      showPassword: !showPassword
    });
  };

  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={3}
      >
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Input Adornments</Typography>
          <Typography className={classes.divider}>TextField is composed of smaller components that you can leverage directly to significantly customize your form inputs.</Typography>
          <div className={classes.root}>
            <TextField
              label="With normal TextField"
              id="simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              }}
            />
            <TextField
              select
              label="With Select"
              className={classNames(classes.margin, classes.textField)}
              value={dataState.weightRange}
              onChange={handleChange('weightRange')}
              InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              }}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
              <Input
                id="adornment-amount"
                value={dataState.amount}
                onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
            <FormControl
              className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
              aria-describedby="weight-helper-text"
            >
              <Input
                id="adornment-weight2"
                value={dataState.weight}
                onChange={handleChange('weight')}
                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                inputProps={{
                  'aria-label': 'Weight',
                }}
              />
              <FormHelperText id="weight-helper-text">Weight</FormHelperText>
            </FormControl>
            <FormControl className={classNames(classes.margin, classes.textField)}>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                id="adornment-password"
                type={dataState.showPassword ? 'text' : 'password'}
                value={dataState.password}
                onChange={handleChange('password')}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {dataState.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>With icon</Typography>
          <Typography className={classes.divider}>Icons can be specified as prepended or appended.</Typography>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={(
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )}
            />
          </FormControl>
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
