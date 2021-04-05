import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { injectIntl, intlShape } from 'react-intl';
import PapperBlock from '../PapperBlock/PapperBlock';
import messages from './messages';
import styles from './widget-jss';

const dataTimeline = [
  {
    time: '11:20',
    title: 'Updated Product',
    desc: 'Quisque a consequat ante, at volutpat enim.'
  },
  {
    time: 'Yesteray',
    title: 'You liked James products',
    desc: 'Aenean sit amet magna vel magna fringilla fermentum.'
  },
  {
    time: 'Yesterday',
    title: 'James just like your product',
    desc: 'Nam posuere accumsan porta.'
  },
  {
    time: '11 Oct 2018',
    title: 'Jenna commented on your product',
    desc: 'Curabitur egestas consequat lorem.'
  },
  {
    time: 'Last week',
    title: 'Jihan Doe just like your product',
    desc: 'Vestibulum nec mi suscipit, dapibus purus a'
  },
  {
    time: 'Last week',
    title: 'James Doe just like your product',
    desc: 'VCurabitur egestas consequat lorem.'
  },
];

function TimelineWidget(props) {
  const { classes, intl } = props;
  return (
    <PapperBlock whiteBg noMargin title={intl.formatMessage(messages.activity_title)} icon="av_timer" desc="">
      <div className={classes.activityWrap}>
        <List>
          {dataTimeline.map((item, index) => (
            <ListItem key={index.toString()} className={classes.activityList}>
              <ListItemIcon>
                <div className={classes.timeDot}>
                  <time>{item.time}</time>
                  <span />
                </div>
              </ListItemIcon>
              <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
            </ListItem>
          ))}
        </List>
      </div>
    </PapperBlock>
  );
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TimelineWidget));
