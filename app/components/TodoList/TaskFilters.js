import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './todo-jss';

function TaskFilters(props) {
  const { filter, classes, type } = props;
  return (
    <ul className={classes.filter}>
      <li>
        <Button size="small" onClick={() => filter('')} className={type === '' ? classes.active : ''}>
          <FormattedMessage {...messages.view_all} />
        </Button>
      </li>
      <li>/</li>
      <li>
        <Button size="small" onClick={() => filter('active')} className={type === 'active' ? classes.active : ''}>
          <FormattedMessage {...messages.active} />
        </Button>
      </li>
      <li>/</li>
      <li>
        <Button size="small" onClick={() => filter('completed')} className={type === 'completed' ? classes.active : ''}>
          <FormattedMessage {...messages.completed} />
        </Button>
      </li>
    </ul>
  );
}

TaskFilters.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.func.isRequired,
  type: PropTypes.string
};

TaskFilters.defaultProps = {
  type: ''
};

export default withStyles(styles)(injectIntl(TaskFilters));
