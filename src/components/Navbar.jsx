import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4
                    bg-[#080c14]/90 backdrop-blur-md border-b border-[#64dcb4]/10">
      <span className="text-sm font-bold tracking-widest text-[#64dcb4] uppercase">
        ELHIBB.
      </span>
      <div className="flex gap-6">
        {['skills', 'projects', 'experience'].map((s) => (
          <Link
            key={s}
            to={s}
            smooth
            duration={500}
            className="text-xs tracking-widest text-white/40 uppercase cursor-pointer
                       hover:text-[#64dcb4] transition-colors"
          >
            {s}
          </Link>
        ))}
      </div>
    </nav>
  )
}