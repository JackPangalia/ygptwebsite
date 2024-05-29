import Userprofile from "../components/Userprofile"

const Dash = () => {
  return (
    <div className = 'bg-[#181818] min-h-screen p-[8rem] text-white'>
      <span className = 'text-2xl'>Auxin Admin Dashboard</span>

      <span className = 'block mt-10 text-red-400 mb-4 text-lg'>New Inquiries</span>
      <div className = 'grid grid-cols-2 gap-5'>
        <Userprofile />
        <Userprofile />
      </div>

      <span className = 'block mt-10 text-green-400 text-lg mb-4'>Proccessed Inquiries</span>
      <div className = 'grid grid-cols-4 gap-5'>
        <Userprofile />
        <Userprofile />

      </div>
    </div>
  )
}

export default Dash