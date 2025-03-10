import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsBrowserChrome } from "react-icons/bs";
import contactbanner from "../images/contactbanner.png";
import { Link } from "react-router-dom";



const Contact = () => {

  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);

  };

  const faqItems = [
    {
      question: "Where can I find the offer of villa and service prices?",
      answer: "You can find them in the pricing section of our website."
    },
    {
      question: "What is included in the price of Accommodation?",
      answer: "The accommodation price includes all listed amenities."
    },
    {
      question: "What is the procedure for arranging and booking Accommodation?",
      answer: "You can arrange and book accommodation online or via phone."
    },
    {
      question: "How do I pay the rest of the Accommodation price, at once or in several installments?",
      answer: "You can pay in full or in installments."
    },
    {
      question: "What if I am late with paying the advance payment or the remaining amount?",
      answer: "Please contact us as soon as possible to avoid penalties."
    },
    {
      question: "How can I cancel the Accommodation after having paid the advance payment or the remaining amount?",
      answer: "Cancellation policies can be found in our terms and conditions."
    },
    {
      question: "Will I receive a refund of the advance payment or the remaining amount for the Accommodation in case of cancellation?",
      answer: "Refunds are processed based on our cancellation policy."
    },
    {
      question: "What are the terms of payment by bank transfer and can I pay by credit card?",
      answer: "We accept both bank transfers and credit cards."
    },
    {
      question: "Is it possible to rent the villa outside the Saturday to Saturday period?",
      answer: "Yes, contact us for custom rental periods."
    },
    {
      question: "Is a deposit required?",
      answer: "Yes, a deposit is required for booking."
    },
    {
      question: "Is it possible to check in before the time period?",
      answer: "Early check-ins can be arranged based on availability."
    },
    {
      question: "Is it cheaper if I book directly through the owner?",
      answer: "Booking directly may offer additional discounts."
    }
  ];
  return (
    <div>

      {/* Contact Section */}
      <div className="container mx-auto mt-1 p-4">
        <div className="min-h-screen bg-gray-50/50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-gray-900">Contact Us</h1>
              <p className="mt-4 text-lg text-gray-600">
                We're always here to answer your questions.
              </p>
              <p className="text-lg text-gray-600">
                Reach out and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    alt="Luxury property walkway with palm trees"
                    className="h-full w-full object-cover"
                    height={800}
                    width={1200}
                    src={contactbanner}
                  />
                </div>
                <div className="p-8 sm:p-12">
                  <h2 className="text-3xl font-semibold text-gray-900">Connect with us</h2>

                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-lg text-gray-900">+00 000 000 00</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-lg text-gray-900">
                        <a href="mailto:info@luxuryrentals.com" className="hover:underline">
                          info@luxuryrentals.com
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-500">Address</dt>
                      <dd className="mt-1 text-lg text-gray-900">
                        <span className="block">Name of the street</span>
                        <span className="block">10 000 City of Somewhere</span>
                      </dd>
                    </div>
                  </dl>

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
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-1 p-4">
        <section className="px-4 py-12 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
              Frequently asked questions
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Everything you need to know about the product and billing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    <span className="text-gray-900">
                      {openQuestion === index ? "-" : "+"}
                    </span>
                  </button>
                  {openQuestion === index && (
                    <div className="pl-4 pb-4 text-gray-700">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      {/* questions */}
      {/* <div className="container mx-auto mt-3 p-4">
        <section className="py-12 px-4 bg-light max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-2">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground pt-3">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <tr>
                <p className="pt-4">
                  1. Where can I find the offer of villa and service prices?
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  2. What is included in the price of Accommodation?
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  3. How do I pay the rest of the Accommodation price, at once or
                  in several installments?
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  4. What if I am late with paying the advance payment or the
                  remaning amount?
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  5. How can I cancel the Accommodation after having paid the
                  advance payment or the remaining amount?
                </p>
              </tr>
            </div>

            <div className="space-y-2">
              <tr>
                <p className="pt-4">
                  6. Will I receive a refund of the advance payment
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  7. What are the terms of payment by bank transfer and can I pay
                  by credit card?
                </p>
              </tr>

              <tr>
                <p className="pt-4">
                  8. Is it possible to rent the villa outside the Saturday to
                  Saturday period?
                </p>
              </tr>

              <tr>
                <p className="pt-4">9. Is a deposit required?</p>
              </tr>
              <tr>
                <p className="pt-4">
                  10. Is it possible to check in before the time period?{" "}
                </p>
              </tr>
            </div>
          </div>
        </section>
      </div> */}

      {/* footer  */}
      <div className="container">
        <div className="bg-gray-200">
          <div className="relative">
            <div className='w-full h-[180px] object-cover'>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30">
            </div>
          </div>
          <div className="relative  -mt-32 px-6 lg:px-16  mx-auto grid grid-cols-1 gap-6">
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
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;


