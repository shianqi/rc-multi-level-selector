import React, { Fragment } from 'react'

import Selector from './NativeSelector/index'
import OutsideClickHandler from '../shared/components/OutsideClickHandler'
import styles from './index.css'

const initValue = (options) => {
  const value = []
  let opts = options
  while (opts && opts.length && opts.length > 0) {
    value.push(0)
    opts = opts[0].item
  }
  return value
}

class App extends React.PureComponent {
  constructor (props) {
    super(props)

    const { options } = props

    this.state = {
      value: initValue(options),
      open: false,
    }

    this.handleOnOpen = this.handleOnOpen.bind(this)
    this.handleOnClose = this.handleOnClose.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderSelector = this.renderSelector.bind(this)
    this.renderMultiLevelSelector = this.renderMultiLevelSelector.bind(this)
  }

  handleOnOpen () {
    this.setState({
      open: true,
    })
  }

  handleOnClose () {
    this.setState({
      open: false,
    })
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
          />
          { this.renderSelector(index + 1, itemSelected.item) }
        </Fragment>
      )
    }
    return null
  }

  renderMultiLevelSelector () {
    const { options } = this.props

    return (
      <div className={styles.selectors}>
        { this.renderSelector(0, options) }
      </div>
    )
  }

  render () {
    const { open } = this.state
    return (
      <OutsideClickHandler
        onOutsideClick={this.handleOnClose}
        className={styles.container}
      >
        <span
          onClick={this.handleOnOpen}
        >
          hello world?
        </span>
        { open && this.renderMultiLevelSelector() }
      </OutsideClickHandler>
    )
  }
}

App.defaultProps = {
  onChange: () => {},
  options: [
    {
      id: 1,
      value: 'item 1',
      item: [
        {
          id: 2,
          value: 'item 2',
          item: [
            {
              id: 3,
              value: 'item 3',
            },
            {
              id: 4,
              value: 'item 4',
            },
          ],
        },
        {
          id: 5,
          value: 'item 5',
        },
      ],
    },
    {
      id: 6,
      value: 'item 6',
      item: [
        {
          id: 7,
          value: 'item 7',
        },
        {
          id: 8,
          value: 'item 8',
        },
      ],
    },
  ],
}

export default App
