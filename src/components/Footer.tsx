import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a2e52] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500"><span className="text-white">Nuhu</span>Estate</h2>
            <p className="mt-4 text-sm text-gray-400">
              Helping you find the perfect home or investment property with ease and trust.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/properties" className="hover:text-white">Properties</a></li>
            </ul>
          </div>

          {/* social links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Social Links</h3>
            <ul className="flex text-2xl gap-3 mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white"><FaFacebook /></a></li>
              <li><a href="#" className="hover:text-white"><FaTwitter /></a></li>
              <li><a href="#" className="hover:text-white"><FaInstagram /></a></li>
              <li><a href="#" className="hover:text-white"><FaLinkedin /></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>Email: nuhuestate@gmail.com</li>
              <li>Phone: +233 245 829 714</li>
              <li>Address: Accra, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NuhuEstate. All rights reserved. | Designed by Aadil 
        </div>
      </div>
    </footer>
  );
};

export default Footer;