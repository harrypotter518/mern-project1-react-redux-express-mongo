import React from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterChartWidget,
  SalesChartWidget,
  CarouselWidget,
  TableWidget,
  NewsWidget,
} from 'enl-components';
import styles from './dashboard-jss';

function MarketingDashboard(props) {
  const title = brand.name + ' - CRM Dashboard';
  const description = brand.desc;
  const { classes } = props;
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
      <Grid container className={classes.root}>
        <CounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      <SalesChartWidget />
      <Divider className={classes.divider} />
      <TableWidget />
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <CarouselWidget />
        </Grid>
        <Grid item md={6} xs={12}>
          <NewsWidget />
        </Grid>
      </Grid>
    </div>
  );
}

MarketingDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarketingDashboard);
