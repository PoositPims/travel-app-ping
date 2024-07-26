"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import { TRAVEl_PICS } from "@/constants";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("currentIndex", currentIndex);

  const prevSlide = () => {
    setCurrentIndex((prevIndex): any =>
      prevIndex === 0 ? TRAVEl_PICS.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TRAVEl_PICS.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="h-60 md:h-full  relative overflow-hidden rounded-xl shadow-md">
      <div
        className="flex transition-transform duration-500 md:h-[400px] ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {TRAVEl_PICS.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.image}
              alt={`Slide ${index}`}
              // className="w-full object-cover object-bottom bottom-0"
              className="md:h-[600px] md:w-full object-cover bottom-0"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </section>
  );
}

export default Carousel;
