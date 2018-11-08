import React from 'react'
// import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const GithubIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />  
  </SvgIcon>
) 

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuGrow: {
    flex: '1 1 auto'
  },
  userButton: {
    marginRight: 12
  },
  userButtonMenuOpen: {
    marginRight: -12
  },
  hide: {
    display: 'none'
  }
})

class AppBarComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null,
      accountMenuOpen: false
    }
    this.handleAccountMenuOpen = this.handleAccountMenuOpen.bind(this)
    this.handleAccountMenuClose = this.handleAccountMenuClose.bind(this)
  }

  handleAccountMenuOpen (event) {
    this.setState({
      accountMenuOpen: true,
      anchorEl: event.currentTarget
    })
  };

  handleAccountMenuClose () {
    this.setState({ accountMenuOpen: false })
  };

  render () {
    const { anchorEl, accountMenuOpen } = this.state

    const {
      classes,
      open,
      handleDrawerOpen
    } = this.props

    return (
      <AppBar
        position='absolute'
        className={`${classes.appBar} ${open && classes.appBarShift}`}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            className={`${classes.menuButton} ${open && classes.hide}`}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='title' color='inherit' noWrap>
            rc-multi-level-selector
          </Typography>
          <div className={classes.menuGrow} />
          <IconButton
            component='a'
            aria-owns={accountMenuOpen ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            target='_blank'
            href="https://github.com/shianqi/rc-multi-level-selector"
            className={`${open ? classes.userButtonMenuOpen : classes.userButton}`}
          >
            <GithubIcon color='secondary' />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AppBarComponent)
