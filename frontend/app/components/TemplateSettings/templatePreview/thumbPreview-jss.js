import { darken, lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  thumb: {
    overflow: 'hidden',
    marginBottom: theme.spacing(1)
  },
  active: {
    display: 'block'
  },
  appPreview: {
    width: '100%',
    height: 100,
    position: 'relative',
    display: 'flex',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.8) : lighten(theme.palette.primary.light, 0.75),
    '& header': {
      width: '100%',
      height: 50,
      position: 'absolute',
      top: 0,
      left: 0
    },
    '& nav': {
      marginLeft: 5,
      '& li': {
        margin: '4px 2px 12px 0',
        '&$active': {
          '& i': {
            background: theme.palette.secondary.main
          },
        },
        '& i': {
          borderRadius: '50%',
          width: 8,
          height: 8,
          marginTop: 12,
          display: 'block',
          background: theme.palette.text.hint,
        },
      }
    },
    '& aside': {
      width: '20%',
      marginTop: 0,
      position: 'relative',
      paddingTop: 12,
      paddingLeft: theme.spacing(0.5),
      '& li': {
        '&$active': {
          '& i': {
            background: theme.palette.secondary.main
          },
          '& p': {
            background: theme.palette.secondary.main
          }
        },
        margin: 2,
        display: 'flex',
        '& i': {
          borderRadius: '50%',
          width: 9,
          height: 2,
          marginRight: 5,
          background: theme.palette.text.hint,
        },
        '& p': {
          width: 40,
          height: 2,
          background: theme.palette.grey[400],
        },
      }
    },
  },
  megaMenu: {},
  topNav: {
    background: theme.palette.background.paper,
    lineHeight: '13px',
    boxShadow: theme.shadows[4],
    '& li': {
      display: 'inline-block',
      margin: theme.spacing(1),
      position: 'relative',
      background: theme.palette.grey[500],
      width: 16,
      height: 2,
      '&$active': {
        '& span': {
          background: theme.palette.secondary.main
        }
      },
      '& > ul': {
        boxShadow: theme.shadows[4],
        position: 'absolute',
        background: theme.palette.background.paper,
        top: -5,
        left: 0,
        padding: theme.spacing(0.25),
        zIndex: 10,
        marginTop: 14,
        borderRadius: 4,
        '& li': {
          display: 'block',
          padding: 2,
          '&$active': {
            background: theme.palette.secondary.main
          }
        }
      },
      '& $megaMenu': {
        boxShadow: theme.shadows[4],
        position: 'absolute',
        background: theme.palette.background.paper,
        top: '100%',
        left: -10,
        zIndex: 10,
        marginTop: 14,
        borderRadius: 4,
        display: 'flex',
        width: 150,
        textAlign: 'left',
        padding: '10px 5px 8px',
        '& aside': {
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `2px solid ${theme.palette.secondary.main}`
        },
        '& section': {
          marginLeft: 10,
          '& $title': {
            background: theme.palette.secondary.main,
            width: 20,
            height: 2,
          },
        }
      }
    }
  },
  title: {},
  ctn1: {},
  ctn2: {},
  previewWrap: {
    flex: 1,
    position: 'relative'
  },
  full: {},
  content: {
    padding: 10,
    zIndex: 10,
    margin: '5px 8px 10px',
    height: 170,
    borderRadius: 3,
    '& $title': {
      background: theme.palette.primary.main,
      height: 5,
      width: '60%',
      marginBottom: 10,
      borderRadius: theme.spacing(1),
    },
    '& $ctn1': {
      margin: '5px 5px 10px 0',
      width: '100%',
      height: 30,
      background: theme.palette.secondary.main,
      display: 'block',
      borderRadius: 3,
    },
    '& $ctn2': {
      width: '39%',
      height: 20,
      background: theme.palette.secondary.light,
      display: 'inline-block',
      borderRadius: 3,
      margin: '2%'
    },
    '&$full': {
      height: 140,
      marginTop: theme.spacing(3)
    }
  }
});

export default styles;
