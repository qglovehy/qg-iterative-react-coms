当前组件库虽然重构了3个大版本，但是仍在测试阶段。

`qg-react-components` 是一个基于React18.2 Antd5.x、Redux的公共组件库，是在做项目过程中慢慢沉淀出来的。
虽然不多，但是项目的核心组件，和广泛使用的组件都在其中。

目前包含：
1. 查询表格、可编辑单元格的查询表格： [BaseList](src%2Fcomponents%2FBaseList) 
2. 条件渲染（支持 .Show）：[ConditionalRender](src%2Fcomponents%2FConditionalRender)
3. 自定义分割组：[DriverGroup](src%2Fcomponents%2FDriverGroup)
4. 字典缓存：（静态字典、动态字典、支持自动生成正反向Map）
5. 与字典结合的查询表单[FormComponents](src%2Fcomponents%2FFormComponents)
6. 分页组件[Pagination](src%2Fcomponents%2FPagination)
7. 国际化（基于react-intl-universal实现 Intl.v("你好") 使用中文来检索英文）：[Intl](src%2Fcomponents%2FIntl)
8. 简单的主题切换：[ThemeSwitcher](src%2Fcomponents%2FThemeSwitcher)
9. “与世隔绝” 的WangEditor (样式通过iframe 与项目样式隔离)：[WangEditorFrame](src%2Fcomponents%2FWangEditorFrame)
10. Svg组件（svg-sprite-loader）：[Svg](src%2Fcomponents%2FSvg)
11. 其他...

组件库文档和示例项目的开发正在进行中。

我会给大家提供一个比较舒适的开发体验。

fix: 3.0.19 修复国际化自定义输入内容
fix: 3.0.20 webpack排除外部依赖 externals:
// 外部依赖，避免将某些 import 的包打包到 bundle 中
```json
{
    "antd": "antd",
    "moment": "moment",
    "classnames": "classnames",
    "react": "react",
    "react-dom": "react-dom",
    "react-router-dom": "react-router-dom",
    "@ant-design/happy-work-theme": "@ant-design/happy-work-theme",
    "@ant-design/icons": "@ant-design/icons",
    "prop-types": "prop-types",
}
```