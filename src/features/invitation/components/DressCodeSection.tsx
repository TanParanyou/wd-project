"use client";

import { invitationConfig } from "../data/invitation.config";

export default function DressCodeSection() {
  const { dressCode } = invitationConfig;

  return (
    <section id="dress-code" className="py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/60 rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
          {/* Decorative doodles */}
          <svg className="absolute top-4 left-4 w-8 h-8 opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="35" r="12" />
            <circle cx="65" cy="50" r="12" />
            <circle cx="50" cy="65" r="12" />
            <circle cx="35" cy="50" r="12" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>

          <svg className="absolute bottom-4 right-4 w-8 h-8 opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z" />
          </svg>

          <h2 className="font-serif text-xl md:text-2xl mb-4 tracking-wide">
            {dressCode.title}
          </h2>

          <p className="font-handwritten text-2xl md:text-3xl mb-2">
            {dressCode.description}
          </p>

          <p className="font-serif text-sm text-gray-500">
            {dressCode.tone}
          </p>
        </div>
      </div>
    </section>
  );
}
