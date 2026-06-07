import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080c14] min-h-screen text-[#e8eaf2] font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}