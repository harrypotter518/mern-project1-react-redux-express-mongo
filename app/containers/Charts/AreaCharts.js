import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  AreaSimple,
  AreaStacked,
  AreaPercent,
  AreaNegativePositive,
} from './demos';

function AreaCharts(props) {
  const title = brand.name + ' - Chart';
  const description = brand.desc;
  const docSrc = 'containers/Charts/demos/';
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
        title={intl.formatMessage(messages.areaSimpleTitle)}
        icon="photo_size_select_actual"
        overflowX
        desc=""
      >
        <div>
          <AreaSimple />
          <SourceReader componentName={docSrc + 'AreaSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.areaStackedTitle)}
        icon="photo_size_select_actual"
        overflowX
        desc=""
      >
        <div>
          <AreaStacked />
          <SourceReader componentName={docSrc + 'AreaStacked.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.areaPercentTitle)}
        icon="photo_size_select_actual"
        overflowX
        desc=""
      >
        <div>
          <AreaPercent />
          <SourceReader componentName={docSrc + 'AreaPercent.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.areaNegativeTitle)}
        icon="photo_size_select_actual"
        overflowX
        desc=""
      >
        <div>
          <AreaNegativePositive />
          <SourceReader componentName={docSrc + 'AreaNegativePositive.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

AreaCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(AreaCharts);
