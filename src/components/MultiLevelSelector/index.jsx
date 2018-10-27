import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import styled from 'styled-components'

import NativeSelector from '../NativeSelector/index'
import { arrayEquals } from '../../utils'

const InlineBlockDiv = styled.div`
  display: inline-block;
`

const getOptionById = (options, id) => {
  if (options.length <= 0) {
    return null
  }
  if (!id) {
    return options[0]
  }
  return options.find(item => (`${item.id}` === `${id}`))
}

const getValueByOptions = (options) => {
  let opt = options
  const newValue = []

  while (Array.isArray(opt)) {
    if (opt.length <= 0) {
      break
    }
    const { item, id } = getOptionById(opt)
    newValue.push(id)
    opt = item
  }
  return newValue
}

class MultiLevelSelector extends React.Component {
  constructor (props) {
    super(props)

    const { options, defaultValue, value } = props
    this.oldOptions = options
    this.state = {
      value: defaultValue || value || getValueByOptions(options)
    }
    this.state = {
      value: this.updateValue(props, value)
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
  }

  componentDidMount () {
    const { onDefaultValue } = this.props
    const value = this.getValue()
    onDefaultValue && onDefaultValue(this.getObjectsByValue(value))
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { props, state } = this
    const nextPropsMap = Map(nextProps)
    const nextStateMap = Map(nextState)
    const propsMap = Map(props)
    const stateMap = Map(state)

    if (nextPropsMap.equals(propsMap) && nextStateMap.equals(stateMap)) {
      return false
    }
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    const newValue = this.updateValue(nextProps, nextState)
    let value

    if (nextProps.value) {
      value = this.getValue()
    } else {
      value = nextState.value
    }

    if (!arrayEquals(newValue, value)) {
      this.setValue(newValue)
    }
  }

  getValue (state) {
    const { value: stateValue = [] } = state || this.state || {}
    const { value: propsValue } = this.props

    return propsValue || stateValue
  }

  setValue (value) {
    const { value: propsValue, onChange } = this.props

    if (!propsValue) {
      this.setState({ value }, () => {
        onChange && onChange(this.getObjectsByValue(value))
      })
    } else {
      onChange && onChange(this.getObjectsByValue(value))
    }
  }

  getObjectsByValue (value) {
    const { options } = this.props
    let opts = options
    let objects = []

    while (Array.isArray(opts)) {
      if (opts.length <= 0) {
        break
      }
      const index = objects.length
      const option = getOptionById(opts, value[index])
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

  updateValue (props, state) {
    const oldValue = this.getValue(state)

    const { options } = props
    let opts = options
    let newValue = []

    while (Array.isArray(opts)) {
      if (opts.length <= 0) {
        break
      }
      const index = newValue.length
      if (oldValue[index] == null) {
        const tail = getValueByOptions(opts)
        newValue = newValue.concat(tail)
        break
      }
      const option = getOptionById(opts, oldValue[index])
      if (option) {
        const { item, id } = option
        newValue.push(id)
        opts = item
      } else {
        const tail = getValueByOptions(opts)
        newValue = newValue.concat(tail)
        break
      }
    }
    return newValue
  }

  handleOnChange (id, index, subOptions) {
    const { subOptionKey } = this.props
    const value = this.getValue()

    const head = value.slice(0, index)
    const itemIndex = subOptions.findIndex((item) => (`${item.id}` === `${id}`))

    let opts = subOptions[itemIndex][subOptionKey]
    const tail = getValueByOptions(opts)
    const res = [...head, id, ...tail]

    this.setValue(res)
  }

  renderSelector (index, options) {
    if (options && options.length) {
      const {
        selectClassName,
        subOptionKey,
        Selector
      } = this.props

      const value = this.getValue()
      const selectIndex = value[index]
      const itemSelected = getOptionById(options, selectIndex)

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

  value: null,
  defaultValue: null,
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
  defaultValue: PropTypes.array,
  options: PropTypes.array,
  subOptionKey: PropTypes.string,
  Selector: PropTypes.func,
  onChange: PropTypes.func,
  onDefaultValue: PropTypes.func
}

export default MultiLevelSelector
