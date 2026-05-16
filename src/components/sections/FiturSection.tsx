const fitur = [
  { icon: '📖', title: 'Sanad Keilmuan Jelas', desc: 'Semua pengajar memiliki sanad keilmuan yang tersambung kepada ulama-ulama mu\'tabar, sehingga ilmu yang diajarkan terjamin kualitasnya.' },
  { icon: '🕌', title: 'Kurikulum Komprehensif', desc: 'Mencakup Al-Quran, Hadits, Fiqih, Aqidah, Bahasa Arab, Akhlak, dan pengembangan diri berdasarkan Al-Quran dan Sunnah.' },
  { icon: '🎓', title: 'Metode Adaptif', desc: 'Pembelajaran disesuaikan dengan tingkat dan kebutuhan peserta, mulai dari anak-anak, remaja, dewasa, hingga program khusus lansia.' },
  { icon: '💬', title: 'Komunitas Aktif', desc: 'Bergabung dengan komunitas pelajar Islam yang aktif, saling mendukung, dan terhubung dalam perjalanan menuntut ilmu.' },
  { icon: '🌐', title: 'Online & Offline', desc: 'Fleksibilitas belajar dengan pilihan tatap muka di pusat kami atau daring melalui platform digital yang mudah digunakan.' },
  { icon: '📜', title: 'Sertifikat Resmi', desc: 'Mendapatkan sertifikat kelulusan yang diakui sebagai bukti pencapaian ilmu yang telah ditempuh.' },
]

export default function FiturSection() {
  return (
    <section id="tentang" className="bg-hijau-pucat py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
            Keunggulan Kami
          </span>
          <h2 className="font-amiri text-4xl font-bold text-hijau-tua mb-4">
            Mengapa Nurul Ilmi?
          </h2>
          <p className="text-hijau-sedang max-w-lg text-base">
            Kami hadir dengan metode pembelajaran yang menggabungkan tradisi keilmuan
            Islam klasik dengan pendekatan modern yang efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fitur.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-hijau-sedang/10
                         card-hover group relative overflow-hidden"
            >
              {/* Garis atas saat hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px]
                              bg-gradient-to-r from-hijau-sedang to-emas
                              opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 bg-hijau-pucat border border-hijau-sedang/20
                              rounded-xl flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-hijau-tua mb-2">{f.title}</h3>
              <p className="text-sm text-hijau-sedang leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
