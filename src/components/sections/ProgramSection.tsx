import Link from 'next/link'
import { getAllPrograms } from '@/lib/mdx'

const statusStyle: Record<string, string> = {
  'Terbuka':     'bg-green-100 text-green-800',
  'Penuh':       'bg-red-100 text-red-800',
  'Segera Buka': 'bg-yellow-100 text-yellow-800',
}

export default function ProgramSection() {
  const programs = getAllPrograms()

  return (
    <section id="program" className="py-24 px-4 sm:px-6 bg-krem">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
              Program Unggulan
            </span>
            <h2 className="font-amiri text-4xl font-bold text-hijau-tua mb-3">
              Pilih Jalur Ilmu Anda
            </h2>
            <p className="text-hijau-sedang max-w-lg text-base">
              Program dirancang untuk berbagai tingkatan dengan pendekatan yang
              menyenangkan namun tetap mendalam.
            </p>
          </div>
          <Link
            href="/program"
            className="border border-hijau-sedang/25 text-hijau-sedang px-5 py-2.5 rounded-lg
                       text-sm font-medium hover:bg-hijau-pucat transition-colors shrink-0"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((p) => {
            const fm = p.frontmatter
            return (
              <article
                key={fm.slug}
                className="bg-white rounded-2xl overflow-hidden border border-hijau-sedang/10 card-hover"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-hijau-tua to-hijau-sedang p-7">
                  <span className="inline-block bg-emas/20 text-emas-muda px-2.5 py-0.5
                                   rounded text-[10px] font-semibold tracking-widest uppercase mb-3">
                    {fm.level}
                  </span>
                  <h3 className="font-amiri text-2xl font-bold text-white mb-1">{fm.title}</h3>
                  <div className="arabic text-white/50 text-lg">{fm.arabicTitle}</div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="text-sm text-hijau-sedang leading-relaxed mb-5">{fm.excerpt}</p>

                  <ul className="space-y-2 mb-6 list-none">
                    {fm.features.slice(0, 4).map((feat) => (
                      <li key={feat}
                          className="text-sm text-hijau-sedang flex items-start gap-2.5
                                     border-b border-hijau-sedang/10 pb-2 last:border-0">
                        <span className="w-4 h-4 rounded-full bg-hijau-pucat text-hijau-sedang
                                         flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-hijau-sedang/60">
                      Durasi: <strong className="text-hijau-tua font-semibold">{fm.duration}</strong>
                    </div>
                    <Link
                      href={`/program/${fm.slug}`}
                      className="bg-hijau-sedang text-white px-5 py-2 rounded-lg text-xs
                                 font-semibold hover:bg-hijau-tua transition-colors"
                    >
                      Detail →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
