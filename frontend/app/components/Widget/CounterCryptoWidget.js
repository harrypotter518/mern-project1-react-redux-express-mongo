import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import {
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { data1 } from 'enl-api/chart/chartMiniData';
import colorfull from 'enl-api/palette/colorfull';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import CompareArrows from '@material-ui/icons/CompareArrows';
import bitcoinLogo from 'enl-images/crypto/bitcoin.png';
import rippleLogo from 'enl-images/crypto/ripple.png';
import moneroLogo from 'enl-images/crypto/monero.png';
import iotaLogo from 'enl-images/crypto/iota.png';
import { injectIntl, intlShape } from 'react-intl';
import styles from './widget-jss';
import CounterWidget from '../Counter/CounterWidget';
import CounterTrading from '../Counter/CounterTrading';
import messages from './messages';

function CounterCryptoWidget(props) {
  const {
    classes,
    width,
    intl,
    theme
  } = props;
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item md={9} xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <CounterTrading
                color={colorfull[7]}
                unitBefore="$ "
                start={0}
                end={217.89}
                duration={3}
                title="Bitcoin"
                logo={bitcoinLogo}
                position="up"
                value={5.6}
                lowest={207.67}
                highest={290.20}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CounterTrading
                color={colorfull[1]}
                unitBefore="$ "
                start={0}
                end={7.45}
                duration={3}
                title="Ripple"
                logo={rippleLogo}
                position="down"
                value={1.60}
                lowest={4.67}
                highest={7.45}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="amt" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CounterTrading
                color={colorfull[5]}
                unitBefore="$ "
                start={0}
                end={21.66}
                duration={3}
                title="Monero"
                logo={moneroLogo}
                position="up"
                value={1.16}
                lowest={10.12}
                highest={25.72}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="uv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CounterTrading
                color={colorfull[4]}
                unitBefore="$ "
                start={0}
                end={104.78}
                duration={3}
                title="Iota"
                logo={iotaLogo}
                position="down"
                value={2.9}
                lowest={103.01}
                highest={105.20}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={6}>
              <CounterWidget
                unitBefore="$ "
                color="secondary-main"
                start={0}
                end={1307}
                duration={3}
                title={intl.formatMessage(messages.tot_assets)}
              >
                <AccountBalanceWallet className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item sm={12} xs={6}>
              <CounterWidget
                unitBefore="$ "
                color="primary-main"
                start={0}
                end={2041}
                duration={3}
                title={intl.formatMessage(messages.tot_transaction)}
              >
                <CompareArrows className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item xs={12}>
              <CounterWidget
                unitBefore="$ "
                color="secondary-main"
                start={0}
                end={1400}
                duration={3}
                title={intl.formatMessage(messages.investment)}
              >
                <AreaChart width={isWidthDown('xs', width) ? 250 : 100} height={60} data={data1}>
                  <Area type="monotone" dataKey="amt" stroke={theme.palette.primary.main} fill={fade(theme.palette.primary.main, 0.5)} />
                </AreaChart>
              </CounterWidget>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CounterCryptoWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  intl: intlShape.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(injectIntl(CounterCryptoWidget)));
