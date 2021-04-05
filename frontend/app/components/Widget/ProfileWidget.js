import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

function ProfileWidget(props) {
  const { classes, intl } = props;
  return (
    <PapperBlock title={intl.formatMessage(messages.about_title)} icon="contacts" whiteBg noMargin desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
      <Divider className={classes.divider} />
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={intl.formatMessage(messages.born)} secondary="Jan 9, 1994" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={intl.formatMessage(messages.phone)} secondary="(+62)8765432190" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={intl.formatMessage(messages.address)} secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain" />
        </ListItem>
      </List>
    </PapperBlock>
  );
}

ProfileWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(ProfileWidget));
