# Contributing to Wilboerht's Blog

Thank you for your interest in contributing to this blog! This document provides guidelines and instructions for contributors.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run docs:dev`

## Project Structure

```
.
├── docs/                # Documentation source files
│   ├── .vitepress/     # VitePress configuration
│   ├── en/             # English content
│   ├── zh/             # Chinese content
│   └── public/         # Static assets
├── scripts/            # Utility scripts
└── package.json        # Project configuration
```

## Contribution Guidelines

### Content

- Ensure content is available in both English and Chinese
- Follow the existing file structure
- Include proper frontmatter in markdown files
- Optimize images before adding them

### Code Style

- Code follows ESLint and Prettier configurations
- Run `npm run lint` and `npm run format` before committing
- Commit messages follow conventional commits format

### Testing

- Run `npm test` to execute test suite
- Add tests for new features
- Ensure all tests pass before submitting PR

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Update documentation if needed
5. Submit PR with clear description

## Questions?

Feel free to open an issue for any questions or concerns.
