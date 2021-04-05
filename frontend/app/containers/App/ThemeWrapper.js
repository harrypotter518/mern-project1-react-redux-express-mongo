import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import {
  withTheme, withStyles,
  createMuiTheme, MuiThemeProvider
} from '@material-ui/core/styles';
import 'enl-styles/vendors/react-loading-bar/index.css';
import {
  changeThemeAction,
  changeModeAction,
  changeLayoutAction,
  changeDirectionAction
} from 'enl-redux/actions/uiActions';
import { TemplateSettings } from 'enl-components';
import applicationTheme from '../../styles/theme/applicationTheme';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  }
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Export context for themeing mode
export const AppContext = React.createContext();

function ThemeWrapper(props) {
  const {
    changeDirection,
    changeLayout,
    changeMode,
    changeTheme,
    classes,
    children,
    color,
    direction,
    layout,
    mode,
    palette,
  } = props;
  const [pageLoaded, setPageLoaded] = useState(true);
  const [newPalette, setNewPalette] = useState(undefined);
  const [theme, setTheme] = useState(createMuiTheme(applicationTheme(color, mode, direction)));

  const onProgressShow = () => {
    setPageLoaded(true);
  };

  const onProgressHide = () => {
    setPageLoaded(false);
  };

  const playProgress = () => {
    onProgressShow();
    setTimeout(() => {
      onProgressHide();
    }, 500);
  };

  const handleChangeTheme = event => {
    setTheme(createMuiTheme(applicationTheme(event.target.value, mode, direction)));
    changeTheme(event.target.value);
  };

  const handleChangeMode = newMode => {
    setTheme(createMuiTheme(applicationTheme(color, newMode, direction)));
    changeMode(newMode);
  };

  const handleChangeLayout = value => {
    changeLayout(value);
  };

  const handleChangeDirection = dirVal => {
    setTheme(createMuiTheme(applicationTheme(color, mode, dirVal)));
    changeDirection(dirVal);

    // Set HTML root direction attribute
    document.dir = dirVal;
  };

  useEffect(() => {
    playProgress();
    setNewPalette(palette);

    return () => {
      onProgressShow();
    };
  }, []);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.pageLoader}>
            <Loading
              show={pageLoaded}
              color={theme.palette.primary.main}
              showSpinner={false}
            />
          </div>
          <TemplateSettings
            palette={newPalette}
            selectedValue={color}
            mode={mode}
            layout={layout}
            direction={direction}
            changeTheme={handleChangeTheme}
            changeMode={handleChangeMode}
            changeLayout={handleChangeLayout}
            changeDirection={handleChangeDirection}
          />
          <AppContext.Provider value={handleChangeMode}>
            {children}
          </AppContext.Provider>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  palette: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
  mode: state.getIn([reducer, 'type']),
  layout: state.getIn([reducer, 'layout']),
  direction: state.getIn([reducer, 'direction']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme((withStyles(styles)(ThemeWrapperMapped)));
