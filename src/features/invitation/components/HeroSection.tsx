"use client";

import { motion } from "framer-motion";
import { invitationConfig } from "../data/invitation.config";
import CountdownTimer from "./CountdownTimer";
// import ShareButton from "./ShareButton";

export default function HeroSection() {
  const { couple, event } = invitationConfig;

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      aria-label="หน้าแรก"
    >
      {/* Background doodles - static with subtle opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
      >
        {/* House doodle */}
        <svg className="absolute top-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 20 L20 50 L30 50 L30 80 L70 80 L70 50 L80 50 Z" />
          <rect x="40" y="60" width="20" height="20" />
        </svg>

        {/* Heart doodle */}
        <svg className="absolute top-[25%] right-[15%] w-12 h-12 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 85 C50 85 20 60 20 40 C20 25 32 15 45 20 C50 22 50 25 50 25 C50 25 50 22 55 20 C68 15 80 25 80 40 C80 60 50 85 50 85Z" />
        </svg>

        {/* Ring doodle */}
        <svg className="absolute bottom-[20%] left-[15%] w-14 h-14 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="50" r="25" />
          <circle cx="60" cy="50" r="25" />
          <path d="M40 25 L60 25" />
          <path d="M35 30 L45 20" />
          <path d="M55 20 L65 30" />
        </svg>

        {/* Star doodle */}
        <svg className="absolute top-[10%] right-[25%] w-8 h-8 md:w-12 md:h-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z" />
        </svg>

        {/* Flower doodle */}
        <svg className="absolute bottom-[30%] right-[10%] w-10 h-10 md:w-14 md:h-14" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="35" r="12" />
          <circle cx="65" cy="50" r="12" />
          <circle cx="50" cy="65" r="12" />
          <circle cx="35" cy="50" r="12" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>

        {/* Cat doodle */}
        <svg className="absolute bottom-[15%] right-[30%] w-12 h-12 md:w-16 md:h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="50" cy="60" rx="25" ry="20" />
          <path d="M30 45 L25 25 L40 40 Z" />
          <path d="M70 45 L75 25 L60 40 Z" />
          <circle cx="42" cy="55" r="3" fill="currentColor" />
          <circle cx="58" cy="55" r="3" fill="currentColor" />
          <path d="M48 58 L50 62 L52 58" />
          <path d="M35 65 Q50 70 65 65" />
          <path d="M25 60 Q20 55 25 50" />
          <path d="M75 60 Q80 55 75 50" />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-handwritten text-2xl md:text-3xl mb-2"
        >
          {couple.bride.nickname}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-sm md:text-base tracking-widest mb-6"
        >
          {couple.bride.fullName}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-4"
        >
          <svg className="w-12 h-12 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="40" cy="50" r="25" />
            <circle cx="60" cy="50" r="25" />
            <path d="M40 25 L60 25" />
            <path d="M35 30 L45 20" />
            <path d="M55 20 L65 30" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-handwritten text-2xl md:text-3xl mb-2"
        >
          {couple.groom.nickname}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-serif text-sm md:text-base tracking-widest mb-8"
        >
          {couple.groom.fullName}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h1 className="font-handwritten text-6xl md:text-8xl lg:text-9xl mb-4">
            {event.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 my-6"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z" />
          </svg>
          <p className="font-serif text-xl md:text-2xl tracking-wider">
            {event.date}
          </p>
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-serif text-lg md:text-xl tracking-wide mb-4"
        >
          {event.locationName}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-thai text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8"
        >
          {event.intro}
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <p className="font-serif text-sm text-gray-500 mb-4">
            Countdown to our special day
          </p>
          <CountdownTimer targetDate="2026-05-23T07:00:00" />
        </motion.div>

        {/* Share Button - Hidden for now */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <ShareButton />
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-current rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
