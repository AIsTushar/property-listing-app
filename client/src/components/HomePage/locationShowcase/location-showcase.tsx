import Image from "next/image";

export default function LocationShowcase() {
  const locations = [
    {
      city: "Los Angeles, CA",
      propertyCount: "221 Property",
      image: "/images/image_1.jpg",
    },
    {
      city: "New York City, NY",
      propertyCount: "128 Property",
      image: "/images/image_2.jpg",
    },
    {
      city: "Miami, FL",
      propertyCount: "254 Property",
      image: "/images/image_3.jpg",
    },
    {
      city: "Chicago, IL",
      propertyCount: "251 Property",
      image: "/images/image_4.jpg",
    },
    {
      city: "San Francisco, CA",
      propertyCount: "221 Property",
      image: "/images/image_5.jpg",
    },
    {
      city: "Boston, MA",
      propertyCount: "128 Property",
      image: "/images/image_6.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Explore Cities
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900">
            Our Location For You
          </h2>
        </div>

        {/* Location Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.city}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  fill
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Location Details */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  {location.city}
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  {location.propertyCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
