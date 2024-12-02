import { exec } from 'child_process'
import { promisify } from 'util'
import { writeFile } from 'fs/promises'
import path from 'path'

const execAsync = promisify(exec)

async function createBackup() {
  const date = new Date().toISOString().split('T')[0]
  const backupDir = path.join(process.cwd(), 'backups')
  const backupName = `backup-${date}.tar.gz`

  try {
    // Create backups directory if it doesn't exist
    await execAsync('mkdir -p backups')

    // Create backup of docs directory
    console.log('Creating backup...')
    await execAsync(`tar -czf ${path.join(backupDir, backupName)} docs/`)

    // Create backup manifest
    const manifest = {
      date: new Date().toISOString(),
      name: backupName,
      contents: ['docs/'],
      size: (
        await execAsync(`ls -lh ${path.join(backupDir, backupName)} | awk '{print $5}'`)
      ).stdout.trim(),
    }

    await writeFile(path.join(backupDir, 'manifest.json'), JSON.stringify(manifest, null, 2))

    console.log(`Backup created successfully: ${backupName}`)
    console.log(`Size: ${manifest.size}`)
  } catch (error) {
    console.error('Backup failed:', error)
    process.exit(1)
  }
}

createBackup()
