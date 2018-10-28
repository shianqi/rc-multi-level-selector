import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

import BaseUsage from './BaseUsage'
import CustomStyle from './CustomStyle'
import OptionsChange from './OptionsChange'
import MultipleLinkage from './MultipleLinkage'
import InitValue from './InitValue/index'

const Container = (props) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      { props.children }
    </ThemeProvider>
  </MuiThemeProvider>
)

storiesOf('Basics', module)
  .add('base', () => (
    <Container>
      <BaseUsage onChange={action('onChange')} />
    </Container>
  ))
  .add('custom style', () => (
    <Container>
      <CustomStyle onChange={action('onChange')} />
    </Container>
  ))
  .add('options change', () => (
    <Container>
      <OptionsChange onChange={action('onChange')} />
    </Container>
  ))

storiesOf('Advanced', module)
  .add('multiple linkage', () => (
    <Container>
      <MultipleLinkage onChange={action('onChange')} />
    </Container>
  ))

storiesOf('Test', module)
  .add('test1', () => (
    <Container>
      <InitValue onChange={action('onChange')} />
    </Container>
  ))
