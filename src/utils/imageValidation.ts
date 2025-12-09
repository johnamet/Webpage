// Professional image validation and error handling utilities

export const validateImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

export const getOptimizedImagePath = (path: string): string => {
  // Handle base path correctly for production
  const basePath = import.meta.env.DEV ? '' : '/Webpage'
  const fullPath = path.startsWith('/') ? `${basePath}${path}` : `${basePath}/${path}`
  
  // Log image paths in development for debugging
  if (import.meta.env.DEV) {
    console.log(`Image path: ${fullPath}`)
  }
  
  return fullPath
}

// Fallback image handler
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const target = event.target as HTMLImageElement
  const fallbackPath = getOptimizedImagePath('/images/fallback/placeholder.jpg')
  
  console.warn(`Image failed to load: ${target.src}. Using fallback.`)
  target.src = fallbackPath
}

// Image preloader for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`))
    img.src = src
  })
}

// Batch image preloader
export const preloadImages = async (imagePaths: string[]): Promise<void> => {
  try {
    await Promise.all(imagePaths.map(preloadImage))
    console.log('✅ All critical images preloaded successfully')
  } catch (error) {
    console.error('❌ Failed to preload some images:', error)
  }
}