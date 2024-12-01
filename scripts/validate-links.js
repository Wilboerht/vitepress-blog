import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const DOCS_DIR = path.join(process.cwd(), 'docs');
const VALID_EXTENSIONS = ['.md', '.html'];

// 存储所有有效的文件路径
const validPaths = new Set();

// 存储发现的问题
const issues = [];

function validateLinks() {
  console.log(chalk.blue('Starting link validation...'));

  // 首先收集所有有效的文件路径
  collectValidPaths(DOCS_DIR);

  // 然后验证所有文档中的链接
  validateDirectory(DOCS_DIR);

  // 报告结果
  if (issues.length > 0) {
    console.log(chalk.red('\nFound the following issues:'));
    issues.forEach(issue => {
      console.log(chalk.yellow(`\n${issue.file}:`));
      issue.problems.forEach(problem => {
        console.log(chalk.gray(`- ${problem}`));
      });
    });
    process.exit(1);
  } else {
    console.log(chalk.green('\nAll links are valid!'));
  }
}

function collectValidPaths(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(DOCS_DIR, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      validPaths.add('/' + relativePath + '/');
      collectValidPaths(fullPath);
    } else if (VALID_EXTENSIONS.includes(path.extname(entry.name))) {
      validPaths.add('/' + relativePath);
      // 添加不带扩展名的路径
      validPaths.add('/' + relativePath.replace(/\.[^/.]+$/, ''));
    }
  });
}

function validateDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      validateDirectory(fullPath);
    } else if (entry.name.endsWith('.md')) {
      validateFile(fullPath);
    }
  });
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const fileIssues = [];

  // 匹配Markdown链接: [text](url)
  const markdownLinks = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
  markdownLinks.forEach(link => {
    const url = link.match(/\[([^\]]+)\]\(([^)]+)\)/)[2];
    validateLink(url, relativePath, fileIssues);
  });

  // 匹配HTML链接: <a href="url">
  const htmlLinks = content.match(/<a[^>]+href=["']([^"']+)["']/g) || [];
  htmlLinks.forEach(link => {
    const url = link.match(/href=["']([^"']+)["']/)[1];
    validateLink(url, relativePath, fileIssues);
  });

  if (fileIssues.length > 0) {
    issues.push({
      file: relativePath,
      problems: fileIssues
    });
  }
}

function validateLink(url, currentFile, fileIssues) {
  // 忽略外部链接和锚点
  if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
    return;
  }

  // 处理相对路径
  let absolutePath = url;
  if (!url.startsWith('/')) {
    const dir = path.dirname('/' + currentFile);
    absolutePath = path.join(dir, url).replace(/\\/g, '/');
  }

  // 移除查询参数和锚点
  absolutePath = absolutePath.split('#')[0].split('?')[0];

  // 如果路径不在validPaths中，记录问题
  if (!validPaths.has(absolutePath) && !validPaths.has(absolutePath + '/')) {
    fileIssues.push(`Invalid link: ${url}`);
  }
}

validateLinks();
