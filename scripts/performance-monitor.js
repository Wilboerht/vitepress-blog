import lighthouse from 'lighthouse'
import chromeLauncher from 'chrome-launcher'
import { writeFileSync } from 'fs'
import { join } from 'path'

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  }

  const runnerResult = await lighthouse(url, options)
  const reportHtml = runnerResult.report
  writeFileSync(join(process.cwd(), 'lighthouse-report.html'), reportHtml)

  await chrome.kill()
}

// 运行性能检查
const SITE_URL = 'http://localhost:5173' // 开发服务器地址
runLighthouse(SITE_URL)
  .then(() => console.log('性能报告已生成: lighthouse-report.html'))
  .catch(console.error)
