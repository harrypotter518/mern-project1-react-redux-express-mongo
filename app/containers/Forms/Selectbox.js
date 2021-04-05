import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  SimpleSelectbox,
  NativeSelectbox,
  MultipleSelectbox,
  ControlledSelectbox,
  SelectVariant
} from './demos';

function Selectbox(props) {
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
        title={intl.formatMessage(messages.selectSimpleTitle)}
        icon="list"
        desc={intl.formatMessage(messages.selectSimpleDesc)}
      >
        <div>
          <SimpleSelectbox />
          <SourceReader componentName={docSrc + 'SimpleSelectbox.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.selectVariationTitle)}
        icon="list"
        desc={intl.formatMessage(messages.selectVariationDesc)}
      >
        <div>
          <SelectVariant />
          <SourceReader componentName={docSrc + 'SelectVariant.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.selectNativeTitle)}
        icon="view_list"
        desc={intl.formatMessage(messages.selectNativeDesc)}
      >
        <div>
          <NativeSelectbox />
          <SourceReader componentName={docSrc + 'NativeSelectbox.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.selectMultiTitle)}
        con="label"
        desc={intl.formatMessage(messages.selectMultiDesc)}
      >
        <div>
          <MultipleSelectbox />
          <SourceReader componentName={docSrc + 'MultipleSelectbox.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.selectControllTitle)}
        icon="featured_play_list"
        desc=""
      >
        <div>
          <ControlledSelectbox />
          <SourceReader componentName={docSrc + 'ControlledSelectbox.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Selectbox.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Selectbox);
