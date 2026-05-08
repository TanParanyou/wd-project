"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";

export default function ScheduleSection() {
  const { schedule } = invitationConfig;

  return (
    <section id="schedule" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="40" />
            <path d="M50 25 L50 50 L65 60" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Schedule
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-start gap-4 md:gap-6"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-current flex items-center justify-center bg-[#FAFAF8]">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <p className="font-serif text-lg md:text-xl font-medium mb-1">
                    {item.time}
                  </p>
                  <p className="font-thai text-base md:text-lg">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
