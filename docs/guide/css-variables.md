# CSS 变量

相比于粗暴的 CSS 样式覆盖（也被叫做魔改样式），CSS 变量让我们可以更加优雅地自定义组件的样式。

一起来看看我们该怎么使用组件暴露出来的 CSS 变量吧。

> 本文的前提是你已经对 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)有一些基础的了解

在组件文档的 "CSS 变量" 表格中，你可以查阅到每个组件都暴露了哪些 CSS 变量，当然你也可以直接在组件的 ts 定义中找到。

以 Button 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --text-color | 文字颜色 | `var(--qsf-color-text)` | `--qsf-button-text-color` |
| --background-color | 背景颜色 | `var(--qsf-color-background-light)` | `--qsf-button-background-color` |

这表示了它支持了 `--text-color` 和 `--background-color` 变量。

## 设置 CSS 变量的值

接下来，我们需要设置 CSS 变量的值，有以下方法：

### 方法一：在 CSS 文件中设置

给 Button 组件加一个自定义的 `className`：

```jsx | pure
<Button className='my-button'>Button</Button>
```

然后在 CSS 文件中设置 CSS 变量

```css
.my-button {
  --text-color: #abcdef;
}
```

### 方法二：直接通过 style 属性设置

直接通过组件的 `style` 属性，简单粗暴，适合小范围的调整：

```jsx | pure
<Button style={{
  '--text-color': '#abcdef'
}}>Button</Button>
```

### 方法三：通过全局变量进行设置

假如你需要对整个项目中所有的 Button 都进行样式的调整，那么对每一个按钮进行 CSS 变量的设置显然是不现实的。在这种情况下，你可以通过"全局 CSS 变量"（也就是上面表格中的最后一列）进行统一的设置：

```css
:root:root {
  --qsf-button-text-color: #abcdef;
}
```

这样页面上全部的 Button 都会受到调整。

当然，你也可以"局部性"地进行调整，只需要把对应的 CSS 变量添加到对应的父级节点上。

## 全局性 CSS 变量

以下是qs-ui-mobile目前提供的全局性 CSS 变量：

```css
:root {
  // 主题色
  --qsf-color-primary: #2979ff;
  --qsf-color-primary-disabled: #a0cfff;
  --qsf-color-primary-dark: #2b85e4;
  --qsf-color-primary-light: #ecf5ff;

  --qsf-color-success: #19be6b;
  --qsf-color-success-disabled: #71d5a1;
  --qsf-color-success-dark: #18b566;
  --qsf-color-success-light: #dbf1e1;

  --qsf-color-warning: #ff9900;
  --qsf-color-warning-disabled: #fcbd71;
  --qsf-color-warning-dark: #f29100;
  --qsf-color-warning-light: #fdf6ec;

  --qsf-color-error: #fa3534;
  --qsf-color-error-disabled: #fab6b6;
  --qsf-color-error-dark: #dd6161;
  --qsf-color-error-light: #fef0f0;

  --qsf-color-info: #909399;
  --qsf-color-info-disabled: #c8c9cc;
  --qsf-color-info-dark: #82848a;
  --qsf-color-info-light: #f4f4f5;

  // 文字颜色
  --qsf-color-text: #303133;
  --qsf-color-text-secondary: #606266;
  --qsf-color-text-weak: #909399;
  --qsf-color-text-light: #c0c4cc;

  // 背景颜色
  --qsf-color-background: #f3f4f6;

  // 边框颜色
  --qsf-color-border: #e4e7ed;
}
```

## CSS 变量自动降级 <Badge type="warning">试验性</Badge>

CSS 变量在 iOS Safari `>= 10` 和 Chrome `>= 49` 版本下是有原生支持的，这在大多数情况下都足够满足你的项目需要了。但是如果你的项目需要兼容 iOS 9，那就需要用特殊的方式来实现兼容了。

CSS 变量具有很高的动态性，业界并没有很可靠的 polyfill 方案，因此 qs-ui-mobile 提供了一份补丁 CSS：

```js
import 'qs-ui-mobile/bundle/css-vars-patch.css'
```

你可以在项目中引入它，来确保在 iOS 9 下组件样式也不会乱掉。

> 对于 `2x` 项目，请引入对应的 `qs-ui-mobile/2x/bundle/css-vars-patch.css`

这份 patch CSS 会自动判断当前的浏览器环境，并且只在浏览器不支持 CSS 变量时才会生效。所以在大部分情况下，它都不会生效，对于你的项目也不会有直接的影响。但是当它生效时，所有依赖 CSS 变量的特性都不会再生效，例如：主题设置、基于 CSS 变量的组件样式调整、深色模式。

目前，只有以下组件支持了 CSS 变量降级，其他组件的 CSS 变量降级能力我们还在持续完善中，请关注后续的发布：

- Button