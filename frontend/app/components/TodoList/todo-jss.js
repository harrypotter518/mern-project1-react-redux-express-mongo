import { darken, fade } from '@material-ui/core/styles/colorManipulator';
import green from '@material-ui/core/colors/green';

const gradient = theme => ({
  backgroundColor: darken(theme.palette.background.default, 0.05),
  backgroundImage: `linear-gradient(to right, ${darken(theme.palette.background.default, 0.05)} 0%, ${fade(theme.palette.divider, 0.05)} 50%, ${fade(theme.palette.divider, 0.05)} 70%, ${darken(theme.palette.background.default, 0.05)} 100%)`,
  backgroundRepeat: 'no-repeat',
});

const styles = theme => ({
  root: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : theme.palette.primary.light,
  },
  addTask: {
    display: 'block',
    marginBottom: 10,
    '& > div': {
      width: '100%',
      border: 'none',
      borderRadius: 6,
      boxShadow: theme.shadows[2],
      background: theme.palette.background.paper,
      '&:after': {
        borderRadius: 6
      }
    },
    '& input': {
      fontSize: 28,
      color: theme.palette.text.primary,
      padding: theme.spacing(2),
      borderRadius: 2,
      [theme.breakpoints.down('md')]: {
        fontSize: 18,
      }
    },
    '& p': {
      fontSize: 11,
      color: theme.palette.text.secondary,
      padding: 4,
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right',
      },
    }
  },
  hint: {
    opacity: 0.6,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  active: {},
  filter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.hint,
    '& button': {
    },
    '& li': {
      display: 'inline-block',
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      '& button': {
        color: theme.palette.text.hint,
        '&$active': {
          color: theme.palette.secondary.main,
        }
      }
    }
  },
  text: {
    flex: 1,
  },
  taskList: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(1),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    background: theme.palette.background.paper,
    '& input': {
      border: `1px dashed ${theme.palette.primary.main}`,
      borderRadius: 4,
      fontSize: 18,
      width: 'calc(100% - 56px)',
      padding: theme.spacing(1)
    }
  },
  completed: {},
  taskTitle: {
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    '&$completed': {
      color: fade(theme.palette.text.primary, 0.3),
      '&:after': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderTop: `2px solid ${green[800]}`,
        width: '100%',
        height: '46%',
        content: '""'
      }
    }
  },
  button: {
    margin: `0 ${theme.spacing(1)}px`,
    padding: theme.spacing(1),
    background: darken(theme.palette.background.default, 0.05),
    '&$completed': {
      color: green[800],
      background: green[100],
    }
  },
  hide: {
    display: 'none'
  },
  img: {},
  title: {},
  placeLoader: {
    maxWidth: 920,
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& $img, $title': {
      ...gradient(theme),
    },
    '& $img': {
      width: 40,
      height: 40,
      borderRadius: '50%',
      display: 'block',
      animation: '2s $placeHolderImg linear infinite',
    },
    '& $title': {
      width: 700,
      height: 20,
      borderRadius: 8,
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
