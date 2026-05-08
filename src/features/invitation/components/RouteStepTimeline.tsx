"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { RouteStep } from "../types/invitation.type";

interface RouteStepTimelineProps {
  steps: RouteStep[];
}

export default function RouteStepTimeline({ steps }: RouteStepTimelineProps) {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (src: string) => {
    setFailedImages((prev) => new Set(prev).add(src));
  };

  return (
    <div className="bg-white/50 rounded-2xl p-6 md:p-8 border border-gray-200">
      <h3 className="font-serif text-xl mb-6 text-center">
        Step-by-Step Guide
      </h3>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center font-serif text-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-thai text-lg font-medium mb-1">
                  {step.title}
                </h4>
                <p className="font-thai text-sm text-gray-600 mb-3">
                  {step.description}
                </p>

                {/* Image placeholder */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                  {failedImages.has(step.image) ? (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <ImageIcon className="w-10 h-10" />
                      <span className="font-thai text-xs">{step.title}</span>
                    </div>
                  ) : (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      onError={() => handleImageError(step.image)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute left-5 top-14 bottom-0 w-px bg-gray-200" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
