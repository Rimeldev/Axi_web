import heroImage from "../assets/image/heroImage.png";
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat rounded-2xl min-h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#F0CF6EE5] rounded-2xl mt-10 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Titre */}
        <h1 className="text-black text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6 sm:mb-8">
          <span className="text-white">Axì, </span>
          donnez plus de visibilité à <br className="hidden sm:block" />
          <span className="text-white">votre entreprise</span>
        </h1>

        {/* Description */}
        <p className="text-black text-center font-poppins text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 max-w-2xl lg:max-w-4xl">
          Une plateforme numérique qui connecte les micro-entreprises aux
          utilisateurs à travers des stands digitaux, alliant la dynamique d’un
          réseau social au commerce local.
        </p>

        {/* Bouton */}
        <Button title="Commencer avec Axì" />
      </div>
    </div>
  );
}
