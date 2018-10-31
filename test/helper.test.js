/* global test, expect */
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject
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
      { id: 'Beijing', value: 'Beijing' }
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
      'Beijing': { value: 'Beijing' }
    }
  },
  'United States': {
    value: 'United States',
    item: {
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
  expect(transformObjectToArray(objectOptions))
    .toEqual(arrayOptionsDeep1)
})

test('transformObjectToArray', () => {
  expect(transformObjectToArray({}))
    .toEqual([])
})

test('transformObjectToArray', () => {
  expect(transformObjectToArray(valueObjectsOptions))
    .toEqual([
      { id: 'Guangdong', value: 'Guangdong' },
      { id: 'Beijing', value: 'Beijing', text: 'China - Beijing' }
    ])
})

test('getDefaultValuesByOptions', () => {
  expect(getDefaultValuesByOptions(objectOptions, 'item'))
    .toEqual(['China', 'Guangdong', 'Guangzhou'])
})

test('getDefaultValuesByOptions', () => {
  expect(getDefaultValuesByOptions({}, 'item'))
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
        'Beijing': { value: 'Beijing' }
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
