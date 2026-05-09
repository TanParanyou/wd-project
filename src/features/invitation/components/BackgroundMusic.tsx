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
  const [loadError, setLoadError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // สร้าง audio element
    const audio = new Audio();
    audio.loop = true;
    audio.preload = "metadata"; // โหลดแค่ metadata ก่อน เร็วกว่า
    audio.volume = 0.5;
    
    let isMounted = true;
    
    // Event listeners
    const handleCanPlay = () => {
      if (isMounted) {
        setIsAudioReady(true);
        setLoadError(false);
      }
    };
    
    const handleError = () => {
      if (isMounted) {
        console.error('Audio load error');
        setLoadError(true);
        setIsAudioReady(false);
      }
    };
    
    const handleLoadedMetadata = () => {
      if (isMounted) {
        setIsAudioReady(true);
      }
    };
    
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);
    
    // ตั้งค่า src หลังจาก add event listeners
    audio.src = audioSrc;
    audio.load();
    
    audioRef.current = audio;
    
    // Timeout สำหรับตรวจสอบว่าโหลดนานเกินไป
    const timeoutId = setTimeout(() => {
      if (isMounted && !isAudioReady) {
        console.log('Audio load timeout - file may not exist');
        setLoadError(true);
      }
    }, 5000);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      audio.pause();
      audio.src = "";
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
    };
  }, [audioSrc]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    // ถ้าไฟล์ไม่พร้อม ให้ลองโหลดใหม่
    if (!isAudioReady) {
      audioRef.current.load();
      return;
    }
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // สำหรับ mobile: ต้อง play ภายใน user interaction
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setHasInteracted(true);
        }
      }
    } catch (err) {
      console.error("Play error:", err);
      // บน mobile อาจต้องการ interaction ก่อน
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
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl backdrop-blur-md border border-neutral-200 bg-white/90 text-neutral-800 transition-opacity ${
            !isAudioReady && !loadError ? 'opacity-70' : ''
          }`}
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
            ) : loadError ? (
              <motion.div
                key="error"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
              >
                <Music className="h-5 w-5 text-neutral-400" />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
              >
                <VolumeX className="h-5 w-5 text-neutral-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {!hasInteracted && isAudioReady && !loadError && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap"
          >
            กดเพื่อเปิดเพลง 🎵
          </motion.div>
        )}
        {loadError && (
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
