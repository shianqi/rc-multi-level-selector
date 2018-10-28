import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NativeSelector from './NativeSelector/index'
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject
} from './helper'

const InlineBlockDiv = styled.div`
  display: inline-block;
`

const getOptions = (options, subOptionKey) => {
  if (Array.isArray(options)) {
    return deepTransformArrayToObject(options, subOptionKey)
  } else if (typeof options === 'object') {
    return options
  }
  throw new Error('"options" must be an array or an object')
}

class MultiLevelSelector extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      values: [],
      render: true // 是否需要 render 组件
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  /**
   * 处理受控组件
   * 用 propsValues 和 options 匹配，判断是否渲染组件或者更新通知父组件更新状态
   */
  static handleControlledComponent (props) {
    const { options: propsOptions, values, onChange, subOptionKey } = props
    const options = getOptions(propsOptions, subOptionKey)
    const {
      options: unMatchedOptions,
      values: matchedValues
    } = matchOptionsAndValues(options, values, subOptionKey)

    // 值和选项可以完全匹配
    if (unMatchedOptions == null) {
      return { values, options, render: true }
    }

    // 值和选项不能完全匹配，需要通知父组件更新，并且不渲染组件
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, subOptionKey)
    const newValues = matchedValues.concat(surplusDefaultValues)
    const valueObjects = getValueObjects(options, newValues, subOptionKey)
    onChange(valueObjects)
    return { options, render: false }
  }

  /**
   * 处理非受控组件
   */
  static handleUnControlledComponent (props, state) {
    const { options: propsOptions, subOptionKey, onChange } = props
    const options = getOptions(propsOptions, subOptionKey)
    const { values } = state
    const {
      options: unMatchedOptions,
      values: matchedValues
    } = matchOptionsAndValues(options, values, subOptionKey)

    // 值和选项可以完全匹配
    if (unMatchedOptions == null) {
      return { options, render: true }
    }
    // 值和选项不能完全匹配，更新值并渲染组件
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, subOptionKey)
    const newValues = matchedValues.concat(surplusDefaultValues)

    const valueObjects = getValueObjects(options, newValues, subOptionKey)
    onChange(valueObjects)
    return { values: newValues, options, render: true }
  }

  /**
   * 判断是否受控组件，进行相应处理
   */
  static getDerivedStateFromProps (props, state) {
    const { values } = props
    if (values) {
      return MultiLevelSelector.handleControlledComponent(props, state)
    }
    return MultiLevelSelector.handleUnControlledComponent(props, state)
  }

  render () {
    const { className } = this.props
    const { render, options } = this.state

    if (!render) {
      return null
    }

    return (
      <InlineBlockDiv className={className}>
        { this.renderSelector(0, options) }
      </InlineBlockDiv>
    )
  }

  /**
   * 渲染第 index 个 Selector
   */
  renderSelector (index, options) {
    const { values } = this.state
    const { Selector, selectorClassName, subOptionKey } = this.props

    // 没有渲染完成
    if (values.length > index) {
      const value = values[index]
      const selectorOptions = transformObjectToArray(options)
      const selectedItem = options[value]

      return (
        <Fragment>
          <Selector
            value={value}
            options={selectorOptions}
            onChange={(value) => {
              this.handleOnChange(value, index, options)
            }}
            className={selectorClassName}
          />
          { this.renderSelector(index + 1, selectedItem[subOptionKey]) }
        </Fragment>
      )
    }
    return null
  }

  /**
   * 处理选中事件
   */
  handleOnChange (value, index, options) {
    const { subOptionKey } = this.props
    const { values } = this.state

    const invariableValues = values.slice(0, index)
    const selectedItem = options[value]

    let subOptions = selectedItem[subOptionKey]
    const variableValues = getDefaultValuesByOptions(subOptions, subOptionKey)
    const newValues = invariableValues.concat([value]).concat(variableValues)

    this.setValues(newValues)
  }

  setValues (newValues) {
    const { options } = this.state
    const { values, onChange, subOptionKey } = this.props
    if (!values) {
      this.setState({
        values: newValues
      })
    }
    const valueObjects = getValueObjects(options, newValues, subOptionKey)
    onChange(valueObjects)
  }
}

MultiLevelSelector.defaultProps = {
  className: '',
  selectorClassName: '',

  values: null,
  defaultValues: null,
  options: [],
  subOptionKey: 'item',
  Selector: NativeSelector,
  onChange: () => {}
}

MultiLevelSelector.propTypes = {
  className: PropTypes.string,
  selectorClassName: PropTypes.string,

  values: PropTypes.array,
  defaultValues: PropTypes.array,
  options: PropTypes.array,
  subOptionKey: PropTypes.string,
  Selector: PropTypes.func,
  onChange: PropTypes.func
}

export default MultiLevelSelector
