import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NativeSelector from '../NativeSelector/index'

const InlineBlockDiv = styled.div`
  display: inline-block;
`

class MultiLevelSelector extends React.PureComponent {
  constructor (props) {
    super(props)

    const { options } = props

    this.oldOptions = options
    this.state = {
      value: this.initValue(options),
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
  }

  componentDidMount () {
    const { value } = this.state
    const { onDefaultValue, options } = this.props

    const selectedObject = this.getSelectedObject(value, options)
    onDefaultValue && onDefaultValue(selectedObject)
  }

  arrayIsIdentical (array1, array2) {
    if (array1 == null || array2 == null || array1.length !== array2.length) {
      return false
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].id !== array2[i].id) {
        return false
      }
    }
    return true
  }

  componentDidUpdate () {
    const { value } = this.state
    const { onChange, options } = this.props

    const newValue = this.getSelectedObject(value, options)
    const oldValue = this.getSelectedObject(this.oldValue, this.oldOptions || options)

    if (!this.arrayIsIdentical(newValue, oldValue)) {
      onChange && onChange(newValue)
    }
    this.oldValue = value
    this.oldOptions = options
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

  getValueIndexs () {
    const { options, value, subOptionKey } = this.props
    let opt = options

    if (!value) {
      return null
    }

    return value.map((key) => {
      const objIndex = opt.findIndex((item) => (item.id === key))
      opt = opt[objIndex][subOptionKey]
      return objIndex
    })
  }

  getSelectedObject (value, options) {
    if (value == null) {
      return null
    }

    let opt = options
    const data = []

    for (let i of value) {
      if (!opt || !opt[i]) {
        return data
      }
      const { item, ...dataItem } = opt[i]
      data.push(dataItem)
      opt = item
    }

    return data
  }

  handleOnChange (id, index, subOptions) {
    const { onChange, subOptionKey, options } = this.props
    const value = this.getValueIndexs() || this.state.value

    const head = value.slice(0, index)
    const itemIndex = subOptions.findIndex((item) => (`${item.id}` === `${id}`))

    let opts = subOptions[itemIndex][subOptionKey]
    const tail = this.initValue(opts)

    const res = [...head, itemIndex, ...tail]

    this.setState({
      value: res,
    })
    onChange && onChange(this.getSelectedObject(res, options))
  }

  renderSelector (index, options) {
    if (options && options.length) {
      const {
        selectClassName,
        subOptionKey,
        Selector,
      } = this.props

      const value = this.getValueIndexs() || this.state.value

      const selectIndex = value[index]
      const itemSelected = options[selectIndex] || {}

      return (
        <Fragment>
          <Selector
            value={itemSelected.id}
            options={options}
            onChange={(value) => {
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
    const {
      options,
      className,
    } = this.props

    return (
      <InlineBlockDiv className={ className }>
        { this.renderSelector(0, options) }
      </InlineBlockDiv>
    )
  }
}

MultiLevelSelector.defaultProps = {
  className: '',
  selectClassName: '',

  options: [],
  subOptionKey: 'item',
  Selector: NativeSelector,
  onChange: () => {},
  onDefaultValue: () => {},
}

MultiLevelSelector.propTypes = {
  className: PropTypes.string,
  selectClassName: PropTypes.string,

  value: PropTypes.array,
  options: PropTypes.array,
  subOptionKey: PropTypes.string,
  Selector: PropTypes.func,
  onChange: PropTypes.func,
  onDefaultValue: PropTypes.func,
}

export default MultiLevelSelector
