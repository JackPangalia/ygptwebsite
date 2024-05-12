import Navbar from "./components/Navbar"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className = 'text-7xl mt-36'>AI Built For You</h1>
      <Image className = 'w-full mt-20 object-cover h-[80vh]' src = '/manwalking.jpg' width = '2000' height = '2000' alt = 'lander-img'/>

      <section>
        <h2 className = 'text-4xl mt-20'>Our Services</h2>
        <div className = 'flex'>
          <div>Fine tuning</div>
          <div>Custom Chat Bot</div>
          <div>Data analytics</div>
        </div>
      </section>
    </>
  )
}

export default Home