import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPrograms } from '@/lib/mdx'

export const metadata: Metadata = { title: 'Program' }

const statusStyle: Record<string, string> = {
  'Terbuka':     'bg-green-100 text-green-800',
  'Penuh':       'bg-red-100 text-red-800',
  'Segera Buka': 'bg-yellow-100 text-yellow-800',
}

export default function ProgramListPage() {
  const programs = getAllPrograms()
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-krem min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
            Semua Program
          </span>
          <h1 className="font-amiri text-5xl font-bold text-hijau-tua mb-4">Program Kami</h1>
          <p className="text-hijau-sedang max-w-xl mx-auto">
            Temukan program yang paling sesuai dengan kebutuhan dan tujuan belajar Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((p) => {
            const fm = p.frontmatter
            return (
              <article key={fm.slug}
                       className="bg-white rounded-2xl overflow-hidden border border-hijau-sedang/10 card-hover">
                <div className="bg-gradient-to-br from-hijau-tua to-hijau-sedang p-7">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block bg-emas/20 text-emas-muda px-2.5 py-0.5
                                     rounded text-[10px] font-semibold tracking-widest uppercase">
                      {fm.level}
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md
                                     ${statusStyle[fm.status] ?? ''}`}>
                      {fm.status}
                    </span>
                  </div>
                  <h2 className="font-amiri text-2xl font-bold text-white mb-1">{fm.title}</h2>
                  <div className="arabic text-white/50 text-lg">{fm.arabicTitle}</div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-hijau-sedang leading-relaxed mb-4">{fm.excerpt}</p>
                  <div className="text-xs text-hijau-sedang/60 mb-5 space-y-1">
                    <div>⏱ Durasi: <strong className="text-hijau-tua">{fm.duration}</strong></div>
                    <div>🕐 {fm.schedule}</div>
                    <div>💻 {fm.mode}</div>
                  </div>
                  <Link href={`/program/${fm.slug}`}
                        className="block text-center bg-hijau-sedang text-white py-2.5 rounded-lg
                                   text-sm font-semibold hover:bg-hijau-tua transition-colors">
                    Lihat Detail →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
