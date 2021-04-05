import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { UploadInputAll, UploadInputImg, UploadInputBtn } from './demos';

function Upload(props) {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const { intl } = props;
  const docSrc = 'containers/Forms/demos/';
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
        title={intl.formatMessage(messages.uploadBasicTitle)}
        icon="cloud_upload"
        whiteBg
        desc={intl.formatMessage(messages.uploadBasicDesc)}
      >
        <div>
          <UploadInputAll />
          <SourceReader componentName={docSrc + 'UploadInputAll.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.uploadImagesTitle)}
        icon="add_photo_alternate"
        whiteBg
        desc={intl.formatMessage(messages.uploadImagesDesc)}
      >
        <div>
          <UploadInputImg />
          <SourceReader componentName={docSrc + 'UploadInputImg.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.uploadButtonTitle)}
        icon="cloud_upload"
        whiteBg
        desc={intl.formatMessage(messages.uploadButtonDesc)}
      >
        <div>
          <UploadInputBtn />
          <SourceReader componentName={docSrc + 'UploadInputBtn.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Upload.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Upload);
