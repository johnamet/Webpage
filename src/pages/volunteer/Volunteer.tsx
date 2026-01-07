import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../../components/Modal'
import SEO from '../../components/SEO'
import VolunteerHero from './components/VolunteerHero'
import VolunteerBenefits from './components/VolunteerBenefits'
import VolunteerProcess from './components/VolunteerProcess'
import VolunteerForm from './components/VolunteerForm'
import { volunteerRoles, volunteerBenefits, volunteerProcess, VolunteerRole } from './data/volunteerRoles'
import { useVolunteerForm } from './hooks/useVolunteerForm'

const Volunteer: React.FC = () => {
  const [selectedVolunteerRole, setSelectedVolunteerRole] = useState<VolunteerRole | null>(null)
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false)
  const { formData, setFormData, isSubmitting, submitMessage, handleSubmit } = useVolunteerForm()

  const openRoleModal = (role: VolunteerRole) => {
    setSelectedVolunteerRole(role)
    setIsRoleModalOpen(true)
  }

  const closeRoleModal = () => {
    setIsRoleModalOpen(false)
    setSelectedVolunteerRole(null)
  }

  const handleApplyClick = () => {
    document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewRolesClick = () => {
    document.getElementById('volunteer-roles')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SEO 
        title="Volunteer Opportunities - Tech Mentoring Ghana"
        description="Join our volunteer team to mentor young developers in Ghana. Tech mentors, workshop trainers, and community outreach opportunities available."
        canonical="/volunteer"
        ogType="website"
      />
      <div id="main-content" className="min-h-screen bg-white" style={{ paddingTop: 'var(--space-3xl)' }}>
        <VolunteerHero 
          onApplyClick={handleApplyClick}
          onViewRolesClick={handleViewRolesClick}
        />
        
        <VolunteerBenefits 
          benefits={volunteerBenefits}
          volunteerRoles={volunteerRoles}
          onRoleClick={openRoleModal}
        />
        
        <VolunteerProcess steps={volunteerProcess} />
        
        <VolunteerForm 
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitMessage={submitMessage}
        />

        {/* Volunteer Role Details Modal */}
        <Modal
          isOpen={isRoleModalOpen}
          onClose={closeRoleModal}
          title={selectedVolunteerRole?.title || ''}
          size="large"
        >
          {selectedVolunteerRole && (
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h3 className="heading-md mb-4">Role Overview</h3>
                <p className="text-body leading-relaxed">
                  {selectedVolunteerRole.detailContent.overview}
                </p>
              </div>

              {/* Time Commitment */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Time Commitment</h3>
                <p className="text-body font-medium text-primary">
                  {selectedVolunteerRole.detailContent.timeCommitment}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="heading-md mb-4">Key Responsibilities</h3>
                <div className="grid gap-3">
                  {selectedVolunteerRole.detailContent.responsibilities.map((responsibility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Requirements</h3>
                <div className="grid gap-3">
                  {selectedVolunteerRole.detailContent.requirements.map((requirement: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="heading-md mb-4">What You'll Gain</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedVolunteerRole.detailContent.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <h3 className="heading-md mb-4">Your Impact</h3>
                <p className="text-body font-medium">
                  {selectedVolunteerRole.impact}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setFormData({ ...formData, role: selectedVolunteerRole.title })
                    closeRoleModal()
                    document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Apply for This Role
                </motion.button>
                <motion.button
                  className="btn btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeRoleModal()
                    window.location.href = 'mailto:info@itforyouthghana.org?subject=Volunteer Inquiry - ' + encodeURIComponent(selectedVolunteerRole.title)
                  }}
                >
                  Ask Questions
                </motion.button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  )
}

export default Volunteer