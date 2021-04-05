import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

function TaskWidget(props) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const { classes, intl } = props;
  return (
    <PapperBlock
      title={intl.formatMessage(messages.task_title)}
      icon="playlist_add_check"
      noMargin
      whiteBg
      colorMode="dark"
      desc={intl.formatMessage(messages.task_desc)}
      className={classes.root}
    >
      <List className={classes.taskList}>
        {[0, 1, 2, 3, 4, 5, 6].map(value => (
          <Fragment key={value}>
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
              className={
                classNames(
                  classes.listItem,
                  checked.indexOf(value) !== -1 ? classes.done : ''
                )
              }
            >
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`Task item ${value + 1}`} secondary={`Task description ${value + 1}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </PapperBlock>
  );
}

TaskWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TaskWidget));
