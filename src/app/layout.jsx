import { Inter } from 'next/font/google'
import './globals.css'
import ToastProvider from '@components/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DOTTED',
  description: 'GET WHAT YOU NEED',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}
