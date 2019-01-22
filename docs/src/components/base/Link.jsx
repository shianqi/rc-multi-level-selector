import styled from 'styled-components'

const LinkComponent = styled.a`
  background-color: rgba(187, 239, 253, 0.38);
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.87);
    background-color: rgba(187, 239, 253, 0.56);
  }

  &:target {
    padding-top: 64px;
  }
`

export default LinkComponent
