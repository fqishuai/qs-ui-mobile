# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## DotLoading 点状加载中

<code src="../dot-loading/demos/demo1.tsx"></code>

### 属性

| 属性  | 说明 | 类型                                          | 默认值      |
| ----- | ---- | --------------------------------------------- | ----------- |
| color | 颜色 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

`DotLoading` 的大小会自动根据当前的文字大小进行调整。

属性`color`的值为`'currentColor'`时，`DotLoading` 的颜色与当前元素的文本颜色保持一致。

## SpinLoading 转圈加载中

<code src="../spin-loading/demos/spin-loading-no-spring-demo.tsx" title="不使用react spring"></code>

<code src="../spin-loading/demos/spin-loading-demo.tsx" title="使用react spring"></code>

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 线条颜色，等效于手动设置 `--color` CSS 变量 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |
| size | 圆圈大小 | `string` | `'32px'` |
| animatedDivWrapper | 是否使用`<animated.div>`包裹，用于验证动画，无实际意义 | `boolean` | `false` |

### CSS 变量

| 属性    | 说明     | 默认值                  |
| ------- | -------- | ----------------------- |
| --color | 线条颜色 | `var(--qsf-color-weak)` |
