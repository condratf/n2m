// local
import { Header, Footer } from '@/components/layout'
import { BottomMobileNav } from '@/components/shared'
import { Cookies } from '@/components/modals'
// styles
import './globals.css'

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
        <Cookies />
        <Header />
        {children}
        <BottomMobileNav />
        <Footer />
      </body>
    </html>
  )
}
