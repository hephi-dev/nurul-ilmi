import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllProgramSlugs, getProgramBySlug } from '@/lib/mdx'
import { siteConfig } from '@/lib/siteConfig'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgramBySlug(params.slug)
  if (!program) return {}
  return {
    title: program.frontmatter.title,
    description: program.frontmatter.excerpt,
  }
}

const statusStyle: Record<string, string> = {
  'Terbuka':     'bg-green-100 text-green-800',
  'Penuh':       'bg-red-100 text-red-800',
  'Segera Buka': 'bg-yellow-100 text-yellow-800',
}

export default function ProgramDetailPage({ params }: Props) {
  const program = getProgramBySlug(params.slug)
  if (!program) notFound()

  const { frontmatter: fm, content } = program

  return (
    <div className="pt-24 bg-krem min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-hijau-tua to-hijau-sedang px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/program"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white
                           text-sm mb-8 transition-colors">
            ← Kembali ke Program
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-emas/20 text-emas-muda px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase">
              {fm.level}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded ${statusStyle[fm.status] ?? ''}`}>
              {fm.status}
            </span>
          </div>
          <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-white mb-2">{fm.title}</h1>
          <div className="arabic text-2xl text-white/40 mb-6">{fm.arabicTitle}</div>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">{fm.excerpt}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Konten Markdown */}
        <div className="lg:col-span-2">
          <div className="prose prose-islamic max-w-none
                          prose-headings:font-amiri prose-h2:text-3xl
                          prose-a:text-hijau-sedang prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={content} />
          </div>
        </div>

        {/* Sidebar info */}
        <aside className="space-y-6">
          <div className="bg-white border border-hijau-sedang/15 rounded-2xl p-6">
            <h3 className="font-semibold text-hijau-tua mb-5 text-sm">Info Program</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-hijau-sedang/60 text-xs">Durasi</dt>
                <dd className="font-semibold text-hijau-tua">{fm.duration}</dd>
              </div>
              <div>
                <dt className="text-hijau-sedang/60 text-xs">Jadwal</dt>
                <dd className="font-semibold text-hijau-tua">{fm.schedule}</dd>
              </div>
              <div>
                <dt className="text-hijau-sedang/60 text-xs">Mode</dt>
                <dd className="font-semibold text-hijau-tua">{fm.mode}</dd>
              </div>
              <div>
                <dt className="text-hijau-sedang/60 text-xs">Pengajar</dt>
                <dd className="font-semibold text-hijau-tua">{fm.teacher}</dd>
              </div>
              <div>
                <dt className="text-hijau-sedang/60 text-xs">Status</dt>
                <dd>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md
                                   ${statusStyle[fm.status] ?? ''}`}>
                    {fm.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-hijau-tua rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-2 text-sm">Daftar Program Ini</h3>
            <p className="text-white/55 text-xs mb-4">Hubungi kami untuk informasi lebih lanjut dan pendaftaran.</p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Assalamu'alaikum, saya ingin mendaftar program ${fm.title}`}
              target="_blank" rel="noopener noreferrer"
              className="block text-center bg-emas text-hijau-tua py-2.5 rounded-lg
                         text-sm font-bold hover:bg-emas-muda transition-colors"
            >
              💬 Daftar via WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
