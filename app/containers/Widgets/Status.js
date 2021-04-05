import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  WeatherStatus,
  DateTimeStatus,
  ActivityStatus,
  PerformanceStatus,
  LocationStatus,
  NameStatus,
  FilesStatus
} from './demos';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 640
  }
};

function Status(props) {
  const title = brand.name + ' - Widgets';
  const description = brand.desc;
  const docSrc = 'containers/Widgets/demos/';
  const { classes, intl } = props;
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
        <Grid item md={12} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.dateTimeTitle)}
            icon="access_time"
            desc={intl.formatMessage(messages.dateTimeDesc)}
          >
            <div className={classes.miniWrap}>
              <DateTimeStatus />
              <SourceReader componentName={docSrc + 'DateTimeStatus.js'} />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.weatherTitle)}
            whiteBg
            icon="cloud"
            desc={intl.formatMessage(messages.weatherDesc)}
          >
            <div>
              <WeatherStatus />
              <SourceReader componentName={docSrc + 'WeatherStatus.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.recentActivityTitle)}
            icon="local_movies"
            desc={intl.formatMessage(messages.recentActivityDesc)}
          >
            <div>
              <ActivityStatus />
              <SourceReader componentName={docSrc + 'ActivityStatus.js'} />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.progressTitle)}
            whiteBg
            icon="accessibility"
            desc={intl.formatMessage(messages.progressTitle)}
          >
            <div>
              <PerformanceStatus />
              <SourceReader componentName={docSrc + 'PerformanceStatus.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.mapTitle)}
            whiteBg
            icon="location_on"
            desc={intl.formatMessage(messages.mapDesc)}
          >
            <div>
              <LocationStatus />
              <SourceReader componentName={docSrc + 'LocationStatus.js'} />
            </div>
          </PapperBlock>
          <div>
            <NameStatus />
            <SourceReader componentName={docSrc + 'NameStatus.js'} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.filesTitle)}
            icon="folder"
            desc={intl.formatMessage(messages.filesDesc)}
          >
            <div>
              <FilesStatus />
              <SourceReader componentName={docSrc + 'FilesStatus.js'} />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
    </div>
  );
}

Status.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Status));
