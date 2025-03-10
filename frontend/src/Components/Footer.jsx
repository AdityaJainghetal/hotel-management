import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <div className="container">
            <div className="bg-gray-200">
                <footer className="bg-gray-200 py-8 mt-0">
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
                                    <Link className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                                        <FaWhatsapp />
                                    </Link>
                                    <Link className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                                        <FaInstagram />
                                    </Link>
                                    <Link className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                                        <CiYoutube />
                                    </Link>
                                    <Link className="w-8 h-8 bg-gray-700 rounded-full text-white flex justify-center items-center">
                                        <BsBrowserChrome />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default Footer