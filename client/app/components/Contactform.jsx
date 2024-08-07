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

  // Function to add the data into the database
  const addInfo = async () => {
    try {
      if (
        firstName.length > 0 &&
        lastName.length > 0 &&
        company.length > 0 &&
        message.length > 0 &&
        isValidEmail(email) &&
        isValidPhoneNumber(phoneNumber)
      ) {
        console.log("adding info");

        sendEmailClient(
          email,
          "New Website Contact Submission",
          `Email`,
          `<h1>New Website Contact Submission</h1><br><p><b>${email}</b></p><br><p><b>${phoneNumber}</b></p><br><p>${firstName}</p><br><p>${lastName}</p><br><p>${company}</p><br><p>${message}</p>`
        );
        await addDoc(collection(db, `inquirys/`), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          company: company,
          message: message,
        });

        setValidInformation(true);
        setSent(true);
      } else {
        setValidInformation(false);
      }
    } catch (error) {
      alert("There was an error sending the message");
      setSent(false);
      console.log(error);
    }
  };

  // JSX markup and Tailwind markup
  return (
    <>
      <div
        className={`bg-white flex-col gap-2 h-screen justify-center items-center ${
          isSent ? "flex" : "hidden"
        }`}
      >
        <h2 className="text-black text-4xl">Your Message Has Been Sent</h2>
        <p className="text-gray-500">We will get back to you shortly</p>
      </div>
      <div
        className={`sm:py-[8rem] py-[5rem] flex xl:flex-row flex-col max-w-[1500px] mx-auto px-[3rem] ${
          isSent ? "hidden" : "flex"
        }`}
      >
        {/* <div className = 'flex '>hello</div> */}
        <div className="w-1/2 my-auto">
          <h1 className="text-7xl mb-4">Get Started</h1>
          <p>Interested in solving your problems with us</p>
        </div>
        <div className="flex flex-col mt-20 w-full gap-6">
          <span
            className={`text-red-500 ${
              isValidInformation ? "hidden" : "block"
            }`}
          >
            missing information
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <label>First Name</label>
              <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
            </div>
            <input
              className="border-black border-b-[1px] outline-none"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <label>Last Name</label>
              <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
            </div>
            <input
              className="border-black border-b-[1px] outline-none"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <label>Preferred Email Address</label>
              <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
            </div>
            <input
              placeholder="Double check your email is correct"
              className="border-black border-b-[1px] outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <label>Phone Number</label>
              <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
            </div>
            <input
              placeholder="xxxyyyzzzz"
              className="border-black border-b-[1px] outline-none"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <label>Company</label>
            </div>
            <input
              className="border-black border-b-[1px] outline-none"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <label className="text-sm">
                Tell us about your project, a bit of context will allow us to
                connect you to the right team faster.
              </label>
              <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
            </div>
            <textarea
              className="w-full border-black border-[1px] h-24 outline-none p-1 resize-none"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button
            className="border-black border-[1px] text-black px-14 py-3 w-fit hover:text-white hover:bg-black tranistion-all duration-150"
            onClick={addInfo}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
