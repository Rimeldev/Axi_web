import { useState } from "react";
import { NavLink } from "react-router-dom"; // ⬅️ utilise NavLink
import { Menu, X } from "lucide-react";
import AxiLogo from "../assets/logo/AxiLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "A propos" },
    { path: "/service", label: "Nos services" },
    { path: "/contact", label: "Contactez-nous" },
  ];

  return (
    <nav className="breakout mx-auto p-2">
      <div className="flex justify-between items-center bg-[#00000033] rounded-full px-6 py-2">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={AxiLogo} alt="logo Axi" className="h-14 w-auto" />
        </NavLink>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center space-x-8 font-heading">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#E8B51E]" : "text-black hover:text-[#E8B51E]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton desktop */}
        <button className="hidden md:block bg-[#E8B51E] hover:bg-[#e2be50] text-white py-2 px-6 rounded-full font-semibold transition-colors duration-200 font-poppins">
          Commencer
        </button>

        {/* Burger menu (mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 space-y-4 text-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive ? "text-[#E8B51E]" : "text-black hover:text-[#E8B51E]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button className="w-full bg-[#E8B51E] hover:bg-[#e2be50] text-white py-2 rounded-full font-semibold transition-colors duration-200 font-poppins">
            Commencer
          </button>
        </div>
      )}
    </nav>
  );
}
