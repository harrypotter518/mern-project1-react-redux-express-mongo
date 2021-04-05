import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { BasicTags, ArrayTags } from './demos';

class Tags extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Tags/';
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
          title={intl.formatMessage(messages.tagsBasicTitle)}
          icon="local_offer"
          desc={intl.formatMessage(messages.tagsBasicDesc)}
        >
          <div>
            <BasicTags />
            <SourceReader componentName={docSrc + 'BasicTags.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.tagsArrayTitle)}
          icon="local_offer"
          desc={intl.formatMessage(messages.tagsArrayDesc)}
        >
          <div>
            <ArrayTags />
            <SourceReader componentName={docSrc + 'ArrayTags.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Tags.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Tags);
