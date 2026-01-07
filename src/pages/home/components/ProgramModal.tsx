import React from 'react'
import { motion } from 'framer-motion'
import { programs } from '../../../data/programs'

interface ProgramPageProps {
  programId?: string
}

export const ProgramPage: React.FC<ProgramPageProps> = ({ programId }) => {
  const program = programId 
    ? programs.find(p => p.id === programId) 
    : programs[0] // Default to first program if no ID provided

  if (!program) return null

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span 
                className="px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: '#0c2d5a' }}
              >
                {program.tag}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{program.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0c2d5a' }}>Overview</h3>
            <p className="text-neutral-700 leading-relaxed">
              {program.detailContent.overview}
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0c2d5a' }}>Key Objectives</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {program.detailContent.objectives.map((objective, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }} />
                  <span className="text-neutral-700">{objective}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Impact Metrics */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0c2d5a' }}>Impact & Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(program.detailContent.impact).map(([key, value], index) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl p-4 text-center border" style={{ backgroundColor: 'rgba(12, 45, 90, 0.05)', borderColor: 'rgba(12, 45, 90, 0.1)' }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: '#0c2d5a' }}>
                    {value.split(' ')[0]}
                  </div>
                  <div className="text-sm text-neutral-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                  {value.includes(' ') && (
                    <div className="text-xs text-neutral-500 mt-1">
                      {value.split(' ').slice(1).join(' ')}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0c2d5a' }}>Our Approach</h3>
            <p className="text-neutral-700 leading-relaxed">
              {program.detailContent.approach}
            </p>
          </div>

          {/* Success Stories */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0c2d5a' }}>Success Stories</h3>
            <div className="rounded-xl p-6 border" style={{ background: 'linear-gradient(135deg, rgba(12, 45, 90, 0.05), rgba(12, 45, 90, 0.03))', borderColor: 'rgba(12, 45, 90, 0.1)' }}>
              <p className="text-neutral-700 leading-relaxed italic">
                "{program.detailContent.success}"
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
            <a
              href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '50px',
                background: '#0c2d5a',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(12, 45, 90, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(12, 45, 90, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(12, 45, 90, 0.3)'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Support This Program
            </a>
            
            <a
              href="/programs"
              className="flex-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '50px',
                background: 'white',
                color: '#0c2d5a',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                border: '2px solid #0c2d5a',
                boxShadow: '0 6px 20px rgba(12, 45, 90, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(12, 45, 90, 0.3)'
                e.currentTarget.style.background = '#f8fafc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(12, 45, 90, 0.2)'
                e.currentTarget.style.background = 'white'
              }}
            >
              Back to Programs
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Ready to Support This Program?</h2>
            <p className="text-lead mb-8 text-gray-600">
              Your contribution helps us continue providing quality technology education to Ghana's youth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  background: '#0c2d5a',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 25px rgba(12, 45, 90, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(12, 45, 90, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(12, 45, 90, 0.3)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Support This Program
              </a>
              
              <a
                href="/programs"
                className="flex-1"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  background: 'white',
                  color: '#0c2d5a',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: '2px solid #0c2d5a',
                  boxShadow: '0 6px 20px rgba(12, 45, 90, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(12, 45, 90, 0.3)'
                  e.currentTarget.style.background = '#f8fafc'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(12, 45, 90, 0.2)'
                  e.currentTarget.style.background = 'white'
                }}
              >
                Back to Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ProgramPage