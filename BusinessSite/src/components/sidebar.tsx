import { NavLink } from "react-router-dom";

 const Sidebar = () => {

    return (
        <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white pt-16 px-4 z-40 transition-transform duration-200 ease-in-out justify-center flex flex-col space-y-4
                ${sidebarOpen ? 'translate-x-0 md:translate-x-0' : '-translate-x-full md:-translate-x-full'}`}
            >

                <nav className="space-y-4">
                <h2 className="underline font-semibold">Site Navigation</h2>
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
                <h2 className="underline font-semibold">Socials</h2>
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
                <NavLink
                to="/"
                target="_blank"
                className={({ isActive }) =>
                    `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700 font-semibold' : ''
                    }`
                }
                >
                    Twitter/X WIP
                </NavLink>
                <NavLink
                to="/"
                target="_blank"
                className={({ isActive }) =>
                    `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700 font-semibold' : ''
                    }`
                }
                >
                    Instagram WIP
                </NavLink>
                <h2 className="underline font-semibold">Links to Projects</h2>
                <NavLink
                to="/"
                target="_blank"
                className={({ isActive }) =>
                    `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700 font-semibold' : ''
                    }`
                }
                >
                    Card Captor WIP
                </NavLink>
                </nav>
            </aside>
    );
 }
export default Sidebar;