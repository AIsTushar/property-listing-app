import { Bed, Bath, Square, Heart } from "lucide-react";
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
    <div className="group bg-white cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
          fill
        />
        {/* Status Badges - Top Left */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`px-2 py-1 rounded-md text-xs font-medium ${
              status === "For Rent"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {status}
          </span>
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-gray-700">
            {propertyType}
          </span>
        </div>

        {/* Wishlist - Top Right */}
        <div className="absolute top-4 right-4">
          {/* Heart Icon - Only visible on card hover */}
          <div className="relative group/wishlist">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-1 rounded-md cursor-pointer hover:bg-white">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
            </div>

            {/* Add to Wishlist text - Only visible on heart hover */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-12 opacity-0 group-hover/wishlist:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 text-white text-[8px] px-2 py-1 rounded-lg whitespace-nowrap">
                Add to Wishlist
                {/* Arrow pointing to heart */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 text-sm">{priceUnit}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-700 mb-1">{title}</h3>

        {/* Address */}
        <p className="text-gray-500 text-xs mb-4">{address}</p>

        {/* Property Features */}
        <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span className="font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            <span className="font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4" />
            <span className="font-medium">{sqft} Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
