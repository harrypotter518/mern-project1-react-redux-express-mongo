import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  BarSimple,
  BarStacked,
  BarMix,
  BarCustom,
  BarPositiveNegative,
  BarCustomLabel,
} from './demos';

function BarCharts(props) {
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
        title={intl.formatMessage(messages.barSimpleTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarSimple />
          <SourceReader componentName={docSrc + 'BarSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.barStackedTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarStacked />
          <SourceReader componentName={docSrc + 'BarStacked.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.barMixingTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarMix />
          <SourceReader componentName={docSrc + 'BarMix.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.barShapeTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarCustom />
          <SourceReader componentName={docSrc + 'BarCustom.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.barLabelTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarCustomLabel />
          <SourceReader componentName={docSrc + 'BarCustomLabel.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.barNegativeTitle)}
        icon="bar_chart"
        desc=""
        overflowX
      >
        <div>
          <BarPositiveNegative />
          <SourceReader componentName={docSrc + 'BarPositiveNegative.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

BarCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(BarCharts);
