import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader } from 'enl-components';
import { PerformanceAnalytic, SalesAnalytic, TradingAnalytic } from './demos';

function Analytics() {
  const title = brand.name + ' - Widgets';
  const description = brand.desc;
  const docSrc = 'containers/Widgets/demos/';
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
      <PerformanceAnalytic />
      <SourceReader componentName={docSrc + 'PerformanceAnalytic.js'} />
      <SalesAnalytic />
      <SourceReader componentName={docSrc + 'SalesAnalytic.js'} />
      <TradingAnalytic />
      <SourceReader componentName={docSrc + 'TradingAnalytic.js'} />
    </div>
  );
}

export default Analytics;
