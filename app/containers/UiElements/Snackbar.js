import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  SimpleNotif,
  StyledNotif,
  TransitionNotif,
  MobileNotif
} from './demos';

class Snackbar extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Notification/';
    const { intl } = this.props;
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
        <PapperBlock
          icon="notification_important"
          title={intl.formatMessage(messages.messagesNotifTitle)}
          desc={intl.formatMessage(messages.messagesNotifDesc)}
        >
          <div>
            <SimpleNotif />
            <SourceReader componentName={docSrc + 'SimpleNotif.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          icon="notifications_active"
          title={intl.formatMessage(messages.messagesStyledTitle)}
          desc={intl.formatMessage(messages.messagesStyledDesc)}
        >
          <div>
            <StyledNotif />
            <SourceReader componentName={docSrc + 'StyledNotif.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          icon="perm_device_information"
          title={intl.formatMessage(messages.messagesMobileTitle)}
          desc={intl.formatMessage(messages.messagesMobileDesc)}
        >
          <div>
            <Grid container justify="center">
              <Grid item md={4} xs={12}>
                <MobileNotif />
              </Grid>
            </Grid>
            <SourceReader componentName={docSrc + 'MobileNotif.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.messagesTransitionTitle)}
          icon="gradient"
          desc={intl.formatMessage(messages.messagesTransitionDesc)}
        >
          <div>
            <TransitionNotif />
            <SourceReader componentName={docSrc + 'TransitionNotif.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Snackbar.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Snackbar);
