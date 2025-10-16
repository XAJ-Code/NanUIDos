import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NanUI文档",
  description: "NanUI Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/src/入门/概述' },
      { text: 'GitHub', link: 'https://github.com/vuejs/vitepress' }
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '概述', link: '/src/入门/概述' },
          { text: '创建应用', link: '/src/入门/创建应用' },
          { text: '编译WinFormium框架', link: '/src/入门/编译WinFormium框架' },
          { text: '打包WinFormium应用程序', link: '/src/入门/打包WinFormium应用程序' }
        ]
      },
      {
        text: '窗体',
        collapsed: false,
        items: [
          { text: '概述', link: '/src/窗体/概述' },
          { text: '窗体功能', link: '/src/窗体/窗体功能' },
          { text: '浏览器功能', link: '/src/窗体/浏览器功能' },
          { text: '窗体JavaScript指南', link: '/src/窗体/窗体JavaScript指南' },
          { text: '无标题栏窗体', link: '/src/窗体/无标题栏窗体' },
          { text: '无边框窗体样式', link: '/src/窗体/无边框窗体样式' },
          { text: '系统窗体样式', link: '/src/窗体/系统窗体样式' },
          { text: '透明窗体样式', link: '/src/窗体/透明窗体样式' },
          { text: 'KIOSK窗体样式', link: '/src/窗体/KIOSK窗体样式' },
          { text: '控件样式', link: '/src/窗体/控件样式' }
        ]
      },
      {
        text: '资源配置',
        collapsed: false,
        items: [
          { text: '概述', link: '/src/资源/概述' },
          { text: '嵌入式文件资源', link: '/src/资源/嵌入式文件资源' },
          { text: '本地文件资源', link: '/src/资源/本地文件资源' },
          { text: '数据资源', link: '/src/资源/数据资源' },
          { text: '代理映射资源', link: '/src/资源/代理映射资源' }
        ]
      },
      {
        text: '应用配置',
        collapsed: false,
        items: [
          { text: '概述', link: '/src/配置应用/概述' },
          { text: '启动配置', link: '/src/配置应用/启动配置' },
          { text: '设置CEF运行时', link: '/src/配置应用/设置CEF运行时' },
          { text: '使用子进程', link: '/src/配置应用/使用子进程' },
          { text: '应用程序清单', link: '/src/配置应用/应用程序清单' }
        ]
      },
      {
        text: 'JavaScript交互',
        collapsed: false,
        items: [
          { text: '概述', link: '/src/JavaScript/概述' },
          { text: '注册JavaScript窗体绑定对象', link: '/src/JavaScript/注册JavaScript窗体绑定对象' },
          { text: '在JavaScript中注册.NET映射对象', link: '/src/JavaScript/在JavaScript中注册.NET映射对象' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})