import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { execSync } from 'child_process';

const DOCS_DIR = path.join(process.cwd(), 'docs');

function runSecurityChecks() {
  console.log(chalk.blue('Starting security checks...'));
  let hasIssues = false;

  // 检查敏感文件
  const sensitivePatterns = [
    /\.env$/,
    /\.key$/,
    /\.pem$/,
    /password/i,
    /secret/i,
    /credential/i
  ];

  // 检查文件权限
  function checkFilePermissions(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        checkFilePermissions(fullPath);
      } else {
        // 检查敏感文件名
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(entry.name)) {
            console.log(chalk.red(`Warning: Potentially sensitive file found: ${fullPath}`));
            hasIssues = true;
          }
        });

        // 检查文件权限
        try {
          const stats = fs.statSync(fullPath);
          const mode = stats.mode & 0o777;
          if ((mode & 0o777) === 0o777) {
            console.log(chalk.red(`Warning: File has too permissive permissions: ${fullPath}`));
            hasIssues = true;
          }
        } catch (error) {
          console.log(chalk.red(`Error checking file permissions: ${error.message}`));
        }
      }
    });
  }

  // 运行 npm audit
  try {
    console.log(chalk.blue('\nRunning npm audit...'));
    execSync('npm audit', { stdio: 'inherit' });
  } catch (error) {
    console.log(chalk.red('npm audit found security issues'));
    hasIssues = true;
  }

  // 检查过时的依赖
  try {
    console.log(chalk.blue('\nChecking for outdated dependencies...'));
    execSync('npm outdated', { stdio: 'inherit' });
  } catch (error) {
    console.log(chalk.yellow('Some dependencies are outdated'));
    hasIssues = true;
  }

  // 检查 CSP 配置
  const configPath = path.join(DOCS_DIR, '.vitepress/config.ts');
  try {
    const config = fs.readFileSync(configPath, 'utf-8');
    if (!config.includes('Content-Security-Policy')) {
      console.log(chalk.red('Warning: Content Security Policy (CSP) not found in VitePress config'));
      hasIssues = true;
    }
  } catch (error) {
    console.log(chalk.red(`Error reading VitePress config: ${error.message}`));
    hasIssues = true;
  }

  if (hasIssues) {
    console.log(chalk.red('\nSecurity check completed with issues'));
    process.exit(1);
  } else {
    console.log(chalk.green('\nSecurity check completed successfully'));
  }
}

runSecurityChecks();
