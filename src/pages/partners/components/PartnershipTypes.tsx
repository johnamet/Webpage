import React from 'react'
import { motion } from 'framer-motion'
import { partnershipOptions, PartnershipOption } from './partnershipData'

interface PartnershipTypesProps {
  className?: string
  onPartnershipClick?: (partnership: PartnershipOption) => void
}

const PartnershipTypes: React.FC<PartnershipTypesProps> = ({ 
  className = '',
  onPartnershipClick
}) => {
  const handlePartnershipClick = (partnership: PartnershipOption) => {
    if (onPartnershipClick) {
      onPartnershipClick(partnership)
    } else {
      // Fallback to navigation
      const path = `/partnerships/${partnership.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`
      window.location.href = path
    }
  }

  return (
    <section className={`section bg-white ${className}`} id="partnership-options">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Partnership Opportunities</h2>
          <p className="text-lead max-w-3xl mx-auto text-neutral-700">
            Discover various ways your organization can support digital inclusion while achieving your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnershipOptions.map((partnership, index) => (
            <motion.div
              key={partnership.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="card cursor-pointer group"
              onClick={() => handlePartnershipClick(partnership)}
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <h3 className="heading-sm group-hover:text-opacity-80 transition-colors duration-300" style={{ color: '#0c2d5a' }}>
                    {partnership.title}
                  </h3>
                </div>
                
                <p className="text-body mb-6">{partnership.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partnership.benefits.map((benefit: string, idx: number) => (
                      <span 
                        key={idx} 
                        className="text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                        style={{ backgroundColor: 'rgba(12, 45, 90, 0.8)' }}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div 
                  className="rounded-lg p-3"
                  style={{ backgroundColor: 'rgba(12, 45, 90, 0.1)' }}
                >
                  <p className="text-sm font-semibold" style={{ color: '#0c2d5a' }}>Click to learn more about this partnership opportunity</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnershipTypes