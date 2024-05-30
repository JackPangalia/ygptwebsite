"use client";
import Userprofile from "../components/Userprofile";
import { useState, useEffect } from "react";
import { getInquiries } from "../../lib/firebaseQuery";

const Dash = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const inquiriesData = await getInquiries();
      setInquiries(inquiriesData);
    }

    fetchData();
  }, []);

  console.log(inquiries);
  return (
    <div className="bg-[#181818] min-h-screen p-[8rem] text-white">
      <span className="text-2xl">Centonis Secure Admin Dashboard</span>

      <span className="block mt-10 text-red-400 mb-4 text-lg font-[400]">
        Inquiries
      </span>
      <div className="grid grid-cols-2 gap-5">
        {inquiries.map((inquiry, index) => {
          return (
            <Userprofile
              key={index}
              name={`${inquiry.firstName} ${inquiry.lastName}`}
              email={inquiry.email}
              company={inquiry.company}
              number={inquiry.phoneNumber}
              task={inquiry.message}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dash;
