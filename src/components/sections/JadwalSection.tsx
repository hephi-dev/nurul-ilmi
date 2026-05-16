import { getAllPrograms } from '@/lib/mdx'

const statusStyle: Record<string, string> = {
  'Terbuka':     'bg-green-100 text-green-800',
  'Penuh':       'bg-red-100 text-red-800',
  'Segera Buka': 'bg-yellow-100 text-yellow-800',
}

export default function JadwalSection() {
  const programs = getAllPrograms()

  return (
    <section id="jadwal" className="bg-hijau-pucat py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
            Jadwal Kelas
          </span>
          <h2 className="font-amiri text-4xl font-bold text-hijau-tua mb-3">
            Batch Aktif 2025
          </h2>
          <p className="text-hijau-sedang max-w-lg text-base">
            Pilih waktu yang paling sesuai. Kami menyediakan kelas pagi, sore, dan malam.
          </p>
        </div>

        {/* Tabel Desktop */}
        <div className="hidden md:block bg-white rounded-2xl overflow-hidden border border-hijau-sedang/15">
          <div className="grid grid-cols-[1.5fr_2fr_1.5fr_1fr_1.2fr] bg-hijau-tua">
            {['Program', 'Pengajar', 'Jadwal', 'Mode', 'Status'].map((h) => (
              <div key={h} className="px-5 py-4 text-[10px] font-semibold tracking-widest uppercase
                                     text-white/60 border-r border-white/10 last:border-0">
                {h}
              </div>
            ))}
          </div>

          {programs.map((p, i) => {
            const fm = p.frontmatter
            return (
              <div
                key={fm.slug}
                className={`grid grid-cols-[1.5fr_2fr_1.5fr_1fr_1.2fr]
                            border-t border-hijau-sedang/10
                            hover:bg-hijau-pucat/50 transition-colors
                            ${i % 2 === 0 ? 'bg-white' : 'bg-krem/40'}`}
              >
                <div className="px-5 py-4 font-semibold text-sm text-hijau-tua border-r border-hijau-sedang/10">
                  {fm.title}
                </div>
                <div className="px-5 py-4 text-sm text-hijau-sedang border-r border-hijau-sedang/10">
                  {fm.teacher}
                </div>
                <div className="px-5 py-4 text-sm text-hijau-sedang border-r border-hijau-sedang/10">
                  {fm.schedule}
                </div>
                <div className="px-5 py-4 text-sm text-hijau-sedang border-r border-hijau-sedang/10">
                  {fm.mode}
                </div>
                <div className="px-5 py-4">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md
                                   ${statusStyle[fm.status] ?? 'bg-gray-100 text-gray-700'}`}>
                    {fm.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Kartu Mobile */}
        <div className="md:hidden space-y-4">
          {programs.map((p) => {
            const fm = p.frontmatter
            return (
              <div key={fm.slug} className="bg-white rounded-xl p-5 border border-hijau-sedang/15">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-hijau-tua">{fm.title}</h3>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ml-2
                                   ${statusStyle[fm.status] ?? 'bg-gray-100 text-gray-700'}`}>
                    {fm.status}
                  </span>
                </div>
                <p className="text-xs text-hijau-sedang mb-1">👤 {fm.teacher}</p>
                <p className="text-xs text-hijau-sedang mb-1">🕐 {fm.schedule}</p>
                <p className="text-xs text-hijau-sedang">💻 {fm.mode}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
