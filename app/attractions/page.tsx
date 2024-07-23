"use client";

import { ATTRACTION_PAGE_PICS } from "@/constants";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="max-container padding-container pb-10 lg:mb-10 lg:pb-20 xl:mb-20">
      <div className="my-10">
        <h1 className="text-2xl md:text-5xl">
          <span className="border-b-4 mb-3 border-green-500">Things </span>
          you will see in Yala
        </h1>
        <p className="mt-3">Let&apos;s explore Yala together</p>
        <p>Then you will love Yala</p>
      </div>
      <div className="max-container mt-2 grid md:grid-cols-3 gap-5">
        {ATTRACTION_PAGE_PICS.map((image, index) => (
          <div key={index}>
            <Image
              src={image.image}
              alt={image.alt}
              width={800}
              height={800}
              className="h-[300px] object-cover	"
            />
            <p className="text-xl bg-gray-800 text-white opacity-75 absolute transform -translate-y-11 p-2">
              {image.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
