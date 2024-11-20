"use client";
import { ReactNode } from "react";

interface DeviceStatusProps {
  deviceName: string;
  lastAccess: string;
  location: string;
  icon: ReactNode; // Icono como prop
  onSignOut: () => void;
}

export default function DeviceCard({
  deviceName = "iPhone 15",
  lastAccess = "2024-09-24 12:41:55",
  location = "Quito, Ecuador",
  icon, // Recibe el icono desde props
  onSignOut = () => console.log("Sign out clicked"),
}: DeviceStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full cursor-pointer">
      <div className="flex flex-col items-center gap-y-3">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          {icon} {/* Renderiza el icono aquí */}
        </div>
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-black text-center">
          {deviceName}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          Últ. Acceso: {lastAccess}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">{location}</p>
        <button
          onClick={onSignOut}
          className="text-red-500 text-xs sm:text-sm font-medium hover:text-red-600 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
