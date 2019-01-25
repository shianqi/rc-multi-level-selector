# <a href='https://shianqi.github.io/rc-multi-level-selector/'><img src='https://shianqi.github.io/rc-multi-level-selector/static/images/logo@1x.png' height='93' width='248' alt='RC-multi-level-selector Logo' aria-label='shianqi.github.io/rc-multi-level-selector' /></a>

[![npm](https://img.shields.io/npm/v/rc-multi-level-selector.svg)](https://www.npmjs.com/package/rc-multi-level-selector)
[![rc-multi-level-selector](https://img.shields.io/npm/dm/rc-multi-level-selector.svg)](https://www.npmjs.com/package/rc-multi-level-selector)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shianqi/rc-multi-level-selector/master/LICENSE)

React components that focus on handling multiple selector cascading relationships

## Documentation

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

|key|type|default value|description|
|---|---|---|---|
| `className?` | `string` | `''` | Apply a className to the control |
| `selectorClassName?` | `string` | `''` | Apply classNames to Selector elements |
| `options` | `object[]` &#124; `object` | `[]` | Specify the options the user can select from |
| `values?` | `string[]` | `[]` | Control the current values |
| `defaultValues?` | `string[]` | `[]` | The initial value passed to the uncontrolled component |
| `onChange?` | `function` | `() => {}` | Subscribe to change events |
| `optionFormat?` | `function` | `(option) => (option)` | Custom subcomponent options |
| `Selector?` | `function` &#124; `object` | [`NativeSelector`](./src/NativeSelector/index.jsx) | Use a custom selector component |
| `getOptionsKey?` | `function` | `(option, value, index) => (value + '-' + index)` | Get keys to help React identify which items have changed |
| `autoSelect?` | `bool` | `true` | Automatically select optional options  |
| `nullOption?` | `object` | `{id: 'NULL', value: 'NULL', display: true}` | If `autoSelect` is `false`, selected empty object |

## Example

```javascript
import MultiLevelSelector from 'rc-multi-level-selector'

const options = [
  {
    id: 'China', value: 'China',
    items: [
      {
        id: 'Guangdong', value: 'Guangdong',
        items: [
          { id: 'Guangzhou', value: 'Guangzhou' },
          { id: 'Shenzhen', value: 'Shenzhen' }
        ]
      },
      { id: 'Beijing', value: 'Beijing', text: 'China - Beijing' }
    ]
  },
  {
    id: 'United States', value: 'United States',
    items: [{ id: 'California', value: 'California' }]
  }
]

...
<MultiLevelSelector
  options={options}
/>
...

```

Try it on [CodeSandbox](https://codesandbox.io/s/rj0xlp2o5p)

## License

MIT
