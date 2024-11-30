import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义需要检查的关键文件
const requiredFiles = [
  {
    path: 'docs/public/images/common/blog-logo.png',
    type: 'image',
    description: '导航栏 Logo'
  },
  {
    path: 'docs/public/images/common/hero-background.png',
    type: 'image',
    description: '背景图片'
  },
  {
    path: 'docs/.vitepress/config.ts',
    type: 'config',
    description: 'VitePress 配置文件'
  },
  {
    path: 'docs/.vitepress/theme/custom.css',
    type: 'style',
    description: '自定义样式文件'
  }
];

// 检查文件是否存在和基本验证
function verifyFile(file, basePath) {
  const fullPath = path.join(basePath, file.path);
  console.log(chalk.blue(`\n检查 ${file.description}...`));
  
  try {
    // 检查文件是否存在
    if (!fs.existsSync(fullPath)) {
      throw new Error(`文件不存在: ${file.path}`);
    }

    // 获取文件状态
    const stats = fs.statSync(fullPath);

    // 检查文件大小
    if (stats.size === 0) {
      throw new Error(`文件大小为0: ${file.path}`);
    }

    // 特定类型的检查
    if (file.type === 'config') {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes("logo: '/images/common/blog-logo.png'")) {
        throw new Error('配置文件中缺少 logo 配置');
      }
    }

    console.log(chalk.green('✓ 验证通过'));
    return true;
  } catch (error) {
    console.log(chalk.red(`✗ 错误: ${error.message}`));
    return false;
  }
}

// 主函数
function main() {
  console.log(chalk.yellow('开始验证资源文件...'));
  
  const basePath = path.resolve(__dirname, '..');
  let allPassed = true;

  // 验证所有文件
  for (const file of requiredFiles) {
    if (!verifyFile(file, basePath)) {
      allPassed = false;
    }
  }

  // 输出总结
  console.log('\n' + chalk.yellow('验证结果汇总:'));
  if (allPassed) {
    console.log(chalk.green('✓ 所有文件验证通过！'));
  } else {
    console.log(chalk.red('✗ 部分文件验证失败，请检查上述错误信息。'));
    process.exit(1);
  }
}

// 运行验证
main();
