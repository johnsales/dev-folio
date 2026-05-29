import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Johnathan Santiago — Senior Software Engineer',
  description:
    'Senior Software Engineer with 7+ years of experience in Java, Cloud, and full-stack development. Currently at The Home Depot.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
