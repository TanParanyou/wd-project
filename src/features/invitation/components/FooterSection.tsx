"use client";

import { invitationConfig } from "../data/invitation.config";

export default function FooterSection() {
  const { couple, event } = invitationConfig;

  return (
    <footer className="py-16 px-6 text-center">
      <div className="max-w-md mx-auto">
        {/* Decorative doodles */}
        <div className="flex justify-center gap-4 mb-8">
          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 85 C50 85 20 60 20 40 C20 25 32 15 45 20 C50 22 50 25 50 25 C50 25 50 22 55 20 C68 15 80 25 80 40 C80 60 50 85 50 85Z" />
          </svg>

          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="35" r="12" />
            <circle cx="65" cy="50" r="12" />
            <circle cx="50" cy="65" r="12" />
            <circle cx="35" cy="50" r="12" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>

          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z" />
          </svg>
        </div>

        <p className="font-serif text-lg md:text-xl mb-4 tracking-wide">
          Thank you for being part of our special day
        </p>

        <p className="font-handwritten text-3xl md:text-4xl mb-2">
          {couple.bride.nickname} & {couple.groom.nickname}
        </p>

        <p className="font-serif text-sm text-gray-500">
          {event.date}
        </p>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="font-thai text-xs text-gray-400">
            ด้วยความเคารพ
          </p>
        </div>
      </div>
    </footer>
  );
}
