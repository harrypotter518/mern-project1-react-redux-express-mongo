import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ReportIcon from '@material-ui/icons/Report';
import StarIcon from '@material-ui/icons/Star';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import LabelIcon from '@material-ui/icons/Label';
import Divider from '@material-ui/core/Divider';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './email-jss';

function EmailMenu(props) {
  const {
    classes,
    compose,
    selected,
    intl,
    goto, onClose
  } = props;

  const gotoPage = (page) => {
    goto(page);
    onClose();
  };

  return (
    <Fragment>
      <div className={classes.toolbar}>
        <Button variant="contained" onClick={compose} fullWidth color="secondary">
          <FormattedMessage {...messages.compose} />
        </Button>
      </div>
      <List className={classes.nav}>
        <ListItem button className={selected === 'inbox' ? classes.selected : ''} onClick={() => gotoPage('inbox')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.inbox)} />
        </ListItem>
        <ListItem button className={selected === 'stared' ? classes.selected : ''} onClick={() => gotoPage('stared')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.stared)} />
        </ListItem>
        <ListItem button className={selected === 'sent' ? classes.selected : ''} onClick={() => gotoPage('sent')}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.sent)} />
        </ListItem>
        <ListItem button className={selected === 'spam' ? classes.selected : ''} onClick={() => gotoPage('spam')}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.spam)} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List className={classes.nav}>
        <ListItem button className={selected === 'updates' ? classes.selected : ''} onClick={() => gotoPage('updates')}>
          <ListItemIcon>
            <Flag className={classes.iconOrange} />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.updates)} />
        </ListItem>
        <ListItem button className={selected === 'social' ? classes.selected : ''} onClick={() => gotoPage('social')}>
          <ListItemIcon>
            <People className={classes.iconRed} />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.social)} />
        </ListItem>
        <ListItem button className={selected === 'promos' ? classes.selected : ''} onClick={() => gotoPage('promos')}>
          <ListItemIcon>
            <LabelIcon className={classes.iconBlue} />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.promos)} />
        </ListItem>
        <ListItem button className={selected === 'forums' ? classes.selected : ''} onClick={() => gotoPage('forums')}>
          <ListItemIcon>
            <QuestionAnswer className={classes.iconCyan} />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage(messages.forums)} />
        </ListItem>
      </List>
    </Fragment>
  );
}

EmailMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  selected: PropTypes.string.isRequired,
  intl: intlShape.isRequired
};

EmailMenu.defaultProps = {
  onClose: () => {}
};

export default withStyles(styles)(injectIntl(EmailMenu));
