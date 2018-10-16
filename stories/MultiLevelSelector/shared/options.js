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

export default options
