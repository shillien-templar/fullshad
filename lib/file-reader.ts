import { promises as fs } from 'fs'
import path from 'path'

interface FileItem {
  name: string
  type: 'file' | 'folder'
  content?: string
  children?: FileItem[]
  path: string
}

export async function readFileContent(filePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const content = await fs.readFile(fullPath, 'utf-8')
    return content
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return `// Error reading file: ${filePath}`
  }
}

export async function buildFileStructure(filePaths: string[]): Promise<FileItem[]> {
  const files: FileItem[] = []
  
  for (const filePath of filePaths) {
    const content = await readFileContent(filePath)
    const pathParts = filePath.split('/')
    const fileName = pathParts[pathParts.length - 1]
    
    // Create nested folder structure
    let currentLevel = files
    
    for (let i = 0; i < pathParts.length - 1; i++) {
      const folderName = pathParts[i]
      const folderPath = pathParts.slice(0, i + 1).join('/')
      
      let folder = currentLevel.find(item => item.name === folderName && item.type === 'folder')
      
      if (!folder) {
        folder = {
          name: folderName,
          type: 'folder',
          path: folderPath,
          children: []
        }
        currentLevel.push(folder)
      }
      
      currentLevel = folder.children!
    }
    
    // Add the file
    currentLevel.push({
      name: fileName,
      type: 'file',
      path: filePath,
      content
    })
  }
  
  return files
}