import React from 'react'
import SEO from '../../../../components/SEO'
import Hero from '../../../../components/shared/Hero'

const VolunteerBenefits: React.FC = () => {
  const handleVolunteer = () => {
    window.location.href = '/opportunities/volunteers'
  }

  return (
    <>
      <SEO
        title="For Volunteers - IT for Youth Ghana"
        description="Make a difference in your community. Volunteer with IT for Youth Ghana and help transform young lives through technology education."
        canonical="/opportunities/volunteers"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        <Hero
          title="Make a Difference"
          subtitle="For Volunteers"
          description="Join our community of passionate volunteers helping to transform young lives through technology education and mentorship."
          primaryCta={{ text: "Start Volunteering", action: handleVolunteer }}
        />
        
        {/* Volunteer Opportunities Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Volunteer Opportunities</h2>
              <p className="text-lead max-w-3xl mx-auto text-neutral-700">
                Find perfect way to contribute your skills and time to our mission
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Teaching/Mentoring */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Teaching & Mentoring</h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Share your tech knowledge and inspire the next generation of IT professionals in Ghana.
                    </p>
                  </div>
                </div>
              </div>
                
              {/* Technical Support */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Technical Support</h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Help maintain our IT infrastructure and support smooth operations of training centers.
                    </p>
                  </div>
                </div>
              </div>
                
              {/* Program Development */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Program Development</h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Help design and improve our educational programs and training materials.
                    </p>
                  </div>
                </div>
              </div>
                
              {/* Event Organization */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Event Organization</h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Assist with organizing workshops, seminars, and community outreach events.
                    </p>
                  </div>
                </div>
              </div>
                
              {/* Content Creation */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Content Creation</h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Create engaging content and help us share our mission with a wider audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* How It Works */}
            <div className="text-center mt-20">
              <div 
                className="bg-gradient-to-br rounded-2xl p-12 border shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(12, 45, 90, 0.05)',
                  borderColor: 'rgba(12, 45, 90, 0.1)'
                }}
              >
                <h3 className="heading-md mb-4" style={{ color: '#0c2d5a' }}>Ready to Get Started?</h3>
                <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
                  Join our volunteer community and help transform young lives through technology education in Ghana.
                </p>
                <div className="text-center space-x-4">
                  <button 
                    onClick={handleVolunteer}
                    className="btn btn-primary inline-block"
                  >
                    Start Volunteering Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VolunteerBenefits