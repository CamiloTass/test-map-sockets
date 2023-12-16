import "./style.css";
import { useEffect, useRef } from "react";

export const MyMapComponent = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div className="mapstyle" ref={ref} id="map" />;
};
