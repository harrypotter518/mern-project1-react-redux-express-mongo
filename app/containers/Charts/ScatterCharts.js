import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  ScatterSimple,
  ScatterJoinLine,
  ScatterMultiple,
  ScatterCustom,
} from './demos';

function ScatterCharts(props) {
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
        title={intl.formatMessage(messages.scatterSimpleTitle)}
        icon="bubble_chart"
        desc=""
        overflowX
      >
        <div>
          <ScatterSimple />
          <SourceReader componentName={docSrc + 'ScatterSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.scatterJoinTitle)}
        icon="bubble_chart"
        desc=""
        overflowX
      >
        <div>
          <ScatterJoinLine />
          <SourceReader componentName={docSrc + 'ScatterJoinLine.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.scatterMultiTitle)}
        icon="bubble_chart"
        desc=""
        overflowX
      >
        <div>
          <ScatterMultiple />
          <SourceReader componentName={docSrc + 'ScatterMultiple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.scatterCustomTitle)}
        icon="bubble_chart"
        desc=""
        overflowX
      >
        <div>
          <ScatterCustom />
          <SourceReader componentName={docSrc + 'ScatterCustom.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

ScatterCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(ScatterCharts);
