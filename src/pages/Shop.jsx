// import { FaTools } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 bg-gray-100">
      {/* Icon Section */}
      {/* <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full shadow-lg">
        <FaTools className="text-4xl text-orange-500 animate-bounce" />
      </div> */}

      {/* Title Section */}
      <h1 className="mt-6 text-3xl font-semibold text-gray-800 sm:text-4xl">
        Page Under Design
      </h1>

      {/* Subtitle Section */}
      <p className="mt-4 text-lg text-center text-gray-600">
        We&lsquo;re working hard to bring you an awesome experience! <br />
        Stay tuned — this page will be live soon.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          to="/"
          className="flex items-center justify-center px-6 py-3 text-white rounded-md shadow bg-greenColor hover:bg-blue-700"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
        <button
          className="px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          onClick={() => alert("Contact Us at support@example.com!")}
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Shop;
