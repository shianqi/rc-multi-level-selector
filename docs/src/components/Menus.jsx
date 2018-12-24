import React, { Fragment } from 'react'
import styled from 'styled-components'
import Router, { withRouter } from 'next/router'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import pages from '../shared/pages'

const MenusContainer = styled.div`
`

const Logo = styled.img`
  width: 168px;
`

const LogoContainer = styled.div`
  padding: 24px;
`

class Menus extends React.PureComponent {
  state = {
    menuOpenState: {}
  }

  render () {
    return (
      <MenusContainer>
        <LogoContainer>
          <Logo src='/static/images/logo.png' />
        </LogoContainer>
        <Divider />
        { this.renderNavItems(pages) }
      </MenusContainer>
    )
  }

  handleClick = (item) => () => {
    const { menuOpenState } = this.state
    const { children, path } = item
    if (children) {
      this.setState({
        menuOpenState: {
          ...menuOpenState,
          [path]: !menuOpenState[path]
        }
      })
    } else {
      Router.push(path)
    }
  }

  renderNavItems = (lists) => {
    const { menuOpenState } = this.state
    const { router } = this.props
    const { route } = router

    const items = lists.map((item) => {
      const { children, path } = item
      const isOpen = menuOpenState[item.path]

      return (
        <Fragment key={path}>
          <ListItem
            button
            selected={route === path}
            onClick={this.handleClick(item)}
          >
            <ListItemText primary={item.name} />
            {children && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {
            children && (
              <Collapse in={isOpen} unmountOnExit>
                {this.renderNavItems(item.children)}
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

export default withRouter(Menus)
