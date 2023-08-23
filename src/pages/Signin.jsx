import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
import Button from "../components/button/Button";
import useTitle from "../hooks/useTitle";

const Signin = () => {
  useTitle("Signin");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (user) => {
    const { email, password } = user;
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-color">
      <div className="lg:w-[35%] shadow-xl p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Enter a valid Email</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-b border-[#212121] py-2 pl-3 pr-10 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0"
                {...register("password", { required: true })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">
                Enter a valid Password
              </span>
            )}
          </div>

          <Button type="submit" size="full">
            Signin
          </Button>
        </form>

        {/* toggle singup */}
        <div className="space-y-3 mt-5 flex flex-col items-center justify-center">
          <p>
            Don't Have An Account Yet?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
