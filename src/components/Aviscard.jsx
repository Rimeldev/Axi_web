import { Star } from "lucide-react";

export default function Aviscard({ star, name, profession, image, comment, video }) {
  const AdvancedStarRating = ({ star }) => {
    return (
      <div className="flex mb-5">
        {[...Array(5)].map((_, index) => {
          const isFull = index < Math.floor(star);
          const isHalf = index < star && index >= Math.floor(star);

          return (
            <Star
              key={index}
              size={30}
              color={isFull || isHalf ? "#E8B51E" : "#D1D5DB"} // stroke (contour)
              fill={isFull || isHalf ? "#E8B51E" : "#D1D5DB"}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className={`flex flex-col bg-[#2F2F2F21] p-6 rounded-lg h-full shadow-md ${video ? 'row-span-2' : ''}`}>

        <AdvancedStarRating star={star} />
   
      <p className="items-start mb-3 flex-grow">{comment}</p>
  {video && (
  <div className="mb-4 flex-grow flex flex-shrink-0">
    <video 
      src={video} 
      className="rounded-lg w-full h-48 object-cover " 
      controls 
    />
  </div>
)}
      <div className="flex items-center flex-shrink-0">
        <img
          src={image}
          alt="avatar"
          className="w-16 h-16 object-cover border-2 border-[#E8B51E] rounded-full"
        />
        <div>
          <p className="ml-3 font-bold">{name}</p>
          <p className="ml-3 ">{profession}</p>
        </div>
      </div>
    </div>
  );
}
