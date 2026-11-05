import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="inline-block bg-slate-800 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-700 shadow-sm">
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12 md:py-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout