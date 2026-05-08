"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/invitation");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-thai text-gray-500">กำลังเปลี่ยนหน้า... รอสักครู่นะคะ</p>
    </div>
  );
}
