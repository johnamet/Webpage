import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BeforeAfter: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const beforeItems = [
    'Limited or no tech skills',
    'Little confidence in own abilities',
    'Uncertainty about career paths',
    'Limited access to resources',
    'Missing networks in the tech industry'
  ]

  const afterItems = [
    'Solid tech skills in chosen field',
    'Self-confidence and problem-solving abilities',
    'Clear career goals and development plans',
    'Access to mentors and resources',
    'Strong professional networks'
  ]

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6">Before & After</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            The transformation of our participants from application to graduation
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-200"
            >
              <h3 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Before the Program</h3>
              <ul className="space-y-6">
                {beforeItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-4 h-4 bg-neutral-400 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-neutral-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-lg border border-primary/20"
            >
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">After the Program</h3>
              <ul className="space-y-6">
                {afterItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center bg-white/80 rounded-xl p-4 shadow-sm border border-primary/10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <span className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-primary font-semibold">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter