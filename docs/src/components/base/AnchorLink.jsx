import React, { Fragment } from 'react'
import styled from 'styled-components'
import { palettePrimaryMain } from 'UTILS/theme'

const AnchorLink = styled.a`
  position: absolute;
  margin-top: -64px;
`

const PoundSign = styled.a`
  opacity: 0;
  padding-left: 8px;
  color: ${palettePrimaryMain};
  transition: all 0.3s;

  h1:hover > &,
  h2:hover > &,
  h3:hover > &,
  h4:hover > &,
  h5:hover > &,
  h6:hover > & {
    opacity: 0.54;
  }
`

const AnchorComponent = (props) => (
  <Fragment>
    <AnchorLink id={props.id} />
    {props.children}
    <PoundSign href={`#${props.id}`}>#</PoundSign>
  </Fragment>
)

export default AnchorComponent
