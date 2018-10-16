import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import _ from 'lodash'

import NativeSelector from '../NativeSelector/index'

const InlineBlockDiv = styled.div`
  display: inline-block;
`
// TODO: Remove lodash
class MultiLevelSelector extends React.Component {
  constructor (props) {
    super(props)

    const { options, defaultValue, value } = props
    this.oldOptions = options
    this.state = {
      values: defaultValue || value || this.getDefaultValues()
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
  }

  componentDidMount () {
    const { onDefaultValue } = this.props

    const values = this.getValues()
    onDefaultValue && onDefaultValue(this.getObjectsByValues(values))
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { options: nextOptions, value: nextValue } = nextProps
    const { options, value } = this.props

    if (_.isEqual(options, nextOptions) && _.isEqual(nextValue, value) && _.isEqual(nextState, this.state)) {
      return false
    }
    return true
  }

  componentWillUpdate (props, state) {
    const values = this.updateValues(props, state)
    if (!_.isEqual(values, this.getValues())) {
      this.setValues(values)
    }
  }

  getValuesByOptions (options) {
    let opt = options
    const newValues = []

    while (Array.isArray(opt)) {
      if (opt.length <= 0) {
        break
      }

      const { item, id } = this.getOptionById(opt)
      newValues.push(id)
      opt = item
    }
    return newValues
  }

  getValues (state) {
    const { values: stateValues = [] } = state || this.state || {}
    const { value: propsValues } = this.props

    if (propsValues) {
      return propsValues
    }
    return stateValues
  }

  setValues (values) {
    const { value: propsValues, onChange } = this.props

    if (!propsValues) {
      this.setState({ values }, () => {
        onChange && onChange(this.getObjectsByValues(values))
      })
    } else {
      onChange && onChange(this.getObjectsByValues(values))
    }
  }

  getObjectsByValues (values) {
    const { options } = this.props
    let opts = options
    let objects = []

    while (Array.isArray(opts)) {
      if (opts.length <= 0) {
        break
      }
      const index = objects.length
      const option = this.getOptionById(opts, values[index])
      if (option) {
        const { item } = option
        objects.push(option)
        opts = item
      } else {
        break
      }
    }

    return objects
  }

  getOptionById (options, id) {
    if (options.length <= 0) {
      return null
    }
    if (!id) {
      return options[0]
    }
    return options.find(item => (`${item.id}` === `${id}`))
  }

  updateValues (props, state) {
    const oldValues = this.getValues(state)

    const { options } = props
    let opts = options
    let newValues = []

    while (Array.isArray(opts)) {
      if (opts.length <= 0) {
        break
      }
      const index = newValues.length
      if (oldValues[index] == null) {
        const tail = this.getValuesByOptions(opts)
        newValues = newValues.concat(tail)
        break
      }
      const option = this.getOptionById(opts, oldValues[index])
      if (option) {
        const { item, id } = option
        newValues.push(id)
        opts = item
      } else {
        const tail = this.getValuesByOptions(opts)
        newValues = newValues.concat(tail)
        break
      }
    }
    return newValues
  }

  /**
   * 根据 options 和 value 计算最新的 value
   */
  getDefaultValues () {
    const { options } = this.props
    let opts = options
    const newValues = []

    while (Array.isArray(opts)) {
      if (opts.length <= 0) {
        break
      }
      const { item, id } = this.getOptionById(opts)
      newValues.push(id)
      opts = item
    }
    return newValues
  }

  handleOnChange (id, index, subOptions) {
    const { subOptionKey } = this.props
    const values = this.getValues()

    const head = values.slice(0, index)
    const itemIndex = subOptions.findIndex((item) => (`${item.id}` === `${id}`))

    let opts = subOptions[itemIndex][subOptionKey]
    const tail = this.getValuesByOptions(opts)
    const res = [...head, id, ...tail]

    this.setValues(res)
  }

  renderSelector (index, options) {
    if (options && options.length) {
      const {
        selectClassName,
        subOptionKey,
        Selector
      } = this.props

      const values = this.getValues()
      const selectIndex = values[index]
      const itemSelected = this.getOptionById(options, selectIndex)

      if (!itemSelected) return null

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
      className
    } = this.props

    return (
      <InlineBlockDiv className={className}>
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
  onDefaultValue: () => {}
}

MultiLevelSelector.propTypes = {
  className: PropTypes.string,
  selectClassName: PropTypes.string,

  value: PropTypes.array,
  options: PropTypes.array,
  subOptionKey: PropTypes.string,
  Selector: PropTypes.func,
  onChange: PropTypes.func,
  defaultValue: PropTypes.array,
  onDefaultValue: PropTypes.func
}

export default MultiLevelSelector
