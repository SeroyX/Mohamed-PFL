import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { getProjectById } from '../data/projectsData'

const ProjectDetailPage = () => {
  const { slug } = useParams()
  const project = getProjectById(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="pt-24 pb-20 min-h-screen bg-slate-950">
      <div className="section-container">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
        >
          <FiArrowLeft />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <span className="text-primary-400 font-mono text-sm">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{project.title}</h1>
            <p className="text-xl text-slate-400">{project.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.hasDemo && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FiExternalLink />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FiGithub />
                View Code
              </a>
            )}
          </div>

          {/* Project Image */}
          {project.hasPic && (
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl border border-slate-800 shadow-2xl"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"%3E%3Crect fill="%23334155" width="1200" height="600"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Screenshot%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          )}

          {/* Technologies */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary-400">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:border-primary-500/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary-400">Overview</h2>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
              {project.hasDemo && (
                <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-primary-400">Live Demo Available:</span>{' '}
                    This project is deployed and accessible online. Click the "Live Demo" button above to try it out!
                  </p>
                </div>
              )}
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary-400">Key Features</h2>
              <ul className="space-y-3">
                {getKeyFeatures(project).map((feature, index) => (
                  <li key={index} className="text-slate-300 flex items-start gap-2">
                    <span className="text-primary-400 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="card mt-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-400">Technical Implementation</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {getTechnicalDetails(project)}
            </p>
            {project.category === 'Healthcare AI' && (
              <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-amber-400">📄 Research Paper:</span>{' '}
                  This work is part of ongoing research and will be published soon.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

// Helper function to generate key features based on project
const getKeyFeatures = (project) => {
  const features = {
    'music-generation': [
      'Multi-modal emotion detection from voice, face, and text',
      'Real-time music generation based on detected emotions',
      'Transformer-based architecture for high-quality audio output',
      'Interactive web interface deployed on Hugging Face Spaces'
    ],
    'emotion-recognition': [
      'Multi-modal analysis: voice, facial expressions, and text',
      'High accuracy emotion classification across multiple modalities',
      'Real-time inference capabilities',
      'User-friendly interface for testing different input types'
    ],
    'churn-prediction': [
      'Custom LSTM networks for time-series customer behavior',
      'Ensemble gradient boosting models for high accuracy',
      'Domain-specific models for telecom and banking sectors',
      'Interactive Streamlit dashboard for predictions'
    ],
    'medical-report-generation': [
      'Novel LLM + Vision Transformer hybrid architecture',
      'Automated report generation from chest X-ray images',
      '40% reduction in manual reporting time',
      'Production-ready deployment with Docker'
    ],
    'crack-detection': [
      'CNN-based crack detection in concrete structures',
      'Real-time inference with FastAPI backend',
      'Dockerized for easy deployment',
      'Deployed on Railway for public access'
    ]
  }
  
  return features[project.id] || [
    'Advanced machine learning techniques',
    'Production-ready implementation',
    'Scalable architecture',
    'Comprehensive testing and validation'
  ]
}

// Helper function to generate technical details
const getTechnicalDetails = (project) => {
  const details = {
    'music-generation': 'This project combines emotion recognition with generative AI to create music that matches the detected emotional state. The system uses transformer architectures for both emotion detection and music generation, with a pipeline that processes inputs from multiple modalities.',
    'medical-report-generation': 'A novel architecture that combines Vision Transformers (ViT) for image analysis with Large Language Models for report generation. The system was developed during an internship at CM Consulting and achieved significant improvements in efficiency. The implementation includes an optimized inference pipeline designed for production deployment.',
    'churn-prediction': 'The system employs ensemble methods combining gradient boosting algorithms with custom LSTM networks for sequential behavior analysis. Separate models were trained for telecom and banking domains to capture sector-specific patterns in customer behavior.',
    'crack-detection': 'Implemented using convolutional neural networks trained on structural damage datasets. The FastAPI backend provides REST endpoints for real-time inference, while the Streamlit interface offers an intuitive way to upload and analyze images.',
    'bus-tracking': 'The system implements A* pathfinding algorithm combined with reinforcement learning for dynamic route optimization. Real-time tracking data is stored in SQLite, with a FastAPI backend serving data to a Streamlit-based visualization interface.'
  }
  
  return details[project.id] || `This project demonstrates ${project.category.toLowerCase()} techniques with a focus on practical implementation and real-world applicability. The system was built using modern frameworks and follows best practices for production deployment.`
}

export default ProjectDetailPage
