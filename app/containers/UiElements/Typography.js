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
  GeneralTypo,
  Heading,
  ListTypo,
  AlignTypo,
  ColouredTypo,
  QuotesDemo
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Typography extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Typography/';
    const { intl } = this.props;
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
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={7} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.typoGeneralTitle)}
                icon="font_download"
                desc={intl.formatMessage(messages.typoGeneralDesc)}
              >
                <div>
                  <GeneralTypo />
                  <SourceReader componentName={docSrc + 'GeneralTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.typoAlignmentTitle)}
                icon="format_align_center"
                desc=""
              >
                <div>
                  <AlignTypo />
                  <SourceReader componentName={docSrc + 'AlignTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.typoColouredTitle)}
                icon="palette"
                desc=""
              >
                <div>
                  <ColouredTypo />
                  <SourceReader componentName={docSrc + 'ColouredTypo.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={5} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.typoHeadingTitle)}
                icon="text_fields"
                desc=""
              >
                <div>
                  <Heading />
                  <SourceReader componentName={docSrc + 'Heading.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.typoListTitle)}
                desc=""
                icon="list"
              >
                <div>
                  <ListTypo />
                  <SourceReader componentName={docSrc + 'ListTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.typoQuotesTitle)}
                icon="format_quote"
                desc=""
              >
                <div>
                  <QuotesDemo />
                  <SourceReader componentName={docSrc + 'QuotesDemo.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Typography));
