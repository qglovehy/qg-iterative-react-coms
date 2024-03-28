export const state = {
  token: '',
  username: '', //用户名
  roleType: '', //角色类型
  currentMenuItem: '/', //当前菜单路由
  collapsed: false, ////当前菜单路由
  menuWidth: 256, //菜单宽度
  loading: false, //全屏loading
  loadingText: '', //loading文本
  openMenuDraw: false, //是否打开菜单抽屉
  socketId: null, //websocket通信id
  os: null, //操作系统位数
  mac: null, //主机MAC地址
  configInfo: null, //软件配置信息
  isWinSizeMax: false, //是否最大化
};

//预设状态
export const prevState = {
  collapsed: false, //当前菜单路由
  menuWidth: 256, //菜单宽度

  loading: false, //全屏loading
  loadingText: '', //loading文本

  openMenuDraw: false, //是否打开菜单抽屉
};
