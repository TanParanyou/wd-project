"use client";

import { useState, useEffect } from "react";
import { MapPin, Navigation, Phone, X } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
import { openMap, scrollToSection } from "../utils/invitation.utils";

export default function MobileQuickActions() {
  const { map, contacts } = invitationConfig;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Find first contact with phone number
  const contactWithPhone = contacts.find((c) => c.phone);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 md:hidden z-50 mobile-quick-actions transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-8 right-0 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full p-1 shadow-sm"
          aria-label="ซ่อนแถบเมนู"
        >
          <X className="w-4 h-4" />
        </button>

        <button
          onClick={() => openMap(map.mainMapUrl || "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6")}
          className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="เปิดแผนที่"
        >
          <MapPin className="w-6 h-6" aria-hidden="true" />
          <span className="font-thai text-xs">แผนที่</span>
        </button>

        <button
          onClick={() => scrollToSection("routes")}
          className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="ไปที่เส้นทางเข้า"
        >
          <Navigation className="w-6 h-6" aria-hidden="true" />
          <span className="font-thai text-xs">ทางเข้า</span>
        </button>

        {contactWithPhone && (
          <a
            href={`tel:${contactWithPhone.phone}`}
            className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`โทรหา ${contactWithPhone.name}`}
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            <span className="font-thai text-xs">โทร</span>
          </a>
        )}
      </div>
    </nav>
  );
}
