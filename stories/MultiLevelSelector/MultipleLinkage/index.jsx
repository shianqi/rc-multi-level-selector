import React from 'react'

import {
  Card,
  Title,
  Container
} from '../components'

import MultiLevelSelector from '../../../src/index.js'

const locations = [
  {
    id: 'China',
    value: 'China',
    item: [
      { id: 'Beijing', value: 'Beijing' },
      { id: 'Guangdong', value: 'Guangdong' }
    ]
  }
]

const clients = {
  Beijing: [{
    id: 'Server 1',
    value: 'Server 1',
    item: [
      { id: 'Client v3.2', value: 'Client v3.2' },
      { id: 'Client v3.3', value: 'Client v3.3' }
    ]
  }],
  Guangdong: [{
    id: 'Server 2',
    value: 'Server 2',
    item: [
      { id: 'Client v4.0', value: 'Client v4.0' },
      { id: 'Client v4.1', value: 'Client v4.1' }
    ]
  }]
}

class OptionsChange extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      locationsValue: ['China', 'Beijing'],
      clientsValue: ['Server 1', 'Client v3.2']
    }
    this.onLocationChange = this.onLocationChange.bind(this)
    this.onClientChange = this.onClientChange.bind(this)
  }

  onLocationChange (values) {
    const { onChange } = this.props
    this.setState({
      locationsValue: values.map(item => item.id)
    })
    onChange && onChange(values)
  }

  onClientChange (values) {
    const { onChange } = this.props
    this.setState({
      clientsValue: values.map(item => item.id)
    })
    onChange && onChange(values)
  }

  render () {
    const {
      locationsValue,
      clientsValue
    } = this.state

    const clientsOptions = clients[locationsValue[1]] || []

    return (
      <Container>
        <Card>
          <Title>Multiple Linkage</Title>
          <MultiLevelSelector
            values={locationsValue}
            options={locations}
            onChange={this.onLocationChange}
          />
          <MultiLevelSelector
            values={clientsValue}
            options={clientsOptions}
            onChange={this.onClientChange}
          />
        </Card>
      </Container>
    )
  }
}

OptionsChange.defaultProps = {
  onChange: () => {}
}

export default OptionsChange
