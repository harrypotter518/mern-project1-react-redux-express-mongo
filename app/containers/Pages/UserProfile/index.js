import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import dummy from 'enl-api/dummy/dummyContents';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import { withStyles } from '@material-ui/core/styles';
import {
  Cover,
  About,
  Connection,
  Albums
} from 'enl-components';
import styles from 'enl-components/Profile/cover-jss';
import { injectIntl, intlShape } from 'react-intl';
import messages from 'enl-components/Profile/messages';

function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function UserProfile(props) {
  const { intl, classes } = props;
  const title = brand.name + ' - Profile';
  const description = brand.desc;
  const [value, setValue] = useState(0);

  const handleChange = (event, val) => {
    setValue(val);
  };

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
      <Cover
        coverImg=""
        avatar={dummy.user.avatar}
        name={dummy.user.name}
        desc="Consectetur adipiscing elit."
      />
      <AppBar position="static" className={classes.profileTab}>
        <Hidden mdUp>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} />
            <Tab icon={<SupervisorAccount />} />
            <Tab icon={<Favorite />} />
            <Tab icon={<PhotoLibrary />} />
          </Tabs>
        </Hidden>
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} label={intl.formatMessage(messages.about)} />
            <Tab icon={<SupervisorAccount />} label={'20 ' + intl.formatMessage(messages.connections)} />
            <Tab icon={<PhotoLibrary />} label={'4 ' + intl.formatMessage(messages.albums)} />
          </Tabs>
        </Hidden>
      </AppBar>
      {value === 0 && <TabContainer><About /></TabContainer>}
      {value === 1 && <TabContainer><Connection /></TabContainer>}
      {value === 2 && <TabContainer><Albums /></TabContainer>}
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(UserProfile));
