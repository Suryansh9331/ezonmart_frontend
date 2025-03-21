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


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const images = [
//   "",
//   "images/banner.jpg",
//   "images/banner.jpg",
   
// ];

// const Hero = () => {
//   return (
//     <div className="relative w-full h-[500px] md:h-[600px]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop
//         className="w-full h-full"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-full bg-cover bg-center flex items-center justify-center"
//               style={{ backgroundImage: `url(${img})` }}
//             >
//               <div className="text-center text-black bg-white/70 px-8 py-6 rounded-lg">
//                 <h1 className="text-4xl md:text-6xl font-bold">Welcome to Ezonmart</h1>
//                 <p className="text-lg md:text-2xl mt-2">Your own virtual store</p>
//                 <button className="mt-4 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
//                   View More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;




import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "images/mainbanner.jpg",  // ✅ First slide with text & button
  "images/banner.jpg",  // ❌ No text on this slide
  "images/banner.jpg",
  "images/banner.jpg",  // ❌ No text on this slide
];

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }} // ✅ Sliding speed slow kiya (15 seconds)
        loop
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ 
                backgroundImage: `url(${img})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat" 
              }}
            >
              {index === 0 && ( // ✅ Only first slide will show text & button
                <div className="text-center text-black bg-white/70 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-12 lg:py-8 rounded-lg w-[90%] sm:w-auto">
                  <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                    Welcome to Ezonmart
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
                    Your own virtual store
                  </p>
                  <button className="mt-4 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 border border-black rounded-md hover:bg-black hover:text-white transition">
                    View More
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
