import { motion } from 'framer-motion'
import { FiUsers } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Workshops = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const workshops = [
    {
      title: 'Algeria 2.0 - Data Science with Python',
      event: 'Algeria 2.0',
      description: 'Led a comprehensive workshop on Data Science using Python (Pandas, Matplotlib, Seaborn). The event was attended by over 1000 participants.',
      participants: '1000+',
      topics: ['Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis'],
      image: `${import.meta.env.BASE_URL}Workshops/Algeria 2.0.jpg`
    },
    {
      title: 'ITC ABC Programming - Python & ML',
      event: 'ITC ABC Programming',
      description: 'Conducted a series of workshops on Python programming and Machine Learning for beginners as part of the ITC ABC Programming initiative.',
      participants: '200+',
      topics: ['Python Basics', 'Machine Learning', 'Scikit-learn', 'Model Training'],
      image: `${import.meta.env.BASE_URL}Workshops/ITC ABC Programing.png`
    },
    {
      title: 'ITC Tour - Building & Deploying ML Models',
      event: 'ITC Tour',
      description: 'Delivered hands-on sessions on building and deploying machine learning models during the ITC Tour event.',
      participants: '150+',
      topics: ['Model Development', 'Deployment', 'FastAPI', 'Docker'],
      image: `${import.meta.env.BASE_URL}Workshops/ITC Tour.png`
    },
    {
      title: 'ITC Podcast - AI & ML Trends',
      event: 'ITC Podcast',
      description: 'Featured speaker on ITC Podcast discussing the latest trends and techniques in AI and Machine Learning.',
      participants: '500+ (Online)',
      topics: ['AI Trends', 'Deep Learning', 'Industry Insights', 'Career Guidance'],
      image: `${import.meta.env.BASE_URL}Workshops/ITC Podcast.png`
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="workshops" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Workshops & Speaking</h2>
            <p className="section-subtitle">
              Sharing knowledge and empowering others through workshops, talks, and mentorship 
              in Data Science and AI.
            </p>
          </div>

          {/* Workshops Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {workshops.map((workshop, index) => (
              <motion.div key={index} variants={itemVariants}>
                <WorkshopCard workshop={workshop} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const WorkshopCard = ({ workshop }) => {
  return (
    <motion.div
      className="card h-full flex flex-col group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Workshop Image */}
      <div className="relative w-full h-56 mb-5 rounded-lg overflow-hidden bg-dark-800">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231f2937" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EWorkshop Photo%3C/text%3E%3C/svg%3E'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Event Badge */}
      <div className="badge mb-3">{workshop.event}</div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-dark-100 group-hover:text-primary-400 transition-colors line-clamp-2">
        {workshop.title}
      </h3>
      
      {/* Description */}
      <p className="text-dark-400 text-sm mb-5 flex-grow line-clamp-3">
        {workshop.description}
      </p>
      
      {/* Participants */}
      <div className="flex items-center gap-2 mb-5 text-dark-300 py-4 border-t border-dark-700/50">
        <FiUsers className="text-primary-400 flex-shrink-0" size={18} />
        <span className="text-sm font-semibold">{workshop.participants} Participants</span>
      </div>
      
      {/* Topics */}
      <div className="flex flex-wrap gap-2">
        {workshop.topics.map((topic, i) => (
          <span key={i} className="text-xs text-dark-500 bg-dark-800/60 px-2.5 py-1 rounded-md">
            {topic}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default Workshops
