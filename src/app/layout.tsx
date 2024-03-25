import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BookWise',
  description:
    'BookWise is a recommendation platform for readers, a place where they can evaluate and see reviews from other readers on the most diverse books.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
