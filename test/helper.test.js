/* global test, expect */
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject,
  addNullOptions
} from '../src/helper'

const arrayOptions = [
  {
    id: 'China',
    value: 'China',
    item: [
      {
        id: 'Guangdong',
        value: 'Guangdong',
        item: [
          { id: 'Guangzhou', value: 'Guangzhou' },
          { id: 'Shenzhen', value: 'Shenzhen' }
        ]
      },
      { id: 'Beijing', value: 'Beijing', text: 'China - Beijing' }
    ]
  },
  {
    id: 'United States',
    value: 'United States',
    item: [
      { id: 'California', value: 'California' }
    ]
  }
]

const objectOptions = {
  'China': {
    value: 'China',
    item: {
      'Guangdong': {
        value: 'Guangdong',
        item: {
          'Guangzhou': { value: 'Guangzhou' },
          'Shenzhen': { value: 'Shenzhen' }
        }
      },
      'Beijing': { value: 'Beijing', text: 'China - Beijing' }
    }
  },
  'United States': {
    value: 'United States',
    item: {
      'California': { value: 'California' }
    }
  }
}

const objectOptionsWithNullOptions = {
  'NullOption': {
    value: '请选择'
  },
  'China': {
    value: 'China',
    item: {
      'NullOption': {
        value: '请选择'
      },
      'Guangdong': {
        value: 'Guangdong',
        item: {
          'NullOption': {
            value: '请选择'
          },
          'Guangzhou': { value: 'Guangzhou' },
          'Shenzhen': { value: 'Shenzhen' }
        }
      },
      'Beijing': { value: 'Beijing', text: 'China - Beijing' }
    }
  },
  'United States': {
    value: 'United States',
    item: {
      'NullOption': {
        value: '请选择'
      },
      'California': { value: 'California' }
    }
  }
}

const valueObjectsOptions = {
  'Guangdong': { value: 'Guangdong' },
  'Beijing': { value: 'Beijing', text: 'China - Beijing' }
}

const arrayOptionsDeep1 = [
  { id: 'China', value: 'China' },
  { id: 'United States', value: 'United States' }
]

test('transformObjectToArray', () => {
  expect(transformObjectToArray({
    options: objectOptions,
    nullOption: {
      id: 'NullOption',
      value: '请选择',
      display: false
    }
  }))
    .toEqual(arrayOptionsDeep1)
})

test('transformObjectToArray', () => {
  expect(transformObjectToArray({
    options: {},
    nullOption: {
      id: 'NullOption',
      value: '请选择',
      display: false
    }
  }))
    .toEqual([])
})

test('transformObjectToArray', () => {
  expect(transformObjectToArray({
    options: valueObjectsOptions,
    nullOption: {
      id: 'NullOption',
      value: '请选择',
      display: false
    }
  }))
    .toEqual([
      { id: 'Guangdong', value: 'Guangdong' },
      { id: 'Beijing', value: 'Beijing', text: 'China - Beijing' }
    ])
})

test('getDefaultValuesByOptions', () => {
  expect(getDefaultValuesByOptions(
    objectOptions,
    'item',
    {
      id: 'NULL',
      value: 'NULL',
      display: true
    },
    true
  ))
    .toEqual(['China', 'Guangdong', 'Guangzhou'])
})

test('getDefaultValuesByOptions', () => {
  expect(getDefaultValuesByOptions(
    {},
    'item',
    {
      id: 'NULL',
      value: 'NULL',
      display: true
    },
    true
  ))
    .toEqual([])
})

test('matchOptionsAndValues', () => {
  expect(matchOptionsAndValues(objectOptions, ['China', 'ShangHai'], 'item'))
    .toEqual({
      options: {
        'Guangdong': {
          value: 'Guangdong',
          item: {
            'Guangzhou': { value: 'Guangzhou' },
            'Shenzhen': { value: 'Shenzhen' }
          }
        },
        'Beijing': { value: 'Beijing', text: 'China - Beijing' }
      },
      values: ['China']
    })
})

test('matchOptionsAndValues', () => {
  expect(matchOptionsAndValues(objectOptions, ['China', 'Guangdong', 'Shenzhen'], 'item'))
    .toEqual({
      options: null,
      values: ['China', 'Guangdong', 'Shenzhen']
    })
})

test('getValueObjects', () => {
  expect(getValueObjects(objectOptions, ['China', 'Guangdong', 'Shenzhen'], 'item'))
    .toEqual([
      { id: 'China', value: 'China' },
      { id: 'Guangdong', value: 'Guangdong' },
      { id: 'Shenzhen', value: 'Shenzhen' }
    ])
})

test('deepTransformArrayToObject', () => {
  expect(deepTransformArrayToObject(arrayOptions, 'item'))
    .toEqual(objectOptions)
})

test('addNullOptions', () => {
  expect(addNullOptions({
    options: objectOptions,
    subOptionKey: 'item',
    nullOption: {
      id: 'NullOption',
      value: '请选择',
      display: false
    }
  }))
    .toEqual(objectOptionsWithNullOptions)
})
