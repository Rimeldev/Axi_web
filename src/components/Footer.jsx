import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import Button from "../components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Call-to-action */}
      <div className="bg-black py-10 text-center">
       <h2 className="text-4xl text-center font-heading font-bold mb-8 leading-tight">
          Commencez votre promotion dès maintenant
        </h2>
        <button className="bg-[#E8B51E] text-black text-xl font-bold hover:bg-[#E8B51E]/90 items-center font-poppins  py-2 px-4 rounded-md">
          Créer votre stand
        </button>
      </div>

      {/* Footer main content */}
      <div className="border-t border-gray-700 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 font-poppins">
        
        {/* Logo + description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img className="h-14 w-auto rounded-full" src="src/assets/logo/Axifooter.png" alt="Logo" />
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Autonomiser les micro-entreprises et les PME 
            à travers l’Afrique avec des outils de visibilité numérique 
            et de connexion qui favorisent une véritable croissance des affaires.
          </p>
          <div className="flex space-x-4 text-white  ">
            <a href="#"><FaFacebook size={25} /></a>
            <a href="#"><FaLinkedin size={25} /></a>
            <a href="#"><FaTiktok size={25} /></a>
            <a href="#"><FaYoutube size={25} /></a>
          </div>
        </div>

        {/* Ressources */}
        <div>
          <h3 className="font-semibold mb-3">Ressources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-yellow-500">Centre d’aide</a></li>
            <li><a href="#" className="hover:text-yellow-500">Tarifs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-yellow-500">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-yellow-500">Termes et condition</a></li>
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h3 className="font-semibold mb-3">Entreprise</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-yellow-500">À propos</a></li>
            <li><a href="#" className="hover:text-yellow-500">Qui sommes-nous ?</a></li>
            <li><a href="#" className="hover:text-yellow-500">Équipe</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        ©2025 Axi. Tous droits reservés.
      </div>
    </footer>
  );
}
