import { FaPhone,FaMailBulk } from "react-icons/fa"

const Contact = () => {
  return (
    <div>
      <div className="relative w-full">
        <img
          className="h-[400px] w-full object-cover"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg text-white drop-shadow">Get in touch with our team</p>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* left text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-medium pt-2">Our Office</h1>
          <p>Trade Fair Site</p>
          <p>Adjacent to 1st Atlantic Bank</p>
          <p>P. O. Box 11494 Accra – North</p>
          <h1 className="text-2xl font-medium pt-2">Contact Information</h1>
          <p className="flex gap-2"><FaPhone className="text-blue-400" /> 0245829714</p>
          <p className="flex gap-2"><FaMailBulk className="text-blue-400" /> info@nuhuestate.com</p>
          <h1 className="text-2xl font-medium pt-2">Office Hours</h1>
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
        {/* form */}
        <form action="" className="space-y-4">
          <h1 className="text-2xl font-medium">Send Us a Message</h1>
          <input className="w-full border p-2 rounded-md border-gray-200" type="text" placeholder="Your Name" />
          <input className="w-full border p-2 rounded-md border-gray-200" type="email" placeholder="Your Email" />
          <input className="w-full border p-2 rounded-md border-gray-200" type="text" placeholder="Subject" />
          <textarea className="w-full h-[150px] border p-2 rounded-b-md border-gray-300" name="" id="" placeholder="Your Message"></textarea>
          <button className="bg-blue-400  py-2 px-5 text-white font-bold">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  )
}

export default Contact