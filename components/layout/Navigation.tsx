'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, User, Calendar, MessageCircle, Home, Star } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Star },
    { name: 'Consultation', href: '#consultation', icon: Calendar },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, 100)
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-gold/20 shadow-2xl'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Orbs Astro
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-gold px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gold/10 group"
                  >
                    <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </motion.button>
                )
              })}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                Get Reading
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold hover:text-yellow-400 p-2 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gold/10 w-full text-left"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.button>
                )
              })}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold mt-4"
              >
                Get Reading
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation 