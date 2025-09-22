import { useEffect, useState } from "react";

const cardsData = [
  {
    title: "Design",
    description: "Interface utilisateur créative et moderne",
    icon: "🎨",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-400",
  },
  {
    title: "Développement",
    description: "Solutions techniques innovantes",
    icon: "💻",
    gradient: "bg-gradient-to-r from-teal-400 to-green-600",
  },
  {
    title: "Marketing",
    description: "Stratégies digitales efficaces",
    icon: "📊",
    gradient: "bg-gradient-to-r from-cyan-200 to-pink-200",
  },
  {
    title: "Analytics",
    description: "Analyse de données avancée",
    icon: "📈",
    gradient: "bg-gradient-to-r from-pink-400 to-pink-200",
  },
  {
    title: "Mobile",
    description: "Applications mobiles natives",
    icon: "📱",
    gradient: "bg-gradient-to-r from-blue-400 to-blue-700",
  },
  {
    title: "Cloud",
    description: "Infrastructure cloud scalable",
    icon: "☁️",
    gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
  },
  {
    title: "IA",
    description: "Intelligence artificielle avancée",
    icon: "🤖",
    gradient: "bg-gradient-to-r from-indigo-600 to-indigo-300",
  },
  {
    title: "Sécurité",
    description: "Protection des données renforcée",
    icon: "🔒",
    gradient: "bg-gradient-to-r from-emerald-500 to-cyan-400",
  },
];

export default function ConcaveCarousel() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = cardsData.length;
  const angleStep = 360 / totalCards;

  // Positionnement des cartes
  const getCardStyle = (index) => {
    const radius = 400;
    const centerZ = -200;

    const angle = ((index * angleStep + currentRotation) * Math.PI) / 180;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius + centerZ;

    // courbe concave en Y
    const normalizedAngle =
      ((index * angleStep + currentRotation + 180) % 360) - 180;
    const heightOffset = Math.pow(normalizedAngle / 90, 2) * 80;
    const y = heightOffset - 40;

    const rotationY = (-angle * 180) / Math.PI;

    const scale = Math.max(0.6, 1 - Math.abs(z + 200) / 600);
    const opacity = Math.max(0.3, 1 - Math.abs(z + 200) / 800);

    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotationY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(100 + z),
    };
  };

  const rotateCarousel = (direction) => {
    setCurrentRotation((prev) => prev + direction * angleStep);
    setCurrentIndex((prev) => (prev - direction + totalCards) % totalCards);
  };

  const goToSlide = (index) => {
    const difference = index - currentIndex;
    setCurrentRotation((prev) => prev + difference * angleStep);
    setCurrentIndex(index);
  };

  // Auto-rotation
  useEffect(() => {
    let interval = setInterval(() => {
      rotateCarousel(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentRotation]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-purple-700 overflow-hidden">
      <div className="relative w-full max-w-6xl h-[500px] perspective-[1000px]">
        <div className="absolute inset-0 w-full h-full [transform-style:preserve-3d]">
          {cardsData.map((card, i) => (
            <div
              key={i}
              className="absolute w-[280px] h-[360px] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-500"
              style={getCardStyle(i)}
            >
              <div
                className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl text-white mb-4 shadow-xl ${card.gradient}`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="absolute bottom-20 flex gap-6">
        <button
          onClick={() => rotateCarousel(-1)}
          className="px-6 py-3 bg-white/90 rounded-full font-bold text-gray-700 shadow-lg hover:bg-white hover:-translate-y-1 transition"
        >
          ← Précédent
        </button>
        <button
          onClick={() => rotateCarousel(1)}
          className="px-6 py-3 bg-white/90 rounded-full font-bold text-gray-700 shadow-lg hover:bg-white hover:-translate-y-1 transition"
        >
          Suivant →
        </button>
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-8 flex gap-3">
        {cardsData.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
