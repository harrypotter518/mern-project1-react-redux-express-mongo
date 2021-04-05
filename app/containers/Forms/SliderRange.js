import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { SliderInput, AdvanceRange } from './demos';

function SliderRange(props) {
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
        title={intl.formatMessage(messages.sliderInputTitle)}
        overflowX
        icon="tune"
        desc={intl.formatMessage(messages.sliderInputDesc)}
      >
        <div>
          <SliderInput />
          <SourceReader componentName={docSrc + 'SliderInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.sliderInputAdvanceTitle)}
        overflowX
        icon="ios-options-outline"
        desc={intl.formatMessage(messages.sliderInputAdvanceDesc)}
      >
        <div>
          <AdvanceRange />
          <SourceReader componentName={docSrc + 'AdvanceRange.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

SliderRange.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SliderRange);
