import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaClock, FaShieldAlt, FaStar, FaUndoAlt } from "react-icons/fa";

const features = [
  { icon: <FaClock size={24} />, text: "Quick Delivery" },
  { icon: <FaShieldAlt size={24} />, text: "Secure Payment" },
  { icon: <FaStar size={24} />, text: "Best Quality" },
  { icon: <FaUndoAlt size={24} />, text: "Return Guarantee" },
];

const products = [
  {
    id: 1,
    name: "Rare",
    description: "Striped A-Line Top",
    price: "$879",
    originalPrice: "$1599",
    discount: "45% OFF",
    rating: 4.2,
    image: "/images/black.png",
    
  },
  {
    id: 2,
    name: "Sera",
    description: "Black & Peach-Coloured Floral Printed",
    price: "$399",
    originalPrice: "$999",
    discount: "60% OFF",
    rating: 4.2,
    image: "/images/black.png",
  },
  {
    id: 3,
    name: "Sassafras",
    description: "White Floral Print Maxi Dress",
    price: "$491",
    originalPrice: "$1199",
    discount: "59% OFF",
    rating: 4.2,
    image: "/images/black.png",
  },
  {
    id: 4,
    name: "Paint",
    description: "Women Rose Peg Trousers",
    price: "$524",
    originalPrice: "$1499",
    discount: "65% OFF",
    rating: 4.2,
    image: "/images/black.png",
  },
  {
    id: 5,
    name: "Elegant",
    description: "Casual Cotton Shirt",
    price: "$699",
    originalPrice: "$1299",
    discount: "50% OFF",
    rating: 4.5,
    image: "/images/black.png",
  },
  {
    id: 6,
    name: "Urban",
    description: "Slim Fit Denim Jacket",
    price: "$899",
    originalPrice: "$1799",
    discount: "50% OFF",
    rating: 4.3,
    image: "/images/black.png",
  },
  {
    id: 7,
    name: "Vogue",
    description: "Chic Women's Handbag",
    price: "$1200",
    originalPrice: "$2400",
    discount: "50% OFF",
    rating: 4.7,
    image: "/images/black.png",
  },
  {
    id: 8,
    name: "Trend",
    description: "Modern Sneakers",
    price: "$999",
    originalPrice: "$1999",
    discount: "50% OFF",
    rating: 4.6,
    image: "/images/black.png",
  },
];

const NewArrivals = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div className="text-black">{feature.icon}</div>
            <p className="font-semibold text-gray-700 text-sm md:text-base">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold">New Arrivals</h2>
        <button className="border px-3 py-1 rounded-md hover:bg-gray-200 text-sm md:text-base">
          VIEW ALL
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Navigation]}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mx-2">
             
              <img
                src={product.image}
                alt={product.name}
                className="h-40 md:h-48 w-full object-contain  rounded-lg"
               
              />

              <h3 className="text-sm md:text-lg font-bold">{product.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">
                {product.description}
              </p>
              <p className="text-gray-700 font-semibold mt-2 text-sm md:text-base">
                {product.price}{" "}
                <span className="text-gray-500 line-through text-xs md:text-sm">
                  {product.originalPrice}
                </span>
                <span className="text-red-500 text-xs md:text-sm ml-2">
                  {product.discount}
                </span>
              </p>
              <p className="text-yellow-500 text-xs md:text-sm mt-1">
                ⭐ {product.rating}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivals;










