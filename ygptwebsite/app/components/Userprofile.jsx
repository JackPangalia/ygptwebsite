const Userprofile = () => {
  return (
    <div className = 'flex flex-col gap-4 bg-white text-black rounded-md p-10'>
      <div>
        <label>Proccessed</label>
        <input type = 'checkbox' className = 'w-fit ml-3'/>
      </div>
      <span>Name</span>
      <span>Email</span>
      <span>Company</span>
      <span>Location</span>
      <span>Phone Number</span>
      <p>
        Task: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ex
        expedita facilis nihil tempore aperiam dignissimos minus voluptatem
        magni architecto eveniet impedit dolorum numquam ratione, quasi quaerat
        optio soluta provident?
      </p>
    </div>
  );
};

export default Userprofile;
