import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-[#64dcb4]/10">
      <p className="text-[10px] tracking-[0.18em] uppercase text-[#64dcb4] mb-2">
        Technical Stack
      </p>
      <h2 className="text-2xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {skills.technical.map((group) => (
          <div
            key={group.category}
            className="bg-white/[0.03] border border-white/[0.07]
                       rounded-xl p-4"
          >
            <p className="text-[10px] tracking-widest uppercase
                          text-white/35 mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] text-white/70 bg-[#64dcb4]/[0.06]
                             border border-[#64dcb4]/[0.12] px-2 py-0.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.soft.map((s) => (
          <span
            key={s}
            className="text-xs text-white/50 border border-white/10
                       px-3 py-1 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}