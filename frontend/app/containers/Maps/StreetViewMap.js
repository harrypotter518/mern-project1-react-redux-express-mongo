import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { StreetView } from './demos';
import Info from './Info';

function StreetViewMap(props) {
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
        icon="map"
        title={intl.formatMessage(messages.streetViewTitle)}
        desc={intl.formatMessage(messages.streetViewDesc)}
      >
        <Info />
        <StreetView />
        <SourceReader componentName={docSrc + 'StreetView.js'} />
      </PapperBlock>
    </div>
  );
}

StreetViewMap.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(StreetViewMap);
