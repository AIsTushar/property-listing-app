import { Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  image: string;
  status: "For Rent" | "For Sale";
  propertyType: string;
  price: string;
  priceUnit: "/month" | "/SQFT";
  title: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
}

export default function PropertyCard({
  image,
  status,
  propertyType,
  price,
  priceUnit,
  title,
  address,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
          fill
        />
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "For Rent"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {status}
          </span>
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {propertyType}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 text-sm">{priceUnit}</span>
        </div>

        {/* Title and Address */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{address}</p>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{sqft} Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
