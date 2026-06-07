import { projects } from '../data/portfolioData'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-[#64dcb4]/10">
      <p className="text-[10px] tracking-[0.18em] uppercase text-[#64dcb4] mb-2">
        Selected Work
      </p>
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group bg-white/[0.03] border border-white/[0.07]
                       rounded-xl p-5 hover:border-[#64dcb4]/25
                       hover:bg-[#64dcb4]/[0.04] transition-all"
          >
            <div className="flex items-start justify-between mb-1">
              <span className="text-[9px] tracking-[0.15em] uppercase
                               text-[#64dcb4]/70">
                {p.category}
              </span>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="opacity-0 group-hover:opacity-60 transition-opacity"
              >
                <ExternalLink size={13} className="text-white" />
              </a>
            </div>

            <h3 className="text-sm font-bold mb-2">{p.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed mb-3">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] text-white/45 bg-white/[0.05]
                             px-2 py-0.5 rounded"
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