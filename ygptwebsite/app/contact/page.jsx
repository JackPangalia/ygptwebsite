const contact = () => {
  return (
    <div className = 'p-[8rem] flex'>
      <div></div>
      <form className = 'flex flex-col mt-20 w-full gap-5'>
        <label className = 'text-sm'>First Name</label>
        <input className = 'border-black border-b-[1px] outline-none'/>

        <label className = 'text-sm'>Last Name</label>
        <input className = 'border-black border-b-[1px] outline-none'/>

        <label className = 'text-sm'>Preferred Email Address</label>
        <input className = 'border-black border-b-[1px] outline-none'/>

        <label className = 'text-sm'>Phone Number</label>
        <input className = 'border-black border-b-[1px] outline-none'/>

        <label className = 'text-sm'>Company</label>
        <input className = 'border-black border-b-[1px] outline-none'/>
      </form>
    </div>
  )
}

export default contact