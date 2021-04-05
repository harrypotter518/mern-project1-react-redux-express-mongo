import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import Title from './Title';
import styles from './landingStyle-jss';

let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

function Feature(props) {
  const featureList = [
    createFeatureData('extension', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.'),
    createFeatureData('whatshot', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.'),
    createFeatureData('public', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.')
  ];

  const { classes, intl } = props;
  return (
    <div className={classes.feature}>
      <div className={classes.container}>
        <Title title={intl.formatMessage(messages.titleFeature)} desc="Cras convallis lacus orci, tristique tincidunt magna consequat in." align="center" />
        <Grid container className={classes.root} spacing={5}>
          { featureList.map(item => (
            <Grid key={item.id.toString()} item xs={12} md={4}>
              <Typography component="h4" variant="h6">
                <span className={classes.icon}>
                  <Icon>{item.icon}</Icon>
                </span>
                <br />
                {item.title}
              </Typography>
              <Typography>
                {item.desc}
              </Typography>
            </Grid>
          )) }
        </Grid>
      </div>
    </div>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Feature));
