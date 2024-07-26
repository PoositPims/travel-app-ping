"use client";

import { useRouter } from "next/navigation";
import { ATTRACTION_PAGE_PICS } from "@/constants";
import Image from "next/image";
import React from "react";

function Page() {
  const router = useRouter();

  function handleClick(id: string) {
    router.push(`/attractions/${id}`);
  }

  return (
    <section className="max-container padding-container pb-10 lg:mb-10 lg:pb-20 xl:mb-20">
      <div className="my-10 md:px-40">
        <h1 className="text-2xl md:text-5xl">
          <span className="border-b-4 mb-3 border-green-500">Things </span>
          you will see in Yala
        </h1>
        <div className="mt-5">
          <p>Let&apos;s explore Yala together</p>
          <p>Then you will love Yala</p>
        </div>
      </div>
      <div className="max-container grid md:grid-cols-3 gap-5">
        {ATTRACTION_PAGE_PICS.map((image) => (
          <div
            key={image.id}
            onClick={() => handleClick(image.id)}
            className="cursor-pointer"
          >
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

export default Page;
