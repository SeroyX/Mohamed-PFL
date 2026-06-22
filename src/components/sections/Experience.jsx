import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      role: 'AI & Robotics Team Member',
      company: 'ITC Club',
      period: 'Sep 2025 – Jun 2026',
      location: 'Algeria',
      type: 'Member',
      achievements: [
  "Contributed to robotics and artificial intelligence projects focused on system integration, machine learning, and intelligent automation",
  "Participated in the development of AI models and robotics systems combining hardware components with software control logic",
  "Worked on data processing, model training, and evaluation for computer vision and machine learning tasks",
  "Collaborated with multidisciplinary teams to design, test, and improve intelligent prototypes and embedded systems"
]
    },

    {
      role: 'Frontend Web-Dev Team Lead',
      company: 'ITC Club',
      period: 'Sep 2024 – Jun 2025',
      location: 'Algeria',
      type: 'Leadership',
      achievements: [
  "Led the frontend development team in designing and implementing responsive, user-centered web interfaces using modern frameworks",
  "Coordinated development tasks and ensured consistent UI/UX quality across all web features and components",
  "Established reusable component architecture to improve scalability, maintainability, and development efficiency",
  "Collaborated closely with backend and design teams to deliver seamless end-to-end user experiences",
  "Reviewed code and guided junior developers to improve frontend development practices and performance optimization"
]
    },
    {
      role: 'Mobile-Dev Team Lead',
      company: 'ITC Club',
      period: 'Sep 2023 – Jun 2024',
      location: 'Algeria',
      type: 'Leadership',
      achievements: [
  "Led the mobile development team in building cross-platform applications focused on usability, performance, and reliability",
  "Designed and implemented core application features using Flutter and Dart with a focus on smooth user experience",
  "Defined mobile architecture and ensured consistency between UI components and backend services",
  "Improved application performance and responsiveness through optimization and debugging of critical features",
  "Mentored team members and coordinated development workflow to ensure timely delivery of mobile application milestones"
]
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-24 relative">
      {/* Background elements */}
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
            <h2 className="section-title mb-4">Professional Experience</h2>
            <p className="section-subtitle">
              A timeline of roles, achievements, and expertise gained throughout my career.
            </p>
          </div>

          {/* Timeline */}
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute -left-8 md:-left-12 top-20 w-1 h-32 bg-gradient-to-b from-primary-500/60 to-primary-500/10"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute -left-10 md:-left-14 top-6 w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-950 shadow-lg"></div>

                {/* Content */}
                <div className="card ml-6 md:ml-8 bg-gradient-to-br from-dark-800/80 to-dark-900/60 hover:border-primary-500/80">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FiBriefcase className="text-primary-400" size={20} />
                        <h3 className="text-2xl font-bold text-primary-400">{exp.role}</h3>
                      </div>
                      <p className="text-lg text-dark-100 font-semibold">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2 text-dark-400 text-sm">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={14} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="mt-2 px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-semibold border border-primary-500/40">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t border-dark-700/50 pt-4 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <span className="text-primary-400 font-bold mt-1 flex-shrink-0">▸</span>
                        <span className="text-dark-300 text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
