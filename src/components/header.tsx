import NavLink from "./NavLink"

  const Header = () => {
  
    return (
      <header className="fixed overflow-y-hidden top-0 left-0 right-0 h-20 bg-gray-900 text-white flex items-center justify-center px-4 border-b z-50 w-screen">
        {/* Always show toggle button */}
        <nav className=" text-white p-4 flex gap-4">
          
          <NavLink to="/About">About</NavLink>
        </nav>
        <nav className="text-4xl font-bold p-4 flex gap-4">
          <NavLink to="/">Welcome</NavLink>
        </nav>
        <nav className=" text-white p-4 flex gap-4">

          <NavLink to="/Projects">Projects</NavLink>
          
        </nav>
      </header>
    );
  };

  export default Header;