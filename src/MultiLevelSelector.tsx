import * as React from 'react'
import {
  ObjectOptionsType,
  SelectorProps,
  NullOption,
  OptionFormateType
} from './type'

import NativeSelector from './NativeSelector/index'
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject,
  deepFormatObjectOptions,
  addNullOptions
} from './helper'

type OnMultiLevelSelectorChange = (valueObjects: {}) => void

type GetOptionsKey = (option: any, value: string, index: number) => string

interface MultiLevelSelectorProps {
  className?: string,
  selectorClassName? :string,
  options: any,
  optionFormat: OptionFormateType,
  values?: string[],
  defaultValues?: [],
  onChange?: OnMultiLevelSelectorChange,
  autoSelect?: boolean,
  nullOption?: NullOption,
  getOptionsKey?: GetOptionsKey,
  Selector?: React.ComponentType<SelectorProps>
}

interface MultiLevelSelectorState {
  values: string[],
  render: boolean,
  options?: ObjectOptionsType,
}

class MultiLevelSelector extends React.PureComponent<MultiLevelSelectorProps, MultiLevelSelectorState> {
  constructor (props: MultiLevelSelectorProps) {
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
  static handleControlledComponent (props: MultiLevelSelectorProps, state: MultiLevelSelectorState) {
    const {
      values,
      onChange,
      nullOption,
      autoSelect,
    } = props

    const options = this.getOptions(props, state)
    const {
      options: unMatchedOptions,
      values: matchedValues
    } = matchOptionsAndValues(options, values)

    // 值和选项可以完全匹配
    if (unMatchedOptions == null) {
      return { values, options, render: true }
    }

    // 值和选项不能完全匹配，需要通知父组件更新，并且不渲染组件
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, nullOption, autoSelect)
    const newValues = matchedValues.concat(surplusDefaultValues)
    const valueObjects = getValueObjects(options, newValues)
    onChange(valueObjects)
    return { options, render: false }
  }

  /**
   * 处理非受控组件
   */
  static handleUnControlledComponent (props: MultiLevelSelectorProps, state: MultiLevelSelectorState) {
    const {
      onChange,
      autoSelect,
      nullOption
    } = props
    const options = this.getOptions(props, state)
    const { values } = state

    const {
      options: unMatchedOptions,
      values: matchedValues
    } = matchOptionsAndValues(options, values)

    // 值和选项可以完全匹配
    if (unMatchedOptions == null) {
      return { options, render: true }
    }
    // 值和选项不能完全匹配，更新值并渲染组件
    const surplusDefaultValues = getDefaultValuesByOptions(unMatchedOptions, nullOption, autoSelect)
    const newValues = matchedValues.concat(surplusDefaultValues)

    const valueObjects = getValueObjects(options, newValues)
    onChange(valueObjects)
    return { values: newValues, options, render: true }
  }

  /**
   * 判断是否受控组件，进行相应处理
   */
  static getDerivedStateFromProps (props: MultiLevelSelectorProps, state: MultiLevelSelectorState) {
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
      <span className={className}>
        { Selectors }
      </span>
    )
  }

  static getOptions (props: MultiLevelSelectorProps, state: MultiLevelSelectorState) {
    const {
      options,
      nullOption,
      autoSelect,
      optionFormat
    } = props

    let newOptions
    if (Array.isArray(options)) {
      newOptions = deepTransformArrayToObject(options, optionFormat)
    } else if (typeof options === 'object') {
      newOptions = deepFormatObjectOptions(options, optionFormat)
    }

    if (newOptions) {
      if (autoSelect) {
        return newOptions
      }
      return addNullOptions(newOptions, nullOption)
    }
    throw new Error('"options" must be an array or an object')
  }

  /* global JSX */
  /**
   * 获取第index个需要渲染的 Selector
   * @param {*} index
   * @param {*} options
   */
  getSelector (
    index: number,
    options: ObjectOptionsType,
    OptionsSelector: React.ComponentType<SelectorProps>
  ): JSX.Element[] {
    const { values } = this.state
    const {
      Selector: PropsSelector,
      selectorClassName,
      nullOption,
      getOptionsKey
    } = this.props

    // 没有渲染完成
    if (values.length > index) {
      const value = values[index]
      const selectorOptions = transformObjectToArray(options, nullOption)
      const selectedItem = options[value]

      const Selector: React.ComponentType<SelectorProps> = OptionsSelector || PropsSelector

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
          selectedItem.items,
          selectedItem.Selector
        )
      )
    }
    return []
  }

  /**
   * 处理选中事件
   */
  handleOnChange (value: string, index: number, options: ObjectOptionsType) {
    const { nullOption, autoSelect } = this.props
    const { values } = this.state

    const invariableValues = values.slice(0, index)
    const selectedItem = options[value]

    let subOptions = selectedItem.items
    const variableValues = getDefaultValuesByOptions(subOptions, nullOption, autoSelect)
    const newValues = invariableValues.concat([value]).concat(variableValues)

    this.setValues(newValues)
  }

  setValues (newValues: string[]) {
    const { options } = this.state
    const { values, onChange } = this.props
    if (!values) {
      this.setState({
        values: newValues
      })
    }
    const valueObjects = getValueObjects(options, newValues)
    onChange(valueObjects)
  }

  static defaultProps: MultiLevelSelectorProps = {
    className: '',
    selectorClassName: '',

    options: [],
    optionFormat: (option) => (option),
    values: null,
    defaultValues: [],
    onChange: () => {},
    autoSelect: true,
    getOptionsKey: (option, value, index) => (`${value}-${index}`),
    nullOption: {
      id: 'NULL',
      value: 'NULL',
      display: true
    },
    Selector: NativeSelector
  }
}

export default MultiLevelSelector
