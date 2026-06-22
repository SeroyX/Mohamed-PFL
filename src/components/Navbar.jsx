import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/95 backdrop-blur-2xl border-b border-dark-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-accent-400 transition-all">
              KR<span className="text-dark-300 group-hover:text-dark-200">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-dark-300 hover:text-primary-400 transition-colors text-sm font-medium rounded-lg hover:bg-dark-800/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-6 w-px bg-dark-700/50"></div>
            <a href="https://github.com/SeroyX" target="_blank" rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-200 p-2 hover:bg-dark-800/40 rounded-lg">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-karaoui-326b622a8" target="_blank" rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-200 p-2 hover:bg-dark-800/40 rounded-lg">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:karaoui925@gmail.com" target="_blank" rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-200 p-2 hover:bg-dark-800/40 rounded-lg">
              <FiMail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-300 hover:text-primary-400 transition-colors p-2 hover:bg-dark-800/40 rounded-lg"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-dark-700/50 mt-4 pt-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-dark-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-dark-800/40"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-dark-700/50">
              <a href="https://github.com/SeroyX" target="_blank" rel="noopener noreferrer"
                 className="text-dark-400 hover:text-primary-400 transition-colors p-2 hover:bg-dark-800/40 rounded-lg">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-karaoui-326b622a8" target="_blank" rel="noopener noreferrer"
                 className="text-dark-400 hover:text-primary-400 transition-colors p-2 hover:bg-dark-800/40 rounded-lg">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:karaoui925@gmail.com" target="_blank" rel="noopener noreferrer"
                 className="text-dark-400 hover:text-primary-400 transition-colors p-2 hover:bg-dark-800/40 rounded-lg">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
