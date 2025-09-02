import { BiMenu, BiX } from "react-icons/bi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { useState, useMemo } from "react";

const properties = [
  {
    id: 1,
    name: "Two Bedroom Townhouse",
    location: "East Legon",
    price: "$49,000",
    bed: 2,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "Three Bedroom Apartment",
    location: "Airport Residential",
    price: "$79,000",
    bed: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "Four Bedroom Detached",
    location: "East Legon",
    price: "$500,000",
    bed: 4,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];
const Properties = () => {
  const [filter, setFilter] = useState("All");
  const [bedFilter, setBedFilter] = useState("Any");
  const [priceFilter, setPriceFilter] = useState("Any");
  const [sort, setSort] = useState("newest"); 


  const featured = [
    {
      id: 1,
      name: "Danfa",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      info: "Luxury waterfront properties with ocean views and vibrant nightlife.",
      link: "VIEW PROPERTIES",
    },
    {
      id: 2,
      name: "Appolonia",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      info: "Modern high-rise condos in Accra's financial district.",
      link: "COMING SOON",
    },
    {
      id: 3,
      name: "Ayimensah",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      info: "Historic Mediterranean-style homes and tree-lined streets.",
      link: "COMING SOON",
    },
  ];

  // Filtering logic fix
  const filteredProperties = useMemo(() => {
    const parsePrice = (p: string) => Number(p.replace(/[^0-9.-]+/g, ""));
    const [min, max] =
      priceFilter === "Any"
        ? [0, Number.POSITIVE_INFINITY]
        : priceFilter.split("-").map(Number);

      const list = properties.filter((property) => {
      const locationMatch = filter === "All" || property.location === filter;
      const bedMatch = bedFilter === "Any" || property.bed === Number(bedFilter);
      const price = parsePrice(property.price);
      const priceMatch = price >= min && price <= max;
      return locationMatch && bedMatch && priceMatch;
    });

    if (sort === "price-asc") list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "price-desc") list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

    return list;
  }, [properties, filter, bedFilter, priceFilter, sort]); // { changed code }

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-15 mt-2 flex justify-center flex-col items-center text-center bg-[#0a2e52cc] h-[40vh] text-white">
        <h1 className="font-bold text-5xl mt-9">Our Properties</h1>
        <p className="mt-5">Discover luxury homes in Accra's most exclusive neighborhoods</p>
      </div>

      {/* Filters */}
      <section className="bg-gray-200 pb-9 text-center items-center">
        <div className="flex flex-wrap justify-around py-10 gap-4">
          {/* Location */}
          <div>
            <p>Location</p>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="border-2 border-gray-400 p-2 mt-2"
            >
              <option value="All">All Locations</option>
              <option value="East Legon">East Legon</option>
              <option value="Airport Residential">Airport Residential</option>
              <option value="Cantonments">Cantonments</option>
            </select>
          </div>

          {/* Placeholder Floor (Not hooked up yet) */}
          <div>
            <p>Select Floor</p>
            <select className="border-2 border-gray-400 p-2 mt-2">
              <option>All Types</option>
              <option>1st Floor</option>
              <option>2nd Floor</option>
              <option>3rd Floor</option>
              <option>Last Floor</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <p>Bedrooms</p>
            <select
              onChange={(e) => setBedFilter(e.target.value)}
              value={bedFilter}
              className="border-2 border-gray-400 p-2 mt-2"
            >
              <option value="Any">Any</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Price Range - Placeholder */}
          <div>
            <p>Price Range</p>
            <select 
                onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}
            className="border-2 border-gray-400 p-2 mt-2">
              <option value="Any">Any Price</option>
              <option value="0-49,000">$49,000</option>
              <option value="50,000-79,000">$79,000</option>
              <option value="80,000-395,000">$395,000</option>
            </select>
          </div>

          {/* Status - Placeholder */}
          <div>
            <p>Status</p>
            <select className="border-2 border-gray-400 p-2 mt-2">
              <option>Any Status</option>
              <option>For Sale</option>
            </select>
          </div>
        </div>

        {/* Filter & Reset Buttons */}
        <div>
          <button className="bg-blue-400 text-white font-bold py-2 px-6 rounded-md mr-4 hover:bg-white hover:text-blue-400 cursor-pointer">
            Filter Properties
          </button>
          <button
            onClick={() => {
              setFilter("All");
              setBedFilter("Any");
            }}
            className="border-2 border-black py-2 px-4 font-bold hover:bg-blue-950 hover:text-white cursor-pointer"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Sorting and View Icons */}
      <div className="flex justify-between pt-20 pb-10 px-10">
        <div>
          <p>
            Sort by :
            <select value={sort} onChange={e => setSort(e.target.value)} className="ml-2 border-1 border-gray-300 px-3 py-2 rounded-md">
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </p>
        </div>
        <div className="flex text-2x gap-3">
          <BiMenu className="bg-blue-950 text-white p-1 text-4xl cursor-pointer" />
          <BiX className="border-2 border-black p-1 text-4xl cursor-pointer" />
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-[450px]"
          >
            <div className="relative h-[250px]">
              <img
                src={property.image}
                alt={property.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                For Sale
              </span>
              <span className="absolute bottom-4 left-4 bg-white/90 text-blue-500 px-4 py-2 rounded-lg font-bold">
                {property.price}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
                <div className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-auto">
                <div className="pt-3 flex justify-between text-gray-600">
                  <div className="flex items-center text-blue-400 gap-2">
                    {property.bed}
                    <FaBed />
                  </div>
                  <div className="flex items-center text-blue-400 gap-2">
                    2
                    <FaBath />
                  </div>
                  <div className="flex items-center text-blue-400 gap-2">
                    1
                    <FaCar />
                  </div>
                </div>
              </div>
              <a href="/property" className="p-2 bg-blue-400 w-[130px] text-white font-bold rounded-md mt-1 cursor-pointer">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 py-10">
        <button className="border-2 border-blue-400 py-2 px-6 rounded-sm text-blue-400 font-bold">
          Previous
        </button>
        <button className="border-2 border-blue-400 py-2 px-6 rounded-sm text-blue-400 font-bold">
          Next
        </button>
      </div>

      {/* Featured Neighborhoods */}
      <div className="bg-gray-100 px-10 py-20">
        <h1 className="font-bold text-5xl mb-4">Featured Neighborhoods</h1>
        <h3 className="font-medium mb-5 text-4xl">
          Explore Accra's most sought-after locations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((featured, index) => (
            <div key={index} className="bg-white p-3 rounded-md w-full">
              <img src={featured.image} alt="" className="h-62 w-full" />
              <div>
                <h1 className="font-bold">{featured.name}</h1>
                <p className="mb-3">{featured.info}</p>
                <a
                  href="#"
                  className="bg-blue-400 p-2 text-white font-bold rounded-md inline-block"
                >
                  {featured.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#0a2e52cc] text-white flex flex-col items-center py-20">
        <h1 className="font-bold text-4xl pb-6">
          Can't Find What You're Looking For?
        </h1>
        <p className="pb-10">
          Our agents have access to exclusive listings not available publicly.
          Contact us to discuss your specific needs.
        </p>
        <a
          href="#"
          className="bg-blue-400 hover:bg-blue-900 py-2 px-6 font-bold rounded-md"
        >
          CONTACT OUR AGENTS
        </a>
      </div>
    </div>
  );
};

export default Properties;
