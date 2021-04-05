import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import controlScreen from 'enl-images/screen/control_screen.png';

const sectionSpace = 120;
const sectionSpaceMobile = 80;
const screenPreview = {
  position: 'absolute',
  bottom: 0,
  zIndex: 1,
  transformStyle: 'preserve-3d'
};

const styles = theme => ({
  landingWrap: {
    backgroundImage:
      `linear-gradient(${theme.palette.background.paper} 0%, ${theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.light} 80%);`,
  },
  container: {
    padding: `0 ${theme.spacing(2)}px`,
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 1140,
      padding: 0,
    },
  },
  spaceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& nav': {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    },
  },
  button: {
    marginRight: theme.spacing(1),
    padding: `6px ${theme.spacing(2)}px`
  },
  mono: {},
  color: {},
  btnArea: {},
  active: {},
  lang: {
    display: 'inline-block',
    position: 'relative',
    top: -6,
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRight: `1px ${theme.palette.divider} solid`,
  },
  header: {
    position: 'fixed',
    background: 'none',
    height: 56,
    justifyContent: 'center',
    '& nav': {
      '& li': {
        display: 'inline-block',
        position: 'relative',
        margin: `0 ${theme.spacing(1)}px`,
        '&[class*="active"]': {
          '& a': {
            color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: 4,
            position: 'absolute',
            top: -10,
            borderRadius: '0 0 8px 8px',
            background: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
          },
        },
        '& a': {
          color: theme.palette.text.secondary
        }
      }
    },
  },
  menuButton: {
    position: 'absolute',
    left: 8,
    top: 4
  },
  darker: {
    backgroundAttachment: 'fixed',
    boxShadow: theme.shadows[3],
    background: theme.palette.background.default
  },
  nomargin: {},
  title: {
    marginBottom: theme.spacing(8),
    paddingBottom: theme.spacing(3),
    display: 'block',
    textTransform: 'uppercase',
    position: 'relative',
    color: theme.palette.text.primary,
    '& h2': {
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: 26
      }
    },
    '&$nomargin': {
      marginBottom: 0
    },
    '&:after': {
      background: theme.palette.secondary.main,
      position: 'absolute',
      top: -30,
      content: '""',
      width: 40,
      height: 6,
      borderRadius: 6,
    },
    '&$left': {
      '&:after': {
        left: 0,
      }
    },
    '&$center': {
      '&:after': {
        left: 'calc(50% - 20px)',
      }
    },
    '&$right': {
      '&:after': {
        right: 0,
      }
    },
    '& p': {
      fontSize: 18,
      textTransform: 'none'
    }
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  brand: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 500,
    marginRight: theme.spacing(3),
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '& img': {
      height: 30,
      marginRight: 10
    },
  },
  fit: {},
  out: {},
  deco: {
    fill: 'transparent !important',
    stroke: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    position: 'absolute',
    strokeWidth: 2,
    opacity: 0.2,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decoLeft: {
    top: 170,
    left: -100,
    transform: 'scale(1.5)'
  },
  decoRight: {
    top: 480,
    right: 0,
    transform: 'scale(2.5)'
  },
  decoBottom: {
    top: 410,
    left: 40,
    transform: 'scale(2)'
  },
  banner: {
    zIndex: 1,
    position: 'relative',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    height: 640,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(7),
    },
    [theme.breakpoints.down('sm')]: {
      '& h2': {
        fontSize: theme.spacing(5),
      },
      '& p': {
        fontSize: theme.spacing(2)
      }
    },
    [theme.breakpoints.down('xs')]: {
      height: 600,
    },
    '&$fit': {
      [theme.breakpoints.up('md')]: {
        height: 840,
        paddingTop: theme.spacing(20),
      },
      top: 0,
      paddingTop: theme.spacing(15),
      overflow: 'hidden',
    },
    '&$out': {
      background: 'none !important',
    },
    '& h2': {
      fontWeight: 700,
      color: theme.palette.text.primary,
    },
    '& p': {
      color: theme.palette.text.secondary,
    },
    '& $btnArea': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      '& > *': {
        width: 130,
        fontSize: 14,
        margin: `${theme.spacing(1)}px 4px`,
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        '& > *': {
          margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
          width: 200,
          fontSize: 16
        }
      },
    },
  },
  previewApp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: `0 ${theme.spacing(1)}px`,
    perspective: 1000,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    }
  },
  m1: {
    left: 0,
    ...screenPreview,
    position: 'relative',
  },
  m2: {
    left: '20%',
    transform: 'rotateY( 30deg )',
    ...screenPreview,
  },
  m3: {
    right: '10%',
    transform: 'rotateY( 30deg )',
    ...screenPreview,
  },
  m4: {
    [theme.breakpoints.up('md')]: {
      right: '-5%',
      transform: 'rotateY( 30deg )',
      ...screenPreview,
    },
  },
  screen: {
    [theme.breakpoints.up('sm')]: {
      width: 600,
      height: 310,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative'
    },
    overflow: 'hidden',
    boxShadow: theme.shadows[2],
    borderRadius: theme.rounded.medium,
    background: fade(theme.palette.background.paper, 0.9),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    borderBottom: `${theme.spacing(1)}px solid ${fade(theme.palette.background.paper, 0.9)}`,
    '&:before': {
      content: '""',
      position: 'absolute',
      background: `url(${controlScreen}) transparent no-repeat`,
      top: 6,
      right: 8,
      width: 54,
      height: 20
    },
    '& img': {
      width: '100%',
    },
  },
  icon: {},
  feature: {
    marginTop: sectionSpace,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionSpaceMobile,
      textAlign: 'center',
      padding: `0 ${theme.spacing(10)}px`
    },
    '& $icon': {
      borderRadius: '50%',
      background: fade(theme.palette.text.disabled, 0.05),
      width: 96,
      height: 96,
      lineHeight: '110px',
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'middle',
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& span': {
        width: '60%',
        height: '60%',
        verticalAlign: 'middle',
        color: theme.palette.secondary.main,
        fontSize: 40
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: `0 ${theme.spacing(1)}px`
    },
    '& p': {
      fontSize: 18,
      textAlign: 'center',
    },
    '& h4': {
      marginBottom: theme.spacing(3),
      textAlign: 'center',
    },
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
  showcase: {
    position: 'relative',
    marginTop: sectionSpace,
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  lastShowcase: {
    [theme.breakpoints.up('md')]: {
      marginTop: 275,
    }
  },
  tech: {
    position: 'relative',
    marginTop: sectionSpace,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  centerTech: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1) * -7,
    },
    textAlign: 'center',
    '& button': {
      whiteSpace: 'inherit'
    }
  },
  wool: {
    position: 'relative',
    margin: `${theme.spacing(6)}px auto`,
    width: 195,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.6)',
      display: 'inline-block',
      margin: `${theme.spacing(1) * -7}px auto`,
    },
    [theme.breakpoints.down('xs')]: {
      width: 135,
    },
    '& figure': {
      textAlign: 'center',
      verticalAlign: 'middle',
      height: 195,
      lineHeight: '195px',
      margin: '0 auto',
      '& img': {
        border: 'none',
        display: 'inline',
        maxHeight: 120
      },
    },
  },
  hexagram: {
    fill: theme.palette.primary.main
  },
  react: {
    color: '#61DAFB',
  },
  router: {
    color: '#D72B3F',
  },
  redux: {
    color: '#764ABC',
  },
  webpack: {
    color: '#1C78C0',
  },
  mui: {
    color: '#0081CB',
  },
  jss: {
    color: '#B7A82E',
  },
  contact: {
    paddingTop: sectionSpace,
    [theme.breakpoints.down('sm')]: {
      paddingTop: sectionSpaceMobile,
    },
  },
  contactBubble: {
    padding: theme.spacing(3),
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shadows[5],
    [theme.breakpoints.up('sm')]: {
      minWidth: 540,
      padding: theme.spacing(8),
    },
    '& h2, & p': {
      color: theme.palette.common.white
    },
    '& $btnArea': {
      padding: `${theme.spacing(3)}px 0`,
      '& $button': {
        width: '100%',
        margin: `${theme.spacing(4)}px 0`,
        background: theme.palette.primary.dark,
        [theme.breakpoints.up('lg')]: {
          width: 220,
          marginTop: 0,
        }
      }
    }
  },
  contactFieldRoot: {
    '& label': {
      color: `${fade(theme.palette.primary.light, 0.8)} !important`
    },
    '& > div': {
      borderColor: theme.palette.secondary.light,
      '& input, textarea': {
        color: theme.palette.primary.light
      }
    }
  },
  textarea: {
    '& textarea': {
      height: 85
    }
  },
  footer: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.light,
    paddingTop: theme.spacing(10),
    position: 'absolute',
    bottom: -240,
    minHeight: 240,
    width: '100%',
    '& $brand': {
      color: theme.palette.text.primary
    },
    '& nav': {
      '& li': {
        display: 'inline-block',
        margin: `0 ${theme.spacing(3)}`,
        '& a': {
          fontSize: 11,
          textTransform: 'capitalize',
          fontWeight: theme.typography.fontWeightRegular
        }
      }
    },
    '& $spaceContainer': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        '& ul': {
          textAlign: 'center',
          marginTop: theme.spacing(3)
        }
      }
    },
    '& $container': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      }
    }
  },
  footerDecoration: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: 330,
    fill: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.7) : theme.palette.primary.light,
    [theme.breakpoints.up(1400)]: {
      transform: 'scale(2, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.7) : theme.palette.primary.light,
    },
  },
  copyright: {
    '& p': {
      flex: 1,
      fontSize: 12,
      marginTop: theme.spacing(1),
      color: theme.palette.text.secondary,
      padding: `0 ${theme.spacing(1)}px`
    },
    '& $container': {
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      display: 'flex'
    },
    '& span': {
      '& a': {
        width: 'auto',
        height: 'auto',
        '& svg': {
          fill: theme.palette.primary.main
        }
      }
    }
  },
  formControl: {
    display: 'block',
    width: '100%',
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        minHeight: theme.spacing(5)
      }
    }
  },
  fullWidth: {
    width: '100%',
    maxWidth: 1024
  },
  odd: {},
  even: {},
  show: {},
});

export default styles;
