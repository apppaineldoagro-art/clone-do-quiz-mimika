import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-geist-sans', subsets: ['latin'] })
const fraunces = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mimika — Face Yoga Quiz',
  description:
    'Take the Mimika quiz and get your personalized face yoga program for a younger, firmer, and more radiant look.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
