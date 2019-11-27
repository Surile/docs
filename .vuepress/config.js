module.exports = {
  // 设置网站标题
  // 设置输出目录
  dest: './dist',
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'
  base: '/',
  // 添加 github 链接，但是这个要放在公司的内网服务器，所以为空
  // repo: '',
  //   head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    search: false,
    sidebar: 'auto',
    smoothScroll: true
    // navbar: false
    // nav: [
    //   {
    //     text: 'Languages',
    //     ariaLabel: 'Language Menu',
    //     items: [
    //       { text: 'Chinese', link: '/language/chinese/' },
    //       { text: 'Japanese', link: '/language/japanese/' }
    //     ]
    //   }
    // ]
  }
}
