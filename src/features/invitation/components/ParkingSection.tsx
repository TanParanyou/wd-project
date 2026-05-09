"use client";

import { Car, Bike, MapPin, Info } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";

export default function ParkingSection() {
  const { parking } = invitationConfig;

  // ถ้ายังไม่เปิดใช้งาน ไม่ต้องแสดงอะไรเลย
  if (!parking.enabled) return null;

  return (
    <section id="parking" className="py-20 px-6" aria-label="ที่จอดรถ">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Car className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
            {parking.title}
          </h2>
          <p className="font-thai text-base text-gray-600">
            {parking.description}
          </p>
        </div>

        <div className="space-y-4">
          {parking.locations.map((location) => (
            <div
              key={location.id}
              className="bg-white/60 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  {location.type === "car" && <Car className="w-6 h-6 text-gray-600" />}
                  {location.type === "motorcycle" && <Bike className="w-6 h-6 text-gray-600" />}
                  {location.type === "both" && (
                    <div className="flex">
                      <Car className="w-5 h-5 text-gray-600" />
                      <Bike className="w-5 h-5 text-gray-600 -ml-1" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-thai font-medium text-lg mb-2">
                    {location.name}
                  </h3>
                  <p className="font-thai text-gray-600 text-sm mb-3">
                    {location.description}
                  </p>

                  <div className="space-y-2">
                    {location.capacity && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Info className="w-4 h-4" />
                        <span className="font-thai">{location.capacity}</span>
                      </div>
                    )}

                    {location.distance && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="font-thai">{location.distance}</span>
                      </div>
                    )}
                  </div>

                  {location.mapUrl && (
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="font-thai">ดูแผนที่</span>
                    </a>
                  )}

                  {location.embedUrl && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-gray-200">
                      <iframe
                        src={location.embedUrl}
                        className="w-full h-48 border-0"
                        title={`แผนที่ ${location.name}`}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  )}

                  {location.image && (
                    <div className="mt-4">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
