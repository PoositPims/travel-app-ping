import Image from "next/image";
import React from "react";
import { MULTICULTURAL_MAIN_PAGE } from "@/constants";

function page() {
  return (
    <div className="max-container mb-3">
      <Image
        className="mx-auto md:w-[95%] md:h-[550px] object-cover"
        src="/multicultural.png"
        alt="multicultural"
        width={1000}
        height={1000}
      />
      <div className="mt-8 md:mx-auto md:w-[80%] md:bg-white md:-translate-y-36 md:pt-8">
        <div className="padding-container">
          <p className="text-3xl font-semibold">Multicultural</p>
          <p className="text-lg mt-3">
            Though our beliefs differ, we are united as Yala people
          </p>
        </div>
        <div className="mt-8 md:grid md:grid-cols-2 md:mt-3">
          {MULTICULTURAL_MAIN_PAGE.map((val) => (
            <div key={val.id} className="md:mt-8 w-full">
              <Image
                src={val.picture}
                alt={val.picture}
                width={1000}
                height={1000}
                className="mx-2 md:w-4/5 md:h-4/5 md:mx-auto cursor-pointer"
              />
              <div className="bg-red-100 py-5 md:py-6 px-3 w-[90%] md:w-4/6 mx-auto -translate-y-8 cursor-pointer">
                <p className="text-xl font-bold">{val.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
