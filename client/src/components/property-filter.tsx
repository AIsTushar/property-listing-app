"use client";

import { useState } from "react";

export default function PropertyFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"rent" | "sale">("sale");
  const [filters, setFilters] = useState({
    keyword: "",
    location: "All Cities",
    bedrooms: "Any Bedrooms",
    budget: "Max. Price",
    bathrooms: "Any Bathrooms",
    garages: "Any Garages",
    minSize: "Min (SqFt)",
    maxSize: "Max (SqFt)",
  });

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const amenitiesList = [
    "Air Condition",
    "Disabled Access",
    "Floor",
    "Heating",
    "Renovation",
    "Window Type",
    "Cable TV",
    "Elevator",
    "Furnishing",
    "Intercom",
    "Security",
    "Search property",
    "Ceiling Height",
    "Fence",
    "Garage",
    "Parking",
    "Swimming Pool",
    "Construction Year",
    "Fireplace",
    "Garden",
    "Pet Friendly",
    "WiFi",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
      {/* Tab Buttons */}
      <div className="flex gap-0 mb-6">
        <button
          onClick={() => setActiveTab("rent")}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === "rent"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
          }`}
          style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}
        >
          For Rent
        </button>
        <button
          onClick={() => setActiveTab("sale")}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === "sale"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
          }`}
          style={{
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          For Sale
        </button>
      </div>

      {/* Main Filter Row */}
      <div className="flex gap-4 items-end mb-4">
        {/* Looking For */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Looking For
          </label>
          <input
            type="text"
            placeholder="Search keyword"
            value={filters.keyword}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, keyword: e.target.value }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Location */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Location
          </label>
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
            >
              <option>All Cities</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Miami</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

        {/* Bedrooms */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Bedrooms
          </label>
          <div className="relative">
            <select
              value={filters.bedrooms}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, bedrooms: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
            >
              <option>Any Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4+ Bedrooms</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

        {/* Budget */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Your Budget
          </label>
          <div className="relative">
            <select
              value={filters.budget}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, budget: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
            >
              <option>Max. Price</option>
              <option>$1,000</option>
              <option>$2,000</option>
              <option>$3,000</option>
              <option>$5,000+</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

        {/* Filter Toggle Button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Search Button */}
        <div className="flex-shrink-0">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors h-12">
            Search
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      <div className="relative">
        <div
          className={`absolute top-5 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 ${
            isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="p-6">
            {/* Additional Filters Row */}
            <div className="flex gap-4 mb-8">
              {/* Bathrooms */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Bathrooms
                </label>
                <div className="relative">
                  <select
                    value={filters.bathrooms}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        bathrooms: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
                  >
                    <option>Any Bathrooms</option>
                    <option>1 Bathroom</option>
                    <option>2 Bathrooms</option>
                    <option>3+ Bathrooms</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

              {/* Garages */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Garages
                </label>
                <div className="relative">
                  <select
                    value={filters.garages}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        garages: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
                  >
                    <option>Any Garages</option>
                    <option>1 Garage</option>
                    <option>2 Garages</option>
                    <option>3+ Garages</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

              {/* Min Size */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Min size
                </label>
                <div className="relative">
                  <select
                    value={filters.minSize}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        minSize: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
                  >
                    <option>Min (SqFt)</option>
                    <option>500 SqFt</option>
                    <option>1000 SqFt</option>
                    <option>1500 SqFt</option>
                    <option>2000+ SqFt</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

              {/* Max Size */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Max size
                </label>
                <div className="relative">
                  <select
                    value={filters.maxSize}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        maxSize: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900 pr-10"
                  >
                    <option>Max (SqFt)</option>
                    <option>1000 SqFt</option>
                    <option>2000 SqFt</option>
                    <option>3000 SqFt</option>
                    <option>5000+ SqFt</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

            {/* Amenities Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Amenities:
              </h3>
              <div className="grid grid-cols-6 gap-x-8 gap-y-4">
                {amenitiesList.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 select-none">
                      {amenity}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
