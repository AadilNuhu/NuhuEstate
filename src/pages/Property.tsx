import { FaMapPin, FaCheck, FaBed, FaBath, FaRulerCombined, FaCar, FaUmbrellaBeach } from "react-icons/fa6"
import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.jpg"
import h3 from "../assets/h3.jpg"
import { FaSwimmingPool } from "react-icons/fa"
import { useState } from "react"

const Property = () => {
    const [selected, setSelected] = useState(0)

    const properties = [
        {
            id: 1,
            name: "Two Bedroom Townhosue",
            location: "East Legon, Accra",
            price: "$250,000",
            bed: 2,
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 2,
            name: "Three Bedroom Apartment",
            location: "Airport Residential, Accra",
            price: "$300,000",
            bed: 3,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            name: "Four Bedroom Detached",
            location: "Cantonments, Accra",
            price: "$500,000",
            bed: 4,
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ]

    const Content = [
        {
            name: "Site Plan",
            info: "This tab displays the overall site layout including amenities and landscaping.",
            image: h1,
        },
        {
            name: "Ground Floor",
            info: "Overview of the ground floor with accessible entry points and shared facilities.",
            image: h2,
        },
        {
            name: "First Floor",
            info: "Overview of the first floor with accessible entry points and shared facilities.",
            image: h3,
        }
    ]
    return (
        <div>
            <div className="bg-gray-200 p-15 mt-20">
                <p>Home  </p>
            </div>

            <div className="lg:p-20 p-5 flex flex-col md:flex-row">
                {/* images of individual property */}
                <div>
                    <div>
                        <img className="w-[1200px] rounded-md" src={h1} alt="" />
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
                        <img className="h-[100px] w-[200px] rounded-md" src={h1} alt="" />
                        <img className="h-[100px] w-[200px] rounded-md " src={h1} alt="" />
                        <img className="h-[100px] w-[200px] rounded-md " src={h1} alt="" />
                        <img className="h-[100px] w-[200px] rounded-md " src={h1} alt="" />
                    </div>
                    <hr className="text-gray-300 my-4" />

                    {/*  */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 items-center rounded-md justify-center"><FaBed className="text-blue-400" /> 2 Bedrooms</div>
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 rounded-md items-center justify-center"><FaBath className="text-blue-400" />2 Bathrooms</div>
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 rounded-md items-center justify-center"><FaRulerCombined className="text-blue-400" /> 1800 sqft</div>
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 rounded-md items-center justify-center"><FaCar className="text-blue-400" />1 Garage</div>
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 rounded-md items-center justify-center"><FaSwimmingPool className="text-blue-400 text-2xl" />ICI grade one acrylic walls</div>
                        <div className="bg-[#c89d581a] flex gap-2 px-8 py-4 rounded-md items-center justify-center"><FaUmbrellaBeach className="text-blue-400" /> solar system</div>
                    </div>
                </div>
                {/* Description about property */}
                <div className="lg:px-20 md:px-5 leading-9">
                    <h2 className="font-medium text-2xl mb-2">2 Bedroom Townhouse</h2>
                    <p className="flex items-center gap-2 mb-2"><FaMapPin className="text-blue-400" /> Danfa, Accra, Ghana</p>
                    <h1 className="font-bold text-3xl mb-2">$49,000</h1>
                    <p className="bg-blue-400 w-[90px] text-center font-bold mb-3 text-sm rounded-md p-2 text-white">For Sale</p>
                    <hr className="text-gray-300 mb-7" />
                    <h2 className="text-2xl font-medium pb-2">Description</h2>
                    <p className="pb-4">This property offers luxurious living in Danfa, Accra, Ghana. Beautifully styled and ready for move-in.</p>
                    <h2 className="text-2xl font-medium pb-2">Amenities</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Smart Home System</li>
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Home Theater</li>
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Wine Cellar</li>
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Gym</li>
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Solar Panels</li>
                        <li className="flex items-center gap-2"><FaCheck className="text-blue-400" />Security System</li>
                    </ul>
                </div>

            </div>
            {/* Floor Plans */}
            <div className="flex flex-col lg:flex-row gap-10 p-5 lg:p-20">
                <div className="lg:px-10 px-10 py-10 w-full">
                    <h1 className="text-3xl font-bold pb-2">Floor Plans</h1>
                    <div className="flex gap-3">
                        <button onClick={() => setSelected(0)} className="bg-blue-400 text-white p-2 rounded-2xl cursor-pointer">Site Plan</button>
                        <button onClick={() => setSelected(1)} className="bg-blue-400 text-white p-2 rounded-2xl cursor-pointer">Ground Floor</button>
                        <button onClick={() => setSelected(2)} className="bg-blue-400 text-white p-2 rounded-2xl cursor-pointer">First Floor</button>
                        <button className="bg-gray-400 text-white p-2 rounded-2xl cursor-pointer">Second Floor</button>
                        <button className="bg-gray-400 text-white p-2 rounded-2xl cursor-pointer">Third Floor</button>
                    </div>
                    <hr className="text-gray-300 my-4" />
                    <div>
                        <h1 className="font-bold text-2xl pb-2">{Content[selected].name}</h1>
                        <p>{Content[selected].info}</p>
                        <img className="pt-6 w-[700px]" src={Content[selected].image} alt="" />
                    </div>
                    <div className="w-full mt-20">
                        <h1 className="font-bold text-4xl pb-2 text-center">Property Tour</h1>
                        <img className="rounded-xl w-full" src={h1} alt="" />
                    </div>
                    <div className="w-full mt-10">
                        <h1 className="font-bold text-4xl pb-2">Property Map</h1>
                        <img className="rounded-xl" src={h1} alt="" />
                    </div>

                    {/* Schedule A Tour */}
                    <div className="bg-blue-200 mt-9 rounded-2xl p-5">
                        <h1 className="font-bold text-3xl">Schedule A Tour</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <form action="" className="py-5">
                                <div className="flex gap-2 ">
                                    <input className="bg-white p-2 rounded-2xl w-full" type="date" name="" id="" />
                                    <input className="bg-white p-2 rounded-2xl w-full" type="time" name="" id="" />
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <input className="bg-white w-full p-2 rounded-2xl" type="text" placeholder="Your Name" />
                                    <input className="bg-white w-full p-2 rounded-2xl" type="text" placeholder="Your Phone" />
                                </div>
                                <input className="bg-white p-2 rounded-2xl w-full mt-3" type="email" placeholder="Your Email" />
                                <textarea className="bg-white h-30 p-2 rounded-2xl w-full mt-3" name="" placeholder="Message ..." id=""></textarea>
                                <button className="bg-blue-400 p-2 text-white font-bold rounded-2xl mt-3">Schedule</button>
                            </form>
                            <div className="p-5">
                                <img className="h-[150px]" src={h1} alt="" />
                                <div>
                                    <h1 className="pb-2 font-medium">Discover your dream property</h1>
                                    <p className="pb-2">Immerse yourself in the captivating ambiance of our properties. Book a personalized tour to explore the exquisite beauty and unique features of our property.</p>
                                    <p>Our knowledgeable staff will guide you through the property, answering any questions you may have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Specialist */}
                <div className="">
                    <div>
                        <form action="" className="p-4 w-[400px] bg-gray-100 rounded-xl">
                            <img className="h-16 w-16 object-cover mb-2 rounded-full" src={h1} alt="" />
                            <h1>Specialist Nuhu✔️</h1>
                            <p>Office: 📞 +233-245-829-714</p>
                            <p>Mobile: 📱 +233-245-829-714</p>
                            <p>WhatsApp: 📱 +233-245-829-714</p>
                            <p>Email: ✉️ nuhu@nuhuestate.com</p>
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Name" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="email" placeholder="Email" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Phone" />
                            <textarea className="w-full h-[100px] p-2 rounded-xl border border-gray-300 mt-4" name="" id="" placeholder="Hello, Am interested in 2 Bedroom Townhouse at Danfa Accra, Ghana"></textarea>
                            <p className="flex mt-4"><input type="checkbox" name="" id="" /> I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                            <button className="font-bold bg-blue-400 w-full mt-4 p-2 text-white rounded-md">Send Message</button>
                        </form>
                    </div>
                    <div className="mt-5">
                        <form action="" className="p-4 w-[400px] bg-gray-100 rounded-xl">
                            <img className="h-16 w-16 object-cover mb-2 rounded-full" src={h1} alt="" />
                            <h1>Specialist Aadil✔️</h1>
                            <p>Office: 📞 +233-245-829-714</p>
                            <p>Mobile: 📱 +233-245-829-714</p>
                            <p>WhatsApp: 📱 +233-245-829-714</p>
                            <p>Email: ✉️ nuhu@nuhuestate.com</p>
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Name" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="email" placeholder="Email" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Phone" />
                            <textarea className="w-full h-[100px] p-2 rounded-xl border border-gray-300 mt-4" name="" id="" placeholder="Hello, Am interested in 2 Bedroom Townhouse at Danfa Accra, Ghana"></textarea>
                            <p className="flex mt-4"><input type="checkbox" name="" id="" /> I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                            <button className="font-bold bg-blue-400 w-full mt-4 p-2 text-white rounded-md">Send Message</button>
                        </form>
                    </div>
                    <div className="mt-5">
                        <form action="" className="p-4 w-[400px] bg-gray-100 rounded-xl">
                            <img className="h-16 w-16 object-cover mb-2 rounded-full" src={h1} alt="" />
                            <h1>Managing Director✔️</h1>
                            <p>Office: 📞 +233-245-829-714</p>
                            <p>Mobile: 📱 +233-245-829-714</p>
                            <p>WhatsApp: 📱 +233-245-829-714</p>
                            <p>Email: ✉️ nuhu@nuhuestate.com</p>
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Name" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="email" placeholder="Email" />
                            <input className="w-full p-2 rounded-xl border border-gray-300 mt-4" type="text" placeholder="Phone" />
                            <textarea className="w-full h-[100px] p-2 rounded-xl border border-gray-300 mt-4" name="" id="" placeholder="Hello, Am interested in 2 Bedroom Townhouse at Danfa Accra, Ghana"></textarea>
                            <p className="flex mt-4"><input type="checkbox" name="" id="" /> I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                            <button className="font-bold bg-blue-400 w-full mt-4 p-2 text-white rounded-md">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-10 text-center">
                <h1 className="text-2xl font-medium py-7">Similar Properties</h1>
                <div className="grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {properties.map((property, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-[450px]">
                            <div className="relative h-[250px]">
                                <img
                                    src={property.image}
                                    alt={property.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* For Sale Badge */}
                                <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    For Sale
                                </span>
                                {/* Price Badge */}
                                <span className="absolute bottom-4 left-4 bg-white/90 text-blue-500 px-4 py-2 rounded-lg font-bold">
                                    {property.price}
                                </span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
                                    <div className="flex items-center text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{property.location}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 mt-auto"> {/* Changed hr to div with border-t */}
                                    <div className="pt-3 flex justify-between text-gray-600">
                                        <div className="flex items-center text-blue-400 gap-2">{property.bed}<FaBed /></div>
                                        <div className="flex items-center text-blue-400 gap-2">2<FaBath /></div>
                                        <div className="flex items-center text-blue-400 gap-2">1<FaCar /></div>
                                    </div>
                                </div>
                                <a className="p-2 bg-blue-400 w-[130px] text-white font-bold rounded-md mt-1">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Property