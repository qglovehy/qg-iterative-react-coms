//组件库内置雪碧图svg
import './assets';

//公共样式
import './styles/normalize.css';
import './styles/root.scss';

export { Provider, useDispatch, useSelector } from './components/system';
export { PersistGate } from './components/system';
export { store, persistence } from './components/system';
export { onResetState, onSetState, setAntdTheme } from './components/system';

//初始化字典
export { initDictData, Dict } from './components/system';

//自定义钩子
export { useSetState, useMediaQuery } from './components/system';

//国际化相关
export { Intl } from './components/system';
export { IntlDropdown } from './components/system';

//公共组件
export { ConditionalRender } from './components/system';
export { BaseList } from './components/system';
export { ListBody } from './components/system';
export { EditTableListBody } from './components/system';
export { BreadcrumbNav } from './components/system';
export { DriverGroup } from './components/system';
export { FormComponents } from './components/system';
export { FunctionControl } from './components/system';
export { HistoryBack } from './components/system';
export { Img } from './components/system';
export { Pagination } from './components/system';
export { ProtectedButton } from './components/system';
export { RenderDom } from './components/system';
export { SearchForm } from './components/system';
export { Svg } from './components/system';
export { ThemeSwitcher } from './components/system';

export { UnNormalCase403 } from './components/system';
export { UnNormalCase404 } from './components/system';
export { UnNormalCase500 } from './components/system';

//WangEditor
export { WangEditorFrame } from './components/system';
