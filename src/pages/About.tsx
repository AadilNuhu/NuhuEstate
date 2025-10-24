import { FaArrowDown, FaGraduationCap, FaTrophy, FaHome, FaArrowRight, FaUsers } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaHandshake, FaLightbulb } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";


const About = () => {

  const clients = [
    {
      name: "Ghana Commercial Bank",
      description: "Employee housing solutions since 2005",
      logo: "https://www.gcbcapital.com.gh/wp-content/uploads/2020/07/cropped-GSL-Logo-01-black-alt.png",
    },
    {
      name: "SSNIT Ghana",
      description: "Retirement community development",
      logo: "https://www.ssnit.org.gh/wp-content/uploads/2023/08/SSNIT-Logo001-01.png",
    },
    {
      name: "Volta River Authority",
      description: "Executive residential compounds",
      logo: "https://apua-asea.org/wp-content/uploads/2023/01/vra.jpg",
    },
    {
      name: "Ministry of Works",
      description: "Affordable housing initiatives",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SVTRpcRWwwCl4beBD5ozP_c18ST2wm-2Pw&s",
    },
    {
      name: "University of Ghana",
      description: "Faculty housing projects",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbr8uDxvfycPGbIR3hBz4az02AT_FM1z9Qdpf5h1ikh2-2cJfOO24UoA2_Uv2n21sFnk&usqp=CAU",
    },
  ];


  return (
    <div>
      <div
        className="relative h-[90vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full max-w-[800px] flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold pb-5">Building Communities, Creating Legacies</h1>
          <p className="text-xl pb-4">Three decades of excellence in Ghana's real estate landscape</p>
          <a
            href="#story"
            className="bg-blue-400 px-6 rounded-md py-2 flex gap-2 items-center font-bold hover:bg-blue-500 transition-colors"
          >
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
            <a href="/contact" className="flex items-center justify-between w-[250px] border-2 border-blue-400 py-3 px-6 text-blue-400 font-bold rounded-md">CONTACT OUR TEAM<FaArrowRight /></a>
          </div>
        </div>
      </div>

      {/* Partnership */}
      <div className="p-20 flex flex-col items-center">
        <h3 className="text-blue-400 font-bold text-md">PROUD PARTNERSHIPS</h3>
        <h1 className="text-4xl font-bold py-6">Our Esteemed Clients</h1>
        <hr className="bg-blue-400 text-blue-400 mb-4 rounded-2xl w-[80px] h-1" />
        <p className="text-gray-400 mb-10">We are honored to have worked with these distinguished institutions</p>

        {/* Slider */}
        <div className="w-full px-6 py-12" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="clients-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-card relative overflow-hidden rounded-lg bg-white shadow-md group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="w-full h-32 object-contain p-4"
                  />
                  <div className="client-overlay absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-end p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <h4 className="text-lg font-semibold">{client.name}</h4>
                    <p className="text-sm">{client.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Foundation */}
      <div className="flex flex-col p-20 text-center items-center">
        <h1 className="text-blue-400 py-3 font-medium">OUR FOUNDATION</h1>
        <h1 className="text-5xl py-3 font-bold">Core Values</h1>
        <hr className="bg-blue-400 my-3 text-blue-400 h-1 w-[80px] rounded-2xl" />
        <p className="text-gray-400 py-2">Principles that guide every project we undertake</p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 mt-10">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <FaHandshake className="text-blue-400 bg-blue-500/5 p-2 rounded-full text-6xl hover:bg-blue-400 hover:text-white mb-4 mx-auto" />
            <h1 className="text-2xl font-bold py-2">Integrity</h1>
            <p>We build trust through transparency in all our dealings, from project timelines to pricing structures.</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <FaHome className="text-blue-400 bg-blue-500/5 p-2 rounded-full text-6xl hover:bg-blue-400 hover:text-white mb-4 mx-auto" />
            <h1 className="text-2xl font-bold py-2">Quality</h1>
            <p>Every Friendship Estate property meets our exacting standards for materials, craftsmanship, and design.</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <FaUsers className="text-blue-400 bg-blue-500/5 p-2 rounded-full text-6xl hover:bg-blue-400 hover:text-white mb-4 mx-auto" />
            <h1 className="text-2xl font-bold py-2">Community</h1>
            <p>We don't just build houses - we create neighborhoods where friendships and families flourish.</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <FaLightbulb className="text-blue-400 bg-blue-500/5 p-2 rounded-full text-6xl hover:bg-blue-400 hover:text-white mb-4 mx-auto" />
            <h1 className="text-2xl font-bold py-2">Innovation</h1>
            <p>Continually adopting new technologies and sustainable practices to improve our homes.</p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col p-20 text-center items-center bg-gray-100">
        <h3 className="text-blue-400 font-medium py-3">OUR TEAM</h3>
        <h1 className="font-bold text-4xl py-4 ">Meet Our Specialist</h1>
        <hr className="bg-blue-400 text-blue-400 h-1 w-[80px] rounded-2xl my-3" />
        <p className="text-lg w-[750px] text-gray-400">Our experienced agents are ready to guide you through every step of your real estate journey</p>

        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* cards */}
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center space-y-3">
            <div>
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              {/* social links */}
              <div className="flex justify-center">
                <FaFacebook className="text-blue-600 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaTwitter className="text-blue-400 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaLinkedin className="text-blue-700 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaInstagram className="text-pink-500 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <h1>Joseph</h1>
            <h3 className="text-blue-400">Marketing Specialist</h3>
            <a href="" className="flex gap-2 items-center"><FaEnvelope /> Joseph@nuhuestate.com</a>
            <a href="" className="flex gap-2 items-center"><FaPhone /> +233245829714</a>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center space-y-3">
            <div>
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              {/* social links */}
              <div className="flex justify-center">
                <FaFacebook className="text-blue-600 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaTwitter className="text-blue-400 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaLinkedin className="text-blue-700 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaInstagram className="text-pink-500 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <h1>Seth</h1>
            <h3 className="text-blue-400">Marketing Specialist</h3>
            <a href="" className="flex gap-2 items-center"><FaEnvelope />Joseph@nuhuestate.com</a>
            <a href="" className="flex gap-2 items-center"><FaPhone />+233245829714</a>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center space-y-3">
            <div>
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              {/* social links */}
              <div className="flex justify-center">
                <FaFacebook className="text-blue-600 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaTwitter className="text-blue-400 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaLinkedin className="text-blue-700 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
                <FaInstagram className="text-pink-500 text-2xl mx-2 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <h1>MD</h1>
            <h3 className="text-blue-400">Marketing Specialist</h3>
            <a href="" className="flex gap-2 items-center"><FaEnvelope />Joseph@nuhuestate.com</a>
            <a href="" className="flex gap-2 items-center"><FaPhone />+233245829714</a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-linear-to-r from-blue-600 to-blue-950 flex flex-col justify-center items-center text-center text-white py-30 space-y-6">
        <h1 className="text-4xl font-bold">Ready to Find Your Dream Home?</h1>
        <p className="text-2xl w-[800px]">Our team is standing by to help you discover the perfect property in Kanda's most desirable neighborhoods.</p>
        <div className="flex gap-4">
          <a href="/properties" className="flex gap-2 bg-blue-400 py-2 px-5 items-center text-white font-bold">View Properties<FaHome /> </a>
          <a href="/contact" className="flex gap-2 bg-blue-400 py-2 px-5 items-center text-white font-bold">CONTACT US <FaPhone /></a>
        </div>
      </div>
    </div >
  )
}

export default About
