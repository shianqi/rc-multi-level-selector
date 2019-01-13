export default [
  {
    name: {
      en: 'Getting Started',
      zh: '开始'
    },
    path: '/getting-started',
    children: [
      {
        name: {
          en: 'Installation',
          zh: '安装'
        },
        path: '/getting-started/installation'
      },
      {
        name: {
          en: 'Usage',
          zh: '使用'
        },
        path: '/getting-started/usage'
      }
    ]
  },
  {
    name: {
      en: 'Custom Select',
      zh: '自定义选择器'
    },
    path: '/custom-select',
    children: [
      {
        name: {
          en: 'basics',
          zh: '基本'
        },
        path: '/custom-select/basics'
      },
      {
        name: {
          en: 'use Material-UI',
          zh: '使用 Material-UI'
        },
        path: '/custom-select/material-ui'
      }
    ]
  },
  {
    name: {
      en: 'API',
      zh: 'API'
    },
    path: '/api',
    children: [
      {
        name: {
          en: 'MultiLevelSelector',
          zh: 'MultiLevelSelector'
        },
        path: '/api/MultiLevelSelector'
      },
      {
        name: {
          en: 'NativeSelector',
          zh: 'NativeSelector'
        },
        path: '/api/NativeSelector'
      }
    ]
  },
  {
    name: {
      en: 'Example',
      zh: '例子'
    },
    path: '',
    children: [
      {
        name: {
          en: 'basics',
          zh: '基础'
        },
        path: '/example/basics'
      },
      {
        name: {
          en: 'Single Location',
          zh: '单地点选择器'
        },
        path: '/example/single-location'
      },
      {
        name: {
          en: 'Multiple Locations',
          zh: '多地点选择器'
        },
        path: '/example/multiple-locations'
      }
    ]
  }
]
