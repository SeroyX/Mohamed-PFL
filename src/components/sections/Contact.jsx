import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactMethods = [
    {
      icon: FiMapPin,
      title: 'Location',
      content: 'Koléa, Tipaza, Algeria',
      color: 'text-primary-400'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'karaoui925@gmail.com',
      color: 'text-accent-400'
    }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/SeroyX', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed-karaoui-326b622a8', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:karaoui925@gmail.com', label: 'Mail' },
  ]

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new projects, opportunities, or collaborations.
              Reach out and let's create something amazing together!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="card group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-4 bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg ${method.color} group-hover:shadow-glow transition-all`}>
                        <Icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-100 mb-2">{method.title}</h3>
                        <p className="text-dark-400 group-hover:text-dark-300 transition-colors">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="card bg-gradient-to-r from-dark-800/80 to-dark-900/60 border-dark-700/60 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Connect</h3>
              <p className="text-dark-400 mb-8">
                Reach out via your preferred platform—I respond quickly on all channels.
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-dark-800/60 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-dark-700/80 transition-all"
                      aria-label={link.label}
                      whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={28} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-12 card bg-gradient-to-r from-primary-600/20 to-primary-600/5 border-primary-600/40 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-dark-100 text-lg">Available for Opportunities</span>
              </div>
              <p className="text-dark-400">
                Open to full-time positions, freelance projects, partnerships, and consulting opportunities
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
