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
          en: 'Installation & Usage',
          zh: '安装 & 使用'
        },
        path: '/getting-started/installation'
      }
    ]
  },
  {
    name: {
      en: 'Custom Select',
      zh: '自定义样式'
    },
    path: '/custom-select',
    children: [
      {
        name: {
          en: 'Basics',
          zh: '基本'
        },
        path: '/custom-select/basics'
      },
      {
        name: {
          en: 'Use Material-UI',
          zh: '使用 Material-UI'
        },
        path: '/custom-select/material-ui'
      }
    ]
  },
  {
    name: {
      en: 'Advanced Usage',
      zh: '高级用法'
    },
    path: '/advanced-usage',
    children: [
      {
        name: {
          en: 'Basics',
          zh: '基本'
        },
        path: '/advanced-usage/basics'
      }, {
        name: {
          en: 'Uncontrolled component',
          zh: '非受控组件'
        },
        path: '/advanced-usage/uncontrolled-component'
      }, {
        name: {
          en: 'Controlled component',
          zh: '受控组件'
        },
        path: '/advanced-usage/controlled-component'
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
          en: 'Basics',
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