import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import PlaceLoader from './PlaceLoader';
import messages from './messages';
import styles from './contact-jss';

const optionsOpt = [
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function ContactDetail(props) {
  const {
    classes,
    dataContact,
    itemSelected,
    edit,
    showMobileDetail,
    hideDetail,
    loading,
    intl,
    remove,
    favorite
  } = props;
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = event => setAnchorElOpt(event.currentTarget);
  const handleCloseOpt = () => setAnchorElOpt(null);
  const deleteContact = (item) => {
    remove(item);
    setAnchorElOpt(null);
  };
  const toggleFavorite = index => {
    const contact = dataContact.get(index);
    favorite(contact, { favorited: !contact.get('favorited') });
  };

  return (
    <main className={classNames(classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <section className={classes.cover}>
        <div className={classes.opt}>
          <IconButton className={classes.favorite} aria-label="Favorite" onClick={() => toggleFavorite(itemSelected)}>
            {dataContact.getIn([itemSelected, 'favorited']) ? (<Star />) : <StarBorder />}
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => edit(dataContact.get(itemSelected))}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={handleClickOpt}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorElOpt}
            open={Boolean(anchorElOpt)}
            onClose={handleCloseOpt}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            <MenuItem onClick={handleCloseOpt}>
              <FormattedMessage {...messages.block} />
            </MenuItem>
            <MenuItem onClick={() => deleteContact(dataContact.get(itemSelected))}>
              <FormattedMessage {...messages.delete} />
            </MenuItem>
            {optionsOpt.map(option => (
              <MenuItem key={option} onClick={handleCloseOpt}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <IconButton
          onClick={hideDetail}
          className={classes.navIconHide}
          aria-label="Back"
        >
          <ArrowBack />
        </IconButton>
        <Hidden xsDown>
          {loading
            ? (
              <div className={classes.placeLoaderCover}>
                <PlaceLoader loop={1} />
              </div>
            )
            : (
              <Fragment>
                <Avatar alt={dataContact.getIn([itemSelected, 'name'])} src={dataContact.getIn([itemSelected, 'avatar'])} className={classes.avatar} />
                <Typography className={classes.userName} variant="h6">
                  {dataContact.getIn([itemSelected, 'name'])}
                  <div>
                    <Typography variant="caption">
                      {dataContact.getIn([itemSelected, 'title'])}
                    </Typography>
                  </div>
                </Typography>
              </Fragment>
            )
          }
        </Hidden>
      </section>
      <div>
        <Hidden smUp>
          {loading
            ? (
              <div className={classes.placeLoaderCover}>
                <PlaceLoader loop={1} />
              </div>
            )
            : (
              <div className={classes.avatarTop}>
                <Avatar alt={dataContact.getIn([itemSelected, 'name'])} src={dataContact.getIn([itemSelected, 'avatar'])} className={classes.avatar} />
                <Typography variant="h5">
                  {dataContact.getIn([itemSelected, 'name'])}
                  <Typography>
                    {dataContact.getIn([itemSelected, 'title'])}
                  </Typography>
                </Typography>
              </div>
            )
          }
        </Hidden>
        <List className={classes.detailContact}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blueIcon}>
                <LocalPhone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'phone'])} secondary={intl.formatMessage(messages.phone)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.amberIcon}>
                <Smartphone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'secondaryPhone'])} secondary={intl.formatMessage(messages.secondary_phone)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.tealIcon}>
                <Email />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'personalEmail'])} secondary={intl.formatMessage(messages.personal_email)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.brownIcon}>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'companyEmail'])} secondary={intl.formatMessage(messages.company_email)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.redIcon}>
                <LocationOn />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'address'])} secondary={intl.formatMessage(messages.address)} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.purpleIcon}>
                <Language />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'website'])} secondary={intl.formatMessage(messages.website)} />
          </ListItem>
        </List>
      </div>
    </main>
  );
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  dataContact: PropTypes.object.isRequired,
  itemSelected: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

ContactDetail.defaultProps = {
  loading: false
};

export default withStyles(styles)(injectIntl(ContactDetail));
