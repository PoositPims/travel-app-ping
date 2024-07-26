import Image from "next/image";
import React from "react";
import { RESTAURANT_MAIN_PAGE } from "@/constants";

function page() {
  const food = RESTAURANT_MAIN_PAGE[0];

  return (
    <div className="">
      <div className="md:h-[400px] overflow-hidden">
        <Image
          src={food.picture}
          alt="taste of yala"
          width={1000}
          height={1000}
          className="md:w-full md:px-5"
        />
      </div>
      {/* <div className="max-container padding-container my-5"> */}
      <div className="max-container padding-container my-5 md:mx-auto md:w-[80%] md:bg-white md:-translate-y-36 md:pt-8">
        <div>
          <h1 className="text-3xl font-semibold">{food.title}</h1>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et amet
            quae porro nemo doloremque illum odit sequi sit quasi quibusdam.
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-5">
          {food.restaurant?.map((val) => (
            <div key={val.id} className="mt-5">
              <Image
                src={val.picture}
                alt={val.picture}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover"
              />
              <div className="bg-red-100 py-5 md:py-6 px-3 w-[90%] mx-auto -translate-y-12 ">
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
