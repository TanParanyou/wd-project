"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Clock,
  MapPin,
  Phone,
  ChevronUp,
  BookHeart,
  Gift,
  Menu,
  X,
  Car,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

// ปุ่มหลักที่แสดงตลอด
const primaryNavItems: NavItem[] = [
  { id: "hero", label: "หน้าแรก", icon: <Home className="w-4 h-4" /> },
  { id: "schedule", label: "กำหนดการ", icon: <Clock className="w-4 h-4" /> },
  { id: "location", label: "สถานที่", icon: <MapPin className="w-4 h-4" /> },
  { id: "contact", label: "ติดต่อ", icon: <Phone className="w-4 h-4" /> },
];

// ปุ่มทั้งหมด (รวมที่ซ่อน)
const allNavItems: NavItem[] = [
  { id: "hero", label: "หน้าแรก", icon: <Home className="w-4 h-4" /> },
  { id: "schedule", label: "กำหนดการ", icon: <Clock className="w-4 h-4" /> },
  { id: "dress-code", label: "Dress Code", icon: <span className="text-xs font-bold">DC</span> },
  { id: "gallery", label: "แกลเลอรี่", icon: <span className="text-xs font-bold">GL</span> },
  { id: "location", label: "สถานที่", icon: <MapPin className="w-4 h-4" /> },
  { id: "route", label: "เส้นทาง", icon: <span className="text-xs font-bold">RT</span> },
  { id: "contact", label: "ติดต่อ", icon: <Phone className="w-4 h-4" /> },
  { id: "guestbook", label: "สมุดอวยพร", icon: <BookHeart className="w-4 h-4" /> },
  { id: "donation", label: "โอนเงิน", icon: <Gift className="w-4 h-4" /> },
  { id: "parking", label: "ที่จอดรถ", icon: <Car className="w-4 h-4" /> },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 100);
      }

      // Determine active section
      const sections = allNavItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Listen on both window and snap-container for desktop
    window.addEventListener("scroll", handleScroll, { passive: true });
    const snapContainer = document.querySelector(".snap-container");
    if (snapContainer) {
      snapContainer.addEventListener("scroll", handleScroll, { passive: true });
    }

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (snapContainer) {
        snapContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsExpanded(false);
  };

  const handleNavClick = (id: string) => {
    if (id === "guestbook" || id === "donation") {
      // สำหรับ guestbook และ donation ให้ scroll ไปที่ section ก่อน
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      scrollToSection(id);
    }
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-gray-200">
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="กลับไปด้านบน"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-gray-300" />

            {/* Primary nav items (แสดงตลอด) */}
            <div className="flex items-center gap-1">
              {primaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-black rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-300" />

            {/* Expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                isExpanded
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label={isExpanded ? "ปิดเมนู" : "แสดงเมนูทั้งหมด"}
              title={isExpanded ? "ปิดเมนู" : "แสดงเมนูทั้งหมด"}
            >
              {isExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded menu (แสดงปุ่มทั้งหมด) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-[280px]"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-3">
                    {allNavItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl transition-all duration-300 min-w-[70px] ${
                          activeSection === item.id
                            ? "bg-black text-white"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                        aria-label={item.label}
                        title={item.label}
                      >
                        {item.icon}
                        <span className="text-[10px] font-thai text-center leading-tight">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
