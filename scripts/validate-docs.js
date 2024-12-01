import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const DOCS_DIR = path.join(process.cwd(), 'docs');
const LANGUAGES = ['en', 'zh'];

function validateDocs() {
  console.log(chalk.blue('Starting documentation validation...'));
  let hasErrors = false;

  // 检查每种语言的文档
  LANGUAGES.forEach(lang => {
    const langDir = path.join(DOCS_DIR, lang);
    if (!fs.existsSync(langDir)) {
      console.log(chalk.red(`Missing language directory: ${lang}`));
      hasErrors = true;
      return;
    }

    // 获取基准语言（英文）的文件列表
    const enFiles = getFiles(path.join(DOCS_DIR, 'en'));
    const currentLangFiles = getFiles(langDir);

    // 检查文件是否缺失
    enFiles.forEach(file => {
      if (!currentLangFiles.includes(file)) {
        console.log(chalk.yellow(`Missing translation for ${file} in ${lang}`));
        hasErrors = true;
      }
    });

    // 检查 Frontmatter
    currentLangFiles.forEach(file => {
      const filePath = path.join(langDir, file);
      validateFrontmatter(filePath);
    });
  });

  if (hasErrors) {
    console.log(chalk.red('Documentation validation failed!'));
    process.exit(1);
  } else {
    console.log(chalk.green('Documentation validation passed!'));
  }
}

function getFiles(dir, files = [], prefix = '') {
  if (!fs.existsSync(dir)) return files;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = prefix ? path.join(prefix, entry.name) : entry.name;
    
    if (entry.isDirectory()) {
      getFiles(fullPath, files, relativePath);
    } else if (entry.name.endsWith('.md')) {
      files.push(relativePath);
    }
  });
  
  return files;
}

function validateFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (!frontmatterMatch) {
      console.log(chalk.yellow(`Missing frontmatter in ${filePath}`));
      return false;
    }

    const frontmatter = frontmatterMatch[1];
    const requiredFields = ['title', 'date'];
    
    requiredFields.forEach(field => {
      if (!frontmatter.includes(field + ':')) {
        console.log(chalk.yellow(`Missing ${field} in frontmatter of ${filePath}`));
      }
    });
  } catch (error) {
    console.log(chalk.red(`Error reading file ${filePath}: ${error.message}`));
    return false;
  }
}

validateDocs();
