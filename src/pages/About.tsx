import { FaArrowDown,FaGraduationCap,FaTrophy,FaHome,FaArrowRight } from "react-icons/fa"

const About = () => {
  return (
    <div>
      <div className="relative h-[90vh]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Building exterior"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full max-w-[800px] flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold pb-5">Building Communities, Creating Legacies</h1>
          <p className="text-xl pb-4">Three decades of excellence in Ghana's real estate landscape</p>
          <a href="#story" className="bg-blue-400 px-6 rounded-md py-2 flex gap-2 items-center font-bold hover:bg-blue-500 transition-colors">
            Our Story <FaArrowDown />
          </a>
        </div>
      </div>

      {/* Our Journey */}
      <div className="p-20">
        <h3 className="text-blue-400 text-center mt-20">OUR JOURNEY</h3>
        <h1 className="text-4xl text-center mt-4">The Friendship Estates Story</h1>
        <div className="flex justify-center mt-4">
          <hr className="w-24 border-t-3 border-blue-400" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 my-10  items-center">
          {/* left text */}
          <div className="leading-7 space-y-6 ">
            <p className="leading-8">Founded in 1993, Friendship Estates emerged from a vision to transform Ghana's housing landscape by combining architectural excellence with community-focused development. What began as a small family business has grown into one of Accra's most trusted names in real estate.</p>
            <p className="leading-8">As a subsidiary of Ayensu River Estate Ltd, we've been at the forefront of Ghana's housing revolution for three decades, delivering quality homes that stand the test of time while addressing the critical need for affordable housing solutions.</p>
            <div>
              <h3 className="text-blue-400 font-black"> 1993</h3>
              <h1 className="text-xl font-bold py-2">Our Humble Beginnings</h1>
              <p>Founded with a single residential project in Kanda, establishing our reputation for quality craftsmanship.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-black">2005</h3>
              <h1 className="text-xl font-bold py-2">First Institutional Project</h1>
              <p>Completed our first major institutional housing project for Ghana Commercial Bank.</p>
            </div>
            <div>
              <h1 className="text-blue-400 font-black">2015</h1>
              <h1 className="text-xl font-bold py-2">Affordable Housing Initiative</h1>
              <p>Launched our affordable apartments program to address Ghana's housing deficit.</p>
            </div>
            <div>
              <h1 className="text-blue-400 font-black">2023</h1>
              <h1 className="text-xl font-bold py-2">30 Years of Excellence</h1>
              <p>Celebrated three decades of transforming Ghana's residential landscape.</p>
            </div>
          </div>
          {/* image */}
          <div>
            <img className="rounded-lg" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="" />
          </div>
        </div>
      </div>

      {/* Architectural Visionary */}
      <div className="p-17 bg-gray-100">
        <div className="flex items-center flex-col space-y-6 ">
          <h3 className="text-blue-400">Meet Our Leader</h3>
          <h1 className="font-bold text-3xl">Architectural Visionary</h1>
          <hr className="text-blue-400 w-[70px] mb-15 h-1 rounded-2xl bg-blue-400" />
        </div>
        <div className="flex justify-between">
          <img className="rounded-lg w-[600px]" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="" />
          <div className="px-15">
            <h1 className="text-3xl font-bold mb-4">Mr. Kofi Ayensu</h1>
            <h3 className="text-xl font-medium mb-4">Managing Director & Development Architect</h3>
            <p className="mb-4 leading-7">An alumnus of Howard University's prestigious School of Architecture and Planning, Mr. Ayensu brings over 30 years of architectural expertise and real estate development experience to Friendship Estates.</p>
            <p className="mb-4 leading-7">His visionary leadership has guided our company through Ghana's evolving housing market, always maintaining our commitment to quality, affordability, and sustainable community development.</p>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          <div className="bg-white p-4 rounded-lg flex flex-col items-center">
            <FaGraduationCap className="text-blue-400 text-3xl" />
            <h3 className="text-sm font-medium pt-2 text-center">Howard University Graduate</h3>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center">
            <FaTrophy className="text-blue-400 text-3xl" />
            <h3 className="text-sm font-medium pt-2">5 Industry Awards</h3>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center">
            <FaHome className="text-blue-400 text-3xl" />
            <h3 className="text-sm font-medium pt-2">150+ Projects</h3>
          </div>
        </div>
        <a href="" className="flex items-center justify-between w-[250px] border-2 border-blue-400 py-3 px-6 text-blue-400 font-bold rounded-md">CONTACT OUR TEAM<FaArrowRight /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About