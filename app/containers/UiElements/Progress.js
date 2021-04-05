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
  CircularStatic,
  CircularIndeterminate,
  CircularDeterminate,
  CircularIntegration,
  LinearStatic,
  LinearIndeterminate,
  LinearDeterminate,
  LinearBuffer,
  LinearQuery,
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Progress extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Progress/';
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
            <Grid item md={6} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.progressCircularTitle)}
                icon="av_timer"
                desc={intl.formatMessage(messages.progressCircularDesc)}
              >
                <div>
                  <CircularStatic />
                  <SourceReader componentName={docSrc + 'CircularStatic.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.progressDeterminateTitle)}
                icon="sync"
                desc={intl.formatMessage(messages.progressDeterminateDesc)}
              >
                <div>
                  <CircularDeterminate />
                  <SourceReader componentName={docSrc + 'CircularDeterminate.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.progressIndeterminateTitle)}
                icon="sync"
                desc={intl.formatMessage(messages.progressIndeterminateDesc)}
              >
                <div>
                  <CircularIndeterminate />
                  <SourceReader componentName={docSrc + 'CircularIndeterminate.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.progressIntegrationTitle)}
                icon="sync"
                desc={intl.formatMessage(messages.progressIntegrationDesc)}
              >
                <div>
                  <CircularIntegration />
                  <SourceReader componentName={docSrc + 'CircularIntegration.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
          <PapperBlock
            title={intl.formatMessage(messages.progressLinearTitle)}
            icon="short_text"
            desc=""
          >
            <div>
              <LinearStatic />
              <SourceReader componentName={docSrc + 'LinearStatic.js'} />
            </div>
          </PapperBlock>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.progressLinearDeterminateTitle)}
                icon="short_text"
                desc=""
              >
                <div>
                  <LinearDeterminate />
                  <SourceReader componentName={docSrc + 'LinearDeterminate.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.progressBufferTitle)}
                icon="short_text"
                desc=""
              >
                <div>
                  <LinearBuffer />
                  <SourceReader componentName={docSrc + 'LinearBuffer.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock
                title={intl.formatMessage(messages.progressLinearIndeterminateTitle)}
                icon="short_text"
                desc=""
              >
                <div>
                  <LinearIndeterminate />
                  <SourceReader componentName={docSrc + 'LinearIndeterminate.js'} />
                </div>
              </PapperBlock>
              <PapperBlock
                title={intl.formatMessage(messages.progressQueryTitle)}
                icon="short_text"
                desc=""
              >
                <div>
                  <LinearQuery />
                  <SourceReader componentName={docSrc + 'LinearQuery.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Progress));
