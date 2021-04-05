import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Type from 'enl-styles/Typography.scss';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import Tooltip from '@material-ui/core/Tooltip';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Bookmark from '@material-ui/icons/Bookmark';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import css from 'enl-styles/Form.scss';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { TextFieldRedux } from '../Forms/ReduxFormMUI';
import messages from './messages';
import styles from './contact-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

function AddContactForm(props) {
  const {
    classes,
    reset,
    pristine,
    submitting,
    handleSubmit,
    onDrop,
    imgAvatar,
    processing,
    intl
  } = props;
  const ref = useRef(null);
  let dropzoneRef;
  const acceptedFiles = ['image/jpeg', 'image/png', 'image/bmp'];
  const fileSizeLimit = 100000;
  const imgPreview = img => {
    if (!img) { return null; }
    if (typeof img !== 'string' && img !== '') {
      return URL.createObjectURL(imgAvatar);
    }
    return img;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={css.bodyForm}>
          <div>
            <Typography className={Type.textCenter}>
              <FormattedMessage {...messages.upload} />
              &nbsp;(Max 100KB)
            </Typography>
            <Dropzone
              className={classes.hiddenDropzone}
              accept={acceptedFiles.join(',')}
              acceptClassName="stripes"
              onDrop={onDrop}
              maxSize={fileSizeLimit}
              ref={(node) => { dropzoneRef = node; }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
            <div className={classes.avatarWrap}>
              <Avatar
                alt="Avatar"
                className={classes.uploadAvatar}
                src={imgPreview(imgAvatar)}
              />
              <Tooltip id="tooltip-upload" title={intl.formatMessage(messages.upload)}>
                <IconButton
                  className={classes.buttonUpload}
                  component="button"
                  onClick={() => {
                    dropzoneRef.open();
                  }}
                >
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div>
            <Field
              name="name"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.name)}
              label={intl.formatMessage(messages.name)}
              validate={required}
              required
              ref={ref}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PermContactCalendar />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="title"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.title)}
              label={intl.formatMessage(messages.title)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Bookmark />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="phone"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.phone)}
              type="tel"
              label={intl.formatMessage(messages.phone)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhone />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="secondaryPhone"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.secondary_phone)}
              type="tel"
              label={intl.formatMessage(messages.secondary_phone)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Smartphone />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="personalEmail"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.personal_email)}
              type="email"
              validate={email}
              label={intl.formatMessage(messages.personal_email)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="companyEmail"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.company_email)}
              type="email"
              validate={email}
              label={intl.formatMessage(messages.company_email)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Work />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="address"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.address)}
              label={intl.formatMessage(messages.address)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div>
            <Field
              name="website"
              component={TextFieldRedux}
              placeholder={intl.formatMessage(messages.website)}
              type="url"
              label={intl.formatMessage(messages.website)}
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Language />
                  </InputAdornment>
                )
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
            <Button variant="contained" color="secondary" type="submit" disabled={submitting || processing}>
              {processing && <CircularProgress size={24} className={classes.buttonProgress} />}
              <FormattedMessage {...messages.submit} />
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={() => reset()}
            >
              <FormattedMessage {...messages.reset} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

AddContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  imgAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  processing: PropTypes.bool.isRequired,
  intl: intlShape.isRequired
};

const AddContactFormRedux = reduxForm({
  form: 'addContact',
  enableReinitialize: true,
})(AddContactForm);

const AddContactInit = connect(
  state => ({
    initialValues: state.getIn(['contact', 'formValues']),
    ...state
  })
)(AddContactFormRedux);

export default withStyles(styles)(injectIntl(AddContactInit));
