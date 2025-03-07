"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const deliveryPoints: { id: number; name: string; position: [number, number] }[] = [
  { id: 1, name: "Sucursal 1", position: [19.4326, -99.1332] },
  { id: 2, name: "Sucursal 2", position: [19.4526, -99.1632] },
  { id: 3, name: "Sucursal 3", position: [19.4626, -99.1032] },
];

const DeliveriesMap = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Encuentra tu Distribuidor Más Cercano</h2>
      <div className="w-4/5 h-96 rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[19.4326, -99.1332] as [number, number]} zoom={12} className="w-full h-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {deliveryPoints.map((point) => (
            <Marker key={point.id} position={point.position}>
              <Popup>{point.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default DeliveriesMap;
