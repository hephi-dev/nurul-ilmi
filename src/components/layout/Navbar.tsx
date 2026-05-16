'use client'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-hijau-tua/97 backdrop-blur-md border-b border-emas/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-emas flex items-center justify-center
                          font-amiri text-lg font-bold text-hijau-tua shrink-0">
            ن
          </div>
          <div>
            <span className="block text-white text-[16px] font-semibold leading-tight">
              {siteConfig.name}
            </span>
            <span className="block text-emas-muda text-[10px] tracking-widest uppercase font-normal">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/75 hover:text-emas-muda text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#kontak"
              className="bg-emas text-hijau-tua px-5 py-2 rounded-lg text-sm font-bold
                         hover:bg-emas-muda transition-colors"
            >
              Daftar Sekarang
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-hijau-tua border-t border-emas/20 px-4 pb-5 pt-3">
          <ul className="flex flex-col gap-4 list-none">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-emas-muda text-sm font-medium transition-colors block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#kontak"
                onClick={() => setOpen(false)}
                className="bg-emas text-hijau-tua px-5 py-2.5 rounded-lg text-sm font-bold
                           hover:bg-emas-muda transition-colors inline-block w-full text-center"
              >
                Daftar Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
