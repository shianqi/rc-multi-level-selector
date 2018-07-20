import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Monitor from './Monitor'
import MultiLevelSelector from '../../src/components/MultiLevelSelector'

const options = [
  {
    id: 1,
    value: 'item 1',
    item: [
      {
        id: 2,
        value: 'item 2',
        item: [
          { id: 3, value: 'item 3' },
          { id: 4, value: 'item 4' },
        ],
      },
      { id: 5, value: 'item 5' },
    ],
  },
  {
    id: 6,
    value: 'item 6',
    item: [
      { id: 7, value: 'item 7' },
      { id: 8, value: 'item 8' },
    ],
  },
]

class Example extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      selectedOption: '',
    }

    this.onChangeMultiLevelSelector = this.onChangeMultiLevelSelector.bind(this)
  }

  onChangeMultiLevelSelector (options) {
    const value = options.map(item => item.value).join(', ')
    this.setState({
      selectedOption: value,
    })
    action('onChange')(options)
  }

  render () {
    const { selectedOption } = this.state

    return (
      <div>
        <Monitor>
          {selectedOption}
        </Monitor>
        <MultiLevelSelector
          options={options}
          onChange={this.onChangeMultiLevelSelector}
          onDefaultValue={this.onChangeMultiLevelSelector}
        />
      </div>
    )
  }
}

storiesOf('Button', module)
  .add('with text', () => (
    <Example />
  ))
