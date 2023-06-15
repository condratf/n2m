// local
import { Header, Footer } from '@/components/layout'
// styles
import './globals.css'
import { BottomMobileNav } from '@/components'

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
      <body >
        <Header />
        {children}
        <BottomMobileNav />
        <Footer />
      </body>
    </html>
  )
}
