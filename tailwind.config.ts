import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hijau: {
          tua:    '#1a3d2e',
          sedang: '#2d6a4f',
          muda:   '#74c69d',
          pucat:  '#d8f3dc',
        },
        emas: {
          tua:   '#7a5c00',
          DEFAULT: '#c9a227',
          muda:  '#f0d080',
          pucat: '#fef9ea',
        },
        krem: '#fdf8f0',
      },
      fontFamily: {
        amiri:  ['var(--font-amiri)', 'serif'],
        raleway:['var(--font-raleway)', 'sans-serif'],
        lateef: ['var(--font-lateef)', 'serif'],
      },
      typography: (theme: (path: string) => string) => ({
        islamic: {
          css: {
            '--tw-prose-body':       theme('colors.hijau.tua'),
            '--tw-prose-headings':   theme('colors.hijau.tua'),
            '--tw-prose-links':      theme('colors.hijau.sedang'),
            '--tw-prose-bold':       theme('colors.hijau.tua'),
            '--tw-prose-hr':         theme('colors.hijau.pucat'),
            '--tw-prose-quotes':     theme('colors.hijau.sedang'),
            '--tw-prose-code':       theme('colors.hijau.sedang'),
            '--tw-prose-pre-bg':     theme('colors.hijau.pucat'),
            maxWidth: '72ch',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
