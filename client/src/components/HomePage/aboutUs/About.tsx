import ButtonHero from "@/components/UI/ButtonHero";
import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Us */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                About Us
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Building Dreams, One Home At A Time
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our mission goes beyond real estate — it&rsquo;s about guiding
                you through one of life&rsquo;s biggest milestones with heart,
                expertise, and unwavering commitment.
              </p>
            </div>
            <ButtonHero text="View Properties" />
          </div>

          {/* Right Column - Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">01.</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Buy A New Home
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Discover your dream home effortlessly. Explore diverse
                  properties and expert guidance for a seamless buying
                  experience.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">02.</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Rent A Home</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Discover your perfect rental effortlessly. Explore a diverse
                  variety of listings tailored precisely to suit your unique
                  lifestyle needs.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">03.</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Sell A Home</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sell confidently with expert guidance and effective
                  strategies, showcasing your property&rsquo;s best features for
                  a successful sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
