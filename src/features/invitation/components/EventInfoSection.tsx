"use client";

import { MapPin, Navigation } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
import { openMap } from "../utils/invitation.utils";

export default function EventInfoSection() {
  const { event, map } = invitationConfig;

  return (
    <section id="event-info" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 20 L20 50 L30 50 L30 80 L70 80 L70 50 L80 50 Z" />
            <rect x="40" y="60" width="20" height="20" />
            <circle cx="50" cy="40" r="8" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl mb-6 tracking-wide">
          Location
        </h2>

        <div className="space-y-4 mb-8">
          <p className="font-thai text-base md:text-lg leading-relaxed">
            {event.address.th}
          </p>
          <p className="font-serif text-sm text-gray-500">
            {event.address.en}
          </p>
        </div>

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

        <div className="bg-white/50 rounded-2xl p-6 border border-gray-200">
          <p className="font-thai text-sm leading-relaxed mb-2">
            แนะนำให้เลือกเส้นทางก่อนออกเดินทาง เนื่องจากบ้านสามารถเข้าได้ 2 ทาง
          </p>
          <p className="font-thai text-sm leading-relaxed">
            เมื่อถึงหน้าซอยแล้ว สามารถดูภาพนำทางแบบทีละสเตปได้เลย
          </p>
        </div>
      </div>
    </section>
  );
}
