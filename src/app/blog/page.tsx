import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const metadata: Metadata = { title: 'Blog & Artikel' }

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-krem min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-hijau-sedang block mb-2">
            Blog & Artikel
          </span>
          <h1 className="font-amiri text-5xl font-bold text-hijau-tua mb-4">
            Tulisan Ilmiah
          </h1>
          <p className="text-hijau-sedang">
            Kumpulan artikel, kajian, dan tulisan ilmiah tentang Islam dari para pengajar kami.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => {
            const fm = post.frontmatter
            const dateFormatted = format(new Date(fm.date), 'd MMMM yyyy', { locale: id })
            return (
              <article key={fm.slug}
                       className="bg-white border border-hijau-sedang/10 rounded-2xl p-7
                                  card-hover group">
                <div className="flex flex-wrap gap-3 items-center mb-3">
                  <span className="bg-hijau-pucat text-hijau-sedang text-xs font-medium
                                   px-3 py-1 rounded-full">
                    {fm.category}
                  </span>
                  <span className="text-hijau-sedang/50 text-xs">{dateFormatted}</span>
                  <span className="text-hijau-sedang/50 text-xs">· {fm.readingTime}</span>
                </div>

                <h2 className="font-amiri text-2xl font-bold text-hijau-tua mb-2
                               group-hover:text-hijau-sedang transition-colors">
                  <Link href={`/blog/${fm.slug}`}>{fm.title}</Link>
                </h2>
                <p className="text-sm text-hijau-sedang leading-relaxed mb-4">{fm.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-hijau-sedang/60">✍️ {fm.author}</span>
                  <Link href={`/blog/${fm.slug}`}
                        className="text-hijau-sedang text-sm font-medium hover:text-hijau-tua transition-colors">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 text-hijau-sedang/50">
            <div className="text-4xl mb-4">📄</div>
            <p>Belum ada artikel. Tambahkan file .md di folder <code>content/blog/</code></p>
          </div>
        )}
      </div>
    </div>
  )
}
