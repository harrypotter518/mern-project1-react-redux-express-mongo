import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { SearchLocation } from './demos';
import Info from './Info';

function SearchMap(props) {
  const { intl } = props;
  const title = brand.name + ' - Map';
  const description = brand.desc;
  const docSrc = 'containers/Maps/demos/';
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
        overflowX
        title={intl.formatMessage(messages.searchLoactionTitle)}
        icon="search"
        desc={intl.formatMessage(messages.searchLoactionDesc)}
      >
        <Info />
        <SearchLocation />
        <SourceReader componentName={docSrc + 'SearchLocation.js'} />
      </PapperBlock>
    </div>
  );
}

SearchMap.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SearchMap);
