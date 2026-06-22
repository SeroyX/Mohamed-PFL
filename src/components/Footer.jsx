import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
//import { SiKaggle } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/SeroyX',
      label: 'GitHub',
      color: 'hover:text-[#ffffff]'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/mohamed-karaoui-326b622a8',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]'
    },
    {
      icon: FiMail,
      href: 'mailto:karaoui925@gmail.com',
      label: 'Mail',
      color: 'hover:text-[#20BEFF]'
    },
    
  ]

  return (
    <footer className="bg-dark-950/80 border-t border-dark-700/50 backdrop-blur-md relative">
      <div className="section-container py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent mb-3">
              KR<span className="text-dark-300">.</span>
            </div>
            <p className="text-dark-500 text-sm max-w-xs">
              Software Engineer | Artificial Intelligence | Web & Mobile Development
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-dark-100 mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-dark-100 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-dark-400 ${link.color} transition-colors p-2.5 rounded-lg hover:bg-dark-800/40`}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-dark-500 text-sm">
              © {currentYear} Karaoui Mohamed. All rights reserved.
            </p>
            <p className="text-dark-600 text-xs mt-1">
              Built with React, Vite, Tailwind CSS • Deployed on GitHub Pages
            </p>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="btn-secondary-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  )
}

export default Footer
