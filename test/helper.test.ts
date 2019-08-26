/* global test, expect */
import {
  getValueObjects,
  matchOptionsAndValues,
  transformObjectToArray,
  getDefaultValuesByOptions,
  deepTransformArrayToObject,
  deepFormatObjectOptions,
  addNullOptions
} from '../lib/helper'

const arrayOptions = [
  {
    id: 'China',
    value: 'China',
    items: [
      {
        id: 'Guangdong',
        value: 'Guangdong',
        items: [
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
    items: [{ id: 'California', value: 'California' }]
  }
]

const objectOptions = {
  China: {
    value: 'China',
    items: {
      Guangdong: {
        value: 'Guangdong',
        items: {
          Guangzhou: { value: 'Guangzhou' },
          Shenzhen: { value: 'Shenzhen' }
        }
      },
      Beijing: { value: 'Beijing', text: 'China - Beijing' }
    }
  },
  'United States': {
    value: 'United States',
    items: {
      California: { value: 'California' }
    }
  }
}

const objectOptionsWithNullOptions = {
  NullOption: {
    value: '请选择'
  },
  China: {
    value: 'China',
    items: {
      NullOption: {
        value: '请选择'
      },
      Guangdong: {
        value: 'Guangdong',
        items: {
          NullOption: {
            value: '请选择'
          },
          Guangzhou: { value: 'Guangzhou' },
          Shenzhen: { value: 'Shenzhen' }
        }
      },
      Beijing: { value: 'Beijing', text: 'China - Beijing' }
    }
  },
  'United States': {
    value: 'United States',
    items: {
      NullOption: {
        value: '请选择'
      },
      California: { value: 'California' }
    }
  }
}

const valueObjectsOptions = {
  Guangdong: { value: 'Guangdong' },
  Beijing: { value: 'Beijing', text: 'China - Beijing' }
}

const arrayOptionsDeep1 = [
  { id: 'China', value: 'China' },
  { id: 'United States', value: 'United States' }
]

test('transformObjectToArray', () => {
  expect(
    transformObjectToArray(objectOptions, {
      id: 'NullOption',
      value: '请选择',
      display: false
    })
  ).toEqual(arrayOptionsDeep1)
})

test('transformObjectToArray', () => {
  expect(
    transformObjectToArray(
      {},
      {
        id: 'NullOption',
        value: '请选择',
        display: false
      }
    )
  ).toEqual([])
})

test('transformObjectToArray', () => {
  expect(
    transformObjectToArray(valueObjectsOptions, {
      id: 'NullOption',
      value: '请选择',
      display: false
    })
  ).toEqual([
    { id: 'Guangdong', value: 'Guangdong' },
    { id: 'Beijing', value: 'Beijing', text: 'China - Beijing' }
  ])
})

const errorObjectOptions = {
  China: {
    value2: 'China',
    items2: {
      Guangdong: {
        value2: 'Guangdong',
        items2: {
          Guangzhou: { value2: 'Guangzhou' },
          Shenzhen: { value2: 'Shenzhen' }
        }
      },
      Beijing: { value2: 'Beijing', text: 'China - Beijing' }
    }
  },
  'United States': {
    value2: 'United States',
    items2: {
      California: { value2: 'California' }
    }
  }
}

test('deepFormatObjectOptions', () => {
  expect(deepFormatObjectOptions(objectOptions, option => option)).toEqual(
    objectOptions
  )
})

test('deepFormatObjectOptions', () => {
  expect(
    deepFormatObjectOptions(errorObjectOptions, option => {
      const { value2, items2, ...otherOption } = option
      return {
        value: value2,
        items: items2,
        ...otherOption
      }
    })
  ).toEqual(objectOptions)
})

test('getDefaultValuesByOptions', () => {
  expect(
    getDefaultValuesByOptions(
      objectOptions,
      {
        id: 'NULL',
        value: 'NULL',
        display: true
      },
      true
    )
  ).toEqual(['China', 'Guangdong', 'Guangzhou'])
})

test('getDefaultValuesByOptions', () => {
  expect(
    getDefaultValuesByOptions(
      {},
      {
        id: 'NULL',
        value: 'NULL',
        display: true
      },
      true
    )
  ).toEqual([])
})

test('matchOptionsAndValues', () => {
  expect(matchOptionsAndValues(objectOptions, ['China', 'ShangHai'])).toEqual({
    options: {
      Guangdong: {
        value: 'Guangdong',
        items: {
          Guangzhou: { value: 'Guangzhou' },
          Shenzhen: { value: 'Shenzhen' }
        }
      },
      Beijing: { value: 'Beijing', text: 'China - Beijing' }
    },
    values: ['China']
  })
})

test('matchOptionsAndValues', () => {
  expect(
    matchOptionsAndValues(objectOptions, ['China', 'Guangdong', 'Shenzhen'])
  ).toEqual({
    options: null,
    values: ['China', 'Guangdong', 'Shenzhen']
  })
})

test('getValueObjects', () => {
  expect(
    getValueObjects(objectOptions, ['China', 'Guangdong', 'Shenzhen'])
  ).toEqual([
    { id: 'China', value: 'China' },
    { id: 'Guangdong', value: 'Guangdong' },
    { id: 'Shenzhen', value: 'Shenzhen' }
  ])
})

test('deepTransformArrayToObject', () => {
  expect(deepTransformArrayToObject(arrayOptions, options => options)).toEqual(
    objectOptions
  )
})

test('deepTransformArrayToObject', () => {
  expect(
    deepTransformArrayToObject(
      [{ id: 'level2', value: 'level2', items: [], level: 2 }],
      options => {
        const { level } = options
        if (level > 0) {
          return {
            ...options,
            items: [
              {
                id: `level${level - 1}-1`,
                value: `level${level - 1}-1`,
                level: level - 1
              },
              {
                id: `level${level - 1}-2`,
                value: `level${level - 1}-2`,
                level: level - 1
              }
            ]
          }
        }
        return options
      }
    )
  ).toEqual({
    level2: {
      items: {
        'level1-1': {
          items: {
            'level0-1': { level: 0, value: 'level0-1' },
            'level0-2': { level: 0, value: 'level0-2' }
          },
          level: 1,
          value: 'level1-1'
        },
        'level1-2': {
          items: {
            'level0-1': { level: 0, value: 'level0-1' },
            'level0-2': { level: 0, value: 'level0-2' }
          },
          level: 1,
          value: 'level1-2'
        }
      },
      level: 2,
      value: 'level2'
    }
  })
})

test('addNullOptions', () => {
  expect(
    addNullOptions(objectOptions, {
      id: 'NullOption',
      value: '请选择',
      display: false
    })
  ).toEqual(objectOptionsWithNullOptions)
})
