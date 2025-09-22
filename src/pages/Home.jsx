import Hero from "../components/Hero";
import Card from "../components/Card";
import Aviscard from "../components/Aviscard";
import Teamcard from "../components/Teamcard";
import cardimage1 from "../assets/image/cardimage1.png";
import cardimage2 from "../assets/image/cardimage2.png";
import cardimage3 from "../assets/image/cardimage3.png";
import smart from "../assets/image/smart.png";
import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import ios from "../assets/logo/ios.png";
import android from "../assets/logo/android.png";
import Footer from "../components/Footer";

export default function Home() {
  const avis = [
    {
      id: 1,
      name: "John Doe",
      profession: "Coiffeuse",
      image: "src/assets/image/Avis.jpg",
      star: 5,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam reprehenderit nihil fuga inventore eveniet numquam ullam fugit, modi praesentium adipisci temporibus neque hic ea iusto atque labore voluptate placeat voluptatum?",
    },
    {
      id: 2,
      name: "Jane Smith",
      profession: "Restauratrice",
      image: "src/assets/image/Avis.jpg",
      star: 4,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam reprehenderit nihil fuga inventore eveniet ",
      video: "src/assets/video/avisclip.mp4",
    },
    {
      id: 3,
      name: "Jane Smith",
      profession: "Restauratrice",
      image: "src/assets/image/Avis.jpg",
      star: 4,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam reprehenderit nihil fuga inventore eveniet ",
    },
    {
      id: 4,
      name: "Jane Smith",
      profession: "Restauratrice",
      image: "src/assets/image/Avis.jpg",
      star: 4,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam reprehenderit nihil fuga inventore eveniet numquam ullam fugit, modi praesentium adipisci temporibus neque hic ea iusto atque labore voluptate placeat voluptatum?",
    },
    {
      id: 5,
      name: "Jane Smith",
      profession: "Restauratrice",
      image: "src/assets/image/Avis.jpg",
      star: 4,
      comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  const features = [
    {
      title: "Créez votre stand digital",
      description:
        "Créez une présence numérique époustouflante pour votre entreprise avec nos outils faciles à utiliser.",
      image: cardimage1,
      icon: <ArrowRight />,
    },
    {
      title: "Discuter avec les clients",
      description:
        "Connectez-vous directement avec vos clients grâce à des fonctionnalités de messagerie intégrées.",
      image: cardimage2,
      icon: <ArrowRight />,
    },
    {
      title: "Booster votre visibilité",
      description:
        "Faites-vous découvrir par plus de clients dans votre région grâce à notre système de promotion intelligent.",
      image: cardimage3,
      icon: <ArrowRight />,
    },
  ];
  return (
    <>
      <section className="breakout">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto py-14 justify-items-center">
          <h2 className="text-black text-3xl font-heading font-bold w-3/4 text-left ">
            Tout ce dont vous avez besoin <br /> pour développer votre
            entreprise.
          </h2>
          <p className="text-black font-poppins text-xl w-3/4 text-left ">
            Nos fonctionnalités puissantes vous aident à connecter avec vos
            clients et à élargir votre portée comme jamais auparavant.
          </p>
        </div>
        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              image={feature.image}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <div className="bg-[#D9D9D96B] mt-14 w-full relative">
        {/* Image de fond */}
        <div className="absolute inset-0 bg-[url('/src/assets/image/style2.png')] bg-no-repeat bg-center opacity-20 pointer-events-none z-0 bg-[length:250px] md:bg-[length:350px]"></div>

        <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-16 gap-10 relative z-10">
          {/* Texte */}
          <div className="flex-1 text-left max-w-full md:max-w-md">
            <h2 className="text-black text-3xl md:text-5xl font-heading font-bold mb-6 leading-snug md:leading-tight">
              Pourquoi <span className="text-[#E8B51E]">Axì</span> ?
            </h2>
            <p className="text-black font-poppins text-base md:text-lg leading-relaxed mb-6 text-left">
              Nous croyons que chaque petite entreprise mérite d'être
              découverte. Axì donne aux entrepreneurs les moyens de créer une
              présence numérique impressionnante tout en aidant les clients à
              trouver exactement ce qu'ils recherchent dans leur ville. Des
              restaurants familiaux aux salons de beauté, nous construisons des
              ponts entre les entreprises et leurs communautés.
            </p>
            <div className="bg-[#2F2F2F21] border-l-4 border-[#E8B51E] py-3 px-4 rounded-r-lg shadow-sm mb-6">
              <p className="font-poppins font-bold italic text-sm md:text-base">
                “ Les petites entreprises sont le cœur de nos communautés. Axì
                amplifie ce cœur, le faisant entendre par tous ceux qui en ont
                besoin.”
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={smart}
              alt="Smart"
              className="w-full max-w-[300px] md:max-w-[460px] h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="breakout">
        <div className="bg-[#E8B51E] p-6 md:p-16 rounded-2xl mt-8 relative text-center">
          {/* Image de fond */}
          <div className="absolute inset-0 bg-[url('/src/assets/image/style2.png')] bg-no-repeat bg-center opacity-30 pointer-events-none z-0"></div>

          {/* Contenu */}
          <div className="relative z-10">
            <h2 className="text-black text-2xl md:text-4xl font-heading font-bold mb-6 md:mb-8 leading-snug md:leading-tight">
              Commencez à développer votre entreprise avec{" "}
              <span className="text-white">Axì</span>{" "}
              <br className="hidden md:block" />
              aujourd'hui.
            </h2>
            <p className="text-black font-poppins text-sm md:text-lg leading-relaxed mb-8 md:mb-14">
              Rejoignez des milliers d'entrepreneurs qui utilisent déjà Axì pour
              présenter leurs services, se connecter avec des clients et
              augmenter leur visibilité.
            </p>

            {/* Boutons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center md:items-start mx-auto mb-6 md:mb-8">
              <Button
                title={
                  <div className="flex flex-col items-center md:items-start">
                    Télécharger pour <br />
                    <strong>iOS</strong>
                  </div>
                }
                icon={ios}
              />
              <Button
                title={
                  <div className="flex flex-col items-center md:items-start">
                    Télécharger pour <br />
                    <strong>Android</strong>
                  </div>
                }
                icon={android}
              />
            </div>
          </div>
        </div>

        <div className="justify-center mt-20">
          <h2 className="text-black text-4xl text-center font-heading font-bold mb-5 leading-tight">
            Ce que dit notre communauté
          </h2>
          <p className="text-black font-poppins text-lg leading-relaxed mb-8 text-center">
            Vraies histoires d'entrepreneurs qui développent leur entreprise
            avec Axì.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left font-poppins">
            {avis.map((avis) => (
              <Aviscard key={avis.id} {...avis} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative justify-center mt-20 py-16 bg-[#E8B51E]">
        <div className="absolute inset-0 bg-[url('/src/assets/image/style2.png')] bg-no-repeat bg-center opacity-20 pointer-events-none z-0"></div>
        <h2 className="text-black text-4xl text-center font-heading font-bold mb-5 leading-tight">
          Notre équipe
        </h2>
        <p className="text-black font-poppins text-lg leading-relaxed mb-5 mx-auto text-center">
          Des individus passionnés dédiés à l'autonomisation des entrepreneurs
          africains et à la construction de <br />
          l'avenir du commerce.
        </p>
        {/* <Carousel /> */}
        <div>
          <Teamcard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
