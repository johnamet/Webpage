import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'

interface CommunityImpactItem {
  title: string
  description: string
  icon: string
  stats: string
}

const CommunityImpact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const communityImpact: CommunityImpactItem[] = [
    {
      title: 'Economic Development',
      description: 'Our graduates contribute to the local economy by starting new businesses and developing local tech solutions.',
      icon: 'Business',
      stats: content.impact.outcomes[1]
    },
    {
      title: 'Educational Partnership',
      description: 'Collaboration with schools to integrate technology education into regular curriculum.',
      icon: 'Education',
      stats: '25+ School partnerships established'
    },
    {
      title: 'Digital Inclusion',
      description: 'Bridging the digital divide in rural and underserved areas of Ghana.',
      icon: 'Digital',
      stats: '15+ Rural communities reached'
    },
    {
      title: 'Gender Equality',
      description: 'Promoting the participation of women and girls in STEM fields.',
      icon: 'Equality',
      stats: '40% female program participation'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6">Community Impact</h2>
          <p className="text-lead text-center max-w-3xl mx-auto">
            How our programs transform entire communities and Ghana's digital future
          </p>
        </motion.div>

        <div className="cards-grid">
          {communityImpact.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="card text-center group cursor-pointer"
              onHoverStart={() => {
                // Trigger animations when hovering anywhere on the card
              }}
            >
              <div className="card-content">
                {/* Headline oben */}
                <div>
                  <motion.div 
                    className="w-16 h-16 mb-6 mx-auto rounded-lg overflow-hidden"
                    animate={{
                      rotate: 0,
                      scale: 1
                    }}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <span className="text-white font-bold text-sm">{impact.icon.slice(0,3)}</span>
                    </div>
                  </motion.div>
                  <h3 className="card-title heading-sm group-hover:text-accent transition-colors duration-300">
                    {impact.title}
                  </h3>
                </div>
                
                {/* Content mittig */}
                <div className="card-text">
                  <p className="text-body group-hover:text-primary transition-colors duration-300">
                    {impact.description}
                  </p>
                </div>
                
                {/* CTA/Button unten */}
                <div className="card-footer">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3 mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <p className="text-sm font-semibold text-primary">{impact.stats}</p>
                  </div>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      // Navigate based on impact type
                      if (impact.title.includes('Economic')) {
                        window.location.href = '/programs';
                      } else if (impact.title.includes('Educational')) {
                        window.location.href = '/programs';
                      } else if (impact.title.includes('Digital')) {
                        window.location.href = '/about';
                      } else if (impact.title.includes('Gender')) {
                        window.location.href = '/volunteer';
                      } else {
                        window.location.href = '/contact';
                      }
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact