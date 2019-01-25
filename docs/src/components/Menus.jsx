import React, { Fragment } from 'react'
import styled from 'styled-components'
import Router, { withRouter } from 'next/router'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import pages from '../shared/pages'

import MenuAction from 'REDUX/menu/action'
import { bindActionCreators } from 'redux'
import { load } from 'UTILS/helper'
import { assetPrefix } from 'ENV'

const MenusContainer = styled.div`
  display: block;
`

const Logo = styled.img`
  width: 168px;
  cursor: pointer;
`

const LogoContainer = styled.div`
  padding: 24px;
`

const StyledListItem = styled(ListItem)`
  padding-left: ${props => props.theme.spacing.unit * (3 + props.deep * 2)}px;
`

const StyledExpandLess = styled(ExpandLess)`
  transition: all 0.3s;
  transform: ${(props) => (props.open ? 'rotate(0)' : 'rotate(180deg)')};
`

class Menus extends React.PureComponent {
  render () {
    return (
      <MenusContainer>
        <LogoContainer>
          <Logo
            onClick={() => { Router.push('/', `${assetPrefix}/`) }}
            src={load('/static/images/logo@1x.png')}
          />
        </LogoContainer>
        <Divider />
        { this.renderNavItems(pages, 0) }
      </MenusContainer>
    )
  }

  handleClick = (item) => () => {
    const { actions } = this.props
    const { children, path } = item
    if (children) {
      actions.toggleMenuOpenState(path)
    } else {
      Router.push(path, `${assetPrefix}${path}`)
    }
  }

  renderNavItems = (lists, deep) => {
    const { router, menuOpenState, language } = this.props
    const { route } = router

    const items = lists.map((item) => {
      const { children, path } = item
      const isOpen = menuOpenState[item.path]

      return (
        <Fragment key={path}>
          <StyledListItem
            button
            deep={deep}
            selected={route === path}
            onClick={this.handleClick(item)}
          >
            <ListItemText primary={item.name[language]} />
            {children && (<StyledExpandLess open={isOpen} />)}
          </StyledListItem>
          {
            children && (
              <Collapse in={isOpen} unmountOnExit>
                {this.renderNavItems(item.children, deep + 1)}
              </Collapse>
            )
          }
        </Fragment>
      )
    })

    return (
      <List
        component='div'
        disablePadding
      >
        {items}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const { app, menu } = state
  const { language } = app
  const { menuOpenState } = menu
  return {
    language,
    menuOpenState
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(MenuAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menus))
