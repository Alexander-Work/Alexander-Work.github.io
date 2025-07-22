import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/header'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Track screen width to distinguish mobile vs desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-full overflow-hidden w-full">
      {/* Sidebar Backdrop on Mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Header */}
      <Header></Header>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-200 ease-in-out ${
          sidebarOpen && isMobile ? 'md:ml-64' : ''
        }`}
      >


        {/* Page Content */}
        <main className="justify-center mt-16 p-6 w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}