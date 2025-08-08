"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

const images: ImageData[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    alt: "Modern Family Home Exterior",
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Luxury Living Room Interior",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2074&q=80",
    alt: "Stylish Open-Plan Kitchen",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2088&q=80",
    alt: "Cozy Bedroom with Natural Light",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern Apartment Building Exterior",
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <motion.img
            key={image.id}
            src={image.url}
            alt={image.alt}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1.05 : 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full text-white bg-black/50 hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full text-white bg-black/50 hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image Info */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
          {images[currentIndex].alt}
        </h3>
        <p className="text-white/80 text-sm md:text-base mt-1">
          {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
