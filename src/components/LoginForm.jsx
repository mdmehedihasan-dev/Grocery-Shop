import { FaEyeSlash } from "react-icons/fa";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const LoginForm = ({ onClose }) => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      navigate("/");
      toast.success("login successfull");
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials");
      // setMessage(error)
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {/* Close Icon */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-greyColor"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            />
            {errors.email && (
              <p className="mt-1 text-red-500">Please enter you email</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-greyColor"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
              />
              {errors.password && (
                <p className="mt-1 text-red-500">
                  Please enter you valid password
                </p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 text-gray-500 right-3 hover:text-gray-700"
              >
                <FaEyeSlash />
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full py-2 text-white transition bg-orange-500 rounded hover:bg-orange-600">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
