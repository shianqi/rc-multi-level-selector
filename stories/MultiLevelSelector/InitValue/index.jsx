import React from 'react'
import MultiLevelSelector from '../../../src/index.js'

class InitValue extends React.PureComponent {
  render () {
    const options = [{
      id: 'daily',
      value: 'daily',
      item: [
        {
          id: '0',
          value: '00:00'
        }
      ]
    }]

    return (
      <div>
        ?
        <MultiLevelSelector
          value={['realtime']}
          options={options}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default InitValue
