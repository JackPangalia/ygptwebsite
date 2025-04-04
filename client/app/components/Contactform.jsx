"use client";

//* COMPONENT IMPORTS *//
import sendEmailClient from "../utils/sendEmailClient";

//* PACKAGE COMPONENT IMPORTS *//
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const ContactForm = () => {
  // Varibles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isValidInformation, setValidInformation] = useState(true);
  const [isSent, setSent] = useState(false);

  function isValidEmail(email) {
    // Define the regex pattern for a valid email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    // Define the regex pattern for a valid phone number
    const phonePattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

    // Test the phone number against the pattern
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
      <div className="flex flex-col gap-2 h-screen justify-center items-center bg-white" role="alert">
        <h2 className="text-black text-4xl">Your Message Has Been Sent</h2>
        <p className="text-gray-500">We will get back to you shortly</p>
      </div>
    );
  }

  return (
    <div className="sm:py-[8rem] py-[5rem] flex xl:flex-row flex-col max-w-[1500px] mx-auto px-[3rem]">
      <div className="xl:w-1/2 w-full my-auto">
        <h1 className="text-7xl mb-4">Get Started</h1>
        <p>Interested in solving your problems with us</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-20 w-full gap-6" noValidate>
        {!isValidInformation && (
          <div className="text-red-500" role="alert" aria-live="polite">
            Please fill in all required fields correctly
          </div>
        )}
        
        <div className="flex flex-col">
          <label htmlFor="firstName" className="flex items-center gap-3">
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            className="border-black border-b-[1px] outline-none p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="flex items-center gap-3">
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            className="border-black border-b-[1px] outline-none p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="flex items-center gap-3">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="border-black border-b-[1px] outline-none p-2"
            placeholder="Double check your email is correct"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="flex items-center gap-3">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]{10}"
            className="border-black border-b-[1px] outline-none p-2"
            placeholder="xxxyyyzzzz"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="company" className="flex items-center gap-3">
            Company <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            type="text"
            className="border-black border-b-[1px] outline-none p-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="flex items-center gap-3">
            <span className="text-sm">
              Tell us about your project, a bit of context will allow us to
              connect you to the right team faster.
            </span>
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            className="w-full border-black border-[1px] h-24 outline-none p-2 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          className="border-black border-[1px] text-black px-14 py-3 w-fit hover:text-white hover:bg-black transition-all duration-150"
          aria-label="Submit contact form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
