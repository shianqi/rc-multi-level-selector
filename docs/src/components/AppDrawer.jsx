import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden'
import Menus from './Menus'
import { spacing } from 'UTILS/theme'

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
  docked: {
    height: '100%'
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
    width: spacing(7),
    [theme.breakpoints.up('md')]: {
      width: spacing(9)
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
  height: 100%;
`

class MiniDrawer extends React.Component {
  render () {
    const { classes, theme, open, language, handleDrawerToggle } = this.props

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
            <Menus language={language} />
          </Drawer>
        </StyledHidden>
        <StyledHidden smDown implementation='css'>
          <Drawer
            classes={{
              docked: classes.docked,
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            <Menus language={language} />
          </Drawer>
        </StyledHidden>
      </Nav>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
