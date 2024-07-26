import Image from "next/image";
import React from "react";
import { RESTAURANT_MAIN_PAGE } from "@/constants";

function page() {
  const nightLife = RESTAURANT_MAIN_PAGE[1];
  return (
    <div className="max-container mb-3">
      <Image
        className="mx-auto md:w-[95%] md:h-[550px]"
        src="/night-life-menu.png"
        alt="night-life-menu.png"
        width={1000}
        height={1000}
      />
      <div className="max-container padding-container my-5 md:mx-auto md:w-[80%] md:bg-white md:-translate-y-36 md:pt-8">
        <div>
          <h1 className="text-3xl font-semibold">{nightLife.title}</h1>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et amet
            quae porro nemo doloremque illum odit sequi sit quasi quibusdam.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          {nightLife.club?.map((val) => (
            <div key={val.id} className="mt-5">
              <Image
                src={val.picture}
                alt={val.picture}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover"
              />
              <div className="bg-red-100 py-5 md:py-6 px-3 w-[90%]  mx-auto -translate-y-12 ">
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
