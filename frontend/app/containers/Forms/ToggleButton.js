import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { ToggleBtn } from './demos';

function ToggleButton(props) {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
  const { intl } = props;
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
        title={intl.formatMessage(messages.toggleButtonTitle)}
        icon="iso"
        desc={intl.formatMessage(messages.toggleButtonTitle)}
      >
        <div>
          <ToggleBtn />
          <SourceReader componentName={docSrc + 'ToggleBtn.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

ToggleButton.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(ToggleButton);
