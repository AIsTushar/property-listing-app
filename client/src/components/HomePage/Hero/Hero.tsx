import ButtonHero from "@/components/UI/ButtonHero";
import ImageSlider from "@/components/UI/ImageSlider";
import React from "react";

export default function Hero() {
  return (
    <section className="">
      {/* Text Part */}
      <div className="mx-34 py-12 flex items-center justify-between">
        <h1 className="text-6xl font-semibold flex-2 leading-tight">
          Discover Your <br /> Perfect Living Spot
        </h1>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-sm text-gray-600">
            This luxurious coastal villa in Malibu boasts sweeping ocean views,
            modern open-concept design, and refined elegance throughout.
          </p>
          <p className="text-sm text-gray-600">
            Relax with an infinity pool, vibrant gardens, and private beach
            access for the ultimate seaside retreat.
          </p>
          <div className="self-start">
            <ButtonHero text="View Properties" />
          </div>
        </div>
      </div>
      {/*Slider  */}
      <ImageSlider />
    </section>
  );
}
