import React from 'react'
import MultiLevelSelector from '../../../src/index.js'

class InitValue extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      values: [''],
      options: [{
        id: 'daily',
        value: 'daily',
        test: 'test',
        item: [
          { id: '0', value: '00:00' }
        ]
      }]
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (values) {
    const { onChange } = this.props
    this.setState({
      values: values.map(item => item.id)
    })
    onChange(values)
  }

  render () {
    const { values, options } = this.state
    return (
      <div>
        <MultiLevelSelector
          values={values}
          autoSelect={false}
          options={options}
          nullOption={{
            id: 'NULL_OPTIONS',
            value: 'NULL_VALUE',
            display: true
          }}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default InitValue
