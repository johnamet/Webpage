import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { VolunteerRole } from '../data/volunteerRoles'

interface VolunteerBenefit {
  icon: string
  title: string
  description: string
}

interface VolunteerBenefitsProps {
  benefits: VolunteerBenefit[]
  volunteerRoles: VolunteerRole[]
  onRoleClick: (role: VolunteerRole) => void
}

const VolunteerBenefits: React.FC<VolunteerBenefitsProps> = ({ benefits, volunteerRoles, onRoleClick }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <>
      {/* Why Volunteer */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Why Become a Volunteer?</h2>
            <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
              Your time and expertise can sustainably transform the lives of young people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="bg-white rounded-2xl p-8 shadow-float border border-secondary/20 text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-6xl mb-6 mx-auto"
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
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto group-hover:bg-accent transition-colors duration-300">
                    <span className="text-white font-bold text-sm">{benefit.icon.slice(0,3)}</span>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-800 leading-relaxed group-hover:text-primary transition-colors duration-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="volunteer-roles" className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="heading-lg mb-6">Volunteer Opportunities</h2>
            <div className="text-container">
              <p className="text-lead text-center">
                Find the perfect role that matches your skills, interests, and availability
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => onRoleClick(role)}
                className="card cursor-pointer group hover:shadow-primary-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                style={{ 
                  minHeight: 'var(--touch-target-min)',
                  padding: 'var(--space-lg)'
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-sm text-primary group-hover:text-primary-600 transition-colors duration-300">
                    {role.title}
                  </h3>
                  <span className="badge badge-accent text-xs">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-body mb-4 line-clamp-3">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.slice(0, 2).map((skill: string, idx: number) => (
                    <span key={idx} className="badge badge-primary text-xs">
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 2 && (
                    <span className="badge bg-neutral-100 text-neutral-800 text-xs">
                      +{role.skills.length - 2} more
                    </span>
                  )}
                </div>
                <button className="btn btn-secondary w-full text-sm group-hover:btn-primary transition-all duration-300">
                  Learn More & Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default VolunteerBenefits