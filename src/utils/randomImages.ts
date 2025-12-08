// Vite automatically adds the base path from vite.config.ts (base: '/Webpage')
// No need to manually add /Webpage prefix - it causes double prefixing on GitHub Pages
export const getImagePath = (path: string) => {
  // Return path as-is, Vite will handle the base path injection
  return path.startsWith('/') ? path : `/${path}`
}

// Utility für zufällige Bildauswahl aus dem erweiterten Pool
const baseImages = [
  '/images/randomPictures/UX4.jpg',
  '/images/randomPictures/UXteacher.png',
  '/images/randomPictures/children_holding_sign_in_streets.jpeg',
  '/images/randomPictures/frontalgraduation.jpg',
  '/images/randomPictures/girlstaslkingUX.jpg',
  '/images/randomPictures/graduation.jpg',
  '/images/randomPictures/graduations.jpg',
  '/images/randomPictures/graduationspeaking.jpg',
  '/images/randomPictures/group_girls.jpg',
  '/images/randomPictures/groupofgirlsentrance.jpeg',
  '/images/randomPictures/groupworkUX.jpeg',
  '/images/randomPictures/groupworkstudents.jpg',
  '/images/randomPictures/happystudentscasual.jpg',
  '/images/randomPictures/main.jpg',
  '/images/randomPictures/maingraduationpic.jpg',
  '/images/randomPictures/mave.jpg',
  '/images/randomPictures/mave_peter.jpg',
  '/images/randomPictures/mireiotalking.jpeg',
  '/images/randomPictures/peterTalking.jpg',
  '/images/randomPictures/peterblackboard.jpg',
  '/images/randomPictures/peterfocus.jpg',
  '/images/randomPictures/petertalkingfrontal.jpg',
  '/images/randomPictures/petertalkingtostudentscoloful.jpg',
  '/images/randomPictures/redclothingStudents.jpg',
  '/images/randomPictures/redstudentgrouplesson.jpg',
  '/images/randomPictures/studentgroupguys.jpg',
  '/images/randomPictures/studentpresentin.jpg',
  '/images/randomPictures/studentpresenting.jpg',
  '/images/randomPictures/studentsBackcoding.jpg',
  '/images/randomPictures/studentsblueclothing.jpg',
  '/images/randomPictures/studentscodingback.jpg',
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
    '/images/randomPictures/groupworkUX.jpeg',
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
    '/images/randomPictures/studentscodingback.jpg',
    '/images/randomPictures/studentsBackcoding.jpg',
    '/images/randomPictures/peterblackboard.jpg',
    '/images/randomPictures/main.jpg'
  ],
  community: [
    '/images/randomPictures/group_girls.jpg',
    '/images/randomPictures/happystudentscasual.jpg',
    '/images/randomPictures/children_holding_sign_in_streets.jpeg',
    '/images/randomPictures/groupofgirlsentrance.jpeg'
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