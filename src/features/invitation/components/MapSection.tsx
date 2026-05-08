"use client";

import { useState } from "react";
import { MapPin, QrCode } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
import { openMap } from "../utils/invitation.utils";

export default function MapSection() {
  const { map } = invitationConfig;
  const [qrFailed, setQrFailed] = useState(false);

  return (
    <section id="map" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="40" r="25" />
            <path d="M50 65 L50 90" />
            <path d="M40 80 L60 80" />
            <circle cx="50" cy="40" r="8" fill="currentColor" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Map
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
          <iframe
            src={map.embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => openMap(map.mainMapUrl || "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-thai">เปิดแผนที่</span>
          </button>

          {map.qrImage && !qrFailed ? (
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <img
                src={map.qrImage}
                alt="Location QR Code"
                className="w-24 h-24 mx-auto"
                onError={() => setQrFailed(true)}
              />
              <p className="font-thai text-xs text-center mt-2 text-gray-500">
                สแกนเพื่อเปิดแผนที่
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center gap-2">
              <QrCode className="w-24 h-24 text-gray-300" />
              <p className="font-thai text-xs text-center text-gray-500">
                QR Code แผนที่
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
