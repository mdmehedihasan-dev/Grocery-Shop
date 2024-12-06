import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Check if current path is /productsdetails
  const isHome = location.pathname === "/";

  return (
    <nav className="absolute left-0 right-0 px-5 py-6 md:py-8 md:px-0">
      <div className="flex items-center justify-between py-3 mx-auto max-w-container">
        {/* Logo */}
        <Link to={"/"} className="w-[224px]">
          <img src="/Logo.png" alt="Logo" />
        </Link>

        {/* Navigation Links for Desktop */}
        <ul className="hidden space-x-16 font-medium md:flex text-greyColor">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? "half-underline  " : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? "half-underline " : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? "half-underline " : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? "half-underline " : ""}`
            }
          >
            Blog
          </NavLink>
        </ul>

        {/* Right Side: Sign In and Cart */}
        <div
          className={`items-center hidden space-x-4 md:flex ${
            isHome ?  "text-white":"text-greyColor"
          }`}
        >
          <Link className="flex items-center gap-x-2">
            <div className="cursor-pointer">
              <FaHeart className={`items-center hidden space-x-4 md:flex ${
            isHome ?  "text-white":"text-greenColor"
          }`} />
            </div>
            <p>Favorites</p>
          </Link>

          <Link className="flex items-center gap-x-2">
            <div className="relative cursor-pointer">
              {/* Cart Icon */}
              <FaShoppingCart  className={`items-center hidden space-x-4 md:flex ${
            isHome ?  "text-white":"text-greenColor"
          }`}  />
              {/* Cart Badge */}
              <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-2 left-2">
                3
              </span>
            </div>
            <p>Cart</p>
          </Link>

            <div>
      <button
        onClick={openModal}
        className="px-6 py-2 border-2 border-current rounded-md"      >
        Sign in
      </button>

      {isOpen && <LoginForm onClose={closeModal} />}
    </div>
        </div>

        {/* Mobile Menu Button */}

        <Link className="block sm:hidden ">
            <div className="relative cursor-pointer">
              {/* Cart Icon */}
              <FaShoppingCart  className="items-center hidden space-x-4 md:flex text-greenColor"
           />
              {/* Cart Badge */}
              <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-2 left-2">
                3
              </span>
            </div>
          </Link>




        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
         <GiHamburgerMenu className="text-white"/>

        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
