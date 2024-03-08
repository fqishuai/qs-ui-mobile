# Button 按钮

用于开始一个即时操作。

## 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Button

### 属性

| <div style="width:100px">属性</div> | 说明 | 类型 | <div style="width:100px">默认值</div> |
| --- | --- | --- | --- |
| color | 按钮的颜色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline' \| 'none'` | `'solid'` |
| size | 按钮尺寸 | `'mini' \| 'small' \| 'middle' \| 'large'` | `'middle'` |
| block | 是否是块级元素 | `boolean` | `false` |
| loading | 是否处于加载状态，`'auto'` 模式会监听 `onClick` 的 `Promise` 状态自动更新 `loading` | `boolean \| 'auto'` | `false` |
| loadingText | 加载状态下额外展示的文字 | `string` | - |
| loadingIcon | 加载状态下的 `icon` 图标 | `ReactNode` | `<DotLoading color='currentColor' />` |
| disabled | 是否禁用 | `boolean` | `false` |
| type | 原生 `button` 元素的 `type` 属性 | `'submit' \| 'reset' \| 'button'` | `'button'` |
| shape | 按钮的形状 | `'default' \| 'rounded' \| 'rectangular'` | `'default'` |
| onClick | 点击事件 | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | - |

此外，还支持原生 `button` 元素的以下属性：`onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd`。

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --text-color | 文字颜色 | `var(--qsf-color-text)` | `--qsf-button-text-color` |
| --background-color | 背景颜色 | `var(--qsf-color-background-light)` | `--qsf-button-background-color` |
| --border-radius | 圆角大小 | `4px` | `--qsf-button-border-radius` |
| --border-width | 边框宽度 | `1px` | `--qsf-button-border-width` |
| --border-style | 边框样式 | `solid` | `--qsf-button-border-style` |
| --border-color | 边框颜色 | `var(--qsf-color-border)` | `--qsf-button-border-color` |

### Ref

| 属性          | 说明             | 类型                          |
| ------------- | ---------------- | ----------------------------- |
| nativeElement | 原始 button 元素 | `HtmlButtonElement` \| `null` |
