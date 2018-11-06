import React from 'react'
// import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

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
            aria-owns={accountMenuOpen ? 'menu-appbar' : null}
            aria-haspopup='true'
            onClick={this.handleAccountMenuOpen}
            color='inherit'
            className={`${open ? classes.userButtonMenuOpen : classes.userButton}`}
          >
            <AccountCircle color='secondary' />
          </IconButton>

          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={accountMenuOpen}
            onClose={this.handleAccountMenuClose}
          >
            <MenuItem onClick={this.handleAccountMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleAccountMenuClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AppBarComponent)
