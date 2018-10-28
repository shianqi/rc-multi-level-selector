import React from 'react'

import options from '../shared/options'
import {
  Br,
  Card,
  Title,
  Monitor,
  Container
} from '../components'

import MultiLevelSelector from '../../../src/index.js'

class BaseUsage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      selectedOption: ''
    }

    this.onChangeMultiLevelSelector = this.onChangeMultiLevelSelector.bind(this)
  }

  onChangeMultiLevelSelector (options) {
    const { onChange } = this.props

    const value = options.map(item => item.value).join(', ')
    this.setState({
      selectedOption: value
    })
    onChange(options)
  }

  render () {
    const { selectedOption } = this.state

    return (
      <Container>
        <Card>
          <Title>BASE USAGE</Title>
          <Monitor>
            {selectedOption}
          </Monitor>
          <Br />
          <MultiLevelSelector
            options={options}
            onChange={this.onChangeMultiLevelSelector}
          />
        </Card>
      </Container>
    )
  }
}

BaseUsage.defaultProps = {
  onChange: () => {}
}

export default BaseUsage
