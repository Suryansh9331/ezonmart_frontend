import React from "react";

const images = [
  { id: 1, name: "Nara Plunged Short Dress", image: "https://via.placeholder.com/300x400" },
  { id: 2, name: "Elegant Silk Gown", image: "https://via.placeholder.com/300x400" },
  { id: 3, name: "Casual Streetwear", image: "https://via.placeholder.com/300x400" },
  { id: 4, name: "Chic Women's Handbag", image: "https://via.placeholder.com/300x400" },
];

const ImageShowcase = () => {
  return (
    <div className="w-full py-24 flex flex-wrap justify-center md:justify-between gap-2 px-0">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`relative group w-36 sm:w-44 md:w-52 lg:w-60 h-52 sm:h-60 md:h-72 lg:h-80 ${
            index === 0 ? 'mt-4 sm:mt-6 md:mt-8' : 
            index === 1 ? '-mt-4 sm:-mt-6 md:-mt-8' : 
            index === 2 ? 'mt-6 sm:mt-10 md:mt-16 rotate-3' : 
            '-mt-4 sm:-mt-6 md:-mt-6'
          }`}
        >
          {/* Background Layer for Stacking Effect */}
          <div className="absolute top-2 left-2 w-full h-full bg-gray-300 rounded-lg shadow-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          {/* Foreground Image */}
          <div className="relative w-full h-full bg-gray-300 rounded-lg shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <p className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 text-black font-bold text-xs sm:text-sm md:text-lg">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageShowcase;