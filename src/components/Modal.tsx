// NEU: Wiederverwendbare Modal/Popup-Komponente für die gesamte Website
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  showCloseButton?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus management and accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleTabKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleTabKeyDown)
      // Verhindere Scrollen im Hintergrund
      document.body.style.overflow = 'hidden'
      
      // Focus the modal or close button
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus()
        } else if (modalRef.current) {
          modalRef.current.focus()
        }
      }, 100)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTabKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Dynamic max-width based on size
  const getMaxWidth = () => {
    switch (size) {
      case 'small': return 'max-w-md'
      case 'medium': return 'max-w-2xl' 
      case 'large': return 'max-w-6xl'
      default: return 'max-w-2xl'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[10000]"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-white rounded-2xl shadow-2xl w-full ${getMaxWidth()} max-h-[95vh] overflow-hidden relative`}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Fixed Close Button - Top Right */}
            {showCloseButton && (
              <motion.button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors duration-200 text-neutral-700 hover:text-neutral-900 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
                title="Close modal (Press Escape)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] p-6 pt-16">
              {/* Header */}
              <div className="mb-6">
                <h2 id="modal-title" className="text-3xl font-bold text-gray-900 pr-12">
                  {title}
                </h2>
              </div>

              {/* Content */}
              <div>
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal