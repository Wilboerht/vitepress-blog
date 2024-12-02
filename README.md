# Wilboerht's Blog

A personal blog built with VitePress, featuring bilingual support and modern development practices.

[English](#english) | [中文](#中文)

## English

### Overview

This is a modern, performant blog built with VitePress, supporting both English and Chinese content. It features a clean design, optimized performance, and comprehensive development tooling.

### Features

- 📝 Bilingual Support (English & Chinese)
- 🎨 Clean, Modern Design
- 🚀 VitePress-powered Static Site Generation
- 📱 Responsive Layout
- 🔍 SEO Optimized
- 🛠️ Comprehensive Development Tools
- 🔒 Security Best Practices

### Tech Stack

- VitePress v1.0.0-rc.40
- Vue 3
- TypeScript
- ESLint & Prettier
- Husky & lint-staged
- GitHub Actions CI/CD

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-blog.git
cd your-blog
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run docs:dev
```

4. Build for production:

```bash
npm run docs:build
```

### Available Scripts

- `docs:dev` - Start development server
- `docs:build` - Build for production
- `docs:preview` - Preview production build
- `lint` - Check code style (JS & Vue files)
- `lint:fix` - Fix code style issues
- `format` - Format code with Prettier
- `optimize-images` - Optimize images in docs directory
- `backup` - Create backup of docs directory
- `test` - Run tests
- `security:check` - Run security checks

### Project Structure

```
.
├── docs/                 # Documentation source files
│   ├── en/              # English content
│   ├── zh/              # Chinese content
│   └── public/          # Static assets
├── .vitepress/          # VitePress configuration
├── scripts/             # Utility scripts
└── .github/             # GitHub configurations
```

### Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) before making a contribution.

## 中文

### 概述

这是一个使用 VitePress 构建的现代化博客，支持中英双语内容。它具有清晰的设计、优化的性能和完整的开发工具链。

### 特性

- 📝 双语支持（中文和英文）
- 🎨 清晰现代的设计
- 🚀 VitePress 驱动的静态站点生成
- 📱 响应式布局
- 🔍 SEO 优化
- 🛠️ 完整的开发工具
- 🔒 安全最佳实践

### 技术栈

- VitePress v1.0.0-rc.40
- Vue 3
- TypeScript
- ESLint & Prettier
- Husky & lint-staged
- GitHub Actions CI/CD

### 开始使用

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/your-blog.git
cd your-blog
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run docs:dev
```

4. 构建生产版本：

```bash
npm run docs:build
```

### 可用脚本

- `docs:dev` - 启动开发服务器
- `docs:build` - 构建生产版本
- `docs:preview` - 预览生产构建
- `lint` - 检查代码风格（JS 和 Vue 文件）
- `lint:fix` - 修复代码风格问题
- `format` - 使用 Prettier 格式化代码
- `optimize-images` - 优化 docs 目录中的图片
- `backup` - 创建 docs 目录的备份
- `test` - 运行测试
- `security:check` - 运行安全检查

### 项目结构

```
.
├── docs/                 # 文档源文件
│   ├── en/              # 英文内容
│   ├── zh/              # 中文内容
│   └── public/          # 静态资源
├── .vitepress/          # VitePress 配置
├── scripts/             # 实用工具脚本
└── .github/             # GitHub 配置
```

### 贡献

在提交贡献之前，请阅读我们的[贡献指南](./CONTRIBUTING.md)。

## License

MIT License - see the [LICENSE](./LICENSE) file for details.
