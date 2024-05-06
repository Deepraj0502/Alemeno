import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { initFlowbite } from "flowbite";

export default function CoursePage() {
  const location = useLocation();
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                  className="h-8 me-3 rounded-2xl"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Alemeno
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Deepraj Pagare
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      pagaredeep@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Profile
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/mycourses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Your Courses
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64 bg-[#111827] min-h-[100vh]">
        <div className="p-8 rounded-lg mt-14">
          <div className="flex justify-between">
            <div className="md:w-[70%]">
              <h1 className="text-white text-3xl font-bold">
                {location.state.data.name}
              </h1>
              <p className="text-white text-lg flex gap-2 mt-2">
                <FaLocationDot className="relative top-1" />
                {location.state.data.location}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                {" "}
                {location.state.data.description}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                {" "}
                <span className="font-bold">Instructor:</span>{" "}
                {location.state.data.instructor}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                <span className="font-bold">Enrollment Status:</span>{" "}
                {location.state.data.enrollmentStatus === "Open" && (
                  <span className="text-green-400">
                    {location.state.data.enrollmentStatus}
                  </span>
                )}
                {location.state.data.enrollmentStatus === "Closed" && (
                  <span className="text-red-400">
                    {location.state.data.enrollmentStatus}
                  </span>
                )}
                {location.state.data.enrollmentStatus === "'In Progress" && (
                  <span className="text-yellow-400">
                    {location.state.data.enrollmentStatus}
                  </span>
                )}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                {" "}
                <span className="font-bold">Course Duration:</span>{" "}
                {location.state.data.duration}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                {" "}
                <span className="font-bold">Schedule:</span>{" "}
                {location.state.data.schedule}
              </p>
              <p className="text-white text-lg flex gap-2 mt-5">
                {" "}
                <span className="font-bold">Prerequisites:</span>{" "}
                {location.state.data.prerequisites.map((f, ind) => {
                  if (ind === 0) {
                    return f;
                  } else {
                    return " , " + f;
                  }
                })}
              </p>

              <p className="text-white text-lg mt-5">
                {" "}
                <span className="font-bold">Syllabus</span>
              </p>
              <div
                id="accordion-collapse"
                data-accordion="collapse"
                className="mt-5"
              >
                {location.state.data.syllabus.map((m, ind) => {
                  return (
                    <>
                      <h2 id={"accordion-collapse-heading-" + ind}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                          data-accordion-target={
                            "#accordion-collapse-body-" + ind
                          }
                          aria-expanded="false"
                          aria-controls={"accordion-collapse-body-" + ind}
                        >
                          <span>{m.topic}</span>
                          <svg
                            data-accordion-icon=""
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={"accordion-collapse-body-" + ind}
                        className="hidden border border-transparent border-b-gray-700"
                        aria-labelledby={"accordion-collapse-heading-" + ind}
                      >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {m.content}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <img
              src={location.state.data.thumbnail}
              alt=""
              className="h-80 w-60 object-cover rounded-lg sticky top-10 md:block hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
