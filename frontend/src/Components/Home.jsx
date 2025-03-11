import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";




import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import { FaWater, FaDog, FaCar, FaDumbbell, FaShip } from "react-icons/fa";

import topvilla_image1 from "../images/topvilla_image1.png";
import topvilla_image2 from "../images/topvilla_image2.png";
import topvilla_image3 from "../images/topvilla_image3.png";
import regions_image1 from "../images/regions_image1.png";
import regions_image2 from "../images/regions_image2.png";
import banner from "../images/banner.png";
import about_image from "../images/about_image.png";
import about_image1 from "../images/about_image2.png";
import banner3 from "../images/banner3.png";
import { Link } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const carddata = (id) => {
    console.log(id);
    navigate(`/select_villa/${id}`);

  };

  const [villaData, setVillaData] = useState([]);
  useEffect(() => {
    fetchVillas()
  }, []);
  const fetchVillas = async () => {

    try {
      const res = await axios.get(`${baseUrl}/villa/getAll`);
      if (res.data.status) {
        //alert(res.data.message);
        setVillaData(res.data.data);
        // const data = []; // Replace this with actual data
        // setVillaData(data);
      } else {
        //alert(res.data.message);
      }
    } catch (error) {
      console.error("Error fetching villas:", error);
      //alert("Error fetching villas");
    }
  };
  console.log(villaData, "data")

  // Fetch or set villa data




  // Fetch villa data from your API


  return (
    <>
      {/* Banner */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/d293/fd4d/4c2eba88be0a1e1b6f7eadc899d63ffb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nu-9k0ceIyI5DkS0ZnPrtkIfJGbVvB3eP2wiIp4DBITiAuYA~gJzJKTGcMj6mauJA~kxtZZlLP2ntFpAVfVgwYeQMITicdH8UHA4rLQjNoiCQNLQTDQJ0ARHAHj4Z~upM7W6j-ShHyLNtJJvt2DcK7ey7Nx2al8f5D9JIQIbs1gRQa8-0gM9ZDgvdHgpq6aKieeDe-jSSk-37ygXcpW9QZfPgsT-W18px8SsjDMpT1GNpRDrG33r7mPbatc9BOsVeBwi4342vCQkwSY7t83oJBvv5hilfDJWHl1hCMYo-~3kQHx7Nq-FjdkEBA8If~Lw54kywxBi9nLSsiEtPPyhIg__')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-6xl md:text-7xl font-light mb-4 text-center">
            BE OUR GUEST
          </h1>
          <p className="text-white text-xl md:text-2xl mb-12 tracking-wide text-center">
            LIVE LIKE A KING IN OUR BEST HOUSES
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-5xl bg-white rounded-lg flex flex-col md:flex-row p-2 gap-2">
            <select className="pl-5 pr-5 border-white">
              <option value="volvo" selected>
                Italy
              </option>
              <option value="saab">DevOps</option>
              <option value="mercedes">AI/ML</option>
              <option value="audi">Data Science</option>
            </select>
            <select className="pl-5 pr-5 border-white">
              <option value="volvo" selected>
                Select Date
              </option>
              <option value="saab">DevOps</option>
              <option value="mercedes">AI/ML</option>
              <option value="audi">Data Science</option>
            </select>

            <select className="pl-5 pr-5 border-white">
              <option value="volvo" selected>
                Guests
              </option>
              <option value="saab">DevOps</option>
              <option value="mercedes">AI/ML</option>
              <option value="audi">Data Science</option>
            </select>

            <select className="pl-5 pr-5 border-white">
              <option value="volvo" selected>
                Price
              </option>
              <option value="saab">DevOps</option>
              <option value="mercedes">AI/ML</option>
              <option value="audi">Data Science</option>
            </select>

            <button className=" btn btn-info flex-1 md:flex-none px-8 ">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* top villa */}
      <div className="bg bg-light ">
        <div className="container">
          <div className="max-w-screen-xl mx-auto p-8">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Top Pick Villah
            </h2>
            <p className="text-center pt-2 pb-5">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel
              urna quis urna tristique tempus. Etiam lobortis est at mauris
              eleifend, id tempor purus ultricies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {villaData?.slice(0, 6).map((items, index) => {  // Slice to get the first 6 items
                return (
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    onClick={() => carddata(items.id)}
                    key={index}
                  >
                    <div className="flex gap-4">
                      {items.images.length > 0 && (
                        <img
                          src={`http://localhost:3400${items.images[3]}`} // Display only the first image
                          alt={`Card Image 1`}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-3xl font-semibold">{items.name}</h3>
                      <p className="mt-2 text-gray-600 pb-3 pt-2">
                        {items.description}
                      </p>
                      <div className="flex mt-3">
                        <span className="w-8 h-8 rounded-full flex justify-center items-center">
                          <IoPeopleSharp />
                        </span>{" "}
                        <p className="p-1">
                          <strong>{items.guests}</strong> Guests
                        </p>
                        <span className="w-8 h-8 ml-3 rounded-full flex justify-center items-center">
                          <FaBed />
                        </span>
                        <p className="p-1">
                          <strong>{items.bedrooms}</strong> Bedrooms
                        </p>
                      </div>
                      <div className="flex mt-3">
                        <span className="w-8 h-8 rounded-full flex justify-center items-center">
                          <MdVilla />
                        </span>{" "}
                        <p className="p-1">
                          <strong>{items.villas}</strong> Villa
                        </p>
                        <span className="w-8 h-8 ml-4 rounded-full flex justify-center items-center">
                          <FaBath />
                        </span>
                        <p className="p-1">
                          <strong>{items.bathrooms}</strong> Bathrooms
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>





            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {villaData?.map((items, index) => {
                return (
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden "
                    onClick={() => carddata(items.id)}
                  >
                    <img
                      style={{ borderBottomRightRadius: "50px " }}
                      src={`http://localhost:3400${items.images[3]}`}
                      alt="Card Image 1"
                      className="w-full h-auto object-cover "


                    />

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
            </div> */}



            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {villaData?.map((items, index) => {
                return (
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden "
                    onClick={() => carddata(items.id)}
                  >
                    <img
                      style={{ borderBottomRightRadius: "50px " }}
                      src={`http://localhost:3400${items.images[3]}`}
                      alt="Card Image 1"
                      className="w-full h-auto object-cover "


                    />

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
            </div> */}






          </div>
        </div>
      </div>

      {/* OUR REGIONS*/}
      <div style={{ backgroundColor: "#C9BDAB" }}>
        <div className="container">
          <div className="max-w-screen-xl mx-auto p-8">
            <h2 className="text-3xl font-semibold text-center mb-8">
              OUR REGIONS
            </h2>
            <p className="text-center pt-3 pb-4">
              Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus.
              Quisque feugiat felis a quam volutpat, non scelerisque nibh
              scelerisque.
            </p>

            {/* Responsive Grid Layout */}
            <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    height: "400px",
                  }}
                  src={regions_image1}
                  alt="Card Image 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-4xl font-semibold">Coastline</h3>
                  <p className="text-sm p-3">64 Properties</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  style={{
                    borderTopLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                    height: "400px",
                  }}
                  src={regions_image2}
                  alt="Card Image 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-4xl font-semibold">Mountains</h3>
                  <p className="text-sm p-3">87 Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our properties specialities */}
      <div className="container">
        <div className="container mx-auto my-12 px-4">
          <h2 className="text-4xl font-serif text-center mb-10">Our properties specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaWater className="text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Seafront</h3>
              <p className="text-gray-600">have a look →</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaDog className="text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pet friendly</h3>
              <p className="text-gray-600">pets allowed →</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCar className="text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Electric car</h3>
              <p className="text-gray-600">charge your car →</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaDumbbell className="text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fitness/Gym</h3>
              <p className="text-gray-600">work out →</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaShip className="text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Boat mooring</h3>
              <p className="text-gray-600">take a trip →</p>
            </div>
          </div>
        </div>
      </div>


      {/* banner2 */}
      <div
        className="relative w-full h-96 bg-cover bg-center mt-5 "
        style={{
          borderBottomRightRadius: "80px",
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/69a9/317d/dc0914076f0faab1e871933b73299471?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXOEHkb5Pk2fQ31XxwpQkltdhRKHHZQP0TC7gjvI5QkKfEGdW0hZ0z7RjAYXlWjlyce1XqFH7171Za9N~b6NHo-umO9ZZ-fjPNc756C40y8ec8Glzy7yIaLWw2KsqgMFQErcoQgOQpCwjKh3PeQb1cOp7qK097UecHx0ZcuFccQuDxdy3TG4R2y4~4UlSIAPCV-FHgeHvg9vPHWAmuhbrHHQ8PPFiYHoFsYoZrAlfEwoefKXGGCTnwcqN3ACq00mWb3PwIDzF~HBaxk3Nn9M1vAQgm9riGm0fta4LFVYajxMCzUZP4TYd5oEjj-~GWzBdc372PEld7s13Ohjw0eytw__")',
        }}
      >
        <div className="relative flex items-center justify-center w-full h-full text-center text-white">
          <div>
            <div
              className="bg-white opacity-75 shadow-md overflow-hidden"
              style={{
                width: "300px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            >
              <div className="p-4">
                <h1 className="text-dark text-3xl">BECOME A HOST</h1>
                <p className="mt-2 text-gray-600">
                  Join the elite league of hosts specializing in luxury villas
                  and unlock a world of exclusive opportunities.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us  */}
      <div className="container">
        <div className="row mt-5 px-4 sm:px-8 lg:px-16">
          <div className="col-sm-6 max-w-6xl mx-auto">
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
            <div className="relative  min-h-screen flex justify-center items-center">
              {/* Container for Images */}
              <div className="relative w-[350px] md:w-[500px]">
                {/* Top Image */}
                <div className="absolute top-0 left-0 w-3/4 md:w-2/3 z-10 border-8 border-white overflow-hidden">
                  <img
                    style={{ borderBottomLeftRadius: "80px" }}
                    src={about_image} // Replace with actual image URL
                    alt="Group of people"
                    className=" border-8 w-full h-auto object-cover"
                  />
                </div>

                {/* Bottom Image */}
                <div
                  className="relative mt-[200px] ml-[100px] overflow-hidden "
                  style={{}}
                >
                  <img
                    style={{ borderTopRightRadius: "50px" }}
                    src={about_image1} // Replace with actual image URL
                    alt="Pool view"
                    className="h-auto object-cover"
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
    </>
  );
};

export default Home;
