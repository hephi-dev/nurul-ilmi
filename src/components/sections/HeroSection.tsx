import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-hijau-tua via-[#1f4d38] to-[#0f2419]
                        flex items-center relative overflow-hidden pt-16">
      {/* Lingkaran ornamen */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] border border-emas/10
                      rounded-full -translate-y-1/4 translate-x-1/4 animate-pulse" />
      <div className="absolute top-0 right-0 w-[340px] h-[340px] border border-emas/[0.07]
                      rounded-full -translate-y-1/6 translate-x-1/6" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20
                      grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* Kiri — teks */}
        <div className="animate-fadein">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest
                           uppercase text-emas-muda border border-emas/30 bg-emas/10
                           px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emas inline-block" />
            Lembaga Terpercaya Sejak {siteConfig.since}
          </span>

          <div className="arabic text-2xl text-emas-muda mb-1 leading-relaxed">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </div>
          <p className="text-white/40 text-xs italic mb-7">
            "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan" — Q.S. Al-'Alaq: 1
          </p>

          <h1 className="font-amiri text-4xl sm:text-5xl text-white font-bold leading-tight mb-5">
            Menuntut Ilmu adalah{' '}
            <em className="not-italic text-emas">Ibadah</em> yang Mulia
          </h1>

          <p className="text-white/60 text-base mb-9 max-w-[480px] leading-relaxed">
            Program pendidikan dan pelatihan Islam terpadu — dari ilmu Al-Quran,
            Fiqih, hingga pengembangan diri berbasis nilai-nilai Islami untuk bekal
            dunia dan akhirat.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#program"
              className="bg-emas text-hijau-tua px-8 py-3.5 rounded-lg font-bold text-sm
                         hover:bg-emas-muda transition-all hover:-translate-y-0.5"
            >
              Lihat Program
            </Link>
            <Link
              href="/#kontak"
              className="border border-white/30 text-white/85 px-8 py-3.5 rounded-lg font-medium
                         text-sm hover:border-emas-muda hover:text-emas-muda transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>

        {/* Kanan — statistik */}
        <div className="grid grid-cols-2 gap-4">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-emas/20 rounded-2xl p-6
                         hover:bg-emas/8 hover:border-emas/40 transition-all hover:-translate-y-1
                         animate-fadein"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-amiri text-4xl font-bold text-emas leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-white/55 text-sm">{stat.label}</div>
            </div>
          ))}

          <div className="col-span-2 text-center font-amiri text-3xl text-emas/20 pt-2 arabic">
            ﷽
          </div>
        </div>
      </div>
    </section>
  )
}
