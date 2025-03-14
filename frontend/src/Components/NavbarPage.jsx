import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Importing user icon

const NavbarPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* navbar */}
      <div className="container">
        <nav className="border-gray-200 dark:bg-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <a
                href=""
                className="self-center text-2xl font-semibold whitespace-nowrap"
                style={{ textDecoration: "none" }}
              >
                LUXURY RENTALS
              </a>
            </Link>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
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

            {/* Menu items */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-1 md:p-0 mt-2 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to="/villas" style={{ textDecoration: "none" }}>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    VILLAS
                  </a>
                </Link>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    ABOUT US
                  </a>
                </Link>
                <Link to="contact" style={{ textDecoration: "none" }}>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    CONTACT
                  </a>
                </Link>

                {/* User Icon with Signup/Login */}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <FaUserCircle className="text-3xl" /> {/* User icon */}
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPage;




























//*  ya code abi rakna h age chake krne ke liye *//



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa"; // Importing user icon

// const NavbarPage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle the mobile menu visibility
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       {/* navbar */}
//       <div className="container">
//         <nav className="border-gray-200 dark:bg-transparent fixed top-0 left-0 w-full z-50">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <a
//                 href="#"
//                 className="self-center text-2xl font-semibold whitespace-nowrap"
//                 style={{ textDecoration: "none" }}
//               >
//                 LUXURY RENTALS
//               </a>
//             </Link>

//             {/* Hamburger Icon */}
//             <button
//               onClick={toggleMobileMenu}
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-default"
//               aria-expanded={isMobileMenuOpen ? "true" : "false"}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>

//             {/* Menu items */}
//             <div
//               className={`${
//                 isMobileMenuOpen ? "block" : "hidden"
//               } w-full md:block md:w-auto`}
//               id="navbar-default"
//             >
//               <ul className="font-medium flex flex-col p-1 md:p-0 mt-2 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
//                 <Link to="/villas" style={{ textDecoration: "none" }}>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     VILLAS
//                   </a>
//                 </Link>
//                 <Link to="/About" style={{ textDecoration: "none" }}>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     ABOUT US
//                   </a>
//                 </Link>
//                 <Link to="contact" style={{ textDecoration: "none" }}>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     CONTACT
//                   </a>
//                 </Link>

//                 {/* User Icon with Signup/Login */}
//                 <Link to="/signup-login" style={{ textDecoration: "none" }}>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     <FaUserCircle className="text-3xl" /> {/* User icon */}
//                   </a>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default NavbarPage;
