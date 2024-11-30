---
title: 在 VitePress 中使用图片和媒体
date: 2024-01-20
tags: ['教程', '多媒体']
description: 学习如何在 VitePress 博客中使用图片和其他媒体文件
---

# 在 VitePress 中使用图片和媒体

## 图片使用指南

### 基本用法

在 Markdown 中插入图片的基本语法：

```markdown
![图片描述](/assets/images/example.jpg)
```

### 图片存放位置

所有图片应存放在 `docs/public/assets/images/` 目录下。

## 视频使用指南

### 嵌入视频

使用 HTML video 标签嵌入视频：

```html
<video src="/assets/videos/demo.mp4" controls></video>
```

## PDF 文件

### 链接到 PDF

```markdown
[下载文档](/assets/pdf/document.pdf)
```

## 文件组织建议

- `/assets/images/` - 存放图片文件
- `/assets/videos/` - 存放视频文件
- `/assets/pdf/` - 存放 PDF 文档

## 最佳实践

1. 使用有意义的文件名
2. 压缩图片以优化加载速度
3. 提供清晰的 alt 文本描述
4. 视频考虑提供多种格式
