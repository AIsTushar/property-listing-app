"use client";

import { useState } from "react";
import {
  Play,
  ImageIcon,
  Download,
  MapPin,
  Plus,
  Minus,
  Compass,
  Edit3,
} from "lucide-react";
import Image from "next/image";

interface PropertyTabsProps {
  address?: string;
  galleryImages?: string[];
  floorPlans?: {
    name: string;
    beds: number;
    baths: number;
    image: string;
    pdfUrl: string;
  }[];
}

export default function PropertyTabs({
  address = "4600 Sunset Blvd, Los Angeles, CA 90027",
  galleryImages = [
    "/images/image_1.jpg",
    "/images/image_2.jpg",
    "/images/image_3.jpg",
    "/images/image_4.jpg",
    "/images/image_5.jpg",
    "/images/image_6.jpg",
    "/images/image_7.jpg",
    "/images/image_8.jpg",
  ],
  floorPlans = [
    {
      name: "First Floor",
      beds: 3,
      baths: 2,
      image: "/images/image_1.jpg",
      pdfUrl: "#",
    },
    {
      name: "Second Floor",
      beds: 3,
      baths: 2,
      image: "/images/image_2.jpg",
      pdfUrl: "#",
    },
  ],
}: PropertyTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "gallery" | "floorPlans" | "location"
  >("gallery");
  const [expandedFloor, setExpandedFloor] = useState<string>("First Floor");

  const tabs = [
    { id: "gallery" as const, label: "Gallery" },
    { id: "floorPlans" as const, label: "Floor Plans" },
    { id: "location" as const, label: "Location" },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-lg font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "gallery" && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={galleryImages[0] || "/placeholder.svg"}
                  alt="Property main view"
                  className="w-full h-full object-cover"
                  fill
                />
                {/* Overlay Buttons */}
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <button className="flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                    <Play className="w-4 h-4" />
                    Play Video
                  </button>
                  <button className="flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                    <ImageIcon className="w-4 h-4" />
                    View All Photo
                  </button>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-xl overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Property view ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "floorPlans" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Floor Plans
            </h2>

            {/* Floor Plan Sections */}
            <div className="space-y-6">
              {floorPlans.map((floor) => (
                <div
                  key={floor.name}
                  className="border border-gray-200 rounded-lg"
                >
                  {/* Floor Header */}
                  <button
                    onClick={() =>
                      setExpandedFloor(
                        expandedFloor === floor.name ? "" : floor.name
                      )
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-gray-900">
                        {floor.name}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{floor.beds} Beds</span>
                        <span>{floor.baths} Baths</span>
                      </div>
                    </div>
                    {expandedFloor === floor.name ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {/* Floor Plan Content */}
                  {expandedFloor === floor.name && (
                    <div className="p-6 border-t border-gray-200">
                      <div className="mb-4">
                        <Image
                          src={floor.image || "/placeholder.svg"}
                          alt={`${floor.name} plan`}
                          className="w-full max-w-2xl mx-auto"
                          fill
                        />
                      </div>

                      {/* Download Links */}
                      <div className="flex gap-4">
                        <a
                          href={floor.pdfUrl}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Villa Document.Pdf
                        </a>
                        <a
                          href={floor.pdfUrl}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Villa Document.Pdf
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "location" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>

            {/* Address and Directions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900 font-medium">{address}</span>
              </div>
              <button className="text-gray-900 font-medium underline hover:no-underline transition-all">
                Get Directions
              </button>
            </div>

            {/* Map Container */}
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/property-map.png"
                alt="Property location map"
                className="w-full h-full object-cover"
                fill
              />

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <Minus className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <Compass className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <Edit3 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Info Button */}
              <div className="absolute bottom-4 right-4">
                <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="text-sm font-medium text-gray-600">i</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
