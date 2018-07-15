import React from 'react'
import cs from 'classnames'
import styles from './nativeSelector.css'

class NativeSelector extends React.PureComponent {
  constructor (props) {
    super(props)

    this.ref = React.createRef()
    this.renderOptions = this.renderOptions.bind(this)
  }

  renderOptions () {
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
    const { value, onChange, className } = this.props

    return (
      <select
        value={value}
        ref={this.ref}
        onChange={onChange}
        className={cs(styles.select, className)}
      >
        {this.renderOptions()}
      </select>
    )
  }
}

NativeSelector.defaultProps = {
  className: '',
  options: [],
  value: '',
  onSelect: () => {},
}

export default NativeSelector
