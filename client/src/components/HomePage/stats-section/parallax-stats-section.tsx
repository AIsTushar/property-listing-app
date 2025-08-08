"use client";

import { Award, BarChart3, PieChart } from "lucide-react";

export default function ParallaxStatsSection() {
  const stats = [
    {
      number: "112",
      label: "Awards Received",
      icon: Award,
    },
    {
      number: "85",
      label: "Satisfied Clients",
      icon: BarChart3,
    },
    {
      number: "66",
      label: "Monthly Traffic",
      icon: PieChart,
    },
  ];

  return (
    <section
      className="relative h-[464px] overflow-hidden"
      style={{
        // transform: `translateY(${scrollY * 0.2}px)`,
        backgroundImage: 'url("/contact.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Foreground content */}
      <div className="relative z-20 h-full flex items-center justify-end px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
