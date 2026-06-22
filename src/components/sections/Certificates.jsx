/*import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiAward } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState('All')

  const certificates = [
    {
      title: 'Data Scientist Associate',
      issuer: 'DataCamp',
      date: 'May 2025',
      expires: 'May 2027',
      credentialId: 'DSA0018554810721',
      category: 'Professional',
      skills: ['Machine Learning', 'Data Science'],
      featured: true
    },
    {
      title: 'Deep Neural Networks with PyTorch (with Honors)',
      issuer: 'IBM',
      date: 'Aug 2024',
      credentialId: 'Z5XTUIHE7DX7',
      category: 'Deep Learning',
      skills: ['PyTorch', 'Neural Networks']
    },
    {
      title: 'Introduction to Computer Vision and Image Processing',
      issuer: 'IBM',
      date: 'Feb 2024',
      credentialId: 'UCWKR4WARJPF',
      category: 'Computer Vision',
      skills: ['Computer Vision', 'Image Processing']
    },
    {
      title: 'An Intuitive Introduction to Probability',
      issuer: 'Coursera',
      date: 'Aug 2023',
      credentialId: 'GECMB4JM2UJ9',
      category: 'Mathematics',
      skills: ['Probability', 'Statistics']
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: 'HAHR2TN9UY7K',
      category: 'Machine Learning',
      skills: ['Regression', 'Classification']
    },
    {
      title: 'Introduction to Calculus',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '9B56F7KHBHCE',
      category: 'Mathematics',
      skills: ['Calculus', 'Mathematics']
    },
    {
      title: 'Linear Algebra for Machine Learning and Data Science',
      issuer: 'DeepLearning.AI',
      date: 'Jul 2023',
      credentialId: 'FSWXFVQ8C3U6',
      category: 'Mathematics',
      skills: ['Linear Algebra', 'Mathematics']
    },
    {
      title: 'Machine Learning',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: 'KQN5B48LUMNT',
      category: 'Machine Learning',
      skills: ['Machine Learning', 'Algorithms']
    },
    {
      title: 'Mathematics for Machine Learning: Linear Algebra',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '5FNWUJ4W7NDC',
      category: 'Mathematics',
      skills: ['Linear Algebra']
    },
    {
      title: 'Supervised Text Classification for Marketing Analytics',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '4NVQRLB9LLPD',
      category: 'NLP',
      skills: ['NLP', 'Text Classification']
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'Coursera',
      date: 'Apr 2023',
      credentialId: 'UQDDPXYWECWH',
      category: 'Programming',
      skills: ['Python', 'Data Science']
    },
    {
      title: 'Introduction to Deep Learning & Neural Networks with Keras',
      issuer: 'Coursera',
      date: 'Feb 2023',
      credentialId: '3TMAPMAWSC9N',
      category: 'Deep Learning',
      skills: ['Keras', 'Neural Networks']
    },
    {
      title: 'Machine Learning with Python (with Honors)',
      issuer: 'Coursera',
      date: 'Feb 2023',
      credentialId: 'YF5B3SS52KKU',
      category: 'Machine Learning',
      skills: ['Python', 'Machine Learning']
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'Feb 2023',
      credentialId: 'bb265437a4d04c4b92ddb8634f5c8bb4',
      category: 'Deep Learning',
      skills: ['Deep Learning', 'CUDA'],
      featured: true
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'Coursera',
      date: 'Oct 2022',
      credentialId: 'C8EY27KBTZYF',
      category: 'Data Engineering',
      skills: ['SQL', 'Databases']
    },
    {
      title: 'Data Science Methodology',
      issuer: 'Coursera',
      date: 'Aug 2022',
      credentialId: 'JXG2S2BA9QHN',
      category: 'Data Science',
      skills: ['Methodology', 'CRISP-DM']
    }
  ]

  const categories = ['All', 'Professional', 'Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP', 'Mathematics', 'Data Science', 'Data Engineering', 'Programming']

  const filteredCertificates = filter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter)

  return (
    <section id="certificates" className="py-24 relative">
      {/* Background elements *//*}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header *//*}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Certificates & Credentials</h2>
            <p className="section-subtitle">
              Continuous learning through professional certifications from leading institutions 
              in AI, Machine Learning, and Data Science.
            </p>
          </div>

          {/* Filter Buttons *//*}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === category
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Certificates Grid *//*}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.credentialId}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <CertificateCard cert={cert} />
              </motion.div>
            ))}
          </motion.div>

          {/* Summary *//*}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-dark-400">
              Displaying <span className="text-primary-400 font-semibold">{filteredCertificates.length}</span> of{' '}
              <span className="text-primary-400 font-semibold">{certificates.length}</span> certificates
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      className={`card relative h-full flex flex-col group transition-all ${
        cert.featured 
          ? 'border-2 border-primary-500/80 bg-gradient-to-br from-primary-600/10 to-dark-900/60' 
          : ''
      }`}
      whileHover={{ y: -4 }}
    >
      {/* Featured Badge *//*}
      {cert.featured && (
        <motion.div
          className="absolute -top-3 right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Featured
        </motion.div>
      )}
      
      {/* Icon & Header *//*}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-primary-500/30 to-primary-600/20 rounded-lg">
          <FiAward className="text-primary-400" size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-dark-100 mb-1 line-clamp-2 group-hover:text-primary-400 transition-colors">
            {cert.title}
          </h3>
          <p className="text-sm text-dark-500">{cert.issuer}</p>
        </div>
      </div>
      
      {/* Dates *//*}
      <div className="space-y-2 mb-4 pb-4 border-b border-dark-700/50">
        <p className="text-sm text-dark-400">
          <span className="text-dark-600">Issued:</span> <span className="font-medium">{cert.date}</span>
        </p>
        {cert.expires && (
          <p className="text-sm text-dark-400">
            <span className="text-dark-600">Expires:</span> <span className="font-medium">{cert.expires}</span>
          </p>
        )}
        <p className="text-xs text-dark-500 font-mono mt-2 break-all">
          {cert.credentialId}
        </p>
      </div>
      
      {/* Skills *//*}
      <div className="flex flex-wrap gap-2 mb-4 flex-1">
        {cert.skills.map((skill, i) => (
          <span key={i} className="text-xs badge">
            {skill}
          </span>
        ))}
      </div>
      
      {/* Category Badge *//*}
      <span className="badge-dark text-xs self-start">
        {cert.category}
      </span>
    </motion.div>
  )
}

export default Certificates
*/
