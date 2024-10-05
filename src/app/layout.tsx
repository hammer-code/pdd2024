import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/navbar'
import Sidebar from '@/components/common/sidebar'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Coming Soon - PDD24',
  description: 'PDD2024 by HammerCode',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ic_pdd24_light.svg" sizes="any" />
      </head>
      <body className={sora.className}>
        <Navbar />
        <Sidebar />
        <div className='relative'>
          <div className="mt-14 md:mt-28 text-white relative z-10">{children}</div>
          <ShootingStars />
          <StarsBackground />
        </div>
      </body>
    </html>
  )
}
