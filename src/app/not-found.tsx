import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-krem flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="arabic text-6xl text-emas/30 mb-6">٤٠٤</div>
        <h1 className="font-amiri text-4xl font-bold text-hijau-tua mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-hijau-sedang mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin halaman telah dipindahkan
          atau tautan yang Anda gunakan tidak tepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-hijau-sedang text-white px-6 py-3 rounded-lg font-semibold
                       hover:bg-hijau-tua transition-colors text-sm"
          >
            ← Kembali ke Beranda
          </Link>
          <Link
            href="/blog"
            className="border border-hijau-sedang/25 text-hijau-sedang px-6 py-3 rounded-lg
                       font-medium hover:bg-hijau-pucat transition-colors text-sm"
          >
            Baca Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
