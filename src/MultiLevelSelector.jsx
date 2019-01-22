import React from 'react'
import styled from 'styled-components'

import NativeSelector from './NativeSelector/index'
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject,
  addNullOptions
} from './helper'

const InlineBlockDiv = styled.div`
  display: inline-block;
`

/**
 * 规范 options 为对象结构
 * @param {*} options
 * @param {*} subOptionKey
 */
const getOptions = (options, subOptionKey, nullOption, autoSelect) => {
  let newOptions
  if (Array.isArray(options)) {
    newOptions = deepTransformArrayToObject(options, subOptionKey)
  } else if (typeof options === 'object') {
    newOptions = options
  }

  if (newOptions) {
    if (autoSelect) {
      return newOptions
    }
    return addNullOptions({ options: newOptions, subOptionKey, nullOption })
  }
  throw new Error('"options" must be an array or an object')
}

class MultiLevelSelector extends React.PureComponent {
  constructor (props) {
    super(props)
    const { defaultValues } = this.props
    this.state = {
      values: defaultValues,
      render: true // 是否需要 render 组件
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  /**
   * 处理受控组件
   * 用 propsValues 和 options 匹配，判断是否渲染组件或者更新通知父组件更新状态
   */
  static handleControlledComponent (props, state) {
    const { options: propsOptions, values, onChange, subOptionKey, nullOption, autoSelect } = props
    const options = getOptions(propsOptions, subOptionKey, nullOption, autoSelect)
    const {
      options: unMatchedOptions,
      values: matchedValues
    } = matchOptionsAndValues(options, values, subOptionKey)

    // 值和选项可以完全匹配
    if (unMatchedOptions == null) {
      return { values, options, render: true }
    }

    // 值和选项不能完全匹配，需要通知父组件更新，并且不渲染组件
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, subOptionKey, nullOption, autoSelect)
    const newValues = matchedValues.concat(surplusDefaultValues)
    const valueObjects = getValueObjects(options, newValues, subOptionKey)
    onChange(valueObjects)
    return { options, render: false }
  }

  /**
   * 处理非受控组件
   */
  static handleUnControlledComponent (props, state) {
    const { options: propsOptions, subOptionKey, nullOption, onChange, autoSelect } = props
    const options = getOptions(propsOptions, subOptionKey, nullOption, autoSelect)
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
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, subOptionKey, nullOption, autoSelect)
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
    const { className, Selector } = this.props
    const { render, options } = this.state

    if (!render) {
      return null
    }

    const Selectors = this.getSelector(0, options, Selector)

    return (
      <InlineBlockDiv className={className}>
        { Selectors }
      </InlineBlockDiv>
    )
  }

  /**
   * 获取第index个需要渲染的 Selector
   * @param {*} index
   * @param {*} options
   */
  getSelector (index, options, OptionsSelector) {
    const { values } = this.state
    const {
      Selector: PropsSelector,
      selectorClassName,
      subOptionKey,
      nullOption,
      getOptionsKey
    } = this.props

    // 没有渲染完成
    if (values.length > index) {
      const value = values[index]
      const selectorOptions = transformObjectToArray({ options, nullOption })
      const selectedItem = options[value]

      const Selector = OptionsSelector || PropsSelector

      return [
        <Selector
          key={getOptionsKey(selectorOptions, value, index)}
          value={value}
          options={selectorOptions}
          onChange={(value) => {
            this.handleOnChange(value, index, options)
          }}
          className={selectorClassName}
        />
      ].concat(
        this.getSelector(
          index + 1,
          selectedItem[subOptionKey],
          selectedItem.Selector || PropsSelector
        )
      )
    }
    return []
  }

  /**
   * 处理选中事件
   */
  handleOnChange (value, index, options) {
    const { subOptionKey, nullOption, autoSelect } = this.props
    const { values } = this.state

    const invariableValues = values.slice(0, index)
    const selectedItem = options[value]

    let subOptions = selectedItem[subOptionKey]
    const variableValues = getDefaultValuesByOptions(subOptions, subOptionKey, nullOption, autoSelect)
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

  options: [],
  // TODO:
  values: null,
  defaultValues: [],
  onChange: () => {},
  autoSelect: true,
  subOptionKey: 'item',
  getOptionsKey: (option, value, index) => (`${value}-${index}`),
  nullOption: {
    id: 'NULL',
    value: 'NULL',
    display: true
  },
  Selector: NativeSelector
}

export default MultiLevelSelector
