import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from 'draft-js-buttons';

function HeadlinesPicker(props) {
  const { onOverrideContent } = props;

  const onWindowClick = useCallback(() => {
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    onOverrideContent(undefined);
  }, [onOverrideContent]);

  useEffect(() => {
    setTimeout(() => { window.addEventListener('click', onWindowClick); });
    return () => {
      window.removeEventListener('click', onWindowClick);
    };
  }, []);

  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
  return (
    <div>
      {buttons.map((Button, i) => // eslint-disable-next-line
        <Button key={i} {...props} />
      )}
    </div>
  );
}

HeadlinesPicker.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};

export default HeadlinesPicker;
