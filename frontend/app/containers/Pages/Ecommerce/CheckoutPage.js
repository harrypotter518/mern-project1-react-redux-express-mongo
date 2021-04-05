import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import {
  AddressForm,
  PaymentForm,
  Review,
  SideReview
} from 'enl-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  stepper: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`,
  },
  finishMessage: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    '& h4': {
      '& span': {
        textAlign: 'center',
        display: 'block',
        '& svg': {
          color: theme.palette.secondary.main,
          height: 'auto',
          width: 148
        }
      }
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['shipping_address', 'payment_details', 'review_order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { classes, width } = props;
  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Fragment>
            {activeStep === steps.length ? (
              <div className={classes.finishMessage}>
                <Typography variant="h4" gutterBottom>
                  <span>
                    <CheckCircle />
                  </span>
                  <FormattedMessage {...messages.thank} />
                </Typography>
                <Typography variant="subtitle1">
                  <FormattedMessage {...messages.your_order} />
                  &nbsp;
                  <strong>#2001539</strong>
                  .&nbsp;
                  <FormattedMessage {...messages.we_have} />
                </Typography>
                <Button variant="contained" color="primary" href="/app/pages/ecommerce" className={classes.button}>
                  <FormattedMessage {...messages.shopping_again} />
                </Button>
              </div>
            ) : (
              <Fragment>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={7}>
                    <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel={isWidthDown('sm', width)}>
                      {steps.map(label => (
                        <Step key={label}>
                          <StepLabel>
                            <FormattedMessage {...messages[label]} />
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    {getStepContent(activeStep)}
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <SideReview />
                  </Grid>
                </Grid>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      <FormattedMessage {...messages.back} />
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    size="large"
                  >
                    {activeStep === steps.length - 1 ? <FormattedMessage {...messages.place} /> : <FormattedMessage {...messages.next} />}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
      </main>
    </Fragment>
  );
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(injectIntl(Checkout)));
