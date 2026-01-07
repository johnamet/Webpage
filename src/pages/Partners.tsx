import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import Hero from '../components/shared/Hero'

const Partners: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handlePartnerWithUs = () => {
    window.location.href = '/contact'
  }

  const handleLearnMore = () => {
    document.getElementById('partnership-options')?.scrollIntoView({ behavior: 'smooth' })
  }

  const partnershipWays = [
    {
      title: 'Corporate Sponsorships',
      description: 'Provide financial support for training, infrastructure, or scholarships. Sponsor specific program activities, such as hackathons or outreach events.'
    },
    {
      title: 'Resource Donations',
      description: 'Donate laptops, software, or internet connectivity to enhance learning. Supply equipment for hands-on technical training.'
    },
    {
      title: 'Internship & Employment Opportunities',
      description: 'Offer internship placements to our graduates for real-world experience. Hire skilled alumni who are ready to contribute to your organization.'
    },
    {
      title: 'Expertise & Mentorship',
      description: 'Share your expertise by volunteering as a mentor, trainer, or guest speaker. Provide industry insights and guidance to participants and staff.'
    }
  ]

  const whyPartnerReasons = [
    {
      title: 'Make a Tangible Impact',
      points: [
        'Equip underserved youth with life-changing IT skills and career opportunities',
        'Support initiatives that address economic inequality and social challenges'
      ]
    },
    {
      title: 'Support Diversity & Inclusion',
      points: [
        'Empower women, physically challenged individuals, and financially disadvantaged youth in technology',
        'Help break barriers for marginalized communities in the digital economy'
      ]
    },
    {
      title: 'Be Part of Ghana\'s Digital Transformation',
      points: [
        'Contribute to building a skilled workforce for the growing tech sector',
        'Encourage innovation and entrepreneurship among Ghanaian youth'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Partner with Us - Transform Lives, Build Futures"
        description="Join IT for Youth Ghana in transforming lives through technology education. Corporate sponsorships, mentorship, and partnership opportunities available."
        canonical="/partners"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <div id="top" className="absolute"></div>
        <Hero
          title="Partner with Us"
          subtitle="Transform Lives, Build Futures"
          description="IT For Youth Ghana invites you to become part of a transformative mission to empower vulnerable youth with technology skills that drive sustainable careers and entrepreneurship."
          primaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
          secondaryCta={{ text: "Learn Why", action: handleLearnMore }}
        />

        {/* Mission Statement */}
        <section className="section bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="heading-lg mb-6 text-primary">Join Us Transform Lives</h2>
              <p className="text-lead leading-relaxed">
                By partnering with us, you are not just supporting a program—you are changing lives, 
                fostering innovation, and contributing to Ghana's digital future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Partner with Us */}
        <section id="why-partner" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Why Partner with Us?</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Discover the meaningful impact your partnership can make in Ghana's digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {whyPartnerReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
                >
                  <h3 className="heading-sm text-primary mb-6">{reason.title}</h3>
                  <div className="space-y-4">
                    {reason.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-body leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Partner */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Ways to Partner</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Choose the partnership approach that aligns best with your organization's goals and capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipWays.map((way, index) => (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="heading-sm text-primary">{way.title}</h3>
                  </div>
                  <p className="text-body leading-relaxed">{way.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Us */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="heading-xl mb-8 text-white">How to Join Us</h2>
              <p className="text-lead mb-8 text-white/90">
                Becoming a partner is easy:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">1. Contact Us</h3>
                  <p className="text-white/90">
                    Reach out to discuss partnership opportunities and explore how we can work together.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">2. Tailored Partnerships</h3>
                  <p className="text-white/90">
                    We'll collaborate with you to design a partnership plan that aligns with your priorities.
                  </p>
                </div>
              </div>

              <p className="text-xl mb-8 text-white font-medium">
                Together, we can bridge the digital divide and create a brighter future for Ghanaian youth.
              </p>

              <h3 className="text-2xl font-bold mb-8 text-white">
                Let's transform lives and build futures—Partner with Us Today!
              </h3>

              <motion.button
                className="btn btn-secondary bg-white text-primary hover:bg-neutral-100 text-lg font-bold py-4 px-8 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePartnerWithUs}
              >
                Start Partnership Discussion
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Partners