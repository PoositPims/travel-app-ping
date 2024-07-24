"use client";

import React, { useEffect, useState } from "react";
import { ATTRACTION_PAGE_PICS, Attraction } from "@/constants/index";
import Image from "next/image";
function AttractionDetail({ params }: { params: { id: string } }) {
  const [picture, setPicture] = useState<Attraction | any>(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      const attraction = ATTRACTION_PAGE_PICS.find((attr) => attr.id === id);
      if (attraction) {
        setPicture(attraction);
      }
    }
  }, [id]);

  console.log("picture", picture);

  if (!id || !picture) {
    return <div className="max-container padding-container">Loading...</div>;
  }

  return (
    <div className="max-container padding-container md:px-40 my-10">
      <div className="mb-5">
        <h1 className="text-3xl ">{picture.title}</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio
          corrupti repudiandae quaerat magnam saepe harum temporibus enim quam.
          Asperiores ipsum nostrum, repudiandae nulla blanditiis eaque aut
          facere sint culpa!
        </p>
      </div>
      <Image
        src={picture?.image}
        alt={picture?.alt}
        width={800}
        height={800}
        className="md:mx-auto"
      />
    </div>
  );
}

export default AttractionDetail;
