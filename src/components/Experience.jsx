import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-[#64dcb4]/10">
      <p className="text-[10px] tracking-[0.18em] uppercase text-[#64dcb4] mb-2">
        Background
      </p>
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="border-l-2 border-[#64dcb4]/20 pl-5"
          >
            <h3 className="text-sm font-bold mb-0.5">{exp.role}</h3>
            <p className="text-xs text-[#64dcb4]/70 mb-2">{exp.org}</p>
            <ul className="space-y-1">
              {exp.points.map((pt, i) => (
                <li key={i} className="text-xs text-white/40 leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}