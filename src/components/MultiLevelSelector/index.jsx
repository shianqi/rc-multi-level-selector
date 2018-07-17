import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Selector from '../NativeSelector/index'

const initValue = (options) => {
  const value = []
  let opts = options
  while (opts && opts.length && opts.length > 0) {
    value.push(0)
    opts = opts[0].item
  }
  return value
}

class MultiLevelSelector extends React.PureComponent {
  constructor (props) {
    super(props)

    const { options } = props

    this.state = {
      value: initValue(options),
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
  }

  handleOnChange (id, index, subOptions) {
    const { onChange, options } = this.props
    const { value } = this.state

    const res = value.slice(0, index)
    const itemIndex = subOptions.findIndex((item) => (`${item.id}` === id))
    res.push(itemIndex)

    let opts = subOptions[itemIndex].item
    while (opts && opts.length && opts.length > 0) {
      res.push(0)
      opts = opts[0].item
    }

    this.setState({
      value: res,
    })

    let opt = options
    const data = []

    res.forEach((i) => {
      const { item, ...dataItem } = opt[i]
      data.push(dataItem)
      opt = item
    })
    onChange && onChange(data)
  }

  renderSelector (index, options) {
    if (options && options.length) {
      const { selectClassName } = this.props
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
          { this.renderSelector(index + 1, itemSelected.item) }
        </Fragment>
      )
    }
    return null
  }

  render () {
    const { options, className } = this.props

    return (
      <div className={ className }>
        { this.renderSelector(0, options) }
      </div>
    )
  }
}

MultiLevelSelector.defaultProps = {
  className: '',
  selectClassName: '',
  onChange: () => {},
  options: [],
}

MultiLevelSelector.propTypes = {
  className: PropTypes.string,
  selectClassName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}

export default MultiLevelSelector
