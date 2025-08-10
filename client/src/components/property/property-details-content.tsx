import {
  Home,
  Layers,
  Bed,
  ShowerHeadIcon as Shower,
  Ruler,
  Car,
  Square,
  Calendar,
} from "lucide-react";

interface PropertyDetailsContentProps {
  description?: string;
  propertyId?: string;
  type?: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  garages?: boolean;
  landArea?: string;
  yearBuilt?: number;
}

export default function PropertyDetailsContent({
  description = "Casa Lomas de Machali offers a perfect blend of comfort, privacy, and nature. Nestled in one of Machali's most secure and peaceful residential areas, this beautiful property features modern architecture, open interiors, and large windows that fill the home with natural light and warmth throughout the day.\n\nIts tranquil surroundings and convenient access to local amenities, including schools, shops, and parks, make it ideal for families or anyone seeking a serene and connected lifestyle just minutes from Rancagua.",
  propertyId = "423146",
  type = "Villa",
  bedrooms = 3,
  bathrooms = 3,
  size = "3,200 SqFt",
  garages = true,
  landArea = "4,200 SqFt",
  yearBuilt = 2024,
}: PropertyDetailsContentProps) {
  const overviewItems = [
    {
      icon: Home,
      label: "ID:",
      value: propertyId,
    },
    {
      icon: Layers,
      label: "Type:",
      value: type,
    },
    {
      icon: Bed,
      label: "Bedrooms:",
      value: `${bedrooms} Rooms`,
    },
    {
      icon: Shower,
      label: "Bathrooms:",
      value: `${bathrooms} Rooms`,
    },
    {
      icon: Ruler,
      label: "Size:",
      value: size,
    },
    {
      icon: Car,
      label: "Garages:",
      value: garages ? "Yes" : "No",
    },
    {
      icon: Square,
      label: "Land area:",
      value: landArea,
    },
    {
      icon: Calendar,
      label: "Year Built:",
      value: yearBuilt.toString(),
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Description Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Description
            </h2>
            <div className="space-y-4">
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-500 leading-relaxed text-sm"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="mt-6 cursor-pointer text-sm text-gray-900 font-medium underline hover:no-underline transition-all">
              View More
            </button>
          </div>

          {/* Overview Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Overview
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {overviewItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1 ">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
