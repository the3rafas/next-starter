"use client";

import { useFormState, useFormStatus } from "react-dom";
import UserAction from "../action";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
type response = {
  message: string;
  data: any;
  success: boolean;
};
const initialState = {
  message: null,
  data: null,
  success: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {" "}
      Sign in
    </button>
  );
}

export default function AuthCart() {
  const [state, formAction] = useFormState<any, any>(
    UserAction,
    initialState
  ) as [response, () => {}];
  const [isLogin, setIsLogin] = useState<boolean | any>(true);

  function handleToggleClick() {
    setIsLogin(!isLogin);
  }

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      localStorage.setItem("H-token", state.data?.token as string);
      redirect(`/`);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <div className="w-1/3 bg-slate-50 rounded-md">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://space.baianat.com/assets/erpnext/images/erpnext-logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
      </div>
      <form
        action={formAction}
        className="flex flex-col justify-center items-center gap-2 h-5/6 space-y-6"
      >
        <input type="hidden" name="isLogin" value={isLogin} />
        {!isLogin && (
          <>
            <div className="flex  w-9/12 justify-between gap-2">
              <div className="basis-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="basis-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col w-9/12 ">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </>
        )}
        <div className="flex flex-col w-9/12 ">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-col w-9/12 ">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6  text-gray-900"
            >
              Password
            </label>
            {isLogin && (
              <div className="text-sm">
                <Link
                  href="/auth/forget-password"
                  className="font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </div>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-col w-9/12 ">
          <SubmitButton />
        </div>
      </form>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {isLogin ? (
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <span
              onClick={handleToggleClick}
              className="font-semibold leading-6  text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              Start a 14 day free trial
            </span>
          </p>
        ) : (
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{" "}
            <span
              onClick={handleToggleClick}
              className="font-semibold leading-6  text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              LogIn
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
