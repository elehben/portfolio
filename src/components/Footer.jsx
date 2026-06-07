import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 md:px-12 py-8 mt-16
                       border-t border-[#64dcb4]/10 flex justify-between items-center">
      <span className="text-[11px] sm:text-xs text-white/30 tracking-wide">
        {personalInfo.name} · Malang
      </span>
      <div className="flex gap-5">
        <a
          href={personalInfo.github}
          className="text-[11px] sm:text-xs text-[#64dcb4]/60 hover:text-[#64dcb4] transition"
        >
          GitHub
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-[11px] sm:text-xs text-[#64dcb4]/60 hover:text-[#64dcb4] transition"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
