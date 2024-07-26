/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import React from "react";
import { RESTAURANT_MAIN_PAGE } from "@/constants";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  function handleClick(id: number) {
    // id 1 = tast of yala, id 2 = nightlife
    if (id === 1) {
      router.push("/restaurant/taste-of-yala");
    } else if (id === 2) {
      router.push("/restaurant/night-life");
    }
  }

  return (
    <div className="max-container mb-3">
      <Image
        className="mx-auto md:w-[95%] md:h-[550px]"
        src="/dim-sum.jpeg"
        alt="dim-sum"
        width={1000}
        height={1000}
      />
      <div className="mt-8 md:mx-auto md:w-[80%] md:bg-white md:-translate-y-36 md:pt-8">
        <div className="padding-container">
          <p className="text-3xl font-semibold">Restaurants and nightlife</p>
          <p className="text-lg mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, ullam explicabo! Sunt id aut, vitae repellendus corrupti
            vel aliquam repellat?
          </p>
        </div>
        <div className="mt-8 md:grid md:grid-cols-2 md:mt-3">
          {RESTAURANT_MAIN_PAGE.map((val) => (
            <div key={val.id} className="md:mt-8 w-full">
              <Image
                src={val.picture}
                alt={val.picture}
                width={1000}
                height={1000}
                className="mx-2 md:w-4/5 md:h-4/5 md:mx-auto cursor-pointer"
                onClick={() => handleClick(val.id)}
              />
              <div
                className="bg-red-100 py-5 md:py-6 px-3 w-[90%] md:w-4/6 mx-auto -translate-y-12 cursor-pointer"
                onClick={() => handleClick(val.id)}
              >
                <p className="text-xl font-bold">{val.title}</p>
                <p className="mt-3">{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
