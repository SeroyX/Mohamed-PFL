import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-950 relative">
        {/* Animated gradient background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
