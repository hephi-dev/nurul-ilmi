// ─── Ubah semua data di sini sesuai lembaga Anda ────────────────────────────

export const siteConfig = {
  name: 'Nurul Ilmi',
  tagline: 'Pusat Pendidikan & Pelatihan Islam',
  description:
    'Lembaga pendidikan Islam terpercaya yang berkomitmen mencetak generasi muslim berilmu, berakhlak, dan bermanfaat bagi umat.',
  url: 'https://nurul-ilmi.id', // ganti dengan domain Anda
  since: '2005',
  contact: {
    phone: '(022) 123-4567',
    whatsapp: '6222123456',
    email: 'info@nurul-ilmi.id',
    address: 'Jl. Pendidikan Islam No. 45, Bandung, Jawa Barat',
  },
  stats: [
    { value: '2.400+', label: 'Santri Alumni' },
    { value: '18+',    label: 'Tahun Pengalaman' },
    { value: '40+',    label: 'Pengajar Bersanad' },
    { value: '12',     label: 'Program Aktif' },
  ],
  teachers: [
    {
      initials: 'أح',
      name: 'Ust. Ahmad Fauzan, Lc.',
      credential: 'Alumni Al-Azhar Kairo\nSpesialis Ilmu Tajwid & Qiraat',
      field: 'Tilawah & Tahsin',
    },
    {
      initials: 'نض',
      name: 'Ustadzah Nadia Khairani',
      credential: 'M.Pd. – IAIN Bandung\nHafidzah 30 Juz',
      field: 'Tahfizh Al-Quran',
    },
    {
      initials: 'مر',
      name: 'Ust. Muhammad Ridwan',
      credential: 'M.A. – UIN Jakarta\nDoktor Fiqih Muqarran',
      field: 'Fiqih & Ushul',
    },
    {
      initials: 'حب',
      name: 'Ust. Hasan Al-Baqri, Lc.',
      credential: 'Alumni Madinah University\nNative Arabic Speaker',
      field: 'Bahasa Arab',
    },
  ],
  testimonials: [
    {
      initials: 'FR',
      name: 'Farah Rahmawati',
      from: 'Alumni Tilawah, Bandung',
      rating: 5,
      quote:
        'Alhamdulillah, bacaan Al-Quran saya yang dulu berantakan kini sudah jauh lebih baik. Para ustadz sangat sabar dan metode pembelajaran sangat menyenangkan.',
    },
    {
      initials: 'AD',
      name: 'Ahmad Dhiya\'uddin',
      from: 'Alumni Tahfizh, Jakarta',
      rating: 5,
      quote:
        'Program tahfizh di sini luar biasa. Dengan bimbingan musyrif yang sabar dan metode muroja\'ah yang terstruktur, saya berhasil hafal 10 juz dalam setahun.',
    },
    {
      initials: 'SN',
      name: 'Siti Nur Azizah',
      from: 'Alumni Fiqih, Surabaya',
      rating: 5,
      quote:
        'Kajian fiqih-nya sangat mendalam tapi tidak membosankan. Banyak contoh praktis yang langsung bisa diterapkan dalam kehidupan sehari-hari.',
    },
  ],
  navLinks: [
    { label: 'Program',  href: '/#program' },
    { label: 'Jadwal',   href: '/#jadwal' },
    { label: 'Pengajar', href: '/#pengajar' },
    { label: 'Blog',     href: '/blog' },
    { label: 'Alumni',   href: '/#testimonial' },
  ],
}
