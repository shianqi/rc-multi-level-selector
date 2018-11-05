import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import MultiLevelSelector from '../../../src/index.js'

import options from '../shared/options'
import {
  Card,
  Title,
  Container
} from '../components'

const MaterialSelect = (props) => (
  <Select
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  >
    {
      props.options.map(item => (
        <MenuItem
          key={item.id}
          value={item.id}
        >
          {item.value}
        </MenuItem>
      ))
    }
  </Select>
)

class BaseUsage extends React.PureComponent {
  render () {
    const { onChange } = this.props

    return (
      <Container>
        <Card>
          <Title>USE Material-UI</Title>
          <MultiLevelSelector
            options={options}
            Selector={MaterialSelect}
            onChange={onChange}
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
