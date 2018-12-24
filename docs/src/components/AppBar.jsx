import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const GithubIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
  </SvgIcon>
)

const MenuButton = styled(IconButton)`
  margin-left: 12px;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const Title = styled(Typography)`
  margin-left: 12px;
  ${props => props.theme.breakpoints.up('md')} {
    margin-left: ${props => props.theme.spacing.unit * 3}px;
  }
`

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
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
  state = {
    anchorEl: null,
    accountMenuOpen: false
  }

  handleAccountMenuOpen = (event) => {
    this.setState({
      accountMenuOpen: true,
      anchorEl: event.currentTarget
    })
  };

  handleAccountMenuClose = () => {
    this.setState({ accountMenuOpen: false })
  };

  render () {
    const { accountMenuOpen } = this.state

    const {
      classes,
      open,
      handleDrawerToggle
    } = this.props

    return (
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar disableGutters={!open}>
          <MenuButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </MenuButton>

          <Title variant='h6' color='inherit' noWrap>
            rc-multi-level-selector
          </Title>
          <div className={classes.menuGrow} />
          <IconButton
            component='a'
            aria-owns={accountMenuOpen ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            target='_blank'
            href='https://github.com/shianqi/rc-multi-level-selector'
            className={`${open ? classes.userButtonMenuOpen : classes.userButton}`}
          >
            <GithubIcon color='inherit' />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AppBarComponent)
