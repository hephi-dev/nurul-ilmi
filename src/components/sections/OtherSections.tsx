import { siteConfig } from '@/lib/siteConfig'

export function PengajarSection() {
  return (
    <section id="pengajar" className="py-24 px-4 sm:px-6 bg-krem">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
            Tim Pengajar
          </span>
          <h2 className="font-amiri text-4xl font-bold text-hijau-tua mb-3">
            Belajar dari Para Ahli
          </h2>
          <p className="text-hijau-sedang max-w-lg">
            Didampingi pengajar berpengalaman, memiliki sanad keilmuan jelas, dan berdedikasi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.teachers.map((t) => (
            <div key={t.name} className="text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center
                              bg-gradient-to-br from-hijau-sedang to-hijau-tua
                              font-amiri text-2xl text-emas border-4 border-emas-pucat
                              arabic group-hover:scale-105 transition-transform">
                {t.initials}
              </div>
              <h3 className="font-amiri text-base font-bold text-hijau-tua mb-1">{t.name}</h3>
              <p className="text-xs text-hijau-sedang/70 mb-3 leading-snug whitespace-pre-line">
                {t.credential}
              </p>
              <span className="inline-block bg-hijau-pucat text-hijau-sedang text-xs font-medium
                               px-3 py-1 rounded-full">
                {t.field}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialSection() {
  return (
    <section id="testimonial"
             className="bg-hijau-tua py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-emas-muda block mb-2">
            Kata Alumni
          </span>
          <h2 className="font-amiri text-4xl font-bold text-white">
            Mereka yang Telah Merasakan Manfaatnya
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t) => (
            <div key={t.name}
                 className="bg-white/[0.06] border border-emas/15 rounded-2xl p-7
                            hover:bg-white/10 transition-colors">
              <div className="text-emas text-sm tracking-widest mb-4">
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-white/75 text-sm leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emas flex items-center justify-center
                                text-hijau-tua font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/45 text-xs mt-0.5">{t.from}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  const { contact } = siteConfig
  return (
    <section id="kontak"
             className="bg-gradient-to-br from-hijau-tua to-hijau-sedang
                        py-24 px-4 sm:px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="arabic text-5xl text-emas/30 mb-4">بِسْمِ اللَّهِ</div>
        <h2 className="font-amiri text-4xl font-bold text-white mb-4">
          Mulai Perjalanan Ilmu Anda Hari Ini
        </h2>
        <p className="text-white/60 mb-9 leading-relaxed">
          Jangan tunda lagi. Setiap hari tanpa ilmu adalah kerugian.
          Bergabunglah bersama ribuan santri yang telah merasakan manfaatnya.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href={`tel:+${contact.whatsapp}`}
            className="bg-emas text-hijau-tua px-8 py-3.5 rounded-lg font-bold text-sm
                       hover:bg-emas-muda transition-all hover:-translate-y-0.5"
          >
            📞 Hubungi Kami
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="border border-white/30 text-white/85 px-8 py-3.5 rounded-lg
                       font-medium text-sm hover:border-emas-muda hover:text-emas-muda transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>

        <p className="text-white/35 text-xs">
          📍 {contact.address}&nbsp;&nbsp;|&nbsp;&nbsp;📧 {contact.email}
        </p>
      </div>
    </section>
  )
}
