import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { AdvFilter } from './demos';

function AdvancedTable(props) {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  const docSrc = 'containers/Tables/demos/';
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
        whiteBg
        icon="table_chart"
        title={intl.formatMessage(messages.advancedTitle)}
        desc={intl.formatMessage(messages.advancedDesc)}
      >
        <div>
          <AdvFilter />
          <SourceReader componentName={docSrc + 'AdvFilter.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

AdvancedTable.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(AdvancedTable);
