import React from 'react'
import AppWrapper from './AppWrapper'
import PageContext from './PageContext'

const withRoot = (Component) => {
  class WithRoot extends React.PureComponent {
    state = {
      userLanguage: 'zh'
    }

    toggleUserLanguage = (language) => {
      this.setState({
        userLanguage: language
      })
    }

    render () {
      const { userLanguage } = this.state

      return (
        <PageContext.Provider value={{ userLanguage }}>
          <AppWrapper changeLanguage={this.toggleUserLanguage}>
            <Component />
          </AppWrapper>
        </PageContext.Provider>
      )
    }
  }

  return WithRoot
}

export default withRoot
