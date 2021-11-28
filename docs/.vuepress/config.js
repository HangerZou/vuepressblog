module.exports = {
    title: '昕翰博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    plugins: ['demo-container'], // 配置插件
    themeConfig: {
      logo: '/avatar.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '概述', link: '/' },
        {text: 'Vue 学习笔记', items: [
                {text:'笔记', link: '/guide/vue/test03'}, // 可不写后缀 .md
                {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
            ]
        },{
              text: 'Typescript 学习笔记',
              items:[
                  {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
                  {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
              ]
          }


      ],
        sidebar: {//左侧列表
            '/guide/vue/': [
                ['test01', '测试1'],
                ['test02', '测试2'],
                ['test03', '测试3']
            ],
            '/guide/ts/': [
                {
                    title: 'Typescript 学习',
                    collapsable: true,
                    children: [
                        ['test01', '测试1'],
                        ['test02', '测试2'],
                        ['test03', '测试3']
                    ]
                }
            ],
            '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
        }

    }
  };