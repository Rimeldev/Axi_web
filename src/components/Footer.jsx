import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-poppins">
      {/* Call-to-action */}
      <div className="bg-black py-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-6 leading-tight">
          Commencez votre promotion dès maintenant
        </h2>
        <button className="bg-[#E8B51E] text-black text-lg sm:text-xl font-bold hover:bg-[#E8B51E]/90 py-3 px-6 rounded-md transition">
          Créer votre stand
        </button>
      </div>

      {/* Footer main content */}
      <div className="border-t border-gray-700 py-12 px-4 sm:px-8 lg:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo + description */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img
              className="h-14 w-auto rounded-full"
              src="src/assets/logo/Axifooter.png"
              alt="Logo"
            />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Autonomiser les micro-entreprises et les PME 
            à travers l’Afrique avec des outils de visibilité numérique 
            et de connexion qui favorisent une véritable croissance des affaires.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaLinkedin size={24} /></a>
            <a href="#"><FaTiktok size={24} /></a>
            <a href="#"><FaYoutube size={24} /></a>
          </div>
        </div>

        {/* Ressources */}
        <div>
          <h3 className="font-semibold mb-4">Ressources</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#E8B51E]">Centre d’aide</a></li>
            <li><a href="#" className="hover:text-[#E8B51E]">Tarifs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#E8B51E]">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-[#E8B51E]">Termes et conditions</a></li>
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h3 className="font-semibold mb-4">Entreprise</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#E8B51E]">À propos</a></li>
            <li><a href="#" className="hover:text-[#E8B51E]">Qui sommes-nous ?</a></li>
            <li><a href="#" className="hover:text-[#E8B51E]">Équipe</a></li>
            <li><a href="#" className="hover:text-[#E8B51E]">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-xs sm:text-sm">
        ©2025 Axi. Tous droits réservés.
      </div>
    </footer>
  );
}
