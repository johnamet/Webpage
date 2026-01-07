import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'

const ImpactStats: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const impactNumbers = content.hero.stats.concat([
    { number: '85%', label: 'Success Rate', description: 'Graduates find jobs or start businesses' },
    { number: '25+', label: 'Partner Schools', description: 'Active educational partnerships' }
  ])

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6">Numbers That Speak</h2>
          <p className="text-lead text-center max-w-3xl mx-auto">
            Six years of dedicated work transforming lives through technology education
          </p>
        </motion.div>

        {/* Responsive Grid: 3 Spalten auf Desktop, 2 auf Tablet, 1 auf Mobile */}
        <div className="responsive-grid responsive-grid-sm-2 responsive-grid-lg-3 max-w-6xl mx-auto">
          {impactNumbers.slice(0, 3).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-8 text-center group shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary/20"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05 + 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-neutral-800 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats