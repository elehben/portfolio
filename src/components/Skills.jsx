import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#64dcb4]/10">
      <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#64dcb4] mb-3">
        Technical Stack
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {skills.technical.map((group) => (
          <div
            key={group.category}
            className="bg-white/[0.03] border border-white/[0.07]
                       rounded-xl p-5 sm:p-6"
          >
            <p className="text-[10px] sm:text-xs tracking-widest uppercase
                          text-white/35 mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] sm:text-xs text-white/70 bg-[#64dcb4]/[0.06]
                             border border-[#64dcb4]/[0.12] px-2.5 py-1 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.soft.map((s) => (
          <span
            key={s}
            className="text-xs sm:text-sm text-white/50 border border-white/10
                       px-4 py-1.5 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}