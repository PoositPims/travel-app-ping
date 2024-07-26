/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ATTRACTION_PAGE_PICS, Attraction } from "@/constants/index";
import Image from "next/image";
import LeafletMap from "@/app/components/LeafletMap";

function AttractionDetail({ params }: { params: { id: string } }) {
  const [name, setName] = useState<Attraction | any>(null);
  const [picture, setPicture] = useState<Attraction | any>(null);
  const [latitude, setLatitude] = useState<Attraction | any>(null);
  const [longitude, setLongitude] = useState<Attraction | any>(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      const attraction = ATTRACTION_PAGE_PICS.find((attr) => attr.id === id);
      if (attraction) {
        setName(attraction.title);
        setPicture(attraction);
        setLatitude(attraction.lat);
        setLongitude(attraction.long);
      }
    }
  }, [id]);

  if (!id || !picture) {
    return <div className="max-container padding-container">Loading...</div>;
  }

  return (
    <div className="max-container padding-container md:px-40 my-10">
      <div className="mb-5 flex flex-col">
        <Image
          src={picture?.image}
          alt={picture?.alt}
          width={1000}
          height={1000}
          className="md:mx-auto md:order-1 md:mt-5 "
        />
        <h1 className="text-3xl mt-5 md:mt-0">{picture.title}</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio
          corrupti repudiandae quaerat magnam saepe harum temporibus enim quam.
          Asperiores ipsum nostrum, repudiandae nulla blanditiis eaque aut
          facere sint culpa!
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl mt-5 md:mt-0 mb-5">Map of attraction</h1>
        <LeafletMap lat={latitude} long={longitude} name={name} />
      </div>
    </div>
  );
}

export default AttractionDetail;
