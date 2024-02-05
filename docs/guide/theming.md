# 主题
:::info
借鉴[uView](https://www.uviewui.com/)的主题色、文字颜色、背景颜色、边框颜色
:::

## 主题色
`primary`，`success`，`error`，`warning`，`info`是uView的主题色，他们给人在视觉感受上分别对应于蓝色，绿色，红色，黄色，灰色。 而他们又有对应的`disabled`、`dark`和`light`状态，分别表示对应的禁止，加深和变浅的对应颜色。举例uView的`button`组件来说：

1. 设置`type`参数为`primary`时，按钮显示蓝色。
2. 按钮被按下时，使用的是`primary`的加深颜色，也即`dark`状态。
3. 按钮设置为镂空状态(`plain`为`true`)时，背景色为`primary`的变浅颜色，也即`light`状态。
4. 按钮处于禁止状态时，使用的是`primary`的稍浅颜色，也即`disabled`状态。

## 文字颜色
uView中，分别提炼了4种用于文字颜色，分别是：主要文字、常规文字、次要文字、占位文字颜色。

1. 主要文字颜色一般用于内容的标题等，如新闻列表的标题
2. 常规文字颜色一般用于内容的主体，如新闻列表的概要
3. 次要文字颜色一般用于内容的提示部分，如新闻列表底部的时间，评论数量的提示文字
4. 占位文字颜色属于更浅的灰色，看场景选择使用

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

## 自定义一套主题
得益于 CSS 变量强大而灵活的能力，自定义一套 qs-ui-mobile 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接修改 `:root` 覆盖 CSS 变量就可以了：
```css
:root:root {
  --qsf-color-primary: #3c9cff;
}
```
:::success
为什么要写两个重复的 `:root`？

由于 qs-ui-mobile 中的主题变量也是在 `:root` 下声明的，所以在有些情况下会由于优先级的问题无法成功覆盖。通过 `:root:root` 可以显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。
:::

当然如果你只是希望对局部的主题进行调整，也可以把上面的 CSS 变量覆盖逻辑加在任何一个你想调整的节点上，例如：
```jsx | pure
<div className='purple-theme'>
  <Button color='primary'>Purple</Button>
</div>
```

```css
.purple-theme {
  --qsf-color-primary: #3c9cff;
}
```
