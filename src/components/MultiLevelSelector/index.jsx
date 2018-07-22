import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Selector from '../NativeSelector/index'

const InlineDiv = styled.div`
  display: inline;
`

class MultiLevelSelector extends React.PureComponent {
  constructor (props) {
    super(props)

    const { options } = props

    this.state = {
      value: this.initValue(options),
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
  }

  componentDidMount () {
    const { value } = this.state
    const { onDefaultValue } = this.props

    const selectedObject = this.getSelectedObject(value)
    onDefaultValue && onDefaultValue(selectedObject)
  }

  initValue (options) {
    const { subOptionKey } = this.props
    const value = []
    while (options && options.length && options.length > 0) {
      value.push(0)
      options = options[0][subOptionKey]
    }
    return value
  }

  getSelectedObject (value) {
    const { options } = this.props

    let opt = options
    const data = []

    value.forEach((i) => {
      const { item, ...dataItem } = opt[i]
      data.push(dataItem)
      opt = item
    })

    return data
  }

  handleOnChange (id, index, subOptions) {
    const { onChange, subOptionKey } = this.props
    const { value } = this.state

    const head = value.slice(0, index)
    const itemIndex = subOptions.findIndex((item) => (`${item.id}` === id))

    let opts = subOptions[itemIndex][subOptionKey]
    const tail = this.initValue(opts)

    const res = [...head, itemIndex, ...tail]

    this.setState({
      value: res,
    })
    onChange && onChange(this.getSelectedObject(res))
  }

  renderSelector (index, options) {
    if (options && options.length) {
      const { selectClassName, subOptionKey } = this.props
      const { value } = this.state
      const selectIndex = value[index]
      const itemSelected = options[selectIndex]

      return (
        <Fragment>
          <Selector
            value={itemSelected.id}
            options={options}
            onChange={(e) => {
              const { value } = e.target
              this.handleOnChange(value, index, options)
            }}
            className={selectClassName}
          />
          { this.renderSelector(index + 1, itemSelected[subOptionKey]) }
        </Fragment>
      )
    }
    return null
  }

  render () {
    const { options, className } = this.props

    return (
      <InlineDiv className={ className }>
        { this.renderSelector(0, options) }
      </InlineDiv>
    )
  }
}

MultiLevelSelector.defaultProps = {
  className: '',
  subOptionKey: 'item',
  selectClassName: '',
  onChange: () => {},
  onDefaultValue: () => {},
  options: [],
}

MultiLevelSelector.propTypes = {
  className: PropTypes.string,
  subOptionKey: PropTypes.string,
  selectClassName: PropTypes.string,
  onChange: PropTypes.func,
  onDefaultValue: PropTypes.func,
  options: PropTypes.array,
}

export default MultiLevelSelector
