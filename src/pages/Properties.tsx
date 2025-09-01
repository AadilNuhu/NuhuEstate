import { BiMenu, BiX } from "react-icons/bi"
import { FaBed, FaBath, FaCar } from "react-icons/fa"

const Properties = () => {

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

    const featured = [
        {
            id: 1,
            name: "Danfa",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            info: "Luxury waterfront properties with ocean views and vibrant nightlife.",
            link: "VIEW PROPERTIES",
        },
        {
            id: 2,
            name: "Appolonia",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            info: "Modern high-rise condos in Accra's financial district.",
            link: "COMING SOON",
        },
        {
            id: 3,
            name: "Ayimensah",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            info: "Historic Mediterranean-style homes and tree-lined streets.",
            link: "COMING SOON",
        },
    ]
    return (
        <div>
            <div className="mb-15 mt-2 flex justify-center flex-col items-center text-center bg-[#0a2e52cc] h-[40vh] text-white">
                <h1 className="font-bold text-5xl mt-9">Our Properties</h1>
                <p className="mt-5">Discover luxury homes in Accra's most exclusive neighborhoods</p>
            </div>


            {/* Property Filters */}
            <section className="bg-gray-200 pb-9 text-center items-center">
                <div className="flex justify-around py-10">
                    <div className="">
                        <p>Location</p>
                        <select name="" id="" className="border-2 border-gray-400 p-2 mt-2">
                            <option value="">All Location</option>
                            <option value="">Kasoa</option>
                            <option value="">Kaneshie</option>
                            <option value="">Tema</option>
                            <option value="">Ashiaman</option>
                        </select>
                    </div>
                    <div className="">
                        <p>Select Floor</p>
                        <select name="" id="" className="border-2 border-gray-400 p-2 mt-2">
                            <option value="">All Types</option>
                            <option value="">1st Floor</option>
                            <option value="">2nd Floor</option>
                            <option value="">3rd Floor</option>
                            <option value="">Last Floor</option>
                        </select>
                    </div>
                    <div className="">
                        <p>Bedrooms</p>
                        <select name="" id="" className="border-2 border-gray-400 p-2 mt-2">
                            <option value="">Any</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <div className="">
                        <p>Price Range</p>
                        <select name="" id="" className="border-2 border-gray-400 p-2 mt-2">
                            <option value="">Any Price</option>
                            <option value="">$49,000</option>
                            <option value="">$79,000</option>
                            <option value="">$395,000</option>
                        </select>
                    </div>
                    <div className="">
                        <p>Status</p>
                        <select name="" id="" className="border-2 border-gray-400 p-2 mt-2">
                            <option value="">Any Status</option>
                            <option value="">For Sale</option>
                        </select>
                    </div>

                </div>
                <div>
                    <button className="bg-blue-400 text-white font-bold py-2 px-6 rounded-md mr-4 hover:bg-white hover:text-blue-400 cursor-pointer">Filter Properties</button>
                    <button className="border-2 border-black py-2 px-4 font-bold hover:bg-blue-950 hover:text-white cursor-pointer">Reset</button>
                </div>
            </section>

            {/* All Properties */}
            <div>
                <div className="flex justify-between pt-20 pb-10 px-15">
                    <div>
                        <p>
                            Sort by :
                            <select name="" id="" className="border-1 border-gray-300 px-3 py-2 ml-2 rounded-md">
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to Low</option>
                                <option value="">New Listings</option>
                                <option value="">Old Listings</option>
                            </select>
                        </p>
                    </div>
                    <div className="flex text-2x gap-3">
                        <BiMenu className="bg-blue-950 text-white p-1 text-4xl cursor-pointer" />
                        <BiX className="border-2 border-black p-1 text-4xl cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* All Cards (Buildings) */}
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
            <div className="flex justify-center gap-6 py-10">
                <button className="border-2 border-blue-400 py-2 px-6 rounded-sm text-blue-400 font-bold">Previous</button>
                <button className="border-2 border-blue-400 py-2 px-6 rounded-sm text-blue-400 font-bold">Next</button>
            </div>

            {/* Featured Neighbors */}
            <div className="bg-gray-100 px-25 py-15">
                <h1 className="font-bold text-5xl mb-4">Featured Neighborhoods</h1>
                <h3 className="font-medium mb-5 text-4xl">Explore Accra's most sought-after locations</h3>
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featured.map((featured,index) => (
                        <div key={index} className="bg-white p-3 rounded-md w-full">
                            <img src={featured.image} alt="" className="h-62 w-full" />
                            <div>
                                <h1 className="font-bold">{featured.name}</h1>
                                <p className="mb-3">{featured.info}</p>
                                <a href="" className="bg-blue-400 p-2 text-white font-bold rounded-md">{featured.link}</a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Contact us */}
            <div className="bg-[#0a2e52cc] text-white flex flex-col items-center py-30">
                <h1 className="font-bold text-4xl pb-6">Can't Find What You're Looking For?</h1>
                <p className="pb-10">Our agents have access to exclusive listings not available publicly. Contact us to discuss your specific needs.</p>
                <a href="" className="bg-blue-400 hover:bg-blue-900 py-2 px-6 font-bold rounded-md">CONTACTS OUR AGENTS</a>
            </div>
        </div>
    )
}

export default Properties