import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Send from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import css from 'enl-styles/Form.scss';
import 'enl-styles/vendors/react-draft-wysiwyg/react-draft-wysiwyg.css';
import dummyData from 'enl-api/dummy/dummyContents';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import { getDate, getTime } from '../helpers/dateTimeHelper';
import styles from './email-jss';

const content = {
  blocks: [{
    key: '637gr',
    text: 'Lorem ipsum dolor sit amet 😀',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }],
  entityMap: {}
};

function ComposeEmailForm(props) {
  const {
    classes,
    closeForm,
    to, subject,
    validMail, inputChange,
    processing,
    intl, sendEmail
  } = props;
  const contentBlock = convertFromRaw(content);
  const initEditorState = EditorState.createWithContent(contentBlock);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [errorMessage] = useState('');
  const [editorState, setEditorState] = useState(initEditorState);
  const [emailContent, setEmailContent] = useState(draftToHtml(convertToRaw(initEditorState.getCurrentContent())));
  const [, setFiles] = useState([]);

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
    setEmailContent(draftToHtml(convertToRaw(newEditorState.getCurrentContent())));
  };
  const handleRequestCloseSnackBar = () => setOpenSnackBar(false);
  const handleSend = message => {
    sendEmail(message);
    setEmailContent('');
    setFiles([]);
  };

  const newData = {
    date: getDate(),
    time: getTime(),
    avatar: dummyData.user.avatar,
    name: to,
    subject,
    content: emailContent,
    category: 'sent'
  };

  return (
    <div>
      <form>
        <section className={css.bodyForm}>
          <TextField
            error={validMail === 'Invalid email'}
            id="to"
            label={intl.formatMessage(messages.to)}
            helperText={validMail}
            className={classes.field}
            type="email"
            placeholder={intl.formatMessage(messages.to)}
            value={to}
            onChange={(event) => inputChange(event, 'to')}
            margin="normal"
          />
          <TextField
            id="subject"
            label={intl.formatMessage(messages.subject)}
            className={classes.field}
            placeholder={intl.formatMessage(messages.subject)}
            value={subject}
            onChange={(event) => inputChange(event, 'subject')}
            margin="normal"
          />
          <div className={classes.editorWrap}>
            <Editor
              editorState={editorState}
              editorClassName={classes.textEditor}
              toolbarClassName={classes.toolbarEditor}
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                options: ['inline', 'fontSize', 'fontFamily', 'colorPicker', 'image', 'emoji', 'list', 'textAlign', 'link'],
                inline: { inDropdown: true },
                color: true,
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
              }}
            />
          </div>
        </section>
        <div className={css.buttonArea}>
          <p>
            Once you submit, its mean you have agreed with our
            &nbsp;
            <a href="/terms-conditions" target="_blank">
              terms &amp; conditions
            </a>
          </p>
          <div>
            <Button type="button" onClick={() => closeForm()}>
              <FormattedMessage {...messages.discard} />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              disabled={!to || !subject || processing}
              onClick={() => handleSend(newData)}
            >
              {processing && <CircularProgress size={24} className={classes.buttonProgress} />}
              <FormattedMessage {...messages.send} />
              &nbsp;
              <Send className={classes.sendIcon} />
            </Button>
          </div>
        </div>
      </form>
      <Snackbar
        open={openSnackBar}
        message={errorMessage}
        autoHideDuration={4000}
        onClose={handleRequestCloseSnackBar}
      />
    </div>
  );
}

ComposeEmailForm.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  validMail: PropTypes.string.isRequired,
  sendEmail: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(ComposeEmailForm));
