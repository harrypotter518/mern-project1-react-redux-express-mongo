import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { TreeTable } from 'enl-components';
import openAction from '../reducers/treeTbActions';
import data from './dataTreeTable.js';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
});


function TreeTableDemoIcon(props) {
  const { classes } = props;

  // Redux State
  const branch = 'treeTablePM';
  const treeOpen = useSelector(state => state.getIn([branch, 'treeOpen']));
  const arrowMore = useSelector(state => state.getIn([branch, 'arrowMore']));

  // Dispatcher
  const toggleTree = useDispatch();

  return (
    <div>
      <div className={classes.root}>
        <TreeTable
          treeOpen={treeOpen}
          toggleTree={(id, payload) => toggleTree(openAction(id, payload, branch))}
          arrowMore={arrowMore}
          dataTable={data}
          branch={branch}
          expandIcon="ion-ios-plus-outline"
          collapseIcon="ion-ios-minus-outline"
        />
      </div>
    </div>
  );
}

TreeTableDemoIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreeTableDemoIcon);
