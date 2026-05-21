import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EYT Pro X Wireless Headset',
  description: '80 hours of Hi-Res Audio. Hybrid ANC. Neural Spatial Sound.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#fff' }}>{children}</body>
    </html>
  )
}
