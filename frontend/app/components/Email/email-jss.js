import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';
import { darken, fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;

const gradient = theme => ({
  backgroundColor: darken(theme.palette.background.default, 0.05),
  backgroundImage: `linear-gradient(to right, ${darken(theme.palette.background.default, 0.05)} 0%, ${fade(theme.palette.divider, 0.05)} 50%, ${fade(theme.palette.divider, 0.05)} 70%, ${darken(theme.palette.background.default, 0.05)} 100%)`,
  backgroundRepeat: 'no-repeat',
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 500,
    zIndex: 1,
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : theme.palette.primary.light,
    overflow: 'hidden',
    display: 'flex',
    marginBottom: theme.spacing(3),
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light
  },
  iconRed: {
    color: red[500],
    fill: `${red[500]} !important`
  },
  iconOrange: {
    color: orange[500],
    fill: `${orange[500]} !important`
  },
  iconBlue: {
    color: blue[500],
    fill: `${blue[500]} !important`
  },
  iconCyan: {
    color: cyan[500],
    fill: `${cyan[500]} !important`
  },
  appBar: {
    zIndex: 130,
    background: 'none',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    '& button': {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1)
    },
    '& > div': {
      padding: `0 ${theme.spacing(2)}px 0 ${theme.spacing(1)}px`,
    }
  },
  flex: {
    flex: 1,
  },
  nav: {
    '& > div': {
      borderRadius: 8,
      padding: theme.spacing(1),
      margin: `${theme.spacing(1)}px 0`
    }
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    color: theme.palette.text.secondary,
    borderRadius: 6,
    boxShadow: theme.shadows[2],
    background: theme.palette.background.paper,
    margin: `${theme.spacing(2)}px 0`
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 1000
  },
  sidebar: {
    zIndex: 120
  },
  search: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(9)}px`,
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
  drawerPaper: {
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      background: 'none',
    },
    background: theme.palette.background.paper,
    width: drawerWidth,
    border: 'none',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    minHeight: '100%',
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
  content: {
    flexGrow: 1,
    zIndex: 120,
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    position: 'relative',
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: {
    padding: '10px 0',
    '& button': {
      paddingTop: theme.spacing(1) - 1,
      paddingBottom: theme.spacing(1),
    }
  },
  title: {
    width: 205
  },
  divider: {
    margin: '0 20px 0 10px'
  },
  /* Email List */
  column: {
    flexBasis: '33.33%',
    overflow: 'hidden',
    paddingRight: '0 !important',
    paddingTop: 5,
    marginLeft: 20
  },
  secondaryHeading: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('xs')]: {
      whiteSpace: 'normal',
      paddingBottom: 10
    }
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(3)}px`
    },
    '& section': {
      width: '100%'
    }
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  avatar: {},
  fromHeading: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    '& $avatar': {
      width: 30,
      height: 30,
      marginRight: 20
    }
  },
  topAction: {
    display: 'flex',
    background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
    marginBottom: 20,
    alignItems: 'center',
    padding: '0 20px',
    borderRadius: theme.rounded.medium,
  },
  category: {
    fontSize: 12,
    textTransform: 'uppercase',
    display: 'flex',
    '& svg': {
      fontSize: 16,
      marginRight: 5
    }
  },
  markMenu: {
    '& svg': {
      marginRight: 10
    }
  },
  headMail: {
    flex: 1
  },
  field: {
    width: '100%',
    marginTop: 0,
    '& svg': {
      color: theme.palette.grey[400],
      fontSize: 18,
    }
  },
  hiddenDropzone: {
    display: 'none'
  },
  sendIcon: {
    marginLeft: 10
  },
  item: {},
  preview: {
    display: 'flex',
    marginBottom: 20,
    '& $item': {
      maxWidth: 160,
      marginBottom: 5,
      marginRight: 5
    }
  },
  emailSummary: {
    paddingLeft: 0,
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
    }
  },
  emailContent: {
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    },
  },
  starBtn: {
    marginRight: 10
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  editorWrap: {
    marginTop: theme.spacing(2)
  },
  textEditor: {
    background: theme.palette.background.paper,
    minHeight: 200,
    border: `1px solid ${theme.palette.divider}`,
    padding: '0 10px',
    cursor: 'text',
    color: theme.palette.text.primary
  },
  toolbarEditor: {
    background: theme.palette.background.default,
    border: 'none',
    '& > div': {
      background: theme.palette.background.paper,
      '& img': {
        filter: theme.palette.type === 'dark' ? 'invert(100%)' : 'invert(0%)'
      },
      '& a': {
        color: theme.palette.text.primary,
        '& > div': {
          borderTopColor: theme.palette.text.primary,
        }
      }
    }
  },
  buttonProgress: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  textPreview: {
    width: '100%',
    resize: 'none',
    height: 305,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0.5)
  },
  img: {},
  subtitle: {},
  placeLoader: {
    maxWidth: 920,
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: theme.spacing(1),
    },
    '& $img, $title, $subtitle': {
      ...gradient(theme),
    },
    '& $img': {
      width: 40,
      height: 40,
      marginBottom: theme.spacing(1),
      borderRadius: '50%',
      display: 'block',
      animation: '2s $placeHolderImg linear infinite',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      }
    },
    '& $title': {
      width: 300,
      height: 20,
      borderRadius: 8,
      display: 'block',
      animation: '2s $placeHolderTitle linear infinite',
    },
    '& $subtitle': {
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
      height: 10,
      borderRadius: 8,
      marginTop: theme.spacing(1),
      display: 'block',
      animation: '2s $placeHolderTitle linear infinite',
    },
  },
  '@keyframes placeHolderImg': {
    from: {
      backgroundPosition: '-50px 0'
    },
    to: {
      backgroundPosition: '40px 0'
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
