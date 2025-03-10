import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Slice";
import { Link, useNavigate } from "react-router-dom";

import { IoPeopleSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";
import banner3 from "../images/banner3.png";

import topvilla_image1 from "../images/topvilla_image1.png";
import topvilla_image2 from "../images/topvilla_image2.png";
import topvilla_image3 from "../images/topvilla_image3.png";

function AllVillah() {
  let navigate = useNavigate()
  const [filtersVisible, setFiltersVisible] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const carddata = (id) => {
    console.log(id);
    navigate(`/select_villa/${id}`)

  };
  return (
    <div>

      {/* top villas */}
      <div className="container bg-slate-200  ">
        <h2 className="text-3xl font-semibold pt-5 text-center mb-8">
          Top Pick Villah
        </h2>
        <p className="text-center pt-2 pb-5">124 Results</p>

        {/* search bar */}
        <div className="p-6">
          {/* Search Bar */}
          <div className="p-6 flex justify-center">
            <div className="flex flex-wrap bg-white items-center space-x-2 border rounded-md shadow-md p-4">
              <select className="border ml-5 mt-2 rounded-md px-4 focus:outline-none w-full sm:w-auto">
                <option>Location</option>
              </select>
              <select className="border ml-5 mt-2 rounded-md px-4 focus:outline-none w-full sm:w-auto">
                <option>Dates</option>
              </select>
              <select className="border ml-5 mt-2 rounded-md px-4 focus:outline-none w-full sm:w-auto">
                <option>Guests</option>
              </select>
              <select className="border ml-5 mt-2 rounded-md px-4 focus:outline-none w-full sm:w-auto">
                <option>Price</option>
              </select>
              <button
                className="bg-gray-600 text-white mt-2 ml-5 sm:mt-0 px-4 p-2 rounded-md w-full sm:w-auto"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters Section */}
          {filtersVisible && (
            <div className="mt-4 border rounded-md shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Location */}
                <div>
                  <h3 className="font-medium">Location</h3>
                  <div className="space-y-1">
                    {[
                      "Seaside",
                      "Countryside",
                      "Village",
                      "Town",
                      "Mountains",
                    ].map((location) => (
                      <div key={location} className="flex items-center">
                        <input type="checkbox" id={location} className="mr-2" />
                        <label htmlFor={location}>{location}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wellness */}
                <div>
                  <h3 className="font-medium">Wellness</h3>
                  <div className="space-y-1">
                    {[
                      "Swimming pool",
                      "Indoor pool",
                      "Jacuzzi",
                      "Fitness/Gym",
                      "Sauna",
                    ].map((wellness) => (
                      <div key={wellness} className="flex items-center">
                        <input type="checkbox" id={wellness} className="mr-2" />
                        <label htmlFor={wellness}>{wellness}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outdoor */}
                <div>
                  <h3 className="font-medium">Outdoor</h3>
                  <div className="space-y-1">
                    {[
                      "Outdoor dining table",
                      "Outdoor grill",
                      "Boat mooring",
                      "Electric car charger",
                      "Private parking",
                    ].map((outdoor) => (
                      <div key={outdoor} className="flex items-center">
                        <input type="checkbox" id={outdoor} className="mr-2" />
                        <label htmlFor={outdoor}>{outdoor}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div>
                  <h3 className="font-medium">Activity</h3>
                  <div className="space-y-1">
                    {[
                      "Playground",
                      "Playstation",
                      "Satellite/Cable",
                      "Table tennis",
                    ].map((activity) => (
                      <div key={activity} className="flex items-center">
                        <input type="checkbox" id={activity} className="mr-2" />
                        <label htmlFor={activity}>{activity}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-medium">Amenities</h3>
                  <div className="space-y-1">
                    {[
                      "Fireplace",
                      "Air conditioning",
                      "Feeding chair",
                      "Iron & Board",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input type="checkbox" id={amenity} className="mr-2" />
                        <label htmlFor={amenity}>{amenity}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-between mt-6 gap-2">
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                  Clear All
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                  Show 24 Villas
                </button>
              </div>
            </div>
          )}
        </div>

        {/* AllVillah */}
        <div className="bg bg-light">
          <div className="max-w-screen-xl mx-auto p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.slice(13, 19).map((items, index) => {
                return (
                
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    onClick={() => carddata(items.id)}
                  >
                    <Link to={'/'}>
                    <img
                      style={{ borderBottomRightRadius: "50px" }}
                      src={items.images}
                      alt="Card Image 1"
                      className="w-full h-auto object-cover"
                    />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-3xl font-semibold">Villa Makarska</h3>
                      <p className="mt-2 text-gray-600 pb-3 pt-2">
                        A beautiful villa with modern amenities and a great
                        view.
                      </p>
                      <div className="flex mt-3 ">
                        <span className="w-8 h-8  rounded-full flex justify-center items-center">
                          <IoPeopleSharp />
                        </span>{" "}
                        <p className="p-1">Guests</p>
                        <span className="w-8 h-8 ml-3 rounded-full flex justify-center items-center">
                          <FaBed />
                        </span>
                        <p className="p-1">Bedrooms</p>
                      </div>
                      <div className="flex mt-3 ">
                        <span className="w-8 h-8   rounded-full flex justify-center items-center">
                          <MdVilla />
                        </span>{" "}
                        <p className="p-1">Villah</p>
                        <span className="w-8 h-8 ml-4  rounded-full flex justify-center items-center">
                          <FaBath />
                        </span>
                        <p className="p-1">Bathroom</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container">
        <div className="bg-gray-200">
          <div className="relative">
            <img
              src={banner3}
              alt="Luxury View"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
          </div>
          <div className="relative -mt-32 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
   
  );
}

export default AllVillah;
