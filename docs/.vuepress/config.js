module.exports = {
    title: 'GoEcology',
    description: '',
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav: [{
          text: '生态',
          link: '/ecology/'
        },
        {
          text: '了解更多',
          items: [
            { text: 'Github', link: 'https://github.com/goecology' },
            {
              text: '语雀专栏',
              link: 'https://www.yuque.com/goecology'
            }
          ]
        }
      ],
      sidebar: [
          {
              title: '概览',   // 必要的
              path: '/summary/',      // 可选的, 应该是一个绝对路径
              collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/ecology/summary/intro',
              ]
          },
        {
          title: '商城',   // 必要的
          path: '/ecology/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/ecology/egoshop/first',
            '/ecology/egoshop/second',
          ]
        },
          {
              title: '安装',   // 必要的
              path: '/install/',      // 可选的, 应该是一个绝对路径
              collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/ecology/install/golang',
                  '/ecology/install/antdesign',
              ]
          },
        // {
        //   title: 'Group 2',   // 必要的
        //   path: '/foo/',      // 可选的, 应该是一个绝对路径
        //   collapsable: false, // 可选的, 默认值是 true,
        //   sidebarDepth: 1,    // 可选的, 默认值是 1
        //   children: [
        //     '/'
        //   ]
        // },
      ]
    },
  }
