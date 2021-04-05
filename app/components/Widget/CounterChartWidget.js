import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
} from 'recharts';
import { data1 } from 'enl-api/chart/chartMiniData';
import AssignmentReturned from '@material-ui/icons/AssignmentReturned';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';

function CounterChartWidget(props) {
  const { classes, intl, theme } = props;
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color="secondary-dark"
            start={0}
            end={20}
            duration={3}
            title={intl.formatMessage(messages.monthly_income)}
            unitBefore="$ "
            unitAfter="k"
          >
            <AssignmentReturned className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={20}
            duration={3}
            title={intl.formatMessage(messages.weekly_sales)}
          >
            <BarChart width={100} height={40} data={data1}>
              <Bar dataKey="uv" fill={theme.palette.secondary.main} />
            </BarChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={321}
            duration={3}
            title={intl.formatMessage(messages.new_customers)}
          >
            <AreaChart width={100} height={60} data={data1}>
              <Area type="monotone" dataKey="uv" stroke={theme.palette.secondary.main} fill={fade(theme.palette.secondary.main, 0.5)} />
            </AreaChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color="secondary-main"
            start={0}
            end={82}
            duration={3}
            title={intl.formatMessage(messages.active_users)}
          >
            <LineChart width={100} height={80} data={data1}>
              <Line type="monotone" dataKey="pv" stroke={theme.palette.secondary.main} strokeWidth={2} />
            </LineChart>
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CounterChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(injectIntl(CounterChartWidget));
