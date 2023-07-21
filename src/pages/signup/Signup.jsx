import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const Signup = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');

  const onSubmit = user => {
    const { email, password } = user;
    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex items-center justify-center h-screen my-20">

      <div className='lg:w-[35%] shadow-xl p-10'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0" {...register('name', { required: true })} />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Name is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0" {...register('email', { required: true })} />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Email is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0"
              {...register('password', {
                required: 'Password is required',
                validate: {
                  minLength: (value) =>
                    value.length >= 6 ||
                    'Password must be at least 6 characters long',
                  capitalLetter: (value) =>
                    /[A-Z]/.test(value) ||
                    'Password must contain at least one capital letter',
                  specialCharacter: (value) =>
                    /[!@#$%^&*]/.test(value) ||
                    'Password must contain at least one special character',
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input type="password" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="BD"
              placeholder="Phone Number"
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-b focus:border-[#333333] focus:ring-0"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">Phone number is required</span>
            )}
          </div>

          <input type="submit" className="primary-button w-full" value='Signup' />
        </form>

        <div className="space-y-3 mt-5 flex flex-col items-center justify-center">
          <p>Already Have An Account? <Link to="/signin" className="text-blue-500">Signin</Link></p>
        </div>
      </div>

    </div>
  );
};

export default Signup;