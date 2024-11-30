---
title: Markdown 示例
date: 2024-01-20
tags: ['Markdown', '教程']
description: 展示 VitePress 中 Markdown 的各种用法
---

# Markdown 示例

本文将展示在 VitePress 中使用 Markdown 的各种方式。

## 基础语法

### 标题

```markdown
# h1 标题
## h2 标题
### h3 标题
```

### 强调

- **粗体**
- *斜体*
- ***粗斜体***
- ~~删除线~~

### 列表

有序列表：
1. 第一项
2. 第二项
3. 第三项

无序列表：
- 项目一
- 项目二
- 项目三

### 引用

> 这是一段引用文本。
> 
> 这是引用的第二段。

## 扩展语法

### 表格

| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

### 代码块

```javascript
function hello() {
  console.log('Hello, VitePress!')
}
```

### 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项

## 特殊功能

### 提示框

::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险提示框
:::

::: info 信息
这是一个信息框
:::

### 代码组

::: code-group
```js [config.js]
export default {
  data: 'Hello'
}
```

```ts [config.ts]
export default {
  data: 'Hello'
} as const
```
:::

### 图片展示

![Vue Logo](/images/common/vue-logo.svg)

### 自定义容器

::: details 点击查看更多
这是一些隐藏的内容，点击后才会显示。
:::

## 数学公式

使用 KaTeX 渲染数学公式：

$E = mc^2$

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## 总结

这些示例展示了 VitePress 中 Markdown 的主要用法。你可以根据需要组合使用这些功能来创建丰富的文档内容。
