//组件库内置雪碧图svg
import './assets';

//公共样式
import './styles/normalize.css';
import './styles/root.scss';

export type { IRootStateProps } from './components/system';

//公共组件
export {
  dayjs,
  Provider,
  useDispatch,
  useSelector,
  PersistGate,
  store,
  persistence,
  onResetState,
  onSetState,
  setAntdTheme,
  initDictData,
  Dict,
  Intl,
  IntlDropdown,
  useSetState,
  useMediaQuery,
  ConditionalRender,
  BaseList,
  ListBody,
  EditTableListBody,
  BreadcrumbNav,
  DriverGroup,
  FormComponents,
  FunctionControl,
  HistoryBack,
  Img,
  Pagination,
  ProtectedButton,
  RenderDom,
  SearchForm,
  Svg,
  ThemeSwitcher,
  UnNormalCase403,
  UnNormalCase404,
  UnNormalCase500,
  WangEditorFrame,
} from './components/system';
