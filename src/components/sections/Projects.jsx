import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { getOrganizedProjects } from '../../data/projectsData'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const projects = getOrganizedProjects()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="projects" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="section-subtitle">
              AI | Web | Mobile.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card h-full flex flex-col group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      {project.hasPic && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-dark-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231f2937" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {project.hasDemo && (
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs px-3 py-1 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Live Demo
            </motion.div>
          )}
        </div>
      )}
      
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="badge text-xs">{project.category}</span>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-dark-100 group-hover:text-primary-400 transition-colors line-clamp-2">
        {project.title}
      </h3>
      
      {/* Description */}
      <p className="text-dark-400 text-sm mb-4 flex-grow line-clamp-3">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-dark-500 bg-dark-800/60 px-2.5 py-1 rounded-md">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-xs text-dark-500 bg-dark-800/60 px-2.5 py-1 rounded-md font-medium">
            +{project.tags.length - 3}
          </span>
        )}
      </div>
      
      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-dark-700/50">
        <Link
          to={`/project/${project.id}`}
          className="flex-1 btn-secondary-sm text-center"
        >
          Details
        </Link>
      </div>
    </motion.div>
  )
}

export default Projects
