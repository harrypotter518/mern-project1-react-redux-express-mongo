import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import datas from 'enl-api/apps/connectionData';
import { injectIntl, intlShape } from 'react-intl';
import ProfileCard from '../CardPaper/ProfileCard';
import messages from './messages';
import styles from './profile-jss';

function Connection(props) {
  const { classes, intl } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="space-between"
      direction="row"
      spacing={2}
      className={classes.rootx}
    >
      {
        datas.map((data, index) => (
          <Grid item md={4} sm={6} xs={12} key={index.toString()}>
            <ProfileCard
              cover={data.cover}
              avatar={data.avatar}
              name={data.name}
              title={data.title}
              connection={data.connection}
              isVerified={data.verified}
              btnText={intl.formatMessage(messages.see_profile)}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

Connection.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Connection));
