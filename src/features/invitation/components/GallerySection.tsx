"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";

export default function GallerySection() {
  const { gallery } = invitationConfig;
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (src: string) => {
    setFailedImages((prev) => new Set(prev).add(src));
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="15" y="25" width="70" height="50" rx="5" />
            <circle cx="35" cy="45" r="8" />
            <path d="M20 70 L40 50 L55 60 L70 40 L80 50 L80 70" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center"
            >
              {failedImages.has(image.src) ? (
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <ImageIcon className="w-12 h-12" />
                  <span className="font-thai text-sm">{image.alt}</span>
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(image.src)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
