import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout