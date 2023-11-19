"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GoPlus } from "react-icons/go";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Tutorials", href: "#" },
  { name: "Global integration ", href: "#" },
  { name: "Help", href: "#" },
];
export default function HomeNavBar() {
  const [viewMenu, setViewMenu] = useState<Boolean>(false);
  const toggleMenue = () => {
    setViewMenu(!viewMenu);
    console.log(viewMenu);
  };
  const signOut = () => {
    // localStorage.clear();
    // redirect("/auth");
  };
  return (
    <>
      <nav
        className="flex bg-custom-wezly-primary text-white justify-center  w-fulllg:px-8"
        aria-label="Global"
      >
        <div className="lg:container md:w-4/5 sm:w-10/12 flex justify-between items-center ">
          <div className="lg:w-1/5 md:w-2/12 bg-inherit">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1405.98 312.6"
                className="w-3/6"
              >
                <path
                  className="cls-1"
                  xmlns="http://www.w3.org/2000/svg"
                  d="M291.05 288.79a679.58 679.58 0 0 1-41.51-54.45c-12 16.51-25.89 34.81-42 54.45-25 29.46-69.18 33.48-101.32 1.34C65.19 250.85-20.51 92.84 4.49 30.8c19.64-50 89.72-19.64 130.78 14.28C163.84 16.52 203.12 0 247.75 0c43.3 0 83 15.62 113.38 44.64 39.28-32.14 111.59-65.17 133-13.84 25 62-60.7 220.05-101.77 259.33-32.13 32.14-76.31 28.12-101.31-1.34zm-23.21-82.13c15.62 23.21 33.92 46.42 46.87 62.49 13.83 16.07 37 17.41 56.24-.89 20.53-19.19 49.1-66.51 69.18-112.93 23.21-52.22 32.59-94.63 25.44-112.93-1.78-4.91-4.9-7.58-13.39-7.58-11.6 0-46 11.6-71 33 13.84 18.3 21 38.83 21 61.15 0 55.35-86.59 57.13-86.59 0 0-22.77 10.27-43.75 24.1-62-25-23.21-56.24-36.15-91.95-36.15S179.46 44.19 156.7 67c14.73 18.3 25 38.39 25 62.05 0 57.13-84.81 62.49-84.81 0 0-30.8 14.73-51.33 19.64-59.81C96.44 54 42.88 19.19 33.06 42.4c-7.15 18.3 2.23 60.71 25.44 112.93 20.08 46.42 48.65 93.74 69.18 112.93 19.2 18.3 42.41 17 56.24.89a720.45 720.45 0 0 0 47.32-62.49c-18.3-29.9-27.68-53.11-27.68-70.08 0-62.49 91.51-63.82 91.51 0 0 16.97-8.93 40.18-27.23 70.08zm-18.3-87c-7.14 0-15.18 4.47-15.18 17 0 5.36 2.23 17.41 15.18 40.62 12.5-23.21 14.73-34.81 14.73-40.62 0-15.66-11.16-17.04-14.73-17.04zM138 92.84c-4.91 8.48-10.27 20.53-10.27 36.16 0 5.35 1.34 9.37 3.57 11.6 4.91 5.8 19.64 1.79 19.64-11.6-.05-14.29-6.3-25.89-12.94-36.16zm221.79-1.34Q346.4 112.26 346.4 129c0 4 .89 6.69 3.12 8.92 6.25 4.91 21.87 3.57 21.87-8.92 0-12.95-4.01-25.45-11.6-37.5z M929.21 172.44h-59.82a69.4 69.4 0 0 0 4.2 24.53q4.1 10.62 10.87 16a23.46 23.46 0 0 0 14.95 5.39 28.27 28.27 0 0 0 10-1.72 29.66 29.66 0 0 0 8.79-5.39 72.63 72.63 0 0 0 7.84-7.85q3.58-4.18 9.3-11.37a8.47 8.47 0 0 1 6.72-2.69 9.51 9.51 0 0 1 7.62 3.44q2.91 3.45 2.91 9.72 0 5.53-3.25 12.94a49 49 0 0 1-9.8 14.21 52.7 52.7 0 0 1-16.46 11.29 54.8 54.8 0 0 1-22.8 4.49q-29.46 0-45.82-22.44t-16.35-60.87a132.81 132.81 0 0 1 4-33.57A82.2 82.2 0 0 1 853.93 102a52.16 52.16 0 0 1 44.14-22.88q17.92 0 30.75 10.09a61.53 61.53 0 0 1 19.18 26.1 87.23 87.23 0 0 1 6.39 32.6q0 15.41-6.61 20t-18.57 4.53zm-59.82-23.18h55.45q-1.12-20.94-8.46-31.33t-19.32-10.4q-11.43 0-18.76 10.55t-8.91 31.18zM1113.88 124.68l-56 87.52h59.93q7.29 0 11 4.78t3.7 12.29q0 7.2-3.64 11.74t-11 4.54h-82.9q-8.73 0-13.05-5.32t-4.31-14.56a22.88 22.88 0 0 1 3-11q3-5.56 12.54-20.44 10.08-15.65 18.32-28.34t15.29-23.72q7-11 11.71-18.71t7.44-13.15h-45.48q-9.41 0-14.22-2.35t-4.82-12.37q0-7.35 3.64-11.74t10.36-4.38h70.24q9.75 0 15 4t5.21 14.32a27 27 0 0 1-1 7.13 31.34 31.34 0 0 1-2.24 6c-.83 1.56-2 3.47-3.36 5.71s-3.24 4.91-5.36 8.05zM1196.33 228.06v-131q0-9.06 4.09-13.72a14 14 0 0 1 11-4.64 14.56 14.56 0 0 1 11.2 4.59q4.26 4.59 4.26 13.77v131q0 9.18-4.31 13.77a14.62 14.62 0 0 1-11.15 4.6 13.89 13.89 0 0 1-10.92-4.76q-4.17-4.75-4.17-13.61zM1332.37 204.53l2.79-6.72-37.47-93.26q-3.46-8-3.46-11.68a13.56 13.56 0 0 1 2-7.17 14.93 14.93 0 0 1 5.52-5.29 14.69 14.69 0 0 1 7.31-2q6.57 0 9.92 4.13t5.91 11.85l25.77 74.07 24.42-68.89a118.28 118.28 0 0 1 5.24-13.12c1.56-3.16 3.22-5.29 5-6.39s4.22-1.65 7.42-1.65a13.19 13.19 0 0 1 6.64 1.81 12.77 12.77 0 0 1 4.9 4.91 13.05 13.05 0 0 1 1.73 6.5c-.3 1.4-.78 3.38-1.45 6s-1.48 5.18-2.45 7.82l-39.7 102.74q-5.14 13.56-10 21.27a32.89 32.89 0 0 1-13 11.85q-8.08 4.14-21.8 4.14-13.38 0-20.07-2.87t-6.7-10.47q0-5.19 3.18-8t9.43-2.81a17.58 17.58 0 0 1 4.79.66 23.17 23.17 0 0 0 5 .66 18.23 18.23 0 0 0 8.25-1.55 14.39 14.39 0 0 0 5.41-5.34 81.84 81.84 0 0 0 5.47-11.2zM697.37 217.51L670.82 120l-26.89 97.55q-3.13 11.1-5 15.93a21.17 21.17 0 0 1-6.44 8.66q-4.59 3.83-12.21 3.83a20.19 20.19 0 0 1-10.14-2.28 17.45 17.45 0 0 1-6.44-6.44 39.63 39.63 0 0 1-4-9.87q-1.58-5.72-2.81-10.6L569.55 107.2q-2.46-9.56-2.46-14.54A14.24 14.24 0 0 1 571.57 82a15.35 15.35 0 0 1 11.09-4.33q9.08 0 12.21 5.77t5.49 16.76l21.51 95L646 106.31a141 141 0 0 1 4.82-15.54 22.45 22.45 0 0 1 6.94-9.21q4.81-3.89 13.11-3.89t13 4a22.16 22.16 0 0 1 6.44 8.83q1.8 4.77 4.82 15.76l24.31 88.9 21.51-95a112.68 112.68 0 0 1 3-11.65 18.75 18.75 0 0 1 4.78-7.51q3.42-3.33 9.92-3.33a15.49 15.49 0 0 1 11 4.28 14.08 14.08 0 0 1 4.54 10.71q0 4.55-2.47 14.54l-27.3 109.54q-2.8 11.1-4.65 16.26a21.61 21.61 0 0 1-6.27 9q-4.43 3.89-12.49 3.89-7.62 0-12.21-3.78a20.26 20.26 0 0 1-6.39-8.49q-1.8-4.62-5.04-16.11z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex lg:w-4/5  md:w-10/12 items-center justify-between  gap-x-12 lg:flex  md:flex hidden ">
            <div className="flex justify-between lg:w-3/5 md:w-7/12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex  justify-end items-center lg:w-2/5 md:w-6/12">
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white  px-8 py-3 text-base font-medium text-black hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  New {<GoPlus />}
                </button>
              </div>
              <div className="flex w-3/5 items-center justify-around w-full cursor-pointer">
                <GiPlagueDoctorProfile className="invisible md:visible" />
                {"Mohamed arafa"}
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-4 md:hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md border border-transparent bg-white  px-8 py-3 text-base font-medium text-black hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              New {<GoPlus />}
            </button>
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center p-2  h-10 text-sm  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={toggleMenue}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {viewMenu && (
        <div className="flex bg-custom-wezly-primary w-full lg:hidden  md:hidden animate-bounce">
          {" "}
          <div className="flex justify-between container m-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <div className="flex  justify-end items-center lg:w-2/5 md:w-6/12">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white  px-8 py-3 text-base font-medium text-black hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                New {<GoPlus />}
              </button>
            </div>
            <div className="flex w-3/5 items-center justify-around w-full cursor-pointer">
              <GiPlagueDoctorProfile className="invisible md:visible" />
              {"Mohamed arafa"}
              <IoIosArrowDown />
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}
