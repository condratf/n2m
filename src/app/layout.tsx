import './globals.css'
import { Inter } from 'next/font/google'
// local
import { Header, Footer } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danier Tech',
  description: 'Danier Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main-container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
