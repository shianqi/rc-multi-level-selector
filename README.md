# rc-multi-level-selector

A React multilevel selector component.

## Demos

[https://shianqi.github.io/rc-multi-level-selector/](https://shianqi.github.io/rc-multi-level-selector/)

## Installation

Install `rc-multi-level-selector` as a dependency

```shell
# Yarn
$ yarn add rc-multi-level-selector

# NPM
$ npm install --save rc-multi-level-selector
```

## Props

These are all of the available props (and their default values) for the main `<MultiLevelSelector />` component.

```javascript
{
  style: {},
  className: '',
  selectClassName: '',

  options: [],
  subOptionKey: 'item',

  onChange: () => {},
  onDefaultValue: () => {},
}
```

## Example

```javascript
import MultiLevelSelector from 'rc-multi-level-selector'

const options = [
  {
    id: 1, value: 'item 1',
    item: [ { id: 2, value: 'item 2' }, { id: 3, value: 'item 3' } ],
  },
  {
    id: 4, value: 'item 4',
    item: [ { id: 5, value: 'item 5' }, { id: 6, value: 'item 6' } ],
  },
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
