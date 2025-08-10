import type React from "react";
import {
  Flame,
  Snowflake,
  Wifi,
  Key,
  Tv,
  Shield,
  FlameIcon as Fireplace,
  Sun,
  Wind,
} from "lucide-react";

interface UtilityItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail?: string;
  available: boolean;
}

interface PropertyUtilityProps {
  utilities?: UtilityItem[];
}

export default function PropertyUtility({ utilities }: PropertyUtilityProps) {
  const defaultUtilities: UtilityItem[] = [
    {
      icon: Flame,
      label: "Heating",
      detail: "Natural Gas",
      available: true,
    },
    {
      icon: Snowflake,
      label: "Air Conditioning",
      available: true,
    },
    {
      icon: Wifi,
      label: "Wifi",
      available: true,
    },
    {
      icon: Key,
      label: "Self check-in with lockbox",
      available: true,
    },
    {
      icon: Tv,
      label: "Cable TV",
      available: true,
    },
    {
      icon: Shield,
      label: "Security cameras",
      available: true,
    },
    {
      icon: Fireplace,
      label: "Fireplace",
      available: true,
    },
    {
      icon: Sun,
      label: "Solar power",
      available: true,
    },
    {
      icon: Wind,
      label: "Ventilation",
      available: true,
    },
  ];

  const utilityList = utilities || defaultUtilities;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Property Utility
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilityList.map((utility, index) => {
            const IconComponent = utility.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium text-sm">
                      {utility.label}
                    </span>
                    {utility.detail && (
                      <span className="text-gray-600 ml-1">
                        {utility.detail}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-black font-medium">
                  {utility.available ? "Yes" : "No"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
