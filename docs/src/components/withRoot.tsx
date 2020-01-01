import React from 'react'
import AppWrapper from './AppWrapper'

const withRoot = (Component: React.ElementType) => {
  const WithRoot: React.FC = () => {
    return (
      <AppWrapper>
        <Component />
      </AppWrapper>
    )
  }

  return WithRoot
}

export default withRoot
