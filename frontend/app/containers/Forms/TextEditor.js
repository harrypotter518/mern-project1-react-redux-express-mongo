import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { Wysiwyg, InlineWysiwyg } from './demos';

function TextEditor(props) {
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
        title={intl.formatMessage(messages.editorBasicTitle)}
        icon="format_color_text"
        desc={intl.formatMessage(messages.editorBasicDesc)}
      >
        <div>
          <Wysiwyg />
          <SourceReader componentName={docSrc + 'Wysiwyg.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.editorInlineTitle)}
        icon="chat_bubble"
        desc={intl.formatMessage(messages.editorInlineDesc)}
      >
        <div>
          <InlineWysiwyg />
          <SourceReader componentName={docSrc + 'InlineWysiwyg.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

TextEditor.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(TextEditor);
