import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  StandardButtons,
  FloatingButtons,
  CustomButtons,
  ComplexButtons
} from './demos';

function Buttons(props) {
  const title = brand.name + ' - Form';
  const { intl } = props;
  const description = brand.desc;
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
        title={intl.formatMessage(messages.buttonStandardTitle)}
        icon="videogame_asset"
        desc={intl.formatMessage(messages.buttonStandardDesc)}
      >
        <div>
          <StandardButtons />
          <SourceReader componentName={docSrc + 'StandardButtons.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.buttonFloatingTitle)}
        icon="add_circle"
        desc={intl.formatMessage(messages.buttonFloatingDesc)}
      >
        <div>
          <FloatingButtons />
          <SourceReader componentName={docSrc + 'FloatingButtons.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.buttonCustomizedTitle)}
        icon="all_out"
        desc=""
      >
        <div>
          <CustomButtons />
          <SourceReader componentName={docSrc + 'CustomButtons.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.buttonComplexTitle)}
        icon="brightness_5"
        desc={intl.formatMessage(messages.buttonComplexDesc)}
      >
        <div>
          <ComplexButtons />
          <SourceReader componentName={docSrc + 'ComplexButtons.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Buttons.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Buttons);
