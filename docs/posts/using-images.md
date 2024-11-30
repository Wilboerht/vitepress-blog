---
title: Using Images and Media in VitePress
date: 2024-01-20
tags: ['Tutorial', 'Multimedia']
description: Learn how to use images and other media files in your VitePress blog
---

# Using Images and Media in VitePress

## Image Usage Guide

### Basic Usage

Basic syntax for inserting images in Markdown:

```markdown
![Image description](/assets/images/example.jpg)
```

### Image Storage Location

All images should be stored in the `docs/public/assets/images/` directory.

## Video Usage Guide

### Embedding Videos

Use HTML video tag to embed videos:

```html
<video src="/assets/videos/demo.mp4" controls></video>
```

## PDF Files

### Linking to PDFs

```markdown
[Download Document](/assets/pdf/document.pdf)
```

## File Organization

- `/assets/images/` - Store image files
- `/assets/videos/` - Store video files
- `/assets/pdf/` - Store PDF documents

## Best Practices

1. Use meaningful filenames
2. Compress images for optimal loading
3. Provide clear alt text descriptions
4. Consider multiple formats for videos
