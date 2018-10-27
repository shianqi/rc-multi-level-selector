import styled from 'styled-components'
import { spacingUnit } from '../theme'

const Button = styled.div`
  display: inline-block;
  font-size: 12px;
  padding: ${spacingUnit(1)}px ${spacingUnit(2)}px;
  color: white;
  background: ${props => props.theme.palette.primary.main};
  border: 1px solid ${props => props.theme.palette.primary.main};
  margin: ${spacingUnit(1)}px;
  border-radius: 4px;
  cursor: pointer;
`

export default Button
