import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  EmailHeader,
  EmailList,
  EmailSidebar,
  ComposeEmail,
  Notification
} from 'enl-components';
import styles from 'enl-components/Email/email-jss';
import { getVisibleMail } from './reducers/selectors';
import {
  sendAction,
  composeAction,
  updateAction,
  openMailAction,
  filterAction,
  deleteAction,
  discardAction,
  searchAction,
  closeNotifAction
} from './reducers/emailActions';

// validation functions
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : ''
);

function Email(props) {
  const { classes } = props;
  const [field, setField] = useState({
    to: '',
    subject: ''
  });
  const [validMail, setValidMail] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const title = brand.name + ' - Email';
  const description = brand.desc;

  // Redux State
  const reducer = 'emailFullstack';
  const keyword = useSelector(state => state.getIn([reducer, 'keywordValue']));
  const emailData = useSelector(state => getVisibleMail(state.get(reducer)));
  const currentPage = useSelector(state => state.getIn([reducer, 'currentPage']));
  const openFrm = useSelector(state => state.getIn([reducer, 'openFrm']));
  const messageNotif = useSelector(state => state.getIn([reducer, 'notifMsg']));
  const loading = useSelector(state => state.getIn([reducer, 'loading']));
  const processing = useSelector(state => state.getIn([reducer, 'processing']));

  // Dispatcher
  const openMail = useDispatch();
  const goto = useDispatch();
  const search = useDispatch();
  const remove = useDispatch();
  const update = useDispatch();
  const compose = useDispatch();
  const discard = useDispatch();
  const sendEmail = useDispatch();
  const closeNotif = useDispatch();

  const handleChange = (event, name) => {
    const { value } = event.target;
    if (name === 'to') {
      setValidMail(email(event.target.value));
    }
    setField(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleReply = (mail) => {
    compose(composeAction);
    setField({
      to: mail.get('name'),
      subject: 'Reply: ' + mail.get('subject'),
    });
  };
  const handleCompose = () => {
    compose(composeAction);
    setField({
      to: ' ',
      subject: ' ',
    });
  };
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMoveTo = (mail, category) => {
    update(updateAction(mail, category));
  };
  const handleStared = (mail, stared) => {
    update(updateAction(mail, stared));
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Notification close={() => closeNotif(closeNotifAction)} message={messageNotif} />
      <div className={classes.root}>
        <EmailHeader search={(payload) => search(searchAction(payload))} handleDrawerToggle={handleDrawerToggle} />
        <EmailSidebar
          compose={handleCompose}
          goto={(payload) => goto(filterAction(payload))}
          selected={currentPage}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <EmailList
          emailData={emailData}
          openMail={(payload) => openMail(openMailAction(payload))}
          filterPage={currentPage}
          keyword={keyword}
          moveTo={handleMoveTo}
          remove={(payload) => remove(deleteAction(payload))}
          toggleStar={handleStared}
          reply={handleReply}
          loading={loading}
        />
      </div>
      <ComposeEmail
        to={field.to}
        subject={field.subject}
        compose={handleCompose}
        validMail={validMail}
        sendEmail={(toPayload, subjectPayload, content, attachment) => sendEmail(sendAction(toPayload, subjectPayload, content, attachment))}
        inputChange={(e, name) => handleChange(e, name)}
        open={openFrm}
        closeForm={() => discard(discardAction)}
        processing={processing}
      />
    </div>
  );
}

Email.propTypes = {
  classes: PropTypes.object.isRequired,
};

Email.defaultProps = {
  loading: false,
  processing: false
};

export default withStyles(styles)(Email);
