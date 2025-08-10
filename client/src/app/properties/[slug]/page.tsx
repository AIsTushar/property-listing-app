import ContactSellers from "@/components/property/contact-sellers";
import CustomerReviews from "@/components/property/customer-reviews";
import PropertyDetailsContent from "@/components/property/property-details-content";
import PropertyDetailsHeader from "@/components/property/property-details-header";
import PropertyTabs from "@/components/property/property-tabs";
import PropertyUtility from "@/components/property/property-utility";
import WhatsNearby from "@/components/property/whats-nearby";

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-5xl mx-auto mt-16">
      <PropertyDetailsHeader
        title="Luxury Villa in Dhaka"
        price="$2,500"
        priceUnit="/month"
        status="For Rent"
        propertyType="Villa"
        beds={4}
        baths={3}
        sqft="3,500"
        address="House 7, Road 14, Gulshan 1, Dhaka"
        image="/images/image_1.jpg"
      />
      <PropertyDetailsContent />
      <PropertyUtility />
      <PropertyTabs />
      <WhatsNearby />

      {/* Contact and Reviews Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactSellers />
          <CustomerReviews />
        </div>
      </div>

      {/* Additional sections would go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-center">
            Additional sections like amenities, floor plans, neighborhood info,
            etc. would go here...
          </p>
        </div>
      </div>
    </div>
  );
}
