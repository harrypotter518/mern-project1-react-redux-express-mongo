import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import link from 'enl-api/ui/link';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import logo from 'enl-images/logo.svg';
import brand from 'enl-api/dummy/brand';
import styles from '../Sidebar/sidebar-jss';

function SideNavMobile(props) {
  const {
    classes,
    menuList,
    closeDrawer
  } = props;

  const getMenus = menuArray => menuArray.map((item, index) => (
    <ListItem
      key={index.toString()}
      button
      className={classes.headCapital}
      component={AnchorLink}
      href={item.url}
      onClick={closeDrawer}
    >
      <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
    </ListItem>
  ));

  return (
    <div className={classes.drawerInnerMobile}>
      <div className={classNames(classes.menuContainer, classes.landingNav, classes.rounded)}>
        <div className={classes.brandBig}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
        <List className={classes.dense} component="nav">
          <Scrollspy items={['feature', 'showcase', 'testimonials', 'tech', 'pricing', 'contact']} currentClassName={classes.active}>
            {getMenus(menuList)}
          </Scrollspy>
        </List>
        <Divider />
        <List className={classes.dense} component="nav">
          <ListItem
            button
            className={classes.headCapital}
            component={Link}
            to={link.register}
          >
            <ListItemText classes={{ primary: classes.highlightLink }} variant="inset" primary="Register" />
          </ListItem>
          <ListItem
            button
            className={classes.headCapital}
            component={Link}
            to={link.login}
          >
            <ListItemText classes={{ primary: classes.primary }} variant="inset" primary="Sign In" />
          </ListItem>
        </List>
        <Typography variant="caption" className={classes.copyright}>
          &copy; 2019 Enlite Designs
          <br />
          All Right Reserved
        </Typography>
      </div>
    </div>
  );
}

SideNavMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideNavMobile);
