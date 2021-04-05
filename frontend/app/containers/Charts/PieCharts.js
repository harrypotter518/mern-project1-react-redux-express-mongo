import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  PieSimple,
  PieCustomShape,
  PieCustomLabel,
  RadialSimple
} from './demos';

function PieCharts(props) {
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
            title={intl.formatMessage(messages.pieCustomTitle)}
            icon="pie_chart"
            desc=""
            overflowX
          >
            <div>
              <PieCustomShape />
              <SourceReader componentName={docSrc + 'PieCustomShape.js'} />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.pieCustomTitle)}
            icon="pie_chart"
            desc=""
            overflowX
          >
            <div>
              <PieCustomLabel />
              <SourceReader componentName={docSrc + 'PieCustomLabel.js'} />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
      <PapperBlock
        title={intl.formatMessage(messages.pieSimpleTitle)}
        icon="pie_chart"
        desc=""
        overflowX
      >
        <div>
          <PieSimple />
          <SourceReader componentName={docSrc + 'PieSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.pieRadialTitle)}
        icon="pie_chart"
        desc=""
        overflowX
      >
        <div>
          <RadialSimple />
          <SourceReader componentName={docSrc + 'PieSimple.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

PieCharts.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(PieCharts);
