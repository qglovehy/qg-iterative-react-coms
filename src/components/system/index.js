//组件库内置雪碧图svg
import '@/assets';

//==========================组件库组件===================================================
//持久化存储 redux
export { Provider, useDispatch, useSelector } from 'react-redux';
export { PersistGate } from 'redux-persist/lib/integration/react';

export { onResetState, onSetState, setAntdTheme } from '@/store/counter';

export { store, persistence } from '@/store';

export { default as Intl } from './Intl'; //初始化国际化
export { default as IntlDropdown } from './Intl/Components/IntlDropdown'; //国际化组价

export { initDictData, Dict } from '@/utils/dictionaryData'; //初始化字典

export { useSetState, useMediaQuery } from '@/hooks'; //自定义钩子

export { default as BaseList } from './BaseList'; //基础查询表格
export { default as ListBody } from './BaseList/Components/ListBody'; //基础查询表格体
export { default as FunctionControl } from './FunctionControl'; //查询表格控件
export { default as ProtectedButton } from './ProtectedButton'; //权限按钮
export { default as Img } from './Img'; // 图片插入组件
export { default as BreadcrumbNav } from './BreadcrumbNav'; //面包屑
export { default as FormComponents } from './FormComponents'; //自定义表单组件
export { default as SearchForm } from './SearchForm'; //查询表单
export { default as Pagination } from './Pagination'; //分页
export { default as RenderDom } from './RenderDom'; //div 渲染dom
export { default as ThemeSwitcher } from './ThemeSwitcher'; //主题切换
export { default as ConditionalRender } from './ConditionalRender'; //条件渲染
export { default as WangEditorFrame } from './WangEditorFrame'; //iframe 包裹 富文本编辑器
export { default as HistoryBack } from './HistoryBack'; //返回组件
export { default as UnNormalCase403 } from './UnNormalCase/Error_403'; //错误页面403
export { default as UnNormalCase404 } from './UnNormalCase/Error_404'; //错误页面404
export { default as UnNormalCase500 } from './UnNormalCase/Error_500'; //错误页面500
export { default as DriverGroup } from './DriverGroup'; //自定义分割组
export { default as Svg } from './Svg'; //Svg雪碧图配合插件
export { default as EditTableListBody } from './BaseList/Components/EditTableListBody'; //可编辑查询表格体
