import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { IconInfographic, ChartInfographic, AdvancedInfographic } from './demos';

function Infographics(props) {
  const title = brand.name + ' - Widgets';
  const description = brand.desc;
  const docSrc = 'containers/Widgets/demos/';
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
        title={intl.formatMessage(messages.iconTitle)}
        whiteBg
        icon="all_out"
        desc={intl.formatMessage(messages.iconDesc)}
      >
        <div>
          <IconInfographic />
          <SourceReader componentName={docSrc + 'IconInfographic.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.chartTitle)}
        whiteBg
        icon="pie_chart"
        desc={intl.formatMessage(messages.chartDesc)}
      >
        <div>
          <ChartInfographic />
          <SourceReader componentName={docSrc + 'ChartInfographic.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.advancedTitle)}
        whiteBg
        icon="grade"
        desc={intl.formatMessage(messages.advancedDesc)}
      >
        <div>
          <AdvancedInfographic />
          <SourceReader componentName={docSrc + 'AdvancedInfographic.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Infographics.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Infographics);
