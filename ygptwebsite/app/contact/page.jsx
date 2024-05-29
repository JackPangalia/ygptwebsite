"use client";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const Contact = () => {
  // User input varibles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Function to add the data into the database
  const addInfo = async () => {
    try {
        const docRef = await addDoc(collection(db, `inquirys/`), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          company: company,
          message: message,
        });

        console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  // addInfo()
  return (
    <div className="sm:py-[8rem] py-[9.5rem] flex xl:flex-row flex-col max-w-[1500px] mx-auto px-[3rem]">
      <div className="w-1/2 my-auto">
        <h1 className="text-7xl mb-4">Get Started</h1>
        <p>Interested in solving your problems with us</p>
      </div>
      <div className="flex flex-col mt-20 w-full gap-6">
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
              TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO
              CONNECT YOU TO THE RIGHT TEAM FASTER:
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
          className="border-black border-[1px] text-black px-14 py-3 w-fit"
          onClick={addInfo}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
