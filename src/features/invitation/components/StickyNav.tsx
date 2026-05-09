"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Clock,
  Shirt,
  Image,
  MapPin,
  Navigation,
  Phone,
  ChevronUp,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "hero", label: "หน้าแรก", icon: <Home className="w-4 h-4" /> },
  { id: "schedule", label: "กำหนดการ", icon: <Clock className="w-4 h-4" /> },
  { id: "dress-code", label: "Dress Code", icon: <Shirt className="w-4 h-4" /> },
  { id: "gallery", label: "แกลเลอรี่", icon: <Image className="w-4 h-4" /> },
  { id: "location", label: "สถานที่", icon: <MapPin className="w-4 h-4" /> },
  { id: "route", label: "เส้นทาง", icon: <Navigation className="w-4 h-4" /> },
  { id: "contact", label: "ติดต่อ", icon: <Phone className="w-4 h-4" /> },
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
      const sections = navItems.map((item) => ({
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

            {/* Nav items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
