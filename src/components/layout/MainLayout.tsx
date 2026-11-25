import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-slate-800 text-slate-300 flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout