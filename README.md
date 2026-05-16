# Nurul Ilmi — Website Pendidikan Islam

Template website MVP untuk lembaga pendidikan Islam, dibangun dengan Next.js 14, Tailwind CSS, dan Markdown sebagai CMS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka http://localhost:3000
```

---

## 📁 Struktur Proyek

```
nurul-ilmi/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deploy ke GitHub Pages
├── content/
│   ├── programs/               ← ✏️ EDIT DI SINI: konten program
│   │   ├── tilawah-tahsin.md
│   │   ├── tahfizh-alquran.md
│   │   └── ...
│   └── blog/                   ← ✏️ EDIT DI SINI: artikel blog
│       ├── keutamaan-menuntut-ilmu.md
│       └── ...
├── src/
│   ├── app/                    ← Halaman Next.js (App Router)
│   │   ├── page.tsx            ← Halaman utama
│   │   ├── program/page.tsx    ← Daftar program
│   │   ├── program/[slug]/     ← Detail program
│   │   ├── blog/page.tsx       ← Daftar blog
│   │   └── blog/[slug]/        ← Detail artikel
│   ├── components/
│   │   ├── layout/             ← Navbar, Footer
│   │   └── sections/           ← Section halaman utama
│   ├── lib/
│   │   ├── mdx.ts              ← Helper baca file markdown
│   │   └── siteConfig.ts       ← ✏️ Konfigurasi utama situs
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## ✏️ Cara Edit Konten

### 1. Info Lembaga (nama, kontak, statistik, pengajar, testimoni)

Edit file: **`src/lib/siteConfig.ts`**

```typescript
export const siteConfig = {
  name: 'Nurul Ilmi',           // ← Ganti nama lembaga
  contact: {
    phone: '(022) 123-4567',    // ← Ganti nomor telepon
    whatsapp: '6222123456',     // ← Ganti nomor WA (format internasional)
    email: 'info@nurul-ilmi.id',
    address: 'Jl. ...',
  },
  // ... dst
}
```

### 2. Tambah Program Baru

Buat file baru di `content/programs/nama-program.md`:

```markdown
---
title: Nama Program
arabicTitle: العنوان بالعربية
slug: nama-program
level: Dasar          # Dasar / Menengah / Lanjutan / Intensif
duration: 3 Bulan
schedule: Senin & Rabu, 08.00
mode: Offline         # Offline / Online / Offline + Online
status: Terbuka       # Terbuka / Penuh / Segera Buka
teacher: Nama Ustadz
excerpt: Deskripsi singkat program (1-2 kalimat).
features:
  - Fitur pertama
  - Fitur kedua
  - Fitur ketiga
order: 6              # Urutan tampil di halaman
---

## Tentang Program

Konten detail program ditulis di sini dengan Markdown biasa...
```

### 3. Tambah Artikel Blog

Buat file baru di `content/blog/judul-artikel.md`:

```markdown
---
title: Judul Artikel
slug: judul-artikel
date: 2025-08-01
author: Nama Penulis
category: Kajian Ilmiah
excerpt: Ringkasan artikel 1-2 kalimat.
---

Isi artikel ditulis di sini...
```

---

## 🌐 Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Tunggu workflow selesai berjalan (cek tab **Actions**)

Situs akan tersedia di: `https://USERNAME.github.io/REPO-NAME`

### Langkah 3 (Opsional): Pasang Custom Domain

**Jika pakai domain sendiri (mis. nurul-ilmi.id):**

1. Di GitHub Pages Settings, isi kolom **Custom domain** dengan domain Anda
2. Di DNS provider (Cloudflare/Niagahoster/etc), tambahkan record:
   ```
   Type  : CNAME
   Name  : @  (atau www)
   Value : USERNAME.github.io
   ```
3. Di `next.config.js`, **hapus atau komentari** baris `basePath`
4. Centang **Enforce HTTPS** di GitHub Pages Settings

**Jika pakai subdomain (mis. www.nurul-ilmi.id):**
```
Type  : CNAME
Name  : www
Value : USERNAME.github.io
```

---

## ⚙️ Konfigurasi Penting

### `next.config.js` — untuk GitHub Pages tanpa custom domain

```js
const nextConfig = {
  output: 'export',
  basePath: '/NAMA-REPO-ANDA',  // ← Wajib diisi jika tidak pakai custom domain
  images: { unoptimized: true },
  trailingSlash: true,
}
```

Jika **sudah pakai custom domain**, hapus/komentari baris `basePath`.

---

## 🛠️ Tech Stack

| Teknologi | Fungsi |
|---|---|
| **Next.js 14** | Framework React dengan App Router |
| **Tailwind CSS** | Styling utility-first |
| **gray-matter** | Parse frontmatter file markdown |
| **next-mdx-remote** | Render konten markdown ke React |
| **date-fns** | Format tanggal (Bahasa Indonesia) |
| **reading-time** | Estimasi waktu baca artikel |
| **GitHub Actions** | CI/CD auto-deploy |
| **GitHub Pages** | Hosting gratis |

---

## 📞 Butuh Bantuan?

Hubungi tim pengembang atau buka issue di repository ini.

جَزَاكَ اللهُ خَيْرًا
