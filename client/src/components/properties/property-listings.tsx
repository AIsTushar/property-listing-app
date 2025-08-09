import Link from "next/link";
import PropertyCard from "../UI/Property-card";
import { ChevronRight } from "lucide-react";

export default function PropertyListings() {
  const properties = [
    {
      image: "/images/image_1.jpg",
      status: "For Rent" as const,
      propertyType: "Apartment",
      price: "$250.00",
      priceUnit: "/month" as const,
      title: "Villa Del Mar Retreat, Malibu",
      address: "72 Sunset Avenue, Los Angeles, California",
      beds: 4,
      baths: 2,
      sqft: "2,400",
    },
    {
      image: "/images/image_2.jpg",
      status: "For Sale" as const,
      propertyType: "Villa",
      price: "$6130.00",
      priceUnit: "/SQFT" as const,
      title: "Sunset Heights Estate",
      address: "245 Elm Street, San Francisco, CA 94102",
      beds: 3,
      baths: 2,
      sqft: "1,600",
    },
    {
      image: "/images/image_3.jpg",
      status: "For Rent" as const,
      propertyType: "Studio",
      price: "$5280.00",
      priceUnit: "/month" as const,
      title: "Coastal Serenity Cottage",
      address: "918 Maple Avenue, Brooklyn, NY 11215",
      beds: 4,
      baths: 2,
      sqft: "2,600",
    },
    {
      image: "/images/image_4.jpg",
      status: "For Sale" as const,
      propertyType: "House",
      price: "$6640.00",
      priceUnit: "/SQFT" as const,
      title: "Rancho Vista Verde",
      address: "456 Oak Drive, Austin, TX 78701",
      beds: 5,
      baths: 3,
      sqft: "3,200",
    },
    {
      image: "/images/image_5.jpg",
      status: "For Rent" as const,
      propertyType: "Villa",
      price: "$320.00",
      priceUnit: "/month" as const,
      title: "Villa Del Mar Retreat",
      address: "789 Pine Street, Miami, FL 33101",
      beds: 4,
      baths: 3,
      sqft: "2,800",
    },
    {
      image: "/images/image_7.jpg",
      status: "For Sale" as const,
      propertyType: "House",
      price: "$5210.00",
      priceUnit: "/SQFT" as const,
      title: "Casa Lomas de Machali",
      address: "321 Cedar Lane, Seattle, WA 98101",
      beds: 3,
      baths: 2,
      sqft: "2,100",
    },
    {
      image: "/images/image_8.jpg",
      status: "For Rent" as const,
      propertyType: "Apartment",
      price: "$450.00",
      priceUnit: "/month" as const,
      title: "Paramount Residences",
      address: "654 Birch Avenue, Portland, OR 97201",
      beds: 2,
      baths: 1,
      sqft: "1,200",
    },
    {
      image: "/images/image_9.jpg",
      status: "For Rent" as const,
      propertyType: "House",
      price: "$320.00",
      priceUnit: "/month" as const,
      title: "Coastal Hill Estates",
      address: "987 Maple Court, San Diego, CA 92101",
      beds: 3,
      baths: 2,
      sqft: "1,800",
    },
    {
      image: "/images/image_1.jpg",
      status: "For Sale" as const,
      propertyType: "Condo",
      price: "$5210.00",
      priceUnit: "/SQFT" as const,
      title: "Oceanview Heights",
      address: "147 Ocean Drive, Los Angeles, CA 90210",
      beds: 2,
      baths: 2,
      sqft: "1,500",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>
              <ChevronRight className="w-4 h-4" />
            </span>
            <span className="text-gray-400">With Top Map</span>
          </nav>

          {/* Title and Controls */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900">With Top Map</h1>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-gray-900 pr-10">
                  <option>Sort by (Default)</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600">
            ←
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-900 text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
