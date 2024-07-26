import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationProps {
  lat: any;
  long: any;
  name: string;
}

const LeafletMap: React.FC<LocationProps> = ({ lat, long, name }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    // if (mapContainer.current && !mapInstance.current) {
    //   mapInstance.current = L.map(mapContainer.current).setView(
    //     [6.541416807864021, 101.27505077516143],
    //     15
    //   );
    if (mapContainer.current && !mapInstance.current) {
      mapInstance.current = L.map(mapContainer.current).setView(
        [lat, long],
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
      const IconOptions = {
        title: "test",
        draggable: true,
        icon: myIcon,
      };

      // const marker = L.marker(
      //   [6.541416807864021, 101.27505077516143],
      //   IconOptions
      // );
      const marker = L.marker([lat, long], IconOptions);
      marker.addTo(mapInstance.current);
      // marker.bindPopup("<b>Suan Kwan Muang</b>").openPopup();
      marker.bindPopup(`<b>${name}</b>`).openPopup();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainer} className="w-[100%] h-64 md:h-96 md:mx-auto"></div>
  );
};

export default LeafletMap;
