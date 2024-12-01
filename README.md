# Wilboerht's Blog

🌟 Welcome to my personal blog! This is a bilingual blog built with VitePress, where I share my thoughts on technology, programming, and life.

欢迎来到我的个人博客！这是一个使用 VitePress 构建的双语博客，我在这里分享关于技术、编程和生活的思考。

## ✨ Features

- 📝 Bilingual content (English & Chinese)
- 🎨 Clean and modern design
- 🚀 Fast and SEO-friendly
- 📱 Mobile responsive
- 🔍 Full-text search
- 🌙 Dark mode support

## 🛡️ 安全特性

- 🔒 内容安全策略 (CSP) 头部配置
- 🚫 XSS 攻击防护
- 🛑 点击劫持防护
- 📜 安全漏洞报告机制 (security.txt)
- 🤖 增强的爬虫控制配置
- 🔍 定期安全审计
- 🚧 严格的 MIME 类型检查
- 🔐 全面的安全响应头
- 📝 自动化安全检查

### 安全脚本

```bash
# 运行所有安全检查
npm run security:full

# 单独检查
npm run security:audit     # 检查依赖包漏洞
npm run security:outdated  # 检查过时的包
npm run security:check     # 运行自定义安全检查
```

## 🗂 Project Structure

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

## 🚀 Quick Start

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

## 详细使用指南 Detailed Guide

### 管理员指南 Admin Guide

#### 1. 文章管理 Post Management

##### 添加新文章 Add New Post
1. 在对应语言的 `posts` 目录下创建 `.md` 文件
   ```bash
   # 英文文章
   docs/posts/your-post.md
   # 中文文章
   docs/zh/posts/your-post.md
   ```

2. 文章头部添加 frontmatter
   ```markdown
   ---
   title: 文章标题
   description: 文章描述
   date: 2024-01-20
   tags: ['tag1', 'tag2']
   ---
   ```

##### 修改现有文章 Edit Existing Posts
1. 直接编辑对应的 `.md` 文件
2. 提交更改：
   ```bash
   git add .
   git commit -m "docs(blog): update post content"
   git push
   ```

#### 2. 网站配置 Site Configuration

##### 修改导航栏 Navigation
编辑 `docs/.vitepress/config.ts`：
```ts
nav: [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/posts/' }
]
```

##### 修改侧边栏 Sidebar
编辑 `docs/.vitepress/config.ts`：
```ts
sidebar: {
  '/posts/': [
    {
      text: 'Posts',
      items: [
        { text: 'Post 1', link: '/posts/post-1' }
      ]
    }
  ]
}
```

#### 3. 部署流程 Deployment Process

##### 自动部署 Auto Deployment
1. 提交代码到 GitHub：
   ```bash
   git add .
   git commit -m "type(scope): description"
   git push
   ```
2. GitHub Actions 会自动：
   - 构建网站
   - 部署到 GitHub Pages
3. 等待几分钟后访问网站查看更改

##### 手动部署 Manual Deployment
如果需要本地构建：
```bash
# 构建
cnpm run docs:build
# 预览构建结果
cnpm run docs:preview
```

#### 4. Git 提交规范 Commit Convention

提交信息格式：
```bash
type(scope): description

# 示例：
feat(blog): add new post about Vue 3
fix(nav): correct navigation links
docs(readme): update deployment guide
style(theme): improve dark mode colors
```

常用类型：
- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档更新
- `style`: 样式修改
- `refactor`: 代码重构
- `chore`: 构建相关

#### 5. 目录结构说明 Directory Structure

```bash
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 主配置文件
│   └── theme/          # 主题配置
├── public/             # 静态资源
│   └── images/        # 图片资源
├── posts/             # 英文文章
│   ├── index.md      # 文章列表
│   └── *.md          # 具体文章
└── zh/               # 中文内容
    └── posts/        # 中文文章
```

### 用户指南 User Guide

#### 1. 导航 Navigation
- 顶部导航栏：快速访问主要页面
- 侧边栏：查看文章目录
- 语言切换：右上角切换中英文

#### 2. 搜索 Search
- 使用顶部搜索框
- 支持标题和内容搜索
- 支持中英文搜索

#### 3. 深色模式 Dark Mode
- 点击右上角主题图标切换

## 🔧 配置说明

主要配置文件位于 `docs/.vitepress/config.ts`，你可以自定义：

- 站点元数据
- 导航菜单
- 侧边栏
- 主题设置
- 多语言
- 安全头部（在 `security-headers.ts` 中）
- 更多...

## 🔒 安全指南

### 贡献者指南

1. 禁止提交敏感信息
   - API 密钥
   - 密码
   - 私人凭证
   - 环境配置文件 (.env)

2. 遵循安全最佳实践
   - 保持依赖包更新
   - 使用 HTTPS 访问外部资源
   - 遵循 CSP 指南
   - 验证用户输入

3. PR 前的安全检查
   - 运行 `npm run security:full`
   - 确保没有包含敏感文件
   - 检查 CSP 合规性
   - 验证安全响应头

### 管理员指南

1. 定期维护
   - 每周运行安全审计
   - 每月更新依赖
   - 每季度检查安全响应头
   - 检查过时的包

2. 安全监控
   - GitHub 安全警报
   - npm audit 报告
   - Security.txt 合规性
   - CSP 违规监控

3. 响应流程
   - 安全问题跟踪
   - 漏洞披露
   - 补丁管理
   - 事件响应

## 常见问题 FAQ

1. 图片无法显示？
   - 确保图片路径正确
   - 图片应放在 `docs/public/images` 目录

2. 部署失败？
   - 检查 Git 提交是否成功
   - 查看 GitHub Actions 日志
   - 确认 base 配置正确

3. 预览模式无法访问？
   - 确认运行 `cnpm install`
   - 检查 Node.js 版本
   - 清理缓存后重试

## 技术支持 Support

如有问题，请通过以下方式获取帮助：
1. 查看 [VitePress 文档](https://vitepress.dev/)
2. 提交 [Issue](https://github.com/Wilboerht/vitepress-blog/issues)
3. 参考 [GitHub Discussions](https://github.com/Wilboerht/vitepress-blog/discussions)

## 许可证 License

MIT

## 🔗 相关链接

- 博客: [https://wilboerht.github.io/vitepress-blog](https://wilboerht.github.io/vitepress-blog)
- GitHub: [https://github.com/Wilboerht/vitepress-blog](https://github.com/Wilboerht/vitepress-blog)
- 安全报告: [https://wilboerht.github.io/vitepress-blog/.well-known/security.txt](https://wilboerht.github.io/vitepress-blog/.well-known/security.txt)

---

由 [Wilboerht](https://github.com/Wilboerht) 用 ❤️ 构建
