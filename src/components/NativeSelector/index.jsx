import React from 'react'
import PropTypes from 'prop-types'
import Select from './Select'

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
      <Select
        value={value}
        ref={this.ref}
        onChange={onChange}
        className={className}
      >
        {this.renderOptions()}
      </Select>
    )
  }
}

NativeSelector.defaultProps = {
  className: '',
  options: [],
  value: '',
  onSelect: () => {},
}

NativeSelector.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onSelect: PropTypes.func,
}

export default NativeSelector
