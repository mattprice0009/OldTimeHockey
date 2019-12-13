const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.oth.secondary,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.constants.drawerWidth,
    width: `calc(100% - ${theme.constants.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  bannerImg: {
    paddingTop: '1vh',
    paddingBottom: '1vh',
    height: '80%',
    maxHeight: '100px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: theme.palette.other.grey2,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.constants.drawerWidth,
    backgroundColor: theme.palette.other.grey1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    backgroundColor: theme.palette.other.grey1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  logoAppContainer: {
    textAlign: 'left',
    width: '100%',
  },
  logoApp: {
    alignContent: 'top',
    paddingTop: '1vh',
    paddingBottom: '1vh',
    paddingLeft: '1vw',
    height: '40%',
    maxHeight: '50px',
    textAlign: 'left',
    [theme.breakpoints.down(800)]: {
      paddingRight: '5vw',
      height: '30%',
      maxHeight: '40px',
    },
  },
  main: {
    backgroundColor: theme.palette.oth.primary,
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
   
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.oth.primary,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  root: {
    display: 'flex',
  },
  sectionDesktop: {
    display: 'flex',
    paddingRight: 24,
    [theme.breakpoints.down(900)]: {
      alignItems: 'center',
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

export default styles;
