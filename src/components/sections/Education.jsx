import { motion } from 'framer-motion'
import { FiCalendar } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const education = [
    {
      degree: "Master's in Software Engineering",
      institution: 'Blida 1 University',
      period: '2024 – 2026',
      location: 'Blida, Algeria',
      details: [
        'Thesis: Explainable AI-Based Digital Twin for Smart Agriculture and Multilabel Crop Disease Detection',
      ]
    },

    {
      degree: " Cours MB-500 ",
      institution: 'Microsoft Dynamics 365',
      period: 'December 2025',
      location: 'Online',
      details: [
        'Finance and Operations Application Developer',
      ]
    },


    {
      degree: "Bachelor's in Computer Systems Engineering",
      institution: 'Blida 1 University',
      period: '2021 – 2024',
      location: 'Blida, Algeria',
      details: [
        'Final Project: Design and Development of a Mobile Application for Managing Medical Appointments.',
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education & Certificates</h2>
          
          {/* Education */}
          <div className="max-w-4xl mx-auto mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="card mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-400 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-100 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-slate-400 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <span className="mt-1">{edu.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-primary-400 mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
