import React from "react";

export default function Card({ title, description, image, icon }) {
  return (
    <div className="bg-[#2F2F2F21] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 text-left">
      <h3 className="font-poppins text-black text-xl font-bold mb-5">
        {title}
      </h3>
      <p className="font-poppins text-[#2F2F2F] mb-4">{description}</p>
      <div className="relative overflow-hidden rounded-xl group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Icône flottante */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#E8B51E] text-white rounded-tl-3xl flex items-center justify-center shadow-lg">
          <span className=" group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}
