"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
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
  const [error, setError] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // สร้าง audio element
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.preload = "auto";
    
    // ตั้งค่า volume
    audio.volume = 0.5;
    
    // Event listeners
    audio.addEventListener('canplaythrough', () => {
      setIsAudioReady(true);
    });
    
    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      setError("ไม่สามารถโหลดเพลงได้");
    });
    
    audioRef.current = audio;
    
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [audioSrc]);

  const togglePlay = async () => {
    if (!audioRef.current || !isAudioReady) return;
    
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
      setError("กรุณาแตะอีกครั้งเพื่อเล่นเพลง");
      
      // ลองใหม่หลังจาก user interaction
      setTimeout(() => setError(""), 3000);
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
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl backdrop-blur-md border border-neutral-200 bg-white/90 text-neutral-800 ${
            !isAudioReady && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!isAudioReady}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
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
                <VolumeX className="h-5 w-5 text-neutral-400" />
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
            className="bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg"
          >
            กดเพื่อเปิดเพลง 🎵
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg"
          >
            {error}
          </motion.div>
        )}
        {!isAudioReady && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] text-neutral-400 uppercase tracking-tighter"
          >
            กำลังโหลด...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundMusic;
