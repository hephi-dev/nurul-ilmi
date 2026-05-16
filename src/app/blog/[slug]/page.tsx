import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  }
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter: fm, content } = post
  const dateFormatted = format(new Date(fm.date), 'd MMMM yyyy', { locale: id })

  return (
    <div className="pt-24 bg-krem min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-hijau-tua to-hijau-sedang px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white
                           text-sm mb-8 transition-colors">
            ← Kembali ke Blog
          </Link>
          <span className="inline-block bg-emas/20 text-emas-muda text-xs font-semibold
                           tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            {fm.category}
          </span>
          <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {fm.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <span>✍️ {fm.author}</span>
            <span>📅 {dateFormatted}</span>
            <span>⏱ {fm.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-islamic max-w-none
                        prose-headings:font-amiri prose-h2:text-3xl
                        prose-a:text-hijau-sedang prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-hijau-sedang prose-blockquote:bg-hijau-pucat
                        prose-blockquote:not-italic prose-blockquote:rounded-r-xl">
          <MDXRemote source={content} />
        </div>

        {/* Penutup */}
        <div className="mt-14 pt-8 border-t border-hijau-sedang/15">
          <Link href="/blog"
                className="text-hijau-sedang hover:text-hijau-tua text-sm font-medium transition-colors">
            ← Baca artikel lainnya
          </Link>
        </div>
      </div>
    </div>
  )
}
