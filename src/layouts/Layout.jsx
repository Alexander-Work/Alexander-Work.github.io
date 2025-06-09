import { NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Track screen width to distinguish mobile vs desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Backdrop on Mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white pt-16 px-4 z-40 transition-transform duration-200 ease-in-out justify-center flex flex-col space-y-4
          ${sidebarOpen ? 'translate-x-0 md:translate-x-0' : '-translate-x-full md:-translate-x-full'}`}
      >

        <nav className="space-y-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            Qualifications
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
          to="https://www.linkedin.com/in/alexander-peebles/"
          target="_blank"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700 font-semibold' : ''
            }`
          }
          >
            My LinkedIn
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-200 ease-in-out ${
          sidebarOpen && !isMobile ? 'md:ml-64' : ''
        }`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-20 bg-gray-900 text-white flex items-center justify-center px-4 border-b z-50">
          {/* Always show toggle button */}
          <button
            className="absolute left-4 text-white text-2xl z-50"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <h1 className="text-lg font-bold">Business Site</h1>
        </header>

        {/* Page Content */}
        <main className="justify-center mt-16 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
// Note: The sidebar will be hidden on mobile by default, and can be toggled with the button in the header.
// The sidebar will always be visible on larger screens (md and up).