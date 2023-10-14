import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NotAIte',
  description: 'NotAIte - An AI Note-Taking Application by Dann'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
          <body className={inter.className}>{children}</body>
        </Provider>
      </html>
    </ClerkProvider>
  )
}
