import ButtonHero from "@/components/UI/ButtonHero";
import PropertyCard from "@/components/UI/Property-card";

export default function FeaturedProperties() {
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
      propertyType: "Penthouse",
      price: "$7500.00",
      priceUnit: "/SQFT" as const,
      title: "Skyline Penthouse View",
      address: "1010 Park Avenue, Manhattan, NY 10028",
      beds: 5,
      baths: 4,
      sqft: "3,200",
    },
    {
      image: "/images/image_5.jpg",
      status: "For Rent" as const,
      propertyType: "Loft",
      price: "$3200.00",
      priceUnit: "/month" as const,
      title: "Downtown Industrial Loft",
      address: "330 Market Street, Philadelphia, PA 19106",
      beds: 2,
      baths: 1,
      sqft: "1,500",
    },
    {
      image: "/images/image_6.jpg",
      status: "For Sale" as const,
      propertyType: "Townhouse",
      price: "$450.00",
      priceUnit: "/SQFT" as const,
      title: "Greenfield Townhouse",
      address: "555 Oakwood Lane, Austin, TX 73301",
      beds: 3,
      baths: 2,
      sqft: "2,000",
    },
    {
      image: "/images/image_7.jpg",
      status: "For Rent" as const,
      propertyType: "Condo",
      price: "$1800.00",
      priceUnit: "/month" as const,
      title: "Beachside Condo Escape",
      address: "89 Ocean Drive, Miami Beach, FL 33139",
      beds: 2,
      baths: 2,
      sqft: "1,200",
    },
    {
      image: "/images/image_8.jpg",
      status: "For Sale" as const,
      propertyType: "Farmhouse",
      price: "$310.00",
      priceUnit: "/SQFT" as const,
      title: "Rustic Countryside Farmhouse",
      address: "788 Harvest Road, Nashville, TN 37011",
      beds: 4,
      baths: 3,
      sqft: "2,800",
    },
    {
      image: "/images/image_9.jpg",
      status: "For Rent" as const,
      propertyType: "Cottage",
      price: "$1250.00",
      priceUnit: "/month" as const,
      title: "Lakeview Cottage Retreat",
      address: "142 Lake Road, Madison, WI 53703",
      beds: 2,
      baths: 1,
      sqft: "950",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Featured Properties
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900">
            Find Your Dream Home
          </h2>
        </div>

        {/* Property Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonHero text="View All Properties" />
        </div>
      </div>
    </section>
  );
}
