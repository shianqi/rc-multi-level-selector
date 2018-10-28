import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import { spacingUnit } from '../theme'

import {
  Card,
  Title,
  Container
} from '../components'

import MultiLevelSelector from '../../../src/index.js'

const options1 = [
  {
    id: 'China',
    value: 'China',
    item: [
      { id: 'Beijing', value: 'Beijing' },
      {
        id: 'Guangdong',
        value: 'Guangdong',
        item: [
          { id: 'Guangzhou', value: 'Guangzhou' },
          { id: 'Shenzhen', value: 'Shenzhen' }
        ]
      }
    ]
  }
]

const options2 = [{
  id: 'China',
  value: 'China',
  item: [
    {
      id: 'California',
      value: 'California',
      item: [
        { id: 'Los Angeles', value: 'Los Angeles' },
        { id: 'San Diego', value: 'San Diego' }
      ]
    },
    { id: 'New York', value: 'New York' }
  ]
}]

const StyledButton = styled(Button)`
  && {
    margin: ${spacingUnit(1)}px;
  }
`

class OptionsChange extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      useOption1: true
    }
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onChangeMultiLevelSelector = this.onChangeMultiLevelSelector.bind(this)
  }

  onChangeMultiLevelSelector (options) {
    const { onChange } = this.props
    onChange && onChange(options)
  }

  onButtonClick () {
    const { useOption1 } = this.state

    this.setState({
      useOption1: !useOption1
    })
  }

  render () {
    const { useOption1 } = this.state

    return (
      <Container>
        <Card>
          <Title>BASE USAGE</Title>

          <StyledButton variant='contained' color='primary' onClick={this.onButtonClick}>
            change
          </StyledButton>

          <MultiLevelSelector
            options={useOption1 ? options1 : options2}
            onChange={this.onChangeMultiLevelSelector}
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
