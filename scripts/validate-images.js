#!/usr/bin/env node

/**
 * Professional Image Validation Script
 * Checks all referenced images exist before deployment
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
}

// Find all image references in the codebase
function findImageReferences() {
  const imageRefs = new Set()
  const srcDir = path.join(projectRoot, 'src')
  
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8')
      
      // Match getImagePath calls
      const getImagePathMatches = content.match(/getImagePath\(['"`]([^'"`]+)['"`]\)/g)
      if (getImagePathMatches) {
        getImagePathMatches.forEach(match => {
          const imagePath = match.match(/['"`]([^'"`]+)['"`]/)[1]
          imageRefs.add(imagePath)
        })
      }
      
      // Match direct image src references
      const srcMatches = content.match(/src=['"`]([^'"`]*\/images\/[^'"`]*)['"`]/g)
      if (srcMatches) {
        srcMatches.forEach(match => {
          const imagePath = match.match(/['"`]([^'"`]+)['"`]/)[1]
          if (imagePath.startsWith('/images/')) {
            imageRefs.add(imagePath)
          }
        })
      }
      
    } catch (error) {
      console.warn(`${colors.yellow}Warning: Could not read file ${filePath}${colors.reset}`)
    }
  }
  
  function scanDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath)
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item)
        const stat = fs.statSync(itemPath)
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(itemPath)
        } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
          scanFile(itemPath)
        }
      })
    } catch (error) {
      console.warn(`${colors.yellow}Warning: Could not scan directory ${dirPath}${colors.reset}`)
    }
  }
  
  scanDirectory(srcDir)
  return Array.from(imageRefs)
}

// Validate that images exist
function validateImages(imageRefs) {
  const publicDir = path.join(projectRoot, 'public')
  const missing = []
  const existing = []
  
  imageRefs.forEach(imagePath => {
    const fullPath = path.join(publicDir, imagePath.replace(/^\//, ''))
    
    if (fs.existsSync(fullPath)) {
      existing.push(imagePath)
    } else {
      missing.push(imagePath)
    }
  })
  
  return { missing, existing }
}

// Generate report
function generateReport(imageRefs, validation) {
  console.log(`${colors.bold}${colors.blue}📷 Image Validation Report${colors.reset}\n`)
  
  console.log(`${colors.bold}Total images referenced:${colors.reset} ${imageRefs.length}`)
  console.log(`${colors.green}✅ Existing images:${colors.reset} ${validation.existing.length}`)
  console.log(`${colors.red}❌ Missing images:${colors.reset} ${validation.missing.length}\n`)
  
  if (validation.missing.length > 0) {
    console.log(`${colors.bold}${colors.red}Missing Images:${colors.reset}`)
    validation.missing.forEach(imagePath => {
      console.log(`  ${colors.red}❌ ${imagePath}${colors.reset}`)
    })
    console.log('')
  }
  
  if (validation.existing.length > 0 && process.env.VERBOSE === 'true') {
    console.log(`${colors.bold}${colors.green}Existing Images:${colors.reset}`)
    validation.existing.forEach(imagePath => {
      console.log(`  ${colors.green}✅ ${imagePath}${colors.reset}`)
    })
    console.log('')
  }
  
  // Deployment readiness
  if (validation.missing.length === 0) {
    console.log(`${colors.bold}${colors.green}🚀 Ready for deployment!${colors.reset}`)
    return true
  } else {
    console.log(`${colors.bold}${colors.red}🚨 Fix missing images before deployment!${colors.reset}`)
    return false
  }
}

// Main execution
function main() {
  console.log(`${colors.bold}Starting image validation...${colors.reset}\n`)
  
  try {
    const imageRefs = findImageReferences()
    const validation = validateImages(imageRefs)
    const isReady = generateReport(imageRefs, validation)
    
    // Exit with appropriate code for CI/CD
    process.exit(isReady ? 0 : 1)
    
  } catch (error) {
    console.error(`${colors.red}Error during validation: ${error.message}${colors.reset}`)
    process.exit(1)
  }
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}

export { findImageReferences, validateImages, generateReport }