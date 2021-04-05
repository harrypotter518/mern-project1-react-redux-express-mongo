import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AcUnit from '@material-ui/icons/AcUnit';
import Adb from '@material-ui/icons/Adb';
import AllInclusive from '@material-ui/icons/AllInclusive';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import imgData from 'enl-api/images/imgData';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ProgressWidget from '../Widget/ProgressWidget';
import ProfileWidget from '../Widget/ProfileWidget';
import Quote from '../Quote/Quote';
import TimelineWidget from '../Widget/TimelineWidget';
import MapWidget from '../Widget/MapWidget';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './profile-jss';

function About(props) {
  const { classes, intl } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      direction="row"
      spacing={3}
    >
      <Grid item md={6} xs={12}>
        {/* About Me */}
        <ProfileWidget />
        <Divider className={classes.divider} />
        <TimelineWidget />
        <Divider className={classes.divider} />
        <PapperBlock title={intl.formatMessage(messages.quotes)} icon="format_quote" whiteBg noMargin desc="">
          <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
        </PapperBlock>
        <Divider className={classes.divider} />
        <MapWidget />
        {/* ----------------------------------------------------------------------*/}
      </Grid>
      <Grid item md={6} xs={12}>
        {/* Profile Progress */}
        <div className={classes.progressRoot}>
          <ProgressWidget />
        </div>
        {/* ----------------------------------------------------------------------*/}
        {/* My Albums */}
        <PapperBlock title={intl.formatMessage(messages.my_album) + ' (6)'} icon="collections" whiteBg desc="">
          <div className={classes.albumRoot}>
            <GridList cellHeight={180} className={classes.gridList}>
              {
                imgData.map((tile, index) => {
                  if (index >= 4) {
                    return false;
                  }
                  return (
                    <GridListTile key={index.toString()}>
                      <img src={tile.img} className={classes.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={(
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        )}
                        actionIcon={(
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        )}
                      />
                    </GridListTile>
                  );
                })
              }
            </GridList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              <FormattedMessage {...messages.see_all} />
            </Button>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        {/* My Connection Me */}
        <PapperBlock title={intl.formatMessage(messages.my_connection) + ' (29)'} icon="supervisor_account" whiteBg desc="">
          <List dense className={classes.profileList}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>H</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Harry Wells" secondary="2 Mutual Connection" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>J</Avatar>
              </ListItemAvatar>
              <ListItemText primary="John DOe" secondary="8 Mutual Connection" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>V</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Victor Wanggai" secondary="12 Mutual Connection" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Baron Phoenix" secondary="10 Mutual Connection" />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              <FormattedMessage {...messages.see_all} />
            </Button>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        {/* My Interests */}
        <PapperBlock title={intl.formatMessage(messages.my_interests)} whiteBg desc="">
          <Grid container className={classes.colList}>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                    <AcUnit />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Snow" secondary="100 Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                    <Adb />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Android" secondary="120 Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                    <AllInclusive />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="All Inclusive" secondary="999+ Connected" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                    <AssistantPhoto />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="My Country" secondary="99+ Connected" />
              </ListItem>
            </Grid>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
      </Grid>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(About));
