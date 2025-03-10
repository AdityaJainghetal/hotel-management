import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";

import aboutbanner from "../images/aboutbanner2.png";
import about_image from "../images/about_image.png";
import about_image1 from "../images/about_image2.png";

function AboutPage() {
  return (
    <div>
      {/* banner */}
      <div className="container mx-auto mt-3 p-4">
        <section className="flex flex-col-reverse md:flex-row items-center py-10 px-4 md:px-16 bg-gradient-to-r from-gray-100 via-gray-200 to-white">
          {/* Image Section */}
          <div className="  md:w-1/2 mb-6 md:mb-0 mr-3">
            <img
              style={{ borderBottomRightRadius: "110px" }}
              src={aboutbanner}// Replace with the actual image path
              alt="Serene view"
              className="w-[580px] h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Text Section */}
          <div className=" md:w-1/2 text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Your peace of mind, our priority
            </h2>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
            </p>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat.
            </p>
            <p className="text-gray-600 mb-4">
              Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra.
            </p>
            <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 text-center rounded-md mt-6">
              We strive to offer you the best possible homes to stay.
            </div>
          </div>
        </section>
      </div>
      {/*  ya code testing ke liye rhka h abi  */}
      {/* <div className="grid grid-cols-1  md:grid-cols-3 ">
          <div className="md:col-span-2 relative ">
            <img
              style={{ height: "400px", width: "550px",borderBottomRightRadius:'60px' }}
              src={aboutbanner}
              alt="Villa SOHO exterior with pool"
              className="object-cover "
              fill
              priority
            />
          </div>

          <div className="p-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your peace of mind, 
          our priority</h2>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
            </p>
            <p className="text-gray-600 mb-4">
              Ut vel urna quis urna tristique tempus. Etiam lobortis est at
              mauris eleifend, id tempor purus ultricies.
            </p>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
              venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
              feugiat. Sed quis sem elementum.
            </p>
          </div>
        </div> */}


      {/* about */}
      <div className="container">
        <div className="row px-4 sm:px-8 lg:px-16">
          <div className="col-sm-6 max-w-6xl mt-3 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
            </p>
            <p className="text-gray-600 mb-4">
              Ut vel urna quis urna tristique tempus. Etiam lobortis est at
              mauris eleifend, id tempor purus ultricies.
            </p>
            <p className="text-gray-600 mb-4">
              Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
              venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
              feugiat. Sed quis sem elementum, viverra ligula at, lobortis
              magna. Praesent congue nibh in dolor rutrum, et euismod quam
              elementum.
            </p>
            <p className="text-gray-600 font-bold mb-8">
              Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae
              est. Aliquam porta ex elit, sit amet rutrum turpis egestas
              viverra. Quisque at libero purus.
            </p>
            <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 text-center rounded-md">
              We strive to offer you the best possible homes to stay.
            </div>
          </div>

          <div className="col-sm-6 pb-5 pr-5">
            <div className="relative min-h-screen pb-5 flex justify-center items-center">
              <div className="relative w-[350px] md:w-[500px]">
                <div className="absolute top-0 left-0 w-3/4 md:w-2/3 z-10 border-8 border-white overflow-hidden">
                  <img
                    style={{ borderBottomLeftRadius: "80px", width: '300px' }}
                    src={about_image}
                    alt="Group of people"
                    className=" border-8 "
                  />
                </div>

                <div
                  className="relative mt-[150px] ml-[100px] "
                  style={{}}
                >
                  <img
                    style={{ borderTopRightRadius: "50px", width: '300px' }}
                    src={about_image1}
                    alt="Pool view"
                    className=" border-8 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container">
        <div className="bg-gray-200">
          <div className="relative">

            <div className='w-full h-[100px] object-cover'>

            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30"></div>
          </div>
          <div className="relative  -mt-32 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-black text-white  p-8 shadow-lg"
              style={{ borderTopRightRadius: "80px" }}
            >
              <h3 className="text-2xl font-semibold mb-4">Let’s connect</h3>
              <p className="mb-2">
                <strong>Phone:</strong> +385 91 322 8444
              </p>
              <p className="mb-2">
                <strong>Email:</strong> prospekt@prospekt.hr
              </p>
              <p className="mb-6">
                <strong>Address:</strong> Dražice 198, 51000 Rijeka, Croatia
              </p>
              <div className="flex space-x-4">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center">
                  <FaWhatsapp />
                </span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center">
                  <FaInstagram />
                </span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center">
                  <CiYoutube />
                </span>
              </div>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg"
              style={{ borderBottomRightRadius: "80px" }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                We’d love to hear from you
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-md p-2 w-full"
                    style={{ borderBottom: "2px solid" }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-md p-2 w-full"
                    style={{ borderBottom: "2px solid" }}
                  />

                  <input
                    type="massage"
                    placeholder="massage"
                    className="rounded-md p-2 w-full"
                    style={{ borderBottom: "2px solid" }}
                  />
                </div>

                <div className="flex items-start mt-4">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I accept the Terms and Conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg bg-secondary text-white pr-3 pl-3 rounded-md hover:bg-blue-600"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* <footer className="bg-gray-200 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 lg:text-left">
              <div className="mt-4 flex flex-col lg:flex-row justify-between text-gray-600 text-sm">
                <div className="space-x-4">
                  <p className="text-gray-600 text-dark text-sm pl-3">
                    LUXURY RENTALS
                  </p>
                  <p className="text-gray-600 mt-4 text-sm">
                    We are a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                  </p>
                  <p className="text-gray-600 pt-2 text-sm">
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className="mt-5">
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                    <a href="#" className="hover:underline pl-4">
                      Privacy Notice and Cookies
                    </a>
                    <a href="#" className="hover:underline pl-4">
                      Imprint
                    </a>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <p>Connect with us</p>
                  <p className="pt-2">+00 000 000 00</p>
                  <p className="pt-2">info@luxuryrentals.com</p>

                  <div className="flex mt-3 space-x-4">
                    <span className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                      <FaWhatsapp />
                    </span>
                    <span className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                      <FaInstagram />
                    </span>
                    <span className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                      <CiYoutube />
                    </span>
                    <span className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                      <BsBrowserChrome />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
