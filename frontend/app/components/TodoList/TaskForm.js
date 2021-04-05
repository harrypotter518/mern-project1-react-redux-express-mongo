import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import styles from './todo-jss';

function TaskForm(props) {
  const { classes, intl, handleSubmit } = props;
  const [title, setTitle] = useState('');

  const clearInput = () => setTitle('');
  const handleChange = (event) => setTitle(event.target.value);
  const handleKeyUp = (event) => {
    if (event.keyCode === 27) clearInput();
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const titleString = title.trim();
    if (titleString.length) handleSubmit(titleString);
    clearInput();
  };

  return (
    <form onSubmit={handleSubmitForm} noValidate>
      <FormControl fullWidth className={classes.addTask}>
        <Input
          autoComplete="off"
          maxLength="64"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder={intl.formatMessage(messages.placeholder)}
          type="text"
          value={title}
          endAdornment={(
            <InputAdornment className={classes.hint} position="end">
              <Chip label={intl.formatMessage(messages.hint)} className={classes.chip} />
            </InputAdornment>
          )}
        />
        <p>
          Once you submit, its mean you have agreed with our
          &nbsp;
          <a href="/terms-conditions" target="_blank">
            terms &amp; conditions
          </a>
        </p>
      </FormControl>
    </form>
  );
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TaskForm));
