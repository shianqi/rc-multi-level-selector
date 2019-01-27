import * as React from 'react'
import { SelectorProps } from './type'

class NativeSelector extends React.PureComponent<SelectorProps, {}> {
  renderOptions = () => {
    const { options } = this.props

    return options.map((option) => (
      <option
        key={option.id}
        value={option.id}
      >
        {option.value}
      </option>
    ))
  }

  render () {
    const {
      value,
      onChange,
      className,
    } = this.props

    return (
      <select
        value={value}
        onChange={(e) => {
          const { value } = e.target
          onChange(value)
        }}
        className={className}
      >
        {this.renderOptions()}
      </select>
    )
  }

  static defaultProps: SelectorProps = {
    className: '',
    options: [],
    value: '',
    onChange: () => {}
  }
}

export default NativeSelector
