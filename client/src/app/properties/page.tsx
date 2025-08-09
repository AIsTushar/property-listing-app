import Map from "@/components/map";
import PropertyListings from "@/components/properties/property-listings";
import PropertyFilter from "@/components/property-filter";
import React from "react";

export default function page() {
  return (
    <div className="relative">
      <Map />
      <PropertyFilter />

      <PropertyListings />
    </div>
  );
}
