import { getImagePath } from '../../utils/randomImages'
// NEU: Redesigned Header - Logo links, zentrale Navigation, prominenter Volunteer-CTA
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // FINAL: Navigation mit korrekter Reihenfolge
  const mainNavItems = [
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partners', href: '/partners' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ]

  // NEU: Login/Register unter "Mehr" 
  const moreItems = [
    { name: 'Login', action: () => alert('Login functionality coming soon!') },
    { name: 'Register', action: () => alert('Register functionality coming soon!') },
  ]

  return (
    <motion.header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-primary-lg border-b border-primary/10 py-2' 
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* NEU: Sticky/Shrink Layout - Logo links, zentrale Navigation, Volunteer-CTA rechts */}
        <div className="flex items-center justify-between">
          {/* Logo links */}
          <Link 
            to="/" 
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
            aria-label="IT for Youth Ghana - Go to homepage"
            className="flex items-center"
            style={{ minHeight: 'var(--touch-target-min)' }}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={getImagePath("/images/logo/logo.jpg")} 
                alt="IT for Youth Ghana logo" 
                className={`w-auto object-contain transition-all duration-300 max-w-[120px] ${
                  isScrolled ? 'h-6' : 'h-8'
                }`}
              />
            </motion.div>
          </Link>

          {/* Zentrale Navigation (Desktop) */}
          <nav 
            className="hidden xl:flex items-center space-x-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {mainNavItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-neutral-700'
                  }`}
                  style={{ minHeight: 'var(--touch-target-min)' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mehr Menu für Login/Register */}
            <div className="relative">
              <motion.button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  isMoreMenuOpen ? 'text-primary bg-primary/10' : 'text-neutral-700'
                }`}
                style={{ minHeight: 'var(--touch-target-min)' }}
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                aria-expanded={isMoreMenuOpen}
                aria-haspopup="true"
              >
                Mehr ↓
              </motion.button>
              
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-primary-lg py-2"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {moreItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setIsMoreMenuOpen(false)
                          item.action()
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                        style={{ minHeight: 'var(--touch-target-min)' }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Rechts: Prominenter Volunteer-CTA */}
          <div className="flex items-center space-x-3">
            {/* Desktop Volunteer CTA */}
            <Link 
              to="/volunteer" 
              onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
              className="hidden md:block"
            >
              <motion.button
                className={`btn btn-primary transition-all duration-300 ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
                }`}
                style={{ 
                  minHeight: 'var(--touch-target-min)',
                  backgroundColor: '#0152be',
                  color: 'white'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`font-bold ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  Volunteer
                </span>
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              id="mobile-menu-button"
              className="xl:hidden p-2 text-neutral-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              style={{ minHeight: 'var(--touch-target-min)', minWidth: 'var(--touch-target-min)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  className="absolute top-0 left-0 w-full h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 11 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-full h-0.5 bg-current"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-full h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -11 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

      </div>

      {/* NEU: Mobile Vollbild-Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-primary/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              id="mobile-menu"
              className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 flex items-center justify-center transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Logo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src={getImagePath("/images/logo/logo.jpg")} 
                  alt="IT for Youth Ghana" 
                  className="h-16 w-auto mx-auto brightness-0 invert object-contain max-w-[150px]"
                />
              </motion.div>

              {/* Navigation Items */}
              <motion.nav
                className="flex flex-col space-y-6 mb-12"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {mainNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <Link
                      to={item.href}
                      className={`block text-2xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-4 py-2 ${
                        location.pathname === item.href
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setTimeout(() => window.scrollTo(0, 0), 100)
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Volunteer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <Link 
                  to="/volunteer" 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setTimeout(() => window.scrollTo(0, 0), 100)
                  }}
                >
                  <motion.button
                    className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Volunteer Now
                  </motion.button>
                </Link>
              </motion.div>

              {/* Auth Buttons */}
              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {moreItems.map((item) => (
                  <button
                    key={item.name}
                    className="text-white/70 hover:text-white font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      item.action()
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar