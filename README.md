当前组件库虽然重构了3个大版本，但是仍在测试阶段。

`qg-react-components` 是一个基于React18.2 Antd5.x、Redux的公共组件库，是在做项目过程中慢慢沉淀出来的。
虽然不多，但是项目的核心组件，和广泛使用的组件都在其中。

3.1.2 设置构建入口文件为index.ts

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

示例项目展示：
http://103.117.121.53:8001/

示例项目源码（包含了构建工具源码、组件库源码）：
https://gitee.com/qglove/qg-iterative-react-temp.git

组件库源码(使用自定义构建工具打包)：
https://gitee.com/qglove/qg-iterative-react-coms.git

自定义构建工具源码：
https://gitee.com/qglove/qg-iterative-web-build.git

#### Git 提交规范

`feat` 增加新的功能

`fix` 修复 BUG

`perf` 优化功能

`style` 代码风格调整不影响运行结果的

`refactor` 重构代码

`revert` 撤销修改

`test` 测试相关

`docs` 文档和注释相关

`chore` 依赖更新/脚手架配置修改等

`workflow` 工作流改进

`ci` 持续集成

`types` 类型定义文件更改

`wip` 开发中