import { projects } from '../data/portfolioData'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#64dcb4]/10">
      <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#64dcb4] mb-3">
        Selected Work
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group bg-white/[0.03] border border-white/[0.07]
                       rounded-xl p-6 sm:p-8 hover:border-[#64dcb4]/25
                       hover:bg-[#64dcb4]/[0.04] transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase
                               text-[#64dcb4]/70">
                {p.category}
              </span>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="opacity-0 group-hover:opacity-60 transition-opacity"
              >
                <ExternalLink size={15} className="text-white" />
              </a>
            </div>

            <h3 className="text-base sm:text-lg font-bold mb-2.5">{p.title}</h3>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-4">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] sm:text-xs text-white/45 bg-white/[0.05]
                             px-2.5 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}