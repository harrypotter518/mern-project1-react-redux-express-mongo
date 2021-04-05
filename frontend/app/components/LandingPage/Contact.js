import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import Title from './Title';
import styles from './landingStyle-jss';

function Contact(props) {
  const { classes, intl } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.contactBubble}>
          <Title title={intl.formatMessage(messages.titleContact)} desc="Cras convallis lacus orci, tristique tincidunt magna consequat in." align="left" nomargin />
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  id="standard-name"
                  label={intl.formatMessage(messages.nameContact)}
                  className={classes.textField}
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                  margin="normal"
                  classes={{
                    root: classes.contactFieldRoot,
                  }}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  id="standard-email"
                  label={intl.formatMessage(messages.emailContact)}
                  className={classes.textField}
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                  margin="normal"
                  classes={{
                    root: classes.contactFieldRoot,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item lg={6} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  id="standard-multiline-flexible"
                  label={intl.formatMessage(messages.messagesContact)}
                  multiline
                  rows="4"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={classNames(classes.textField, classes.textarea)}
                  margin="normal"
                  classes={{
                    root: classes.contactFieldRoot,
                  }}
                />
              </FormControl>
              <div className={classes.btnArea}>
                <Button variant="contained" size="large" className={classes.button} color="secondary">
                  <FormattedMessage {...messages.sendContact} />
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Contact));
