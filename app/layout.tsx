import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matcha App',
  description: 'The Best Matcha in Town',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
