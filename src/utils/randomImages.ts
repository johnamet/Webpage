// Professional image path handling with error logging and validation
// Use Vite's BASE_URL which is automatically set from vite.config.ts (base: '/')
// This works correctly for custom domain setup
export const getImagePath = (path: string) => {
  try {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    
    // Log image paths in development for debugging
    if (import.meta.env.DEV) {
      console.log(`🖼️ Image path generated: ${cleanPath}`)
    }
    
    return cleanPath
  } catch (error) {
    console.error(`❌ Error generating image path for: ${path}`, error)
    // Return fallback path
    return `/images/fallback/placeholder.svg`
  }
}

// Professional image validation (client-side)
export const validateImagePath = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' })
    const isValid = response.ok
    
    if (!isValid && import.meta.env.DEV) {
      console.warn(`⚠️ Image not found: ${path}`)
    }
    
    return isValid
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(`⚠️ Failed to validate image: ${path}`, error)
    }
    return false
  }
}

// Utility für zufällige Bildauswahl aus dem erweiterten Pool
const baseImages = [
  '/images/randomPictures/UX4.jpg',
  '/images/randomPictures/UXteacher.png',
  '/images/randomPictures/children_holding_sign_in_streets.jpg',
  '/images/randomPictures/frontalgraduation.jpg',
  '/images/randomPictures/girlstaslkingUX.jpg',
  '/images/randomPictures/graduation.jpg',
  '/images/randomPictures/graduations.jpg',
  '/images/randomPictures/graduationspeaking.jpg',
  '/images/randomPictures/group_girls.jpg',
  '/images/randomPictures/groupofgirlsentrance.jpg',
  '/images/randomPictures/UX4.jpg',
  '/images/randomPictures/groupworkstudents.jpg',
  '/images/randomPictures/happystudentscasual.jpg',
  '/images/randomPictures/maingraduationpic.jpg',
  '/images/randomPictures/maingraduationpic.jpg',
  '/images/randomPictures/mave_peter.jpg',
  '/images/randomPictures/mireiotalking.jpg',
  '/images/randomPictures/peterTalking.jpg',
  '/images/randomPictures/peterblackboard.jpg',
  '/images/randomPictures/peterblackboard.jpg',
  '/images/randomPictures/petertalkingtostudentscoloful.jpg',
  '/images/randomPictures/petertalkingtostudentscoloful.jpg',
  '/images/randomPictures/redclothingStudents.jpg',
  '/images/randomPictures/redstudentgrouplesson.jpg',
  '/images/randomPictures/studentgroupguys.jpg',
  '/images/randomPictures/studentpresentin.jpg',
  '/images/randomPictures/studentpresenting.jpg',
  '/images/randomPictures/studentsBackcoding.jpg',
  '/images/randomPictures/studentsblueclothing.jpg',
  '/images/randomPictures/studentsBackcoding.jpg',
  '/images/randomPictures/studentslistening.jpg',
  '/images/randomPictures/studentslisteningfrontal.jpg',
  '/images/randomPictures/uXstudents.jpg',
  '/images/randomPictures/whiteLady.jpg'
]

export const randomImages = baseImages.map(img => getImagePath(img))

// Utility-Funktionen für zufällige Bildauswahl
export const getRandomImage = (): string => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
}

export const getRandomImages = (count: number): string[] => {
  const shuffled = [...randomImages].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getRandomImageSet = (count: number): string[] => {
  // Sicherstellen, dass wir keine Duplikate haben
  const selected: string[] = []
  const available = [...randomImages]
  
  for (let i = 0; i < count && available.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * available.length)
    selected.push(available.splice(randomIndex, 1)[0])
  }
  
  return selected
}

// Kategorisierte Bildsets für spezielle Anwendungen
const baseCategoryImages = {
  workshops: [
    '/images/randomPictures/UX4.jpg',
    '/images/randomPictures/groupworkstudents.jpg',
    '/images/randomPictures/UXteacher.png',
    '/images/randomPictures/girlstaslkingUX.jpg',
    '/images/randomPictures/uXstudents.jpg'
  ],
  graduation: [
    '/images/randomPictures/frontalgraduation.jpg',
    '/images/randomPictures/graduation.jpg',
    '/images/randomPictures/graduations.jpg',
    '/images/randomPictures/graduationspeaking.jpg',
    '/images/randomPictures/maingraduationpic.jpg'
  ],
  tech: [
    '/images/randomPictures/studentsBackcoding.jpg',
    '/images/randomPictures/studentslistening.jpg',
    '/images/randomPictures/peterblackboard.jpg',
    '/images/randomPictures/UX4.jpg'
  ],
  community: [
    '/images/randomPictures/group_girls.jpg',
    '/images/randomPictures/happystudentscasual.jpg',
    '/images/randomPictures/children_holding_sign_in_streets.jpg',
    '/images/randomPictures/groupofgirlsentrance.jpg'
  ]
}

export const imageCategories = Object.fromEntries(
  Object.entries(baseCategoryImages).map(([key, images]) => [
    key,
    images.map(img => getImagePath(img))
  ])
) as Record<keyof typeof baseCategoryImages, string[]>

export const getCategoryImages = (category: keyof typeof imageCategories): string[] => {
  return imageCategories[category] || []
}