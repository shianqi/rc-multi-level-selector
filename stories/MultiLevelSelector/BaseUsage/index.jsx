import React from 'react'

import options from '../shared/options'
import Monitor from '../components/Monitor'
import MultiLevelSelector from '../../../src/components/MultiLevelSelector'

class BaseUsage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      selectedOption: '',
    }

    this.onChangeMultiLevelSelector = this.onChangeMultiLevelSelector.bind(this)
  }

  onChangeMultiLevelSelector (options) {
    const { onChange } = this.props

    const value = options.map(item => item.value).join(', ')
    this.setState({
      selectedOption: value,
    })
    onChange(options)
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

BaseUsage.defaultProps = {
  onChange: () => {},
}

export default BaseUsage
