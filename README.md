# rc-multi-level-selector

[![npm](https://img.shields.io/npm/v/rc-multi-level-selector.svg)](https://www.npmjs.com/package/rc-multi-level-selector)
[![rc-multi-level-selector](https://img.shields.io/npm/dm/rc-multi-level-selector.svg)](https://www.npmjs.com/package/rc-multi-level-selector)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shianqi/rc-multi-level-selector/master/LICENSE)

A React multilevel selector component.

## Demos

[https://shianqi.github.io/rc-multi-level-selector/](https://shianqi.github.io/rc-multi-level-selector/)

## Installation

Install `rc-multi-level-selector` as a dependency

```bash
# Yarn
$ yarn add rc-multi-level-selector

# NPM
$ npm install --save rc-multi-level-selector
```

## Props

These are all of the available props (and their default values) for the main `<MultiLevelSelector />` component.

```javascript
{
  className: '',
  selectClassName: '',

  options: [],
  subOptionKey: 'item',
  Selector: NativeSelector,
  onChange: () => {},
  onDefaultValue: () => {}
}
```

## Example

```javascript
import MultiLevelSelector from 'rc-multi-level-selector'

const options = [
  {
    id: 1, value: 'item 1',
    item: [ { id: 2, value: 'item 2' }, { id: 3, value: 'item 3' } ]
  },
  {
    id: 4, value: 'item 4',
    item: [ { id: 5, value: 'item 5' }, { id: 6, value: 'item 6' } ]
  }
]

...
<MultiLevelSelector
  options={options}
/>
...

```

## Features

- [x] Enable custom subOption key
- [x] Enable fixed value
- [x] Enable 'defaultValue' key for option
- [x] Enable onDefaultValue
- [x] Example with custom style
- [ ] Add default selector not NativeSelector
- [ ] Add ScrollSelector

## Docs

- [ ] Use Material UI demo
- [ ] Enable Custom selector
