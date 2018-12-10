import React from 'react'
import PropTypes from 'prop-types'

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
    const {
      value,
      onChange,
      className,
      style
    } = this.props

    return (
      <select
        style={style}
        value={value}
        ref={this.ref}
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
}

NativeSelector.defaultProps = {
  style: {},
  className: '',
  options: [],
  value: ''
}

NativeSelector.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default NativeSelector
