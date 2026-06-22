import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
//import { SiKaggle } from 'react-icons/si'

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV.pdf'
    link.download = 'CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              <span className="text-primary-400 font-mono text-sm">Welcome to my portfolio</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">Karaoui</span>
              <span className="block text-gradient">Mohamed</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-1xl md:text-2xl lg:text-3xl font-semibold text-dark-300 mb-6"
            >
              Software Engineer • Artificial Intelligence • Web & Mobile Development
            </motion.h3>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-dark-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              
  Software Engineer focused on creating practical, scalable, and innovative digital experiences.
  Passionate about <span className="text-highlight">Artificial Intelligence</span>,
  <span className="text-highlight"> Full-Stack Development</span>, and
  <span className="text-highlight"> Mobile Applications</span>.
  Building solutions that solve real-world problems and create meaningful impact.

            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
              <button onClick={handleDownloadCV} className="btn-secondary inline-flex items-center gap-2">
                <FiDownload size={18} />
                Resume
              </button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary-500 to-transparent"></div>
              <div className="flex gap-4">
                <a href="https://github.com/SeroyX" target="_blank" rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-all duration-300 p-3 rounded-lg hover:bg-dark-800/60 hover:shadow-glow"
                  aria-label="GitHub">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-karaoui-326b622a8" target="_blank" rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-all duration-300 p-3 rounded-lg hover:bg-dark-800/60 hover:shadow-glow"
                  aria-label="LinkedIn">
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:karaoui925@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-all duration-300 p-3 rounded-lg hover:bg-dark-800/60 hover:shadow-glow"
                  aria-label="Kaggle">
                  <FiMail size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-full blur-3xl animate-glow"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/60 to-accent-600/60 animate-pulse opacity-50"></div>
                <img
                  src={`${import.meta.env.BASE_URL}Me.jpg`}
                  alt="Karaoui Mohamed"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-2 border-primary-500/50 shadow-card-hover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-dark-500 text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
