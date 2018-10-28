const options = [
  {
    id: 'China',
    value: 'China',
    item: [
      { id: 'Beijing', value: 'Beijing' },
      {
        id: 'Guangdong',
        value: 'Guangdong',
        item: [
          { id: 'Guangzhou', value: 'Guangzhou' },
          { id: 'Shenzhen', value: 'Shenzhen' }
        ]
      }
    ]
  },
  {
    id: 'United States',
    value: 'United States',
    item: [
      {
        id: 'California',
        value: 'California',
        item: [
          { id: 'Los Angeles', value: 'Los Angeles' },
          { id: 'San Diego', value: 'San Diego' }
        ]
      },
      { id: 'New York', value: 'New York' }
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
      'California': {
        value: 'California',
        item: {
          'Los Angeles': { value: 'Los Angeles' },
          'San Diego': { value: 'San Diego' }
        }
      },
      'New York': { value: 'New York' }
    }
  }
}

export default objectOptions
