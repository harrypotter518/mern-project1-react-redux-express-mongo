import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  TextFields,
  TextFieldsLayout,
  InputAdornments,
  FormattedInputs,
  TextFieldsOutlined,
  TextFieldsFilled
} from './demos';

function Textbox(props) {
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
        title={intl.formatMessage(messages.textfiledTitle)}
        icon="border_color"
        desc={intl.formatMessage(messages.textfiledComponentsTitle)}
      >
        <div>
          <TextFields />
          <SourceReader componentName={docSrc + 'TextFields.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.textfiledOutlineTitle)}
        icon="crop_7_5"
        desc={intl.formatMessage(messages.textfiledOutlineDesc)}
      >
        <div>
          <TextFieldsOutlined />
          <SourceReader componentName={docSrc + 'TextFieldsOutlined.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.textfiledFilledTitle)}
        icon="call_to_action"
        desc={intl.formatMessage(messages.textfiledFilledDesc)}
      >
        <div>
          <TextFieldsFilled />
          <SourceReader componentName={docSrc + 'TextFieldsFilled.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.textfiledLayoutTitle)}
        icon="aspect_ratio"
        desc=""
      >
        <div>
          <TextFieldsLayout />
          <SourceReader componentName={docSrc + 'TextFieldsLayout.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.textfiledIconTitle)}
        icon="outlined_flag"
        desc={intl.formatMessage(messages.textfiledIconDesc)}
      >
        <div>
          <InputAdornments />
          <SourceReader componentName={docSrc + 'InputAdornments.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.textfiledFormatTitle)}
        icon="monetization_on"
        desc={intl.formatMessage(messages.textfiledFormatDesc)}
      >
        <div>
          <FormattedInputs />
          <SourceReader componentName={docSrc + 'FormattedInputs.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Textbox.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Textbox);
