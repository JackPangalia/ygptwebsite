import Userprofile from "@/app/components/Userprofile"

const abcxyz = () => {
  return (
    <div className = 'min-h-screen p-[8rem]'>
      <span className = 'text-2xl'>Dashboard</span>
      <span className = 'block mt-4'>command search</span>
      <input className = 'block bg-zinc-800 w-1/2 py-2 px-2 outline-none text-white mt-1' placeholder = '/'/>
      
      <div className = 'grid grid-cols-3 mt-14 gap-10'>
        <Userprofile />
        <Userprofile />
        <Userprofile />
        <Userprofile />
        <Userprofile />
        <Userprofile />
        <Userprofile />

      </div>
    </div>
  )
}

export default abcxyz