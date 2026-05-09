"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundMusicProps {
  audioSrc?: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioSrc = "/audio/background.mp3"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [showError, setShowError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;
    
    let isMounted = true;
    let hasLoaded = false;
    
    const handleCanPlay = () => {
      if (isMounted && !hasLoaded) {
        hasLoaded = true;
        setIsAudioReady(true);
        setShowError(false);
        // เคลียร์ timeout เมื่อโหลดสำเร็จ
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };
    
    const handleError = () => {
      if (isMounted && !hasLoaded) {
        hasLoaded = true;
        setShowError(true);
        setIsAudioReady(false);
      }
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    
    audio.src = audioSrc;
    audio.load();
    
    audioRef.current = audio;
    
    // Timeout 8 วินาที
    timeoutRef.current = setTimeout(() => {
      if (isMounted && !hasLoaded) {
        setShowError(true);
      }
    }, 8000);
    
    return () => {
      isMounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      audio.pause();
      audio.src = "";
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, [audioSrc]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    if (!isAudioReady) {
      audioRef.current.load();
      return;
    }
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setHasInteracted(true);
        }
      }
    } catch (err) {
      console.error("Play error:", err);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      <div className="relative">
        <motion.button
          onClick={togglePlay}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-full shadow-xl backdrop-blur-md border border-neutral-200 bg-white/90 text-neutral-800"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                className="relative"
              >
                <Volume2 className="h-5 w-5 text-neutral-800" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-neutral-800"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
              >
                {showError && !isAudioReady ? (
                  <Music className="h-5 w-5 text-neutral-400" />
                ) : (
                  <VolumeX className="h-5 w-5 text-neutral-400" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {!hasInteracted && isAudioReady && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap"
          >
            กดเพื่อเปิดเพลง 🎵
          </motion.div>
        )}
        {showError && !isAudioReady && !isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap"
          >
            ไม่พบไฟล์เพลง
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundMusic;
