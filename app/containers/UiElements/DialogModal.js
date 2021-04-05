import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  ModalDemo,
  AlertDialog,
  SelectDialog,
  SelectRadioDialog,
  FullScreenDialog,
  ScrollDialog
} from './demos';

class DialogModal extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/DialogModal/';
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
          title={intl.formatMessage(messages.dialogStandardTitle)}
          icon="library_books"
          desc={intl.formatMessage(messages.dialogStandardDesc)}
        >
          <div>
            <ModalDemo />
            <SourceReader componentName={docSrc + 'ModalDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.dialogAlertsTitle)}
          icon="warning"
          desc={intl.formatMessage(messages.dialogAlertsDesc)}
        >
          <div>
            <AlertDialog />
            <SourceReader componentName={docSrc + 'AlertDialog.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.dialogSelectionTitle)}
              icon="list"
              desc={intl.formatMessage(messages.dialogSelectionDesc)}
            >
              <div>
                <SelectDialog />
                <SourceReader componentName={docSrc + 'SelectDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.dialogRadioTitle)}
              icon="radio_button_checked"
              desc={intl.formatMessage(messages.dialogRadioDesc)}
            >
              <div>
                <SelectRadioDialog />
                <SourceReader componentName={docSrc + 'SelectRadioDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.dialogFullscreenTitle)}
              icon="fullscreen"
              desc={intl.formatMessage(messages.dialogFullscreenDesc)}
            >
              <div>
                <FullScreenDialog />
                <SourceReader componentName={docSrc + 'FullScreenDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.dialogScrollTitle)}
              icon="import_export"
              desc={intl.formatMessage(messages.dialogScrollDesc)}
            >
              <div>
                <ScrollDialog />
                <SourceReader componentName={docSrc + 'ScrollDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DialogModal.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DialogModal);
