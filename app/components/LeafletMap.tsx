import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CiMapPin } from "react-icons/ci";

const LeafletMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !mapInstance.current) {
      mapInstance.current = L.map(mapContainer.current).setView(
        [6.541416807864021, 101.27505077516143],
        15
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // const marker = L.marker([6.541416807864021, 101.27505077516143]).addTo(
      //   mapInstance.current
      // );

      const customIcon: any = {
        iconUrl: "public/pin.png",
        iconSize: [40, 40],
      };

      const myIcon = L.icon(customIcon);
      console.log("myIcon", myIcon.options.iconUrl);
      const IconOptions = {
        title: "test",
        draggable: true,
        icon: myIcon,
      };

      const marker = L.marker(
        [6.541416807864021, 101.27505077516143],
        IconOptions
      );
      marker.addTo(mapInstance.current);
      marker.bindPopup("<b>Suan Kwan Muang</b>").openPopup();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-[100%] h-64 md:h-96 md:mx-auto md:w-[800px]"
    ></div>
  );
};

export default LeafletMap;
