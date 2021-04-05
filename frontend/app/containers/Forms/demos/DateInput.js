import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
};

const styles = theme => ({
  demo: {
    height: 240,
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  picker: {
    margin: `${theme.spacing(3)}px 5px`,
  }
});

function DateInput(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLocale, setCurrentLocale] = useState('fr');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const selectLocale = (selectedLocale) => {
    setCurrentLocale(selectedLocale);
    setAnchorEl(null);
  };

  const { classes } = props;
  const locale = localeMap[currentLocale];
  return (
    <Fragment>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        direction="row"
      >
        <Grid
          item
          md={4}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Basic usage</Typography>
          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Basic example"
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Clearable"
                clearable
                disableFuture
                maxDateMessage="Date must be less than today"
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Keyboard Input</Typography>
          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                clearable
                label="Uncontrolled input"
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                label="Masked input"
                format="DD/MM/YYYY"
                placeholder="10/10/2018"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Localization</Typography>
          <div className={classes.picker}>
            <div className={classes.divider}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[currentLocale]}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="Select locale"
                        aria-owns={anchorEl ? 'locale-menu' : null}
                        onClick={handleMenuOpen}
                      >
                        <Icon> more_vert </Icon>
                      </IconButton>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <Menu
              id="locale-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {
                Object.keys(localeMap).map(localeItem => (
                  <MenuItem
                    key={localeItem}
                    selected={localeItem === locale}
                    onClick={() => selectLocale(localeItem)}
                  >
                    {localeItem}
                  </MenuItem>
                ))
              }
            </Menu>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}


DateInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateInput);
