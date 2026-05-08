"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Redirect to invitation page
    window.location.replace("/invitation");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
      <p className="font-thai text-gray-500">กำลังเปลี่ยนหน้า... รอสักครู่นะคะ</p>
    </div>
  );
}
