import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#64dcb4]/10">
      <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#64dcb4] mb-3">
        Background
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Experience</h2>

      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="border-l-2 border-[#64dcb4]/20 pl-6"
          >
            <h3 className="text-base sm:text-lg font-bold mb-1">{exp.role}</h3>
            <p className="text-xs sm:text-sm text-[#64dcb4]/70 mb-3">{exp.org}</p>
            <ul className="space-y-2">
              {exp.points.map((pt, i) => (
                <li key={i} className="text-xs sm:text-sm text-white/40 leading-relaxed">
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