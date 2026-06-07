import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080c14] min-h-screen text-[#e8eaf2] font-sans selection:bg-[#64dcb4]/20 selection:text-[#64dcb4]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}