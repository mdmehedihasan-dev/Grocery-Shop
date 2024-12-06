/* eslint-disable react/prop-types */

const Button = ({ children, onClick, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2  text-white rounded-md focus:outline-none focus:ring-2  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
