import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - AzureDay PL 2024',
    default: 'AzureDay PL 2024 - A community-driven conference',
  },
  description:
    'Siódma edycja konferencji AzureDay Poland to miejsce w którym pod jednym dachem spotkają się najlepsi eksperci chmurowi w tej części Europy. Dołącz do nich i Ty 15 lutego 2024 w Warszawie',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <GoogleAnalytics />
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
