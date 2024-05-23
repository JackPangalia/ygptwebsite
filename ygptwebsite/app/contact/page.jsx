const contact = () => {
  return (
    <div className="p-[8rem] flex">
      <div className = 'w-1/2 my-auto'>
        <h1 className = 'text-7xl mb-4'>Get Started</h1>
        <p>Interested in solving your problems with us</p>
      </div>
      <form className="flex flex-col mt-20 w-full gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <label>First Name</label>
            <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
          </div>
          <input className="border-black border-b-[1px] outline-none" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <label>Last Name</label>
            <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
          </div>
          <input className="border-black border-b-[1px] outline-none" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <label>Preferred Email Address</label>
            <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
          </div>
          <input className="border-black border-b-[1px] outline-none" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <label>Phone Number</label>
            <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
          </div>
          <input className="border-black border-b-[1px] outline-none" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <label>Company</label>
          </div>
          <input className="border-black border-b-[1px] outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <label className="text-sm">TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:</label>
            <div className="bg-red-500 p-[1.5px] rounded-full w-fit"></div>
          </div>
          <textarea className = 'w-full border-black border-[1px] h-24 outline-none p-1 resize-none'/>
        </div>

        <button className="border-black border-[1px] text-black px-14 py-3 w-fit">Submit</button>
      </form>
    </div>
  );
};

export default contact;
