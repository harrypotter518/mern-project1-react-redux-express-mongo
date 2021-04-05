import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  RadarSimple,
  DoubleRadar
} from './demos';

function RadarCharts(props) {
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
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.radarSimpleTitle)}
            icon="timelapse"
            desc=""
            overflowX
          >
            <div>
              <RadarSimple />
              <SourceReader componentName={docSrc + 'RadarSimple.js'} />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.radarDoubleTitle)}
            icon="timelapse"
            desc=""
            overflowX
          >
            <div>
              <DoubleRadar />
              <SourceReader componentName={docSrc + 'DoubleRadar.js'} />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
    </div>
  );
}

RadarCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(RadarCharts);
