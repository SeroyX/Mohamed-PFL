import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

export default HomePage
