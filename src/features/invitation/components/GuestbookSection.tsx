"use client";

import { useState, useEffect } from "react";
import { BookHeart, ExternalLink, X, MessageCircle, User } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";

interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestbookSection() {
  const { guestbook } = invitationConfig;
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGuestbookEntries();
  }, []);

  // โหลดข้อมูลใหม่เมื่อปิด modal
  useEffect(() => {
    if (!showModal) {
      fetchGuestbookEntries();
    }
  }, [showModal]);

  const fetchGuestbookEntries = async () => {
    try {
      setLoading(true);
      setError("");
      
      const response = await fetch("/api/guestbook");
      
      if (!response.ok) {
        throw new Error("Failed to fetch entries");
      }
      
      const data = await response.json();
      setEntries(data.entries || []);
    } catch (err) {
      console.error("Error fetching guestbook:", err);
      setError("ไม่สามารถโหลดคำอวยพรได้");
    } finally {
      setLoading(false);
    }
  };

  if (!guestbook.enabled) return null;

  return (
    <>
      <section id="guestbook" className="py-20 px-6" aria-label="สมุดอวยพร">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <BookHeart className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
              {guestbook.title}
            </h2>
            <p className="font-thai text-base text-gray-600">
              {guestbook.description}
            </p>
          </div>

          {/* แสดงคำอวยพรล่าสุด */}
          {entries.length > 0 && (
            <div className="mb-8 space-y-4">
              <h3 className="font-thai text-lg text-center text-gray-700 mb-4">
                คำอวยพรล่าสุด
              </h3>
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className="bg-white/60 rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-thai font-medium">{entry.name}</h4>
                        <span className="text-xs text-gray-400">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="font-thai text-gray-600 text-sm leading-relaxed">
                        {entry.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {loading && (
            <div className="text-center mb-8">
              <div className="inline-block w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center mb-8 text-red-500 font-thai">
              {error}
            </div>
          )}

          {!loading && entries.length === 0 && !error && (
            <div className="text-center mb-8 text-gray-500 font-thai">
              ยังไม่มีคำอวยพร มาเป็นคนแรกเลย!
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span className="font-thai">เขียนคำอวยพร</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-serif text-lg">Guestbook</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="ปิด"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[70vh]">
              <iframe
                src={guestbook.formUrl}
                className="w-full h-full border-0"
                title="Guestbook Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
