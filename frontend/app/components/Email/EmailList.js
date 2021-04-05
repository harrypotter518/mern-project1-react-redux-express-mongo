import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Tooltip from '@material-ui/core/Tooltip';
import Bookmark from '@material-ui/icons/Bookmark';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ReportIcon from '@material-ui/icons/Report';
import LabelIcon from '@material-ui/icons/Label';
import Divider from '@material-ui/core/Divider';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import PlaceLoader from './PlaceLoader';
import styles from './email-jss';

const ITEM_HEIGHT = 80;
function EmailList(props) {
  const {
    classes,
    emailData,
    openMail,
    keyword,
    remove,
    reply,
    loading,
    intl,
    moveTo,
    toggleStar
  } = props;
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [itemToMove, setItemToMove] = useState(null);

  const handleClickOpt = (event, item) => {
    setAnchorElOpt(event.currentTarget);
    setItemToMove(item);
  };
  const handleCloseOpt = () => setAnchorElOpt(null);
  const handleMoveTo = (item, category) => {
    moveTo(item, { category });
    setAnchorElOpt(null);
  };
  const handleStared = mail => {
    toggleStar(mail, { stared: !mail.get('stared') });
  };

  const getCategory = cat => {
    switch (cat) {
      case 'updates':
        return (
          <span className={classNames(classes.iconOrange, classes.category)}>
            <Flag />
            &nbsp;
            <FormattedMessage {...messages.updates} />
          </span>
        );
      case 'social':
        return (
          <span className={classNames(classes.iconRed, classes.category)}>
            <People />
            &nbsp;
            <FormattedMessage {...messages.social} />
          </span>
        );
      case 'promos':
        return (
          <span className={classNames(classes.iconBlue, classes.category)}>
            <LabelIcon />
            &nbsp;
            <FormattedMessage {...messages.promos} />
          </span>
        );
      case 'forums':
        return (
          <span className={classNames(classes.iconCyan, classes.category)}>
            <QuestionAnswer />
            &nbsp;
            <FormattedMessage {...messages.forums} />
          </span>
        );
      default:
        return false;
    }
  };
  const getEmail = dataArray => dataArray.map(mail => {
    const renderHTML = { __html: mail.get('content') };
    if (mail.get('subject').toLowerCase().indexOf(keyword) === -1) {
      return false;
    }
    return (
      <ExpansionPanel className={classes.emailList} key={mail.get('key')} onChange={() => openMail(mail)}>
        <ExpansionPanelSummary className={classes.emailSummary} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.fromHeading}>
            <Tooltip id="tooltip-mark" title={intl.formatMessage(messages.stared)}>
              <IconButton onClick={() => handleStared(mail)} className={classes.starBtn}>{mail.get('stared') ? (<Star className={classes.iconOrange} />) : (<StarBorder />) }</IconButton>
            </Tooltip>
            {mail.get('category') !== 'spam'
              ? (<Avatar alt="avatar" src={mail.get('avatar')} className={classes.avatar} />)
              : (<Avatar alt="avatar" className={classes.avatar}><ReportIcon /></Avatar>)
            }
            <Typography component="div" className={classes.heading}>
              {mail.get('category') === 'sent' && ('To ')}
              {mail.get('name')}
              <Typography variant="caption" component="p">{mail.get('date')}</Typography>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading} noWrap>{mail.get('subject')}</Typography>
            {getCategory(mail.get('category'))}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <section>
            <div className={classes.topAction}>
              <Typography className={classes.headMail}>
                {mail.get('category') !== 'sent' && (
                  <Fragment>
                    <FormattedMessage {...messages.from} />
                    &nbsp;
                    {mail.get('name')}
                    &nbsp;to me
                  </Fragment>
                )}
              </Typography>
              <div className={classes.opt}>
                <Tooltip id="tooltip-mark" title={intl.formatMessage(messages.stared)}>
                  <IconButton onClick={() => handleStared(mail)}>{mail.get('stared') ? (<Star className={classes.iconOrange} />) : (<StarBorder />) }</IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title={intl.formatMessage(messages.mark_to)}>
                  <IconButton
                    className={classes.button}
                    aria-label="mark"
                    aria-owns={anchorElOpt ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={(event) => handleClickOpt(event, mail)}
                  >
                    <Bookmark />
                  </IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title={intl.formatMessage(messages.remove)}>
                  <IconButton className={classes.button} aria-label="Delete" onClick={() => remove(mail)}><Delete /></IconButton>
                </Tooltip>
              </div>
            </div>
            <div className={classes.emailContent}>
              <Typography variant="h6" gutterBottom>{mail.get('subject')}</Typography>
              <article dangerouslySetInnerHTML={renderHTML} />
            </div>
          </section>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <div className={classes.action}>
            <Button size="small">
              <FormattedMessage {...messages.forward} />
            </Button>
            <Button size="small" color="secondary" onClick={() => reply(mail)}>
              <FormattedMessage {...messages.reply} />
            </Button>
          </div>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  });

  return (
    <main className={classes.content}>
      <Menu
        id="long-menu"
        anchorEl={anchorElOpt}
        open={Boolean(anchorElOpt)}
        onClose={handleCloseOpt}
        className={classes.markMenu}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
      >
        <List
          component="nav"
          subheader={(
            <ListSubheader component="div">
              <FormattedMessage {...messages.mark_to} />
              &nbsp;...
            </ListSubheader>
          )}
        />
        <MenuItem selected onClick={() => handleMoveTo(itemToMove, 'updates')}>
          <Flag className={classes.iconOrange} />
          &nbsp;
          <FormattedMessage {...messages.updates} />
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'social')}>
          <People className={classes.iconRed} />
          &nbsp;
          <FormattedMessage {...messages.social} />
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'promos')}>
          <LabelIcon className={classes.iconBlue} />
          &nbsp;
          <FormattedMessage {...messages.promos} />
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'forums')}>
          <QuestionAnswer className={classes.iconCyan} />
          &nbsp;
          <FormattedMessage {...messages.forums} />
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'spam')}>
          <ReportIcon />
          &nbsp;
          <FormattedMessage {...messages.spam} />
        </MenuItem>
      </Menu>
      {loading
        ? <PlaceLoader loop={6} />
        : getEmail(emailData)
      }
    </main>
  );
}

EmailList.propTypes = {
  classes: PropTypes.object.isRequired,
  emailData: PropTypes.object.isRequired,
  openMail: PropTypes.func.isRequired,
  moveTo: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  reply: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  intl: intlShape.isRequired
};

EmailList.defaultProps = {
  loading: false
};

export default withStyles(styles)(injectIntl(EmailList));
