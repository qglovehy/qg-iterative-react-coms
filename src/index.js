//持久化存储 redux
import { createContext } from 'react';

//组件库内置雪碧图svg
import './assets';

//公共样式
import './styles/normalize.css';
import './styles/root.scss';

export { Provider, useDispatch, useSelector } from 'react-redux';
export { PersistGate } from 'redux-persist/lib/integration/react';
export { store, persistence } from './store';
export { IRootStateProps } from './store/types';
export {
  default as QGIterativeReducer,
  onResetState,
  onSetState,
  setAntdTheme,
} from './store/counter';

//初始化字典
export { initDictData, Dict } from './utils/dictionaryData';

//自定义钩子
export { useSetState, useMediaQuery } from './hooks';

//国际化相关
export { default as Intl } from './components/Intl';
export { default as IntlDropdown } from './components/Intl/Components/IntlDropdown';

//公共组件
export { default as ConditionalRender } from './components/ConditionalRender';
export { default as BaseList } from './components/BaseList';
export { default as ListBody } from './components/BaseList/Components/ListBody';
export { default as EditTableListBody } from './components/BaseList/Components/EditTableListBody';
export { default as BreadcrumbNav } from './components/BreadcrumbNav';
export { default as DriverGroup } from './components/DriverGroup';
export { default as FormComponents } from './components/FormComponents';
export { default as FunctionControl } from './components/FunctionControl';
export { default as HistoryBack } from './components/HistoryBack';
export { default as Img } from './components/Img';
export { default as Pagination } from './components/Pagination';
export { default as ProtectedButton } from './components/ProtectedButton';
export { default as RenderDom } from './components/RenderDom';
export { default as SearchForm } from './components/SearchForm';
export { default as Svg } from './components/Svg';
export { default as ThemeSwitcher } from './components/ThemeSwitcher';

export { default as UnNormalCase403 } from './components/UnNormalCase/Error_403';
export { default as UnNormalCase404 } from './components/UnNormalCase/Error_404';
export { default as UnNormalCase500 } from './components/UnNormalCase/Error_500';

//WangEditor
export { default as WangEditorFrame } from './components/WangEditorFrame';

// 创建一个Context
export const MessageContext = createContext(null);
