---
title: Markdown Examples
date: 2024-01-20
tags: ['Markdown', 'Tutorial']
description: Showcase various Markdown usage in VitePress
---

# Markdown Examples

This article demonstrates various ways to use Markdown in VitePress.

## Basic Syntax

### Headers

```markdown
# h1 Header
## h2 Header
### h3 Header
```

### Emphasis

- **Bold**
- *Italic*
- ***Bold and Italic***
- ~~Strikethrough~~

### Lists

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- Item one
- Item two
- Item three

### Blockquotes

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.

## Extended Syntax

### Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1 | Cell 2 | Cell 3 |
| Cell 4 | Cell 5 | Cell 6 |

### Code Blocks

```javascript
function hello() {
  console.log('Hello, VitePress!')
}
```

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Todo item

## Special Features

### Containers

::: tip
This is a tip container
:::

::: warning
This is a warning container
:::

::: danger
This is a danger container
:::

::: info
This is an info container
:::

### Code Groups

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

### Images

![Vue Logo](/images/common/vue-logo.svg)

### Custom Containers

::: details Click to view more
This is hidden content that will be shown when clicked.
:::

## Math Equations

Using KaTeX for math equations:

$E = mc^2$

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## Summary

These examples showcase the main Markdown features available in VitePress. You can combine these features to create rich documentation content.
