import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

/* Layout */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

/* UI */
import PageLoader from './components/ui/PageLoader'
import ScrollProgress from './components/ui/ScrollProgress'

/* Sections */
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Helmet>
        <title>Krishnaprasad K — Marketing &amp; Growth Professional</title>
        <meta
          name="description"
          content="Marketing professional with an MBA from IIM Sirmaur. Skilled in brand strategy, digital marketing, data analytics, and product thinking."
        />
        <meta property="og:title" content="Krishnaprasad K — Marketing & Growth Professional" />
        <meta
          property="og:description"
          content="Marketing professional crafting digital experiences that drive growth. MBA · Marketer · Product Thinker · Builder."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page loader */}
      <AnimatePresence>
        {loading && <PageLoader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Scroll progress bar */}
      {!loading && <ScrollProgress />}

      {/* Main content — fades in after loader */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Achievements />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
