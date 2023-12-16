import React, { useCallback, useState } from "react";
import { useMapStore } from "../../../store/mapStore";

const KEY_MAP = "AIzaSyA0dFrFGq7FFTbSuuKYvj60JB1P_WvUuPI";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const ContentUsers = () => {
  const { latAndLng } = useMapStore((state) => state);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: KEY_MAP,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <section className="md:col-span-1">
      <header className="h-[4rem] dark:bg-slate-900 bg-emerald-600 p-5 flex justify-between items-center">
        <p className="font-bold">Hola,!</p>
        <button className="bg-blue-500 text-white p-2 rounded-lg md:hidden"></button>
        <button className="bg-red-500 text-white border-2 border-red-500 py-1 px-8 rounded-lg hover:bg-transparent hover:text-red-400">
          Salir
        </button>
      </header>
      <section className="">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker
              position={{
                lat: latAndLng?.data?.lat,
                lng: latAndLng?.data?.log,
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};
