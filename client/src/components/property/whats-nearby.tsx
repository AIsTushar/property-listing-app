interface NearbyAmenity {
  name: string;
  distance: string;
  category?:
    | "education"
    | "shopping"
    | "healthcare"
    | "recreation"
    | "dining"
    | "transportation"
    | "entertainment";
}

interface WhatsNearbyProps {
  description?: string;
  amenities?: NearbyAmenity[];
}

export default function WhatsNearby({
  description = "Whether you're raising a family or enjoying a peaceful retreat, you'll appreciate the close proximity to essential services, green spaces, and entertainment options.",
  amenities = [
    { name: "School", distance: "0.7 Km", category: "education" },
    { name: "Sports Stadium", distance: "0.4 Km", category: "entertainment" },
    { name: "Center", distance: "0.4 Km", category: "shopping" },
    { name: "Supermarket", distance: "1.3 Km", category: "shopping" },
    { name: "Pharmacy", distance: "1.8 Km", category: "healthcare" },
    { name: "City Center", distance: "1.8 Km", category: "transportation" },
    { name: "Clinic", distance: "0.6 Km", category: "healthcare" },
    { name: "Cafe", distance: "1.3 Km", category: "dining" },
    { name: "Vineyard", distance: "1.3 Km", category: "recreation" },
    { name: "Park", distance: "1.1 Km", category: "recreation" },
    { name: "Shopping", distance: "2.1 Km", category: "shopping" },
  ],
}: WhatsNearbyProps) {
  // Split amenities into three columns
  const itemsPerColumn = Math.ceil(amenities.length / 3);
  const columns = [
    amenities.slice(0, itemsPerColumn),
    amenities.slice(itemsPerColumn, itemsPerColumn * 2),
    amenities.slice(itemsPerColumn * 2),
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What&apos;s Nearby?
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-10">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((amenity, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <span className="text-sm text-gray-500">{amenity.name}:</span>
                  <span className="text-gray-900 font-semibold text-sm">
                    {amenity.distance}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
