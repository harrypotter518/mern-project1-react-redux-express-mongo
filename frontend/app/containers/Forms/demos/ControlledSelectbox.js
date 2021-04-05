import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
});

function ControlledSelectbox(props) {
  const { classes } = props;
  const [dataState, setDataState] = useState({
    open: false,
    age: '',
  });
  const [openRemotely, setOpenRemotely] = useState(false);

  const handleChange = name => event => {
    setDataState({
      ...dataState,
      [name]: Number(event.target.value)
    });
  };

  const handleChangeControll = event => {
    setDataState({
      ...dataState,
      [event.target.name]: event.target.value
    });
  };

  const handleClickOpen = () => {
    setDataState({
      ...dataState,
      open: true
    });
  };

  const handleClickOpenRemot = () => {
    setOpenRemotely(true);
  };

  const handleClose = () => {
    setDataState({
      ...dataState,
      open: false
    });
  };

  const handleCloseRemot = () => {
    setOpenRemotely(false);
  };

  const handleOpenRemot = () => {
    setOpenRemotely(true);
  };

  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        direction="row"
        spacing={3}
      >
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>With a Dialog</Typography>
          <Typography className={classes.divider}>While its not encouraged by the Material Design specification, you can use a select inside a dialog.</Typography>
          <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>Open select dialog</Button>
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={dataState.open}
              onClose={handleClose}
            >
              <DialogTitle>Fill the form</DialogTitle>
              <DialogContent>
                <form className={classes.container}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                    <Select
                      native
                      value={dataState.age}
                      onChange={handleChange('age')}
                      input={<Input id="age-native-simple" />}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                      value={dataState.age}
                      onChange={handleChange('age')}
                      input={<Input id="age-simple" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Controlled open Select</Typography>
          <div>
            <form autoComplete="off">
              <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickOpenRemot}>
                Open the select
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="controlled-open-select">Age</InputLabel>
                <Select
                  open={openRemotely}
                  onClose={handleCloseRemot}
                  onOpen={handleOpenRemot}
                  value={dataState.age}
                  onChange={handleChangeControll}
                  inputProps={{
                    name: 'age',
                    id: 'controlled-open-select',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

ControlledSelectbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledSelectbox);
