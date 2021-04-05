import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  StrippedTable,
  HoverTable,
  BorderedTable,
  StatusLabel,
  StatusColorRow,
  EmptyTable
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function BasicTable(props) {
  const { classes, intl } = props;
  const title = brand.name + ' - Table';
  const description = brand.desc;
  const docSrc = 'containers/Tables/demos/';
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
        title={intl.formatMessage(messages.strippedTableTitle)}
        whiteBg
        icon="view_headline"
        desc={intl.formatMessage(messages.strippedTableDesc)}
      >
        <div>
          <StrippedTable />
          <SourceReader componentName={docSrc + 'StrippedTable.js'} />
        </div>
      </PapperBlock>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.hoverTableTitle)}
              noMargin
              whiteBg
              icon="line_weight"
              desc={intl.formatMessage(messages.hoverTableDesc)}
            >
              <div>
                <HoverTable />
                <SourceReader componentName={docSrc + 'HoverTable.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.borderedTableTitle)}
              whiteBg
              icon="border_all"
              desc={intl.formatMessage(messages.borderedTableDesc)}
            >
              <div>
                <BorderedTable />
                <SourceReader componentName={docSrc + 'BorderedTable.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock
              whiteBg
              icon="list"
              noMargin
              title={intl.formatMessage(messages.statusTableTitle)}
              desc=""
            >
              <div>
                <StatusLabel />
                <SourceReader componentName={docSrc + 'StatusLabel.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock
              whiteBg
              icon="color_lens"
              title={intl.formatMessage(messages.colouredTableTitle)}
              desc=""
            >
              <div>
                <StatusColorRow />
                <SourceReader componentName={docSrc + 'StatusColorRow.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
      <PapperBlock
        title={intl.formatMessage(messages.emptyTableTitle)}
        whiteBg
        icon="crop_5_4"
        desc={intl.formatMessage(messages.emptyTableDesc)}
      >
        <div>
          <EmptyTable />
          <SourceReader componentName={docSrc + 'EmptyTable.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(BasicTable));
