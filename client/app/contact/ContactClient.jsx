"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import sendEmailClient from "../utils/sendEmailClient";
import Footer from "../components/Footer";

const ContactClient = () => {
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
        {/* Success Section */}
        <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
          
          {/* Geometric accent */}
          <motion.div 
            className="absolute top-1/3 left-8 w-px h-24 bg-gradient-to-b from-white/30 via-white/10 to-transparent z-10"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Success icon */}
              <div className="w-20 h-20 mx-auto mb-12 border border-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-8">
                Message Sent
              </h1>
              
              <p className="text-lg sm:text-xl text-white/50 mb-12 max-w-lg mx-auto">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              
              <motion.a
                href="/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                Return Home
              </motion.a>
            </motion.div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* SPLIT LAYOUT SECTION - 100vh */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Geometric accents */}
        <motion.div 
          className="absolute top-1/3 left-8 w-px h-24 bg-gradient-to-b from-white/30 via-white/10 to-transparent z-10 hidden lg:block"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-16 w-12 h-px bg-gradient-to-r from-white/20 to-transparent z-10 hidden lg:block"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Split Layout Container with max-width constraint */}
        <div className="relative z-10 min-h-screen max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-0">
          <div className="min-h-screen flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
            
            {/* Left Side - Get in touch */}
            <div className="flex-1 flex items-start lg:items-center pt-8 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl"
              >
                <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-6 sm:mb-8">
                  Contact
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/40 max-w-xl mb-8 sm:mb-12 leading-relaxed">
                  Have a question, inquiry, or partnership opportunity? We&apos;d love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 group-hover:text-white/60 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:centonisai@gmail.com" className="text-sm sm:text-base md:text-lg text-white/50 hover:text-white transition-colors duration-300 break-all">
                      centonisai@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        viewBox="0 0 500 1000"
                        fill="currentColor"
                        className="w-3 h-3 text-white/40"
                      >
                        <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/50">Vancouver</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 flex items-start lg:items-center pb-8 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                  {!isValidInformation && (
                    <div className="bg-red-950/50 border border-red-800/50 text-red-300 px-4 py-3 text-sm rounded" role="alert" aria-live="polite">
                      Please fill in all required fields correctly
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white placeholder:text-white/20 text-sm sm:text-base"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white placeholder:text-white/20 text-sm sm:text-base"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white placeholder:text-white/20 text-sm sm:text-base"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white placeholder:text-white/20 text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white placeholder:text-white/20 text-sm sm:text-base"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-widest mb-2 sm:mb-3">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-0 py-2 border-0 border-b-2 border-white/10 focus:border-white/40 focus:ring-0 outline-none transition-all duration-300 bg-transparent text-white resize-none placeholder:text-white/20 text-sm sm:text-base"
                      placeholder="Tell us about your inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto bg-white text-black px-8 py-3 text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom line accent */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          style={{ transformOrigin: 'left' }}
        />
      </section>

      <Footer />
    </>
  );
};

export default ContactClient;
