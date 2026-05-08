"use client";

import { useState } from "react";
import { MapPin, Navigation, QrCode } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
import { openMap } from "../utils/invitation.utils";

export default function LocationSection() {
  const { event, map } = invitationConfig;
  const [qrFailed, setQrFailed] = useState(false);

  return (
    <section id="location" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 20 L20 50 L30 50 L30 80 L70 80 L70 50 L80 50 Z" />
            <rect x="40" y="60" width="20" height="20" />
            <circle cx="50" cy="40" r="8" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
            Location
          </h2>
          <p className="font-thai text-base text-gray-600">
            สถานที่จัดงาน
          </p>
        </div>

        {/* Address */}
        <div className="text-center mb-8">
          <p className="font-thai text-base md:text-lg leading-relaxed mb-2">
            {event.address.th}
          </p>
          <p className="font-serif text-sm text-gray-500">
            {event.address.en}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => openMap(map.mainMapUrl || "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-thai">เปิดแผนที่</span>
          </button>

          <button
            onClick={() => openMap("https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Navigation className="w-5 h-5" />
            <span className="font-thai">นำทาง</span>
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white/50 rounded-2xl p-6 border border-gray-200 mb-8">
          <p className="font-thai text-sm leading-relaxed mb-2">
            แนะนำให้เลือกเส้นทางก่อนออกเดินทาง เนื่องจากบ้านสามารถเข้าได้ 2 ทาง
          </p>
          <p className="font-thai text-sm leading-relaxed">
            เมื่อถึงหน้าซอยแล้ว สามารถดูภาพนำทางแบบทีละสเตปได้เลย
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
          <iframe
            src={map.embedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* QR Code */}
        {/* <div className="flex justify-center">
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
        </div> */}
      </div>
    </section>
  );
}
