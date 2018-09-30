import React from 'react'
import styled from 'styled-components'
import MultiLevelSelector, { NativeSelector } from '../../../src/index.js'

import options from '../shared/options'
import {
  Card,
  Title,
  Container,
} from '../components'

import styles from './index.css'

const StyledNativeSelector = styled(NativeSelector)`
  color: palevioletred;
  border-color: palevioletred;
`

class BaseUsage extends React.PureComponent {
  render () {
    const { onChange } = this.props

    return (
      <Container>
        <Card>
          <Title>WITH className</Title>
          <MultiLevelSelector
            options={options}
            onChange={onChange}
            selectClassName={styles.select}
          />
        </Card>

        <Card>
          <Title>WITH Styled-Components</Title>
          <MultiLevelSelector
            options={options}
            Selector={StyledNativeSelector}
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