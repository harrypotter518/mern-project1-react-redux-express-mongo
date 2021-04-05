import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { BasicMarker, PopoverMarker } from './demos';
import Info from './Info';

function MapMarker(props) {
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
        icon="place"
        title={intl.formatMessage(messages.markerDefaultTitle)}
        desc={intl.formatMessage(messages.markerDefaultDesc)}
      >
        <Info />
        <BasicMarker />
        <SourceReader componentName={docSrc + 'BasicMarker.js'} />
      </PapperBlock>
      <PapperBlock
        overflowX
        title={intl.formatMessage(messages.markerPopoverTitle)}
        desc={intl.formatMessage(messages.markerPopoverDesc)}
      >
        <Info />
        <PopoverMarker />
        <SourceReader componentName={docSrc + 'BasicMarker.js'} />
      </PapperBlock>
    </div>
  );
}

MapMarker.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(MapMarker);
