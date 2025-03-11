import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Import your images and icons 
import banner3 from "../images/banner3.png";

import { CiHeart } from "react-icons/ci";
import { FaShare, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import { baseUrl } from "../config";

// Arrays for calendar days
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

// ----------------- BookingForm Component -----------------


const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3400/api/booking/book-villa`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          checkInDate: formData.checkInDate,
          checkOutDate: formData.checkOutDate,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.data.success && res.data.checkoutUrl) {
        window.location.href = res.data.checkoutUrl;
      } else {
        alert('Failed to initialize payment.');
      }
    } catch (error) {
      console.error('Error booking villa:', error.response?.data || error.message);
      alert('Error booking villa. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-md p-3 bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            maxLength={10}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-4">
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};






// ----------------- Villas Component -----------------
export default function Villas() {
  const { id } = useParams();
  const [villaData, setVillaData] = useState([]);


  useEffect(() => {
    fetchVillas();
  }, []);

  // Fetch villa data from your API
  const fetchVillas = async () => {
    try {
      const res = await axios.get(`${baseUrl}/villa/getAll`);
      if (res.data.status) {
        alert(res.data.message);
        setVillaData(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error fetching villas:", error);
      alert("Error fetching villas");
    }
  };

  // Helper function to generate the full image URL
  const getImageUrl = (path) => {
    return `${process.env.REACT_APP_BASE_URL.replace("/v1", "")}${path}`;
  };

  return (
    <div>
      {/* Villa Display Section */}
      <div className="container mx-auto mt-3 p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-serif">Villa SOHO</h1>
          <div className="flex items-center gap-2 mt-4 pt-2 pr-3">
            Save
            <button>
              <CiHeart />
            </button>
            Share
            <button>
              <FaShare />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 relative">
            <img
              style={{ height: "400px", width: "600px" }}
              src={
                villaData[0]?.images[2]
                  ? getImageUrl(villaData[0]?.images[2])
                  : ""
              }
              alt="Villa SOHO exterior with pool"
              className="rounded-lg object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full">
              <p className="text-sm font-medium">From €356 / daily</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className="flex flex-wrap">
              <img
                style={{ width: "150px", height: "150px" }}
                src={
                  villaData[0]?.images[1]
                    ? getImageUrl(villaData[0]?.images[1])
                    : ""
                }
                alt="Modern bedroom interior"
                className="rounded-lg object-cover p-1"
              />
              <img
                style={{ width: "150px", height: "150px" }}
                src={
                  villaData[0]?.images[3]
                    ? getImageUrl(villaData[0]?.images[3])
                    : ""
                }
                alt="Coffee cup detail"
                className="rounded-lg object-cover p-1"
              />
            </div>
            <div className="flex flex-wrap">
              <img
                style={{ width: "160px", height: "160px" }}
                src={
                  villaData[0]?.images[4]
                    ? getImageUrl(villaData[0]?.images[4])
                    : ""
                }
                alt="Modern bedroom interior"
                className="rounded-lg object-cover p-1"
              />
              <img
                style={{ width: "150px", height: "150px" }}
                src={
                  villaData[0]?.images[2]
                    ? getImageUrl(villaData[0]?.images[2])
                    : ""
                }
                alt="Coffee cup detail"
                className="rounded-lg object-cover p-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container">
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
          <div className="mx-auto max-w-7xl mt-5">
            <div className="grid gap-8 md:grid-cols-[1fr,400px]">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-serif">
                    {villaData[0]?.name}
                  </h1>
                  <p className="mt-2 text-gray-600">
                    {villaData[0]?.guests} guests / {villaData[0]?.bedrooms}{" "}
                    bedrooms / {villaData[0]?.bathrooms} bathrooms /{" "}
                    {villaData[0]?.squareMeteres}m²
                  </p>
                </div>

                <div className="flex flex-nowrap">
                  <div>
                    <h2 className="font-semibold">Check in</h2>
                    <p className="text-gray-600">
                      From {villaData[0]?.checkInTime}
                    </p>
                  </div>
                  <div className="pl-3">
                    <h2 className="font-semibold">Check out</h2>
                    <p className="text-gray-600">
                      Until {villaData[0]?.checkOutTime}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 font-semibold">Distances</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <span>Swimming pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Playstation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Air conditioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Indoor pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Fitness/Gym</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Towels provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Wireless Internet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Satellite / Cable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Playground</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 font-semibold">Distances</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <span>Sea</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Airport</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Beach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>City</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Restaurant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Hospital</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Market</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Ambulance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 font-semibold">Kitchen & dining</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center">
                      <span>Plates</span>
                    </div>
                    <div className="flex items-center">
                      <span>Cooking utensils</span>
                    </div>
                    <div className="flex items-center">
                      <span>Coffee machine</span>
                    </div>
                    <div className="flex items-center">
                      <span>Refrigerator</span>
                    </div>
                    <div className="flex items-center">
                      <span>Dishwaser</span>
                    </div>
                    <div className="flex items-center">
                      <span>Oven</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl bg-gray-900 p-12 text-white"
                style={{ height: "470px", borderBottomRightRadius: "50px" }}
              >
                <h2 className="mb-8 text-3xl">Contact</h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <IoCall />
                    <span>+00 000 000 00</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <IoMdMail />
                    <span>info@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <BsBrowserChrome />
                    <span>www.villawebsite.com</span>
                  </p>
                </div>
                <div className="mt-8">
                  <p>Preferred contact method: Email</p>
                  <p>Languages: English, Croatia</p>
                </div>
                <div className="mt-8 space-y-4">
                  <button className="w-full rounded-br-2xl rounded-bl-2xl rounded-tr-2xl bg-[#E8DED1] px-4 py-2 text-black hover:bg-[#d8cebb]">
                    GET AN OFFER
                  </button>
                  <button className="w-full">ASK US FOR HELP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar and Booking Form Section */}
      <div className="container">
        <div className="max-w-5xl mx-auto mt-4 p-6">
          <div className="grid md:grid-cols-[1fr,1fr,300px] gap-8">
            {/* November Calendar */}
            <div className="space-y-6 p-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg">November 2024</h2>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-600">
                {daysOfWeek.map((day) => (
                  <div key={day} className="uppercase">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 mt-2 text-center">
                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    className="p-2 rounded-md hover:bg-blue-100 cursor-pointer text-gray-800"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* December Calendar */}
            <div className="space-y-6 p-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg">December 2024</h2>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-600">
                {daysOfWeek.map((day) => (
                  <div key={day} className="uppercase">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 mt-2 text-center">
                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    className="p-2 rounded-md hover:bg-blue-100 cursor-pointer text-gray-800"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <BookingForm />
          </div>

          <div className="flex justify-between items-center mt-6 text-sm">
            <div>
              From <span className="font-semibold">€350</span> / daily
            </div>
            <div>
              Total for <span className="font-semibold">12</span> nights{" "}
              <span className="font-semibold">€5600</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container">
        <div className="bg-gray-200 mt-5">
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
              className="bg-black text-white p-8 shadow-lg"
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
                    type="text"
                    placeholder="Message"
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
                  className="mt-4 bg-secondary text-white pr-3 pl-3 rounded-md hover:bg-blue-600"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
