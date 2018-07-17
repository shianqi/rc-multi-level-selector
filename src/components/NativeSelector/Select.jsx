import styled from 'styled-components'

const Select = styled.select`
  appearance: none;

  outline: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border-radius: 0;
  padding: 4px 8px;
  border-left-width: 0;

  &:nth-child(1) {
    border-left-width: 1px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:nth-last-child(1) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export default Select
