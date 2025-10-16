"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import sendEmailClient from "../utils/sendEmailClient";
import Footer from "../components/Footer";

const ContactClient = () => {
  // Variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isValidInformation, setValidInformation] = useState(true);
  const [isSent, setSent] = useState(false);

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return phonePattern.test(phoneNumber);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        firstName.length > 0 &&
        lastName.length > 0 &&
        company.length > 0 &&
        message.length > 0 &&
        isValidEmail(email) &&
        isValidPhoneNumber(phoneNumber)
      ) {
        await sendEmailClient(
          email,
          "New Website Contact Submission",
          `Email`,
          `<h1>New Website Contact Submission</h1><br><p><b>${email}</b></p><br><p><b>${phoneNumber}</b></p><br><p>${firstName}</p><br><p>${lastName}</p><br><p>${company}</p><br><p>${message}</p>`
        );
        await addDoc(collection(db, `inquirys/`), {
          firstName,
          lastName,
          email,
          phoneNumber,
          company,
          message,
        });

        setValidInformation(true);
        setSent(true);
      } else {
        setValidInformation(false);
      }
    } catch (error) {
      alert("There was an error sending the message");
      setSent(false);
      console.error(error);
    }
  };

  if (isSent) {
    return (
      <>
        {/* Success Hero Section */}
        <section className="relative h-screen w-full overflow-hidden bg-white">
          {/* Geometric Overlays */}
          <div className="absolute inset-0">
            {/* Top Right Geometric Shape */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 z-0">
              <div className="relative h-full">
                <div
                  className="absolute top-0 right-0 w-full h-full bg-black/5"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
                  }}
                />
              </div>
            </div>

            {/* Bottom Left Geometric Shape */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/4 z-0">
              <div className="relative h-full">
                <div
                  className="absolute bottom-0 left-0 w-full h-full bg-black/5"
                  style={{
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
            <div className="w-full max-w-[1600px] mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-none flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight text-black mb-6 sm:mb-8">
                  Message
                  <br />
                  <span className="text-gray-600">Sent Successfully</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
                  Thank you for reaching out! We&apos;ll get back to you within 24 hours 
                  to discuss your project and how we can help transform your business.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/'}
                  className="bg-black text-white px-8 py-4 rounded-none font-normal hover:bg-gray-800 transition-all duration-300 shadow-lg"
                >
                  Return Home
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-white">
        {/* Geometric Overlays */}
        <div className="absolute inset-0">
          {/* Top Right Geometric Shape */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 z-0">
            <div className="relative h-full">
              <div
                className="absolute top-0 right-0 w-full h-full bg-black/5"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
                }}
              />
            </div>
          </div>

          {/* Bottom Left Geometric Shape */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/4 z-0">
            <div className="relative h-full">
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-black/5"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight text-black mb-6 sm:mb-8">
                  Let&apos;s Build
                  <br />
                  <span className="text-gray-600">Something Amazing</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
                  Ready to transform your business with AI? Get in touch and let&apos;s discuss 
                  how our custom solutions can drive your success.
                </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-30">
          <div className="text-black text-xs sm:text-sm font-medium mb-3 sm:mb-4">Scroll down</div>
          <div className="w-px h-8 sm:h-12 bg-black/60 mx-auto animate-pulse" />
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* INTRO SECTION */}
            <div className="flex items-center mb-16">
              <div className="w-6 h-6 mr-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">GET IN TOUCH</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side - Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-5xl md:text-6xl font-medium leading-tight text-black mb-6">
                    Ready to get
                    started?
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Tell us about your project and we&apos;ll connect you with the right team 
                    to bring your vision to life with cutting-edge AI solutions.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-none flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-black">Email</p>
                      <p className="text-gray-700">centonisai@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-none flex items-center justify-center">
                      <svg
                        viewBox="0 0 500 1000"
                        fill="currentColor"
                        height="1.2em"
                        width="1.2em"
                        className="text-black"
                      >
                        <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-black">Location</p>
                      <p className="text-gray-700">Vancouver, BC</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {!isValidInformation && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-none" role="alert" aria-live="polite">
                      Please fill in all required fields correctly
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      placeholder="(555) 123-4567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Tell us about your project. A bit of context will help us connect you 
                      to the right team faster.
                    </p>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      aria-required="true"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white px-8 py-4 rounded-none font-normal hover:bg-gray-800 transition-all duration-300 shadow-lg"
                    aria-label="Submit contact form"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactClient;
