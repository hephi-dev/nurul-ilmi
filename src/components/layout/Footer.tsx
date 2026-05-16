import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const footerLinks = {
  Program: [
    { label: 'Tilawah & Tahsin',  href: '/program/tilawah-tahsin' },
    { label: 'Tahfizh Al-Quran',  href: '/program/tahfizh-alquran' },
    { label: 'Fiqih Ibadah',      href: '/program/fiqih-ibadah' },
    { label: 'Bahasa Arab',       href: '/program/bahasa-arab' },
    { label: 'Aqidah Islamiyah',  href: '/program/aqidah-islamiyah' },
  ],
  Informasi: [
    { label: 'Tentang Kami', href: '/#tentang' },
    { label: 'Tim Pengajar', href: '/#pengajar' },
    { label: 'Jadwal Kelas', href: '/#jadwal' },
    { label: 'Blog & Artikel', href: '/blog' },
  ],
  Kontak: [
    { label: `📞 ${siteConfig.contact.phone}`,    href: `tel:+${siteConfig.contact.whatsapp}` },
    { label: '💬 WhatsApp',                        href: `https://wa.me/${siteConfig.contact.whatsapp}` },
    { label: `📧 ${siteConfig.contact.email}`,    href: `mailto:${siteConfig.contact.email}` },
    { label: `📍 ${siteConfig.contact.address}`,  href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0c1f16] border-t border-emas/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10
                        border-b border-white/[0.07]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="block text-white text-lg font-semibold">{siteConfig.name}</span>
              <span className="text-white/40 text-[10px] tracking-widest uppercase">{siteConfig.tagline}</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-emas text-[11px] font-semibold tracking-[2px] uppercase mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5 list-none">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-emas-muda text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <span className="text-white/30 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
          </span>
          <span className="font-amiri text-emas/40 text-base arabic">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </span>
        </div>
      </div>
    </footer>
  )
}
