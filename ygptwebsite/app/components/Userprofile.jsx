const Userprofile = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#282828] text-white py-10 px-10">
      <div>
        <span className="font-semibold">Name: </span>
        <span>Jack Pangalia</span>
      </div>
      <div>
        <span className="font-semibold">Email: </span>
        <span>Jackpangali@gmail.com</span>
      </div>

      <div>
        <span className="font-semibold">Company: </span>
        <span>company name</span>
      </div>

      <div>
        <span className="font-semibold">Phone Number: </span>
        <span>613-501-4697</span>
      </div>

      <div>
        <span className="font-semibold">Task: </span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ex
          expedita facilis nihil tempore aperiam dignissimos minus voluptatem
          magni architecto eveniet impedit dolorum numquam ratione, quasi
          quaerat optio soluta provident?
        </p>
      </div>
    </div>
  );
};

export default Userprofile;
