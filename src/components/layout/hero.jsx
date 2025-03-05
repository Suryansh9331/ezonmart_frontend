// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Hero = () => {
//   return (
//     <section className="relative">
//       <Swiper
//         modules={[Navigation, Autoplay, Pagination]}
//         navigation
//         autoplay={{ delay: 5000 }}
//         pagination={{ clickable: true }}
//         className="w-full h-[60vh] md:h-[80vh]"
//       >
//         <SwiperSlide>
//           <div className="flex items-center justify-center bg-gray-200 h-full">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold">Winter Stock</h1>
//               <p className="text-lg text-gray-600">Summer Collection</p>
//               <button className="mt-4 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
//                 VIEW MORE
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="flex items-center justify-center bg-gray-300 h-full">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold">Exclusive Deals</h1>
//               <p className="text-lg text-gray-600">Limited Time Offer</p>
//               <button className="mt-4 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="flex items-center justify-center bg-gray-400 h-full">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold">New Arrivals</h1>
//               <p className="text-lg text-gray-600">Get Yours Today</p>
//               <button className="mt-4 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
//                 EXPLORE
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://source.unsplash.com/1600x800/?fashion",
  "https://source.unsplash.com/1600x800/?clothes",
  "https://source.unsplash.com/1600x800/?shoes",
  "./public/slider1.png",
];

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="text-center text-black bg-white/70 px-8 py-6 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold">Winter Stock</h1>
                <p className="text-lg md:text-2xl mt-2">Summer Collection</p>
                <button className="mt-4 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;


