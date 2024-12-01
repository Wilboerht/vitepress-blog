import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run security checks
function runSecurityChecks() {
  console.log('🔒 Running security checks...\n');

  // 1. Check npm dependencies
  console.log('📦 Checking npm dependencies...');
  try {
    execSync('npm audit', { stdio: 'inherit' });
    console.log('✅ No security vulnerabilities found in dependencies\n');
  } catch (error) {
    console.error('❌ Security vulnerabilities found in dependencies\n');
    process.exit(1);
  }

  // 2. Check for sensitive files
  console.log('🔍 Checking for sensitive files...');
  const sensitivePatterns = [
    '.env',
    '.env.local',
    '.env.development',
    '.env.production',
    'config.json',
    'secrets.json',
    'credentials.json'
  ];

  const foundSensitiveFiles = [];
  function searchSensitiveFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !filePath.includes('node_modules')) {
        searchSensitiveFiles(filePath);
      } else if (sensitivePatterns.includes(file)) {
        foundSensitiveFiles.push(filePath);
      }
    }
  }

  searchSensitiveFiles('.');
  if (foundSensitiveFiles.length > 0) {
    console.error('❌ Found sensitive files that should be gitignored:', foundSensitiveFiles);
    process.exit(1);
  }
  console.log('✅ No sensitive files found\n');

  // 3. Check security headers
  console.log('🔒 Checking security headers configuration...');
  const securityHeadersPath = './docs/.vitepress/security-headers.ts';
  if (!fs.existsSync(securityHeadersPath)) {
    console.error('❌ Security headers configuration is missing\n');
    process.exit(1);
  }
  console.log('✅ Security headers configuration found\n');

  // 4. Check robots.txt
  console.log('🤖 Checking robots.txt...');
  const robotsPath = './docs/public/robots.txt';
  if (!fs.existsSync(robotsPath)) {
    console.error('❌ robots.txt is missing\n');
    process.exit(1);
  }
  console.log('✅ robots.txt found\n');

  // 5. Check security.txt
  console.log('📝 Checking security.txt...');
  const securityTxtPath = './docs/public/.well-known/security.txt';
  if (!fs.existsSync(securityTxtPath)) {
    console.error('❌ security.txt is missing\n');
    process.exit(1);
  }
  console.log('✅ security.txt found\n');

  console.log('✅ All security checks passed!\n');
}

runSecurityChecks();
