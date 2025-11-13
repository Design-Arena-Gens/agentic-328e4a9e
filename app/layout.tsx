import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Commerce Blueprint India | Profitable Niche Ideas',
  description: 'Complete blueprint for starting a profitable e-commerce business in India with niche recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
