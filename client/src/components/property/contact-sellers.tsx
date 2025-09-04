import { Phone, MapPin, MessageCircle, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

interface ContactSellersProps {
  agent?: {
    name: string;
    title: string;
    image: string;
    description: string;
    address: string;
    phone1: string;
    phone2: string;
  };
}

export default function ContactSellers({
  agent = {
    name: "Jorge R.",
    title: "Senior Property Manager",
    image: "/person.jpg",
    description:
      "Jorge is a dedicated real estate agent known for his professionalism, market knowledge, reliable property guidance across and nearby areas.",
    address: "4556 Peachtree Dunwoody Rd, Atlanta, GA 30338",
    phone1: "1-555-478-8888",
    phone2: "1-555-478-8888",
  },
}: ContactSellersProps) {
  return (
    <div className="rounded-2xl max-h-fit p-6 bg-[#F8F7F3]">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Sellers</h3>

      {/* Agent Profile */}
      <div className="mb-6">
        <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
          <Image
            src={agent.image || "/placeholder.svg"}
            alt={agent.name}
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>

        <h4 className="text-lg font-bold text-gray-900 mb-1">{agent.name}</h4>
        <p className="text-gray-500 font-medium text-sm mb-3">{agent.title}</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          {agent.description}
        </p>
      </div>

      {/* Information Section */}
      <div className="mb-6">
        <h5 className="font-semibold text-gray-900 mb-4">Information</h5>

        <div className="space-y-3">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">{agent.address}</p>
              <button className="text-black cursor-pointer text-sm font-medium hover:underline transition-colors">
                Get Directions
              </button>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm text-gray-500">{agent.phone1}</p>
              <p className="text-sm text-gray-500">{agent.phone2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full cursor-pointer bg-gray-900 hover:bg-primary hover:text-black text-white py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
          <PhoneCall className="w-4 h-4" />
          Call To Dealer
        </button>
        <button className="w-full cursor-pointer bg-primary hover:bg-gray-800 text-black hover:text-white py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" />
          Mail To Dealer
        </button>
        <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Chat With Dealer
        </button>
      </div>
    </div>
  );
}
