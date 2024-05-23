import Userprofile from "@/app/components/Userprofile"

const abcxyz = () => {
  return (
    <div className = 'min-h-screen bg-zinc-900 p-[8rem] text-white'>
      <span className = 'text-2xl'>Dashboard</span>
      
      <div className = 'grid grid-cols-4 mt-14 gap-10'>
        <Userprofile />
        <Userprofile />
        <Userprofile />
        <Userprofile />
      </div>
    </div>
  )
}

export default abcxyz