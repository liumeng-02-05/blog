module.exports ={
  title: '前端扬灵',
  description : '扬灵的个人博客',
  base: '/yl-docs/',
  head:[
    [['link', { rel: 'icon', href: '/logo.png' }]]
  ],
  themeConfig:{
    nav : [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/guide/': [
        {
          title: '文档',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '常见问题',
          collapsable: false,
          children: [
            'common/SSH',
            'common/gitInit',
            'common/nginx'
          ]
        },
        {
          title: '业务问题',
          collapsable: false,
          children: [
            'business/web'
          ]
        },
        {
          title: '项目问题',
          collapsable: false,
          children: [
            'project/web'
          ]
        },
      ]
    }
  }
}