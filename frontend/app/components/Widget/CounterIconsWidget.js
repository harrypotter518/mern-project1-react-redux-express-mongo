import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import { injectIntl, intlShape } from 'react-intl';
import CounterWidget from '../Counter/CounterWidget';
import messages from './messages';
import styles from './widget-jss';

function CounterIconWidget(props) {
  const { classes, intl } = props;
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-dark"
            start={0}
            end={207}
            duration={3}
            title={intl.formatMessage(messages.subscribers)}
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={300}
            duration={3}
            title={intl.formatMessage(messages.followers)}
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={67}
            duration={3}
            title={intl.formatMessage(messages.total_posts)}
          >
            <Edit className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={3}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={70}
            duration={3}
            title={intl.formatMessage(messages.total_articles)}
          >
            <CollectionsBookmark className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(CounterIconWidget));
