"use client";

import type React from "react";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

interface CustomerReviewsProps {
  reviews?: Review[];
  totalReviews?: number;
}

export default function CustomerReviews({
  reviews = [
    {
      id: "1",
      name: "Claudia M.",
      date: "March 18, 2024",
      rating: 5,
      comment:
        "This home is exactly what we were looking for—quiet, spacious, and surrounded by nature. The location is perfect for our family, close to schools and just a short drive to the city.",
      avatar: "/person.jpg",
    },
    {
      id: "2",
      name: "Jorge R.",
      date: "March 18, 2024",
      rating: 5,
      comment:
        "It's a peaceful neighborhood with great views. The house has a modern design and lots of natural light. We especially love the open floor plan and the garden.",
      avatar: "/person.jpg",
    },
    {
      id: "3",
      name: "Isabel T.",
      date: "March 18, 2024",
      rating: 5,
      comment:
        "I was impressed by the quality of the finishes and how well-maintained the property is. It's in a great area—close to everything but still quiet and safe.",
      avatar: "/person.jpg",
    },
  ],
  totalReviews = 18,
}: CustomerReviewsProps) {
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting review:", newReview);
    // Reset form
    setNewReview({ name: "", email: "", comment: "", rating: 0 });
  };

  const renderStars = (
    rating: number,
    interactive = false,
    onRatingChange?: (rating: number) => void
  ) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={
              interactive && onRatingChange
                ? () => onRatingChange(star)
                : undefined
            }
            className={interactive ? "cursor-pointer" : "cursor-default"}
          >
            <Star
              className={`w-4 h-4 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Write a Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6 mb-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                className="w-full h-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="mb-3">{renderStars(review.rating)}</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See All Reviews Link */}
      <div className="mb-8">
        <button className="text-gray-900 font-medium underline hover:no-underline transition-all">
          See All Review ({totalReviews})
        </button>
      </div>

      {/* Add Review Form */}
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4">Add A Review</h4>
        <p className="text-sm text-gray-500 mb-6">
          Your email address will not be published.
        </p>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name*"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email*"
                value={newReview.email}
                onChange={(e) =>
                  setNewReview({ ...newReview, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Review Text Area */}
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Review
            </label>
            <textarea
              id="review"
              rows={4}
              placeholder="Write comment"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Give your rating, whether this best 5 stars review
            </p>
            {renderStars(newReview.rating, true, (rating) =>
              setNewReview({ ...newReview, rating })
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
