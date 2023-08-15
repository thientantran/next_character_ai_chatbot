import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Character',
  description: 'AI-Character using Nextjs APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('bg-secondary', inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* co the su dung forcedTheme="dark" de bat buoc dung theme gi */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
