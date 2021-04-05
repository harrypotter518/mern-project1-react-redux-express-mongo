import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  CompossedLineBarArea,
  CompossedSameData,
  CompossedVertical,
} from './demos';

function CompossedCharts(props) {
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
        title={intl.formatMessage(messages.compossedDefaultTitle)}
        icon="insert_chart"
        desc=""
        overflowX
      >
        <div>
          <CompossedLineBarArea />
          <SourceReader componentName={docSrc + 'CompossedLineBarArea.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.compossedSameDataTitle)}
        icon="insert_chart"
        desc=""
        overflowX
      >
        <div>
          <CompossedSameData />
          <SourceReader componentName={docSrc + 'CompossedSameData.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.compossedVerticalTitle)}
        icon="insert_chart"
        desc=""
        overflowX
      >
        <div>
          <CompossedVertical />
          <SourceReader componentName={docSrc + 'CompossedVertical.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

CompossedCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(CompossedCharts);
