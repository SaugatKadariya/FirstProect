import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 p-8 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            className="w-full border rounded py-2 px-3"
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Password</label>
          <input
            className="w-full border rounded py-2 px-3"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;


