import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BaseUsage from './BaseUsage'
import CustomStyle from './CustomStyle'
import OptionsChange from './OptionsChange'
import MultipleLinkage from './MultipleLinkage'

storiesOf('Basics', module)
  .add('base', () => (
    <BaseUsage onChange={action('onChange')} />
  ))
  .add('custom style', () => (
    <CustomStyle onChange={action('onChange')} />
  ))
  .add('options change', () => (
    <OptionsChange onChange={action('onChange')} />
  ))

storiesOf('Advanced', module)
  .add('multiple linkage', () => (
    <MultipleLinkage onChange={action('onChange')} />
  ))
