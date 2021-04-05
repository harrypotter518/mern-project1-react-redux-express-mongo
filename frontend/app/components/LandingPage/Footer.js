import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from 'enl-images/logo.svg';
import brand from 'enl-api/dummy/brand';
import link from 'enl-api/ui/link';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './landingStyle-jss';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Footer(props) {
  const menuList = [
    createData('feature', '#feature'),
    createData('showcase', '#showcase'),
    createData('technology', '#tech'),
    createData('contact', '#contact'),
  ];

  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.spaceContainer}>
          <div className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </div>
          <nav>
            <ul>
              { menuList.map(item => (
                <li key={item.id.toString()}>
                  <Button size="small" href={item.url}><FormattedMessage {...messages[item.name]} /></Button>
                </li>
              )) }
            </ul>
          </nav>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className={classes.container}>
          <p>
            &copy; 2019&nbsp;
            {brand.name}
            {' '}
            <FormattedMessage {...messages.copyright} />
            {' '}
          </p>
          <span>
            <IconButton color="primary" className={classes.button} href={link.twitter} target="_blank">
              <i className="ion-social-google" />
            </IconButton>
            <IconButton color="primary" className={classes.button} href={link.pinterest} target="_blank">
              <i className="ion-social-pinterest" />
            </IconButton>
            <IconButton color="primary" className={classes.button} href={link.github} target="_blank">
              <i className="ion-social-github" />
            </IconButton>
          </span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(injectIntl(Footer));
