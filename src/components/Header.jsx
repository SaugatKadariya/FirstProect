import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About Us" },
  { path: "/product", text: "Product" },
  { path: "/login", text: "Login" },
  { path: "/register", text: "Register" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="relative">
          <div className="lg:hidden block">
            <button
              onClick={toggleMenu}
              className="hamburger focus:outline-none"
            >
              &#9776;
            </button>
            <ul className={`menu-content ${menuOpen ? "block" : "hidden"}`}>
              {links.map(({ path, text }, index) => (
                <li key={index} className="border-b py-4 last:border-b-0">
                  <NavLink
                    to={path}
                    onClick={toggleMenu} // Close menu on click
                    className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors"
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="hidden lg:flex space-x-4">
          {links.map(({ path, text }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => isActive
                  ? "bg-red-500 py-2 px-4 rounded"
                  : "hover:text-red-500 py-2 px-4"}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
