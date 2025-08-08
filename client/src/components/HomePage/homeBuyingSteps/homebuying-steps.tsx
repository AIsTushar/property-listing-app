export default function HomebuyingSteps() {
  const steps = [
    {
      number: "01.",
      title: "Discover Your Dream Home",
      description:
        "Browse through a curated selection of properties tailored to your lifestyle and budget.",
    },
    {
      number: "02.",
      title: "Schedule A Viewing",
      description:
        "Book a tour at your convenience and explore the space in person or virtually.",
    },
    {
      number: "03.",
      title: "Seal The Deal",
      description:
        "Get expert guidance to finalize paperwork and move into your new home with confidence.",
    },
  ];

  return (
    <section className="relative h-[464px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/image_3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Content Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Homebuying Steps
              </h2>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-400">
                      {step.number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
