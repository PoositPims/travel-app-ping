import React from "react";
import { GrAttraction } from "react-icons/gr";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineHotel } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

function Guide() {
  return (
    <div className="max-container padding-container my-10">
      <h1 className="text-center text-4xl">Your Guide in Yala</h1>
      <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:justify-center">
        <div className="">
          <p className="bg-cyan-100 text-center p-16 md:px-28 md:py-18">
            <GrAttraction className="text-6xl" />
          </p>
          <p className="text-center mt-2 text-xl">Attractions</p>
        </div>
        <div>
          <p className="bg-red-100 text-center p-16 md:px-28 md:py-18">
            <IoRestaurantOutline className="text-6xl" />
          </p>
          <p className="text-center mt-2 text-xl">Restaurants</p>
        </div>
        <div>
          <p className="bg-green-100 text-center p-16 md:px-28 md:py-18">
            <MdOutlineHotel className="text-6xl" />
          </p>
          <p className="text-center mt-2 text-xl">Accommodation</p>
        </div>
        <div>
          <p className="bg-sky-100 text-center p-16 md:px-28 md:py-18">
            <VscOrganization className="text-6xl" />
          </p>
          <p className="text-center mt-2 text-xl">Multiculturalism</p>
        </div>
      </div>
    </div>
  );
}

export default Guide;
