/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-greenColor md:hidden">
          <ul className="px-4 py-6 space-y-4 font-medium text-greyColor">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block cursor-pointer ${isActive ? "half-underline" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `block cursor-pointer ${isActive ? "half-underline" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block cursor-pointer ${isActive ? "half-underline" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block cursor-pointer ${isActive ? "half-underline" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
          </ul>
        </div>
  )
}

export default MobileMenu