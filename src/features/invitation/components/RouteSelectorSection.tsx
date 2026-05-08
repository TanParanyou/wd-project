"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Eye } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
import { openMap } from "../utils/invitation.utils";
// import RouteStepTimeline from "./RouteStepTimeline";

export default function RouteSelectorSection() {
  const { routes } = invitationConfig;
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const activeRoute = routes.find((route) => route.id === selectedRoute);

  return (
    <section id="routes" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 80 L20 40 L50 20 L80 40 L80 80" />
            <path d="M35 80 L35 55 L50 45 L65 55 L65 80" />
            <circle cx="50" cy="65" r="5" fill="currentColor" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
            Choose Entrance
          </h2>
          <p className="font-thai text-base text-gray-600">
            เลือกเส้นทางที่สะดวก
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {routes.map((route) => (
            <motion.button
              key={route.id}
              onClick={() => {
                setSelectedRoute(selectedRoute === route.id ? null : route.id);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-2xl border-2 text-left transition-colors duration-300 ${
                selectedRoute === route.id
                  ? "border-current bg-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <h3 className="font-thai text-lg font-medium">
                    {route.name}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: selectedRoute === route.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>

              <p className="font-thai text-sm text-gray-600 mb-2">
                {route.description}
              </p>

              <p className="font-serif text-xs text-gray-400">
                {route.address}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    openMap(route.mapUrl);
                  }}
                  className="inline-flex items-center gap-1 text-sm font-thai hover:underline cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  เปิดแผนที่
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeRoute && (
            <motion.div
              key={activeRoute.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Street View - Show immediately when route is selected */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    src={activeRoute.streetViewUrl}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <p className="font-thai text-sm text-center mt-2 text-gray-500">
                  ลากเพื่อมองรอบทิศทาง
                </p>
              </motion.div>

              {/* Step-by-Step Guide - Hidden for now */}
              {/* <RouteStepTimeline steps={activeRoute.steps} /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
