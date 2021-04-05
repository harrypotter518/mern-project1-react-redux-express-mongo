import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';
import brown from '@material-ui/core/colors/brown';
import red from '@material-ui/core/colors/red';
import { darken, fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 300;
const drawerHeight = 540;

const gradient = theme => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper} 0%, ${fade(theme.palette.divider, 0.03)} 50%, ${fade(theme.palette.divider, 0.03)} 70%, ${theme.palette.background.paper} 100%)`,
  backgroundRepeat: 'no-repeat',
});

const styles = theme => ({
  higher: {},
  padding: {},
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : theme.palette.primary.light,
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    marginBottom: theme.spacing(3),
    '&$padding': {
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 100
  },
  fixHeight: {},
  appBar: {
    height: 'auto',
    background: theme.palette.type === 'dark' ? fade(theme.palette.grey[800], 0.75) : fade(theme.palette.background.paper, 0.95),
    justifyContent: 'center',
    '& $avatar': {
      width: 80,
      height: 80,
      marginRight: 30,
    },
    '& h2': {
      flex: 1,
      color: theme.palette.text.primary,
      '& span': {
        color: theme.palette.text.secondary
      }
    },
  },
  detailContact: {
    background: theme.palette.background.paper,
    borderRadius: 8,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1),
    }
  },
  online: {
    background: '#CDDC39'
  },
  bussy: {
    background: '#EF5350'
  },
  idle: {
    background: '#FFC107'
  },
  offline: {
    background: '#9E9E9E'
  },
  statusLine: {},
  status: {
    padding: '2px 6px',
    '& $statusLine': {
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: 2,
      width: 10,
      height: 10,
      border: `1px solid ${theme.palette.common.white}`
    }
  },
  appBarShift: {
    marginLeft: 0,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('md')]: {
      zIndex: 1300
    }
  },
  total: {
    textAlign: 'center',
    fontSize: 11,
    color: theme.palette.text.disabled,
    textTransform: 'uppercase'
  },
  drawerPaper: {
    background: 'none',
    position: 'relative',
    paddingBottom: 65,
    border: 'none',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    height: drawerHeight + 200,
    [theme.breakpoints.up('sm')]: {
      height: drawerHeight,
      width: drawerWidth,
    },
  },
  clippedRight: {},
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(2)}px 0`,
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create(['left', 'opacity'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down('xs')]: {
      left: '100%',
      top: 0,
      opacity: 0,
      position: 'absolute',
      zIndex: 1200,
      width: '100%',
      overflow: 'auto',
      height: '100%'
    }
  },
  detailPopup: {
    [theme.breakpoints.down('xs')]: {
      left: 0,
      opacity: 1,
      zIndex: 2001,
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : theme.palette.primary.light
    }
  },
  title: {
    display: 'flex',
    flex: 1,
    '& svg': {
      marginRight: 5
    }
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  searchWrapper: {
    flex: 1,
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    borderRadius: 8,
    display: 'flex',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(0.5),
    height: theme.spacing(5),
  },
  search: {
    width: 'auto',
    height: '100%',
    top: 0,
    left: 20,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px ${theme.spacing(0.5)}px ${theme.spacing(6)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  bottomFilter: {
    position: 'absolute',
    width: '100%',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : theme.palette.primary.light,
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    zIndex: 2000,
    bottom: 0,
    left: 0,
  },
  avatar: {},
  userName: {
    textAlign: 'left',
    lineHeight: '24px'
  },
  cover: {
    padding: '20px 8px',
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& $avatar': {
      width: 60,
      height: 60,
      margin: `0 ${theme.spacing(2)}px`,
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
        marginRight: 20
      }
    },
  },
  opt: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favorite: {
    color: amber[500]
  },
  redIcon: {
    background: red[50],
    '& svg': {
      color: red[500]
    }
  },
  brownIcon: {
    background: brown[50],
    '& svg': {
      color: brown[500]
    }
  },
  tealIcon: {
    background: teal[50],
    '& svg': {
      color: teal[500]
    }
  },
  blueIcon: {
    background: blue[50],
    '& svg': {
      color: blue[500]
    }
  },
  amberIcon: {
    background: amber[50],
    '& svg': {
      color: amber[500]
    }
  },
  purpleIcon: {
    background: purple[50],
    '& svg': {
      color: purple[500]
    }
  },
  field: {
    width: '100%',
    marginBottom: theme.spacing(1),
    '& svg': {
      color: theme.palette.grey[400],
      fontSize: 18,
    }
  },
  uploadAvatar: {
    width: '100%',
    height: '100%',
    background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
  },
  contactList: {
    '& > div': {
      borderRadius: 8,
      padding: theme.spacing(1),
      margin: `${theme.spacing(1)}px 0`
    }
  },
  selected: {
    background: fade(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper, 0.8),
    '& span': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    '& svg': {
      fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    '&:focus, &:hover': {
      background: fade(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper, 0.8),
    }
  },
  hiddenDropzone: {
    display: 'none'
  },
  avatarWrap: {
    width: 100,
    height: 100,
    margin: '10px auto 30px',
    position: 'relative'
  },
  avatarTop: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing(3),
    '& $avatar': {
      width: 100,
      height: 100,
      margin: '0 auto'
    }
  },
  buttonUpload: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  navIconHide: {
    marginRight: theme.spacing(1),
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  img: {},
  subtitle: {},
  textContent: {},
  placeLoader: {
    maxWidth: 920,
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& $img, $title, $subtitle': {
      ...gradient(theme),
    },
    '& $img': {
      width: 40,
      height: 40,
      borderRadius: '50%',
      display: 'block',
      animation: '2s $placeHolderImg linear infinite',
    },
    '& $textContent': {
      flex: 1,
      padding: `0 ${theme.spacing(2)}px`
    },
    '& $title': {
      width: '80%',
      height: 20,
      borderRadius: 8,
      display: 'block',
      animation: '2s $placeHolderTitle linear infinite',
    },
    '& $subtitle': {
      width: '50%',
      height: 10,
      borderRadius: 8,
      marginTop: theme.spacing(1),
      display: 'block',
      animation: '2s placeHolderTitle linear infinite',
    },
  },
  buttonProgress: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  placeLoaderCover: {
    width: 300,
    margin: `${theme.spacing(1) * -4}px 0`,
    '& figure': {
      width: '60px !important',
      height: '60px !important',
    }
  },
  '@keyframes placeHolderImg': {
    from: {
      backgroundPosition: '-60px 0'
    },
    to: {
      backgroundPosition: '60px 0'
    }
  },
  '@keyframes placeHolderTitle': {
    from: {
      backgroundPosition: '-600px 0'
    },
    to: {
      backgroundPosition: '600px 0'
    }
  }
});

export default styles;
