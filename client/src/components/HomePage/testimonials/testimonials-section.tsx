"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adam Will",
      title: "CEO Agency Avitex",
      rating: 5,
      quote:
        "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
      image: "/images/image_1.jpg",
    },
    {
      name: "Sarah Johnson",
      title: "Real Estate Investor",
      rating: 5,
      quote:
        "Outstanding service from start to finish. The team helped me find the perfect investment property and guided me through every step of the process. Their expertise and dedication are unmatched.",
      image: "/images/image_2.jpg",
    },
    {
      name: "Michael Chen",
      title: "First-time Homebuyer",
      rating: 5,
      quote:
        "As a first-time buyer, I was nervous about the process. The team made everything so smooth and explained each step clearly. I couldn't be happier with my new home and the service I received.",
      image: "/images/image_3.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Testimonial Content */}
          <div className="space-y-6">
            {/* Header */}
            <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              Testimonials
            </p>

            {/* Fixed Height Container for Content */}
            <div className="relative h-[400px] overflow-hidden">
              <AnimatePresence mode="wait" custom={currentTestimonial}>
                <motion.div
                  key={currentTestimonial}
                  custom={currentTestimonial}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      nextTestimonial();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevTestimonial();
                    }
                  }}
                  className="absolute inset-0 space-y-6 cursor-grab active:cursor-grabbing"
                >
                  {/* Client Info */}
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Right Column - Client Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTestimonial}
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
