import BackgroundSlider from "./pages/BackgroundSlider"
import h1 from './assets/h1.jpg'
import { FaBed, FaBath, FaCar, FaArrowRight, FaDoorOpen, FaUtensils, FaShieldAlt, FaSwimmingPool, FaMedal, FaHome, FaHandshake, FaMapMarker, FaLightbulb } from 'react-icons/fa';


const Home = () => {

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

    const advantages = [
        {
            id: 1,
            icon: <FaMedal />,
            title: "30 Years of Trust",
            description: "With three decades in Ghana's real estate market, we've perfected the art of creating exceptional living spaces."
        },
        {
            id: 2,
            icon: <FaHome />,
            title: "Premium Quality",
            description: "Every Friendship Estate property meets our exacting standards for materials, craftsmanship, and design."
        },
        {
            id: 3,
            icon: <FaShieldAlt />,
            title: "Secure Communities ",
            description: "Gated developments with 24/7 security, ensuring peace of mind for you and your family."
        },
        {
            id: 4,
            icon: <FaHandshake />,
            title: "Client-Focused Service",
            description: "Personalized attention from our team of experts throughout your property journey."
        },
        {
            id: 5,
            icon: <FaMapMarker />,
            title: "Prime Locations",
            description: "With three decades in Ghana's real estate market, we've perfected the art of creating exceptional living spaces."
        },
        {
            id: 6,
            icon: <FaLightbulb />,
            title: "Innovative Design",
            description: "Modern architectural solutions that maximize space, light, and functionality."
        },
    ]
    return (
        <div className="bg-gray-100">
            <BackgroundSlider />
            {/* FEATURED PROPERTIES */}
            <div className="max-w-7xl mx-auto px-2 py-10 sm:px-6 lg:px-8 space-y-10">
                <section className="max-w-7xl leading-9 font-medium mx-auto px-4 py-30 sm:px-6 lg:px-8 space-y-3">
                    <h3 className="text-blue-400 text-center">PREMIUM SELECTION</h3>
                    <h1 className="text-gray-800 font-bold text-5xl text-center">Featured Properties</h1>
                    <hr className="w-24 text-blue-400 bg-blue-400 h-1 rounded-2xl mx-auto mb-10" />
                    <p className="text-gray-400 text-center mx-auto text-xl max-w-[700px]">Explore our curated collection of exceptional residences in Accra's prime locations</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/properties" className="flex items-center w-[220px] justify-between bg-blue-400 text-white hover:bg-blue-700 py-3 px-6 rounded-xl">View All Properties <FaArrowRight /></a>
            </div>


            {/* PREMIUM LIVING */}

            <section className="flex flex-col md:flex-row items-center bg-white py-40 gap-10 px-4 md:px-20">
                <div className="md:w-1/2">
                    <img className="w-full h-[550px] rounded-xl object-cover" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                </div>

                <div className="md:w-1/2 space-y-6">
                    <div className="space-y-3">
                        <h3 className="text-blue-400 font-medium">PREMIUM LIVING</h3>
                        <h1 className="text-4xl font-bold">Kanda Courts</h1>
                        <p className="text-gray-500">Our flagship development offering luxury living in the heart of Accra</p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl hover:shadow-lg transition-shadow">
                            <FaDoorOpen className="text-blue-400 text-2xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Imported Hardwood Doors</h4>
                                <p className="text-gray-600">Premium quality materials for lasting elegance</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl hover:shadow-lg transition-shadow">
                            <FaUtensils className="text-blue-400 text-2xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Modern Kitchen</h4>
                                <p className="text-gray-600">Fully equipped with quality cabinetry</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl hover:shadow-lg transition-shadow">
                            <FaShieldAlt className="text-blue-400 text-2xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">24/7 Security</h4>
                                <p className="text-gray-600">Gated community with manned security</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl hover:shadow-lg transition-shadow">
                            <FaSwimmingPool className="text-blue-400 text-2xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Recreational Areas</h4>
                                <p className="text-gray-600">Community spaces for relaxation</p>
                            </div>
                        </div>
                    </div>

                    <a href="/about" className="flex px-6 items-center justify-between py-4 max-w-[170px] border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">Learn More <FaArrowRight /></a>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="max-w-7xl leading-9 font-medium mx-auto px-4 py-30 sm:px-6 lg:px-8 space-y-3 my-20">
                <h3 className="text-center text-blue-600">OUR ADVANTAGES</h3>
                <h1 className="text-center text-4xl mb-10">Why Choose Friendship Estates</h1>
                <hr className="w-24 text-blue-400 bg-blue-400 h-1 rounded-2xl mx-auto mb-10" />

                {/* Second Cards */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
                        {advantages.map((advantage, key) => (
                            <div key={key} className="flex flex-col items-center rounded-2xl shadow-2xl p-4 w-full text-center ">
                                <div className="text-blue-400 bg-blue-200 rounded-full w-18 h-18 flex justify-center items-center text-4xl">{advantage.icon}</div>
                                <h1>{advantage.title}</h1>
                                <p>{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* last image section */}
            <section className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-5">
                {/* Item 1 */}
                <div className="w-full relative">
                    <img className="h-auto w-full" src={h1} alt="Communities" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">Communities</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="w-full relative">
                    <img className="h-auto w-full" src={h1} alt="Danfa" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">Danfa</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="w-full relative">
                    <img className="h-auto w-full" src={h1} alt="Appolonia" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">Appolonia</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="w-full relative">
                    <img className="h-auto w-full" src={h1} alt="Ayimensah" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">Ayimensah</p>
                    </div>
                </div>
            </section>




        </div >
    )
}

export default Home