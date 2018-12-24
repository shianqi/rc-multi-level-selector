import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'

import AppBar from './AppBar'
import Drawer from './AppDrawer'

const GlobalStyled = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  #root {
    display: flex;
    flex: 1 1 0;
  }
  #__next {
    height: 100%;
  }
`

const Root = styled.div`
  flex-grow: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  height: 100%;
`

const Main = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props => props.theme.palette.background.default};
  padding: ${props => props.theme.spacing.unit * 3}px;
`

class AppWrapper extends React.PureComponent {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render () {
    const { mobileOpen } = this.state
    const { children } = this.props

    return (
      <Root>
        <GlobalStyled />
        <AppBar
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <Drawer
          open={mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <Main>
          <Toolbar />
          {children}
        </Main>
      </Root>
    )
  }
}

export default AppWrapper
