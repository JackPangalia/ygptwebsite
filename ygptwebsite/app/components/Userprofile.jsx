const Userprofile = ({name, email, number, company, task}) => {
  return (
    <div className="flex flex-col gap-4 bg-[#282828] text-white py-10 px-10 rounded-xl">
      <div>
        <span className="font-semibold">Name: </span>
        <span className = 'text-gray-300'>{name}</span>
      </div>
      <div>
        <span className="font-semibold">Email: </span>
        <span className = 'text-gray-300'>{email}</span>
      </div>

      <div>
        <span className="font-semibold">Company: </span>
        <span className = 'text-gray-300'>{company}</span>
      </div>

      <div>
        <span className="font-semibold">Phone Number: </span>
        <span className = 'text-gray-300'>{number}</span>
      </div>

      <div>
        <span className="font-semibold">Task: </span>
        <p className = 'text-gray-300'>
          {task}
        </p>
      </div>
    </div>
  );
};

export default Userprofile;
