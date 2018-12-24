import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden'
import Menus from './Menus'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  menuAvatar: {
    marginRight: '10px'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})

const Nav = styled.nav`
  display: flex;
`

const StyledHidden = styled(Hidden)`
  display: flex;
`

class MiniDrawer extends React.Component {
  render () {
    const { classes, theme, open, handleDrawerToggle } = this.props

    return (
      <Nav>
        <StyledHidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            <Menus />
          </Drawer>
        </StyledHidden>
        <StyledHidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            <Menus />
          </Drawer>
        </StyledHidden>
      </Nav>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
