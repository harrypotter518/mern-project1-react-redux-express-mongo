import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeadlinesPicker from './HeadlinesPicker';
import styles from './editorStyles-jss';

function HeadlinesButton(props) {
  const { classes, onOverrideContent } = props;
  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  const onMouseDown = (event) => event.preventDefault();

  const onClick = useCallback(() => {
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    onOverrideContent(HeadlinesPicker);
  }, [onOverrideContent]);

  return (
    <Fragment>
      <div role="button" tabIndex={0} onMouseDown={onMouseDown} className={classes.headlineButtonWrapper}>
        <button type="button" onClick={onClick} className={classes.headlineButton}>
          H
        </button>
      </div>
    </Fragment>
  );
}

HeadlinesButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onOverrideContent: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeadlinesButton);
