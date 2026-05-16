import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content')

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProgramFrontmatter {
  title: string
  arabicTitle: string
  slug: string
  level: 'Dasar' | 'Menengah' | 'Lanjutan' | 'Intensif'
  duration: string
  schedule: string
  mode: 'Offline' | 'Online' | 'Offline + Online'
  status: 'Terbuka' | 'Penuh' | 'Segera Buka'
  teacher: string
  excerpt: string
  features: string[]
  order: number
}

export interface BlogFrontmatter {
  title: string
  slug: string
  date: string
  author: string
  category: string
  excerpt: string
  readingTime?: string
}

export interface ContentItem<T> {
  frontmatter: T
  content: string
  slug: string
}

// ─── Generic helpers ─────────────────────────────────────────────────────────

function getFilesInDir(folder: string): string[] {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
}

function parseFile<T>(folder: string, filename: string): ContentItem<T> {
  const filePath = path.join(contentDir, folder, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const slug = filename.replace(/\.md$/, '')
  return {
    frontmatter: { ...data, slug } as T,
    content,
    slug,
  }
}

// ─── Programs ─────────────────────────────────────────────────────────────────

export function getAllPrograms(): ContentItem<ProgramFrontmatter>[] {
  return getFilesInDir('programs')
    .map((f) => parseFile<ProgramFrontmatter>('programs', f))
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99))
}

export function getProgramBySlug(slug: string): ContentItem<ProgramFrontmatter> | null {
  const file = `${slug}.md`
  const filePath = path.join(contentDir, 'programs', file)
  if (!fs.existsSync(filePath)) return null
  return parseFile<ProgramFrontmatter>('programs', file)
}

export function getAllProgramSlugs(): string[] {
  return getFilesInDir('programs').map((f) => f.replace(/\.md$/, ''))
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function getAllPosts(): ContentItem<BlogFrontmatter>[] {
  return getFilesInDir('blog')
    .map((f) => {
      const item = parseFile<BlogFrontmatter>('blog', f)
      item.frontmatter.readingTime = readingTime(item.content).text
      return item
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    )
}

export function getPostBySlug(slug: string): ContentItem<BlogFrontmatter> | null {
  const file = `${slug}.md`
  const filePath = path.join(contentDir, 'blog', file)
  if (!fs.existsSync(filePath)) return null
  const item = parseFile<BlogFrontmatter>('blog', file)
  item.frontmatter.readingTime = readingTime(item.content).text
  return item
}

export function getAllPostSlugs(): string[] {
  return getFilesInDir('blog').map((f) => f.replace(/\.md$/, ''))
}
