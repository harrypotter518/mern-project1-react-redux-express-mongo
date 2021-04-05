import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { TreeTable } from 'enl-components';
import styles from 'enl-components/Tables/tableStyle-jss';
import openAction from '../reducers/treeTbActions';
import data from './dataTreeTable.js';

function TreeTableDemo(props) {
  // Redux State
  const branch = 'treeTableArrow';
  const treeOpen = useSelector(state => state.getIn([branch, 'treeOpen']));
  const arrowMore = useSelector(state => state.getIn([branch, 'arrowMore']));

  // Dispatcher
  const toggleTree = useDispatch();

  const { classes } = props;
  return (
    <div className={classes.rootTable}>
      <TreeTable
        treeOpen={treeOpen}
        toggleTree={(id, payload) => toggleTree(openAction(id, payload, branch))}
        arrowMore={arrowMore}
        dataTable={data}
        branch={branch}
      />
    </div>
  );
}

TreeTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreeTableDemo);
