import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Toolbar from '@material-ui/core/Toolbar'

import AppAction from 'REDUX/app/action'
import AppBar from './AppBar'
import Drawer from './AppDrawer'
import { spacing } from 'UTILS/theme'

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
  padding: ${spacing(3)}px;
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
    const { children, actions, language, loading } = this.props

    return (
      <Root>
        <GlobalStyled />
        <AppBar
          loading={loading}
          language={language}
          toggleLoadingState={actions.toggleLoadingState}
          handleDrawerToggle={this.handleDrawerToggle}
          handleChangeLanguage={actions.changeLanguage}
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

const mapStateToProps = state => {
  const { app, menu } = state
  const { menuOpenState } = menu
  const { language, loading } = app
  return {
    loading,
    language,
    menuOpenState
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
