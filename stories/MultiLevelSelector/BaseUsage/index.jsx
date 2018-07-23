import React from 'react'

import options from '../shared/options'
import {
  Br,
  Card,
  Title,
  Monitor,
  Container,
} from '../components'

import styles from './index.css'
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
            onDefaultValue={this.onChangeMultiLevelSelector}
          />
        </Card>

        <Card>
          <Title>WITH CUSTOM STYLE</Title>
          <MultiLevelSelector
            options={options}
            selectClassName={styles.select}
          />
        </Card>
      </Container>
    )
  }
}

BaseUsage.defaultProps = {
  onChange: () => {},
}

export default BaseUsage
