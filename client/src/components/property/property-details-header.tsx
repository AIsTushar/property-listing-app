import {
  Bed,
  Bath,
  Square,
  ArrowLeftRight,
  Heart,
  Share2,
  MapPin,
} from "lucide-react";
import Image from "next/image";

interface PropertyDetailsHeaderProps {
  title: string;
  price: string;
  priceUnit: string;
  status: "For Rent" | "For Sale";
  propertyType: string;
  beds: number;
  baths: number;
  sqft: string;
  address: string;
  image: string;
}

export default function PropertyDetailsHeader({
  title = "Casa Lomas De Machali",
  price = "$450.00",
  priceUnit = "/month",
  status = "For Rent",
  propertyType = "Villa",
  beds = 3,
  baths = 2,
  sqft = "3,200",
  address = "4600 Sunset Blvd, Los Angeles, CA 90027",
  image = "./images/image_1.jpg",
}: PropertyDetailsHeaderProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Content */}
        <div className="mb-8">
          {/* Status Badges and Price */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-3">
              <span
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  status === "For Rent"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {status}
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium">
                {propertyType}
              </span>
            </div>

            <div className="text-right">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              <span className="text-xl text-gray-600">{priceUnit}</span>
            </div>
          </div>

          {/* Property Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>

          {/* Features and Location */}
          <div className="flex justify-between items-center">
            <div className="flex gap-12">
              {/* Features */}
              <div>
                <p className="text-sm text-orange-500 font-medium mb-3">
                  Features
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">
                      {beds} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">
                      {baths} Baths
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">
                      {sqft} Sqft
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-sm text-orange-500 font-medium mb-3">
                  Location
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900 font-medium">{address}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowLeftRight className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
