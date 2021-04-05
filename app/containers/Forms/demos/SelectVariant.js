import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    padding: theme.spacing(1)
  }
});

function SelectVariant(props) {
  const { classes } = props;
  const InputLabelRef = useRef(null);
  const [dataState, setDataState] = useState({
    age: '',
    labelWidth: 0
  });

  useEffect(() => {
    setDataState({
      labelWidth: ReactDOM.findDOMNode(InputLabelRef.current).offsetWidth, // eslint-disable-line
    });
  }, []);

  const handleChange = event => {
    setDataState({
      ...dataState,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.label}>Material Selection</Typography>
          <form className={classes.root} autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={InputLabelRef}
                htmlFor="outlined-age-simple"
              >
                Age
              </InputLabel>
              <Select
                value={dataState.age}
                onChange={handleChange}
                input={(
                  <OutlinedInput
                    labelWidth={dataState.labelWidth}
                    name="age"
                    id="outlined-age-simple"
                  />
                )}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
              <Select
                value={dataState.age}
                onChange={handleChange}
                input={<FilledInput name="age" id="filled-age-simple" />}
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
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.label}>Native Selection</Typography>
          <br />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Age
            </InputLabel>
            <Select
              native
              value={dataState.age}
              onChange={handleChange}
              input={(
                <OutlinedInput
                  name="age"
                  labelWidth={dataState.labelWidth}
                  id="outlined-age-native-simple"
                />
              )}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
              native
              value={dataState.age}
              onChange={handleChange}
              input={<FilledInput name="age" id="filled-age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

SelectVariant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectVariant);
