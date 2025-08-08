"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function InteractivePropertyShowcase() {
  const [activeProperty, setActiveProperty] = useState(0);

  const properties = [
    {
      name: "Casa Lomas de Machali",
      address: "72 Sunset Avenue, Los Angeles, California",
      image: "/images/image_1.jpg",
      isActive: true,
    },
    {
      name: "Villa Del Mar Retreat",
      address: "72 Sunset Avenue, Los Angeles, California",
      image: "/images/image_2.jpg",
      isActive: false,
    },
    {
      name: "Rancho Vista Verde",
      address: "72 Sunset Avenue, Los Angeles, California",
      image: "/images/image_3.jpg",
      isActive: false,
    },
    {
      name: "Sunset Heights Estate",
      address: "72 Sunset Avenue, Los Angeles, California",
      image: "/images/image_4.jpg",
      isActive: false,
    },
    {
      name: "Coastal Serenity Cottage",
      address: "72 Sunset Avenue, Los Angeles, California",
      image: "/images/image_5.jpg",
      isActive: false,
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Property List */}
          <div className="space-y-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeProperty === index
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-90"
                }`}
                onMouseEnter={() => setActiveProperty(index)}
              >
                <div className="flex items-start gap-4">
                  {/* Play Icon - Only visible for active property */}
                  <div
                    className={`flex-shrink-0 mt-1 transition-opacity duration-300 ${
                      activeProperty === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-2">
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        activeProperty === index
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {property.name}
                    </h3>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        activeProperty === index
                          ? "text-gray-300"
                          : "text-gray-500 group-hover:text-gray-400"
                      }`}
                    >
                      {property.address}
                    </p>
                  </div>
                </div>

                {/* Underline indicator */}
                <div
                  className={`mt-4 h-0.5 bg-white transition-all duration-300 ${
                    activeProperty === index
                      ? "w-16 opacity-100"
                      : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-50"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Column - Property Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeProperty === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
