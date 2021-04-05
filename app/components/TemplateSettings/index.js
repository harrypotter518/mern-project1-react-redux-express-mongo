import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Palette from '@material-ui/icons/Palette';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {
  LeftSidebarThumb,
  TopNavigationThumb,
  MegaMenuThumb,
  BigSidebarThumb
} from './templatePreview';
import ThemeThumb from './ThemeThumbs';
import LayoutThumb from './LayoutThumb';
import styles from './settings-jss';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TemplateSettings(props) {
  const {
    classes,
    palette,
    mode,
    direction,
    selectedValue,
    layout,
    changeDirection,
    changeLayout,
    changeMode,
    changeTheme,
  } = props;
  const [type, setType] = useState(0);
  const [show, setShow] = useState(false);
  const [, setThemeMode] = useState('light');
  const [, setLayoutDirectionMode] = useState('ltr');

  const handleChangeIndexTab = index => {
    setType(index);
  };

  // Theme Mode Handle
  const handleSwitchMode = (name) => event => {
    changeMode(event.target.checked ? 'dark' : 'light');
    setThemeMode(name === event.target.checked ? 'dark' : 'light');
  };

  // Layout Handle
  const handleChangeLayout = event => {
    changeLayout(event.target.value);
  };

  const handeSwitchDirection = name => event => {
    changeDirection(event.target.checked ? 'rtl' : 'ltr');
    setLayoutDirectionMode(name === event.target.checked ? 'rtl' : 'ltr');
  };

  // Show Hide Panel
  const handleTogglePanel = () => {
    setShow(!show);
  };

  const getItem = dataArray => dataArray.map((item, index) => (
    <FormControlLabel
      key={index.toString()}
      className={classes.themeField}
      control={(
        <ThemeThumb
          value={item.value}
          selectedValue={selectedValue}
          handleChange={changeTheme}
          name={item.name}
        />
      )}
    />
  ));

  return (
    <aside
      className={
        classNames(
          classes.settingSidebar,
          classes.rightSidebar,
          show && classes.expanded
        )
      }
    >
      <div className={classes.toggleButton}>
        <Fab
          size="small"
          color="primary"
          aria-label="toggle"
          className={classes.button}
          onClick={handleTogglePanel}
          classes={{
            root: classes.buttonDrawer,
          }}
        >
          {show ? <Close /> : <Palette />}
        </Fab>
      </div>
      <Slide direction={direction === 'rtl' ? 'right' : 'left'} in={show} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.tab} color="default">
            <div className={classes.header}>
              <IconButton
                onClick={handleTogglePanel}
                className={classes.backButton}
                aria-label="Baack"
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="button">Template Settings</Typography>
            </div>
          </AppBar>
          <SwipeableViews
            index={type}
            onChangeIndex={handleChangeIndexTab}
          >
            <section className={classes.settingWraper} dir={direction}>
              <Paper className={classes.optBlock}>
                <FormControl component="fieldset" className={classes.themeGroup}>
                  <FormLabel component="legend" className={classes.title}>
                    <Icon className={classes.icon}>color_lens</Icon>
                    Theme Color
                  </FormLabel>
                  { palette !== undefined && getItem(palette) }
                </FormControl>
              </Paper>
              <Paper className={classes.optBlock}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={classes.title}>
                    <Icon className={classes.icon}>chrome_reader_mode</Icon>
                    Navigation Layout
                  </FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.layoutField}
                      control={(
                        <LayoutThumb
                          value="sidebar"
                          selectedLayout={layout}
                          handleChange={handleChangeLayout}
                          name="Sidebar"
                          preview={<LeftSidebarThumb />}
                        />
                      )}
                    />
                    <FormControlLabel
                      className={classes.layoutField}
                      control={(
                        <LayoutThumb
                          value="big-sidebar"
                          selectedLayout={layout}
                          handleChange={handleChangeLayout}
                          name="Big Sidebar"
                          preview={<BigSidebarThumb />}
                        />
                      )}
                    />
                    <FormControlLabel
                      className={classes.layoutField}
                      control={(
                        <LayoutThumb
                          value="top-navigation"
                          selectedLayout={layout}
                          handleChange={handleChangeLayout}
                          name="Top Navigation"
                          preview={<TopNavigationThumb />}
                        />
                      )}
                    />
                    <FormControlLabel
                      className={classes.layoutField}
                      control={(
                        <LayoutThumb
                          value="mega-menu"
                          selectedLayout={layout}
                          handleChange={handleChangeLayout}
                          name="Mega Menu"
                          preview={<MegaMenuThumb />}
                        />
                      )}
                    />
                  </FormGroup>
                </FormControl>
              </Paper>
              <Paper className={classes.optBlock}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={classes.title}>
                    <Icon className={classes.icon}>invert_colors</Icon>
                    Theme Mode
                  </FormLabel>
                  <FormGroup className={classes.themeMode}>
                    <span>Light Mode</span>
                    <FormControlLabel
                      className={classes.switch}
                      control={(
                        <Switch
                          checked={mode === 'dark'}
                          onChange={handleSwitchMode('dark')}
                          value="dark"
                          color="default"
                          classes={{
                            track: classes.themeCheckBar,
                            thumb: classes.themeCheck,
                          }}
                        />
                      )}
                    />
                    <span>Dark Mode</span>
                  </FormGroup>
                </FormControl>
              </Paper>
              <Paper className={classes.optBlock}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={classes.title}>
                    <Icon className={classes.icon}>
                      {direction === 'rtl' ? 'format_textdirection_r_to_l' : 'format_textdirection_l_to_r'}
                    </Icon>
                    Layout Direction
                  </FormLabel>
                  <FormGroup className={classes.themeMode}>
                    <span>LTR</span>
                    <FormControlLabel
                      className={classes.switch}
                      control={(
                        <Switch
                          checked={direction === 'rtl'}
                          onChange={handeSwitchDirection('rtl')}
                          value="rtl"
                          color="default"
                          classes={{
                            track: classes.themeCheckBar,
                            thumb: classes.themeCheck,
                          }}
                        />
                      )}
                    />
                    <span>RTL</span>
                  </FormGroup>
                </FormControl>
              </Paper>
            </section>
            {/* END */}
          </SwipeableViews>
        </div>
      </Slide>
    </aside>
  );
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  palette: PropTypes.object,
  mode: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
