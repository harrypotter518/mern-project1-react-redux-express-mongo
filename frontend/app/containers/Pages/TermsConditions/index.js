import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import Type from 'enl-styles/Typography.scss';
import styles from '../../../components/Forms/user-jss';

function TermsConditions(props) {
  const { classes } = props;
  const title = brand.name + ' - Terms and Conditions';
  const description = brand.desc;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <section className={classes.userFormWrap}>
          <div className={Type.textCenter}>
            <NavLink to="/" className={classNames(classes.brand, classes.centerFlex)}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
          </div>
          <Paper className={classes.paperWrap} style={{ padding: 24, marginBottom: 20 }}>
            <Typography variant="h4" className={classNames(classes.title, Type.textCenter)} gutterBottom>
              Terms and Conditions
            </Typography>
            <br />
            <Typography variant="caption" className={classes.subtitle} gutterBottom align="left">
              In this demo project we have 2 policy focus, which are related to your personal data registration and submitted data in the sample demo application
            </Typography>
            <article>
              <Typography variant="h6" className={classes.subtitle} gutterBottom align="left">
                1. Your personal data registration
              </Typography>
              <Typography gutterBottom align="left">
                When creating a new account, both during registration via email and social media, your data in the database is not permanent. We can remove it anytime without giving prior notice. If it has been deleted and then you want to log in again, then please create a new account.
              </Typography>
              <Typography variant="h6" className={classes.subtitle} gutterBottom align="left">
                2. Data submitted in the sample application demo
              </Typography>
              <Typography gutterBottom align="left">
                {"Examples of applications are Todo Firebase, Contact Firebase, and Firebase Email. All your'e submited data is public. We (Enlite Prime Team) are not responsible for the content you post. Then avoid harsh or aggressive words. In addition, these data are not permanently stored in the database. We can remove it anytime without giving prior notice."}
              </Typography>
              <br />
              <br />
              <Typography gutterBottom align="left">
                Thank you.
              </Typography>
              <Typography gutterBottom align="left">
                Enlint Prime Team
              </Typography>
            </article>
          </Paper>
        </section>
      </div>
    </div>
  );
}

TermsConditions.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TermsConditions);
