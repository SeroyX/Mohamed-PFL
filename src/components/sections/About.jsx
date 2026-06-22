import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skills = {
    " IA & Deep Learning": [ "Machine Learning", "Deep Learning", "Computer Vision", "CNN",  "Explainable AI (XAI)"],
    "Agents & LLMs": ["Hugging Face", "OpenAI", "GPT-4", "BERT", "ViT"],
    "Languages" : ["Python", "Java", "JavaScript", "Dart", "SQL"],
    "Web & Mobile Development": ["React.js", "Flutter", "HTML5", "CSS"],
    "Database & Tools": ["MySQL", "Git", "GitHub", "VS Code", "Android Studio"],
  }

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
    <section id="about" className="py-24 relative">
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
            <h2 className="section-title mb-4">About Me</h2>
            <p className="section-subtitle">
              Discover my background, expertise, and passion for building intelligent systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Bio Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-4">
  <p className="text-dark-300 text-lg leading-relaxed">
    I'm a <span className="text-highlight">Software Engineer</span> passionate about building intelligent, scalable, and user-centered digital solutions. My expertise combines software engineering principles with modern technologies to create impactful products.
  </p>

  <p className="text-dark-300 text-lg leading-relaxed">
    My experience spans <span className="text-highlight">full-stack web development</span>, 
    <span className="text-highlight"> mobile application development</span>, and 
    <span className="text-highlight"> artificial intelligence</span>, where I've designed and developed end-to-end solutions that address real-world challenges.
  </p>

  <p className="text-dark-300 text-lg leading-relaxed">
    I specialize in <span className="text-highlight">Computer Vision</span>, 
    <span className="text-highlight"> Explainable AI</span>, and 
    <span className="text-highlight"> intelligent systems</span>. 
    My work ranges from developing responsive web and mobile applications to building AI-powered systems capable of delivering meaningful insights and real-world impact.
  </p>
</motion.div>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 text-gradient">
                Key Skills
              </motion.h3>
              <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-widest">
                      {category}
                    </h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {items.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          variants={itemVariants}
                          className="skill-tag hover:shadow-glow"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="card bg-gradient-to-r from-dark-800/80 to-dark-900/60 border-dark-700/60"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-accent">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { flag: 'AR', name: 'Arabic', level: 'Native', proficiency: 100 },
                { flag: 'EN', name: 'English', level: 'Fluent', proficiency: 90 },
                { flag: 'FR', name: 'French', level: 'Intermediate', proficiency: 75 }
              ].map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <p className="font-semibold text-dark-100">{lang.name}</p>
                      <p className="text-sm text-dark-500">{lang.level}</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-dark-700/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
