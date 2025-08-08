import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonHero({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative h-10 w-auto cursor-pointer overflow-hidden rounded-md bg-black px-3"
    >
      {/* Text color transition here */}
      <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black text-xs font-semibold">
        {text}
      </span>

      {/* Background animation */}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
}
