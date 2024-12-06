import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocalPhone, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-container mx-auto">
        <div className="block md:hidden">
          <div className="flex items-center gap-2 mb-4">
            <Link to={"/"} className="w-[224px]">
              <img src="/Logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="mt-28 hidden md:block">
            <p className="text-blackColor font-medium font-rubik mb-4">
              Download App:
            </p>
            <div className="flex gap-2">
              <img src="/appstore.png" alt="App Store" className="w-28" />
              <img src="/googleplay.png" alt="Google Play" className="w-28" />
            </div>
          </div>
        </div>
        <div className=" px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and App Download */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2 mb-4">
              <Link to={"/"} className="w-[224px]">
                <img src="/Logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="mt-28 hidden md:block">
              <p className="text-blackColor font-medium font-rubik mb-4">
                Download App:
              </p>
              <div className="flex gap-2">
                <img src="/appstore.png" alt="App Store" className="w-28" />
                <img src="/googleplay.png" alt="Google Play" className="w-28" />
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h2 className="text-lg font-medium text-blackColor mb-4">
              Quick links 1
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Home
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Shop
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                About us
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Blog
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Detail Blog
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h2 className="text-lg font-medium text-blackColor mb-4">
              Quick links 2
            </h2>
            <ul className="space-y-2">
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Favorites
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Cart
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Sign in
              </li>
              <li className="text-greyColor hover:text-gray-800 cursor-pointer">
                Register
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-medium text-blackColor mb-4">
              Contact us
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <MdLocalPhone className="text-greenColor size-5" />
                <span className="text-greyColor">1234 5678 90</span>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineMail className="text-greenColor size-5" />
                <span className="text-greyColor">Freshharvests@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <CiLocationOn className="text-greenColor size-5" />
                <span className="text-greyColor">
                  Tanjung Sari Street, Pontianak, Indonesia
                </span>
              </li>
            </ul>
            <p className="mt-4 text-blackColor font-medium">
              Accepted Payment Methods:
            </p>
            <div className="flex gap-2 mt-2">
              <img src="/Visa.png" alt="Visa" className="w-[70px] h-[48px]" />
              <img
                src="/Paypal.png"
                alt="PayPal"
                className="w-[70px] h-[48px]"
              />
              <img
                src="/ApplePay.png"
                alt="Apple Pay"
                className="w-[70px] h-[48px]"
              />
            </div>
          </div>
        </div>

        {/* for mobile payment  */}
        <div className="mt-2 block md:hidden">
          <p className="text-blackColor font-medium font-rubik mb-4">
            Download App:
          </p>
          <div className="flex gap-2">
            <img src="/appstore.png" alt="App Store" className="w-28" />
            <img src="/googleplay.png" alt="Google Play" className="w-28" />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm"></div>
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between ">
          <p className="text-blackColor font-medium text-rubik text-xs sm:text-sm mt-6 sm:mt-0">
            {" "}
            © Copyright 2024. All Rights Reserved by Banana Studio.
          </p>
          <div className="flex gap-x-3">
            <div className="size-8 bg-blackColor flex items-center justify-center text-white rounded-full">
              <FaFacebookF />
            </div>
            <div className="size-8 bg-blackColor flex items-center justify-center text-white rounded-full">
              <FaTwitter />
            </div>
            <div className="size-8 bg-blackColor flex items-center justify-center text-white rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </footer>
  );
};

export default Footer;
