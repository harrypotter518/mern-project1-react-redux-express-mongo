import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  LineSimple,
  LineVertical,
  LineCustomDot,
  LineCustomLabel,
} from './demos';

function LineChart(props) {
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
        icon="timeline"
        title={intl.formatMessage(messages.lineSimpleTitle)}
        desc=""
        overflowX
      >
        <div>
          <LineSimple />
          <SourceReader componentName={docSrc + 'LineSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        icon="timeline"
        title={intl.formatMessage(messages.lineVerticalTitle)}
        desc=""
        overflowX
      >
        <div>
          <LineVertical />
          <SourceReader componentName={docSrc + 'LineVertical.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        icon="timeline"
        title={intl.formatMessage(messages.lineCustomTitle)}
        desc=""
        overflowX
      >
        <div>
          <LineCustomDot />
          <SourceReader componentName={docSrc + 'LineCustomDot.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        icon="timeline"
        title={intl.formatMessage(messages.lineLabelTitle)}
        desc=""
        overflowX
      >
        <div>
          <LineCustomLabel />
          <SourceReader componentName={docSrc + 'LineCustomLabel.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

LineChart.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(LineChart);
