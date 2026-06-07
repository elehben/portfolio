import { personalInfo } from '../data/portfolioData'
import { Mail } from 'lucide-react'

function Github({ size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 pb-24 sm:pt-12 sm:pb-32 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-110 h-96 rounded-full
                      bg-[#64dcb4]/5 blur-3xl pointer-events-none" />
      <div className="relative">
        <span className="inline-block text-[9px] sm:text-[11px] tracking-[0.2em] uppercase
                         text-[#64dcb4] border border-[#64dcb4]/30 px-3.5 py-1.5
                         rounded mb-6">
          Informatics Engineering Student
        </span>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold leading-[0.95]
                       tracking-tight mb-5 bg-gradient-to-br from-[#e8eaf2]
                       via-[#e8eaf2] to-[#64dcb4]/60 bg-clip-text text-transparent">
          Abdan Nawwaf<br className="hidden sm:inline" /> El Hibban.
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl text-white/40 tracking-wide font-light mb-10 leading-relaxed">
          {personalInfo.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 text-[11px] sm:text-xs tracking-widest
                       uppercase text-[#64dcb4] border border-[#64dcb4]/40
                       rounded-md bg-[#64dcb4]/10 hover:bg-[#64dcb4]/20 transition"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2.5 px-6 py-3.5 text-[11px] sm:text-xs tracking-widest
                       uppercase text-white/50 border border-white/15 rounded-md
                       hover:border-white/40 hover:text-white transition"
          >
            <Mail size={15} /> Contact
          </a>
        </div>
      </div>
    </section>
  )
}