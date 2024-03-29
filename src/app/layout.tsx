import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
