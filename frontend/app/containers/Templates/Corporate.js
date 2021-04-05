import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HeaderLanding, Footer } from 'enl-components';
import styles from './appStyles-jss';

function Corporate(props) {
  const { classes, children } = props;
  const [transform, setTransform] = useState(0);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    setTransform(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.appFrameLanding} id="mainContent">
      <HeaderLanding turnDarker={transform > 30} />
      {children}
      <Footer />
    </div>
  );
}

Corporate.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(Corporate));
