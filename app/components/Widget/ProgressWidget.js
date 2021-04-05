import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Type from 'enl-styles/Typography.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, FormattedMessage } from 'react-intl';
import styles from './widget-jss';
import messages from './messages';

function ProgressWidget(props) {
  const { classes } = props;
  return (
    <Paper className={classes.styledPaper} elevation={4}>
      <Typography className={classes.title} variant="h5" component="h3">
        <span className={Type.light}>
          <FormattedMessage {...messages.profile_strength} />
          :&nbsp;
        </span>
        <span className={Type.bold}>
          <FormattedMessage {...messages.intermediate} />
        </span>
      </Typography>
      <Grid container justify="center">
        <Chip
          avatar={(
            <Avatar>
              <Check />
            </Avatar>
          )}
          label="60% Progress"
          className={classes.chip}
          color="primary"
        />
      </Grid>
      <LinearProgress variant="determinate" className={classes.progress} value={60} />
    </Paper>
  );
}

ProgressWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(injectIntl(ProgressWidget));
