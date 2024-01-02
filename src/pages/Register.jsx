import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center  py-10  bg-gray-100">
      <form
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="border-2 rounded py-2 px-4 w-full"
            type="text"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                value="male"
                {...register("gender", { required: "Please select gender" })}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                value="female"
                {...register("gender", { required: "Please select gender" })}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 rounded py-2 px-4 w-full"
            id="email"
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
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="border-2 rounded py-2 px-4 w-full"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="border-2 rounded py-2 px-4 w-full"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            disabled={!isDirty || !isValid}
            className={`bg-blue-500 ${
              !isDirty || !isValid
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
