"use client";

import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import { invitationConfig } from "../data/invitation.config";
// import ShareButton from "./ShareButton";

export default function ContactSection() {
  const { contacts, rsvp } = invitationConfig;

  return (
    <section id="contact" className="py-20 px-6" aria-label="ติดต่อ">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 30 Q20 20 30 20 L70 20 Q80 20 80 30 L80 70 Q80 80 70 80 L30 80 Q20 80 20 70 Z" />
            <path d="M20 35 L50 55 L80 35" />
          </svg>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">
            Contact
          </h2>
          <p className="font-thai text-base text-gray-600">
            หากหลงทาง สามารถติดต่อเราได้เลยนะคะ/ครับ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="bg-white/60 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-handwritten text-2xl mb-4">
                {contact.name}
              </h3>

              <div className="space-y-3">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-label={`โทรหา ${contact.name}`}
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span className="font-thai text-sm">โทร</span>
                  </a>
                )}

                {contact.lineUrl && (
                  <a
                    href={contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-label={`ติดต่อ ${contact.name} ทาง LINE`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span className="font-thai text-sm">LINE</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ShareButton - Hidden for now */}
          {/* <ShareButton /> */}

          {rsvp.enabled && rsvp.url && (
            <a
              href={rsvp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label="ยืนยันการเข้าร่วมงาน"
            >
              <ClipboardCheck className="w-5 h-5" aria-hidden="true" />
              <span className="font-thai">{rsvp.label}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
