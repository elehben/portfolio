import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-[#64dcb4]/10">
      <div className="w-full flex items-center justify-between px-6 md:px-10 py-5">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#64dcb4] uppercase">
          ELHIBB.
        </span>
        <div className="flex gap-5 sm:gap-8">
          {['skills', 'projects', 'experience'].map((s) => (
            <Link
              key={s}
              to={s}
              smooth
              duration={500}
              className="text-[10px] sm:text-xs tracking-widest text-white/40 uppercase cursor-pointer
                         hover:text-[#64dcb4] transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}