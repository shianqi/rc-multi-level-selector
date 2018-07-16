# rc-multi-level-selector

## props

These are all of the available props (and their default values) for the main `<MultiLevelSelector />` component.

```javascript
{
  className: '',
  selectClassName: '',
  onChange: () => {},
  options: [],
}
```

## example

```javascript
const options = [
  {
    id: 1,
    value: 'item 1',
    item: [
      {
        id: 2,
        value: 'item 2',
        item: [
          { id: 3, value: 'item 3' },
          { id: 4, value: 'item 4' },
        ],
      },
      { id: 5, value: 'item 5' },
    ],
  },
  {
    id: 6,
    value: 'item 6',
    item: [
      { id: 7, value: 'item 7' },
      { id: 8, value: 'item 8' },
    ],
  },
]

...
<MultiLevelSelector
  options={options}
/>
...

```
