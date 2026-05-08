"use client";

import { useState } from "react";
import { Share2, Link, MessageCircle, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function ShareButton({ 
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Nan & Tan - Housewarming Ceremony",
  description = "ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือ"
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShareLINE = () => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer");
  };

  const handleShareFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300"
        aria-label="แชร์ลิงก์"
      >
        <Share2 className="w-5 h-5" aria-hidden="true" />
        <span className="font-thai">แชร์</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 min-w-[200px]"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={handleShareLINE}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="font-thai text-sm">แชร์ไป LINE</span>
              </button>

              <button
                onClick={handleShareFacebook}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="font-thai text-sm">แชร์ไป Facebook</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <Link className="w-5 h-5" />
                <span className="font-thai text-sm">
                  {copied ? "คัดลอกแล้ว!" : "คัดลอกลิงก์"}
                </span>
              </button>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
