# My VitePress Blog

这是一个基于 VitePress 的个人博客项目，支持中英文双语。

This is a personal blog project based on VitePress, supporting both Chinese and English.

## 项目结构 Project Structure

```
.
├── docs
│   ├── .vitepress/
│   │   └── config.ts         # VitePress configuration
│   ├── public/
│   │   └── assets/          # Static assets
│   │       ├── images/      # Images
│   │       ├── videos/      # Videos
│   │       └── pdf/         # PDF files
│   ├── posts/               # English blog posts
│   ├── about.md             # English about page
│   ├── index.md             # English homepage
│   └── zh/                  # Chinese content
│       ├── posts/           # Chinese blog posts
│       ├── about.md         # Chinese about page
│       └── index.md         # Chinese homepage
├── node_modules/
├── package.json
└── package-lock.json
```

## 开发说明 Development Guide

### 环境要求 Requirements

- Node.js: v22.11.0+
- Package Manager: cnpm

### 安装依赖 Install Dependencies

```bash
cnpm install
```

### 开发模式 Development Mode

```bash
cnpm run docs:dev
```

### 构建 Build

```bash
cnpm run docs:build
```

### 预览构建 Preview Build

```bash
cnpm run docs:preview
```

### 清理缓存 Clean Cache

```bash
cnpm run docs:clean
```

## 多语言支持 Multilingual Support

- 默认语言：英文 (Default: English)
- 支持语言：中文 (Supported: Chinese)
- 通过导航栏切换语言 (Switch language via navigation bar)

## 主要功能 Main Features

- 📝 Markdown 支持
- 🌍 中英文国际化
- 🖼️ 图片和媒体支持
- 🎨 响应式设计
- 🌓 深色模式
- 🔍 本地搜索

## 许可证 License

MIT
