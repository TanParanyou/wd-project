"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundMusicProps {
  videoId?: string;
}

// Minimal YouTube API types (ES2015 Module Syntax)
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getVolume(): number;
  setVolume(volume: number): void;
  mute(): void;
  unMute(): void;
  getPlayerState(): number;
  destroy(): void;
}

interface YTPlayerOptions {
  height?: string | number;
  width?: string | number;
  videoId?: string;
  playerVars?: YTPlayerVars;
  events?: YTPlayerEvents;
}

interface YTPlayerVars {
  autoplay?: 0 | 1;
  controls?: 0 | 1 | 2;
  loop?: 0 | 1;
  playlist?: string;
  modestbranding?: 0 | 1;
  enablejsapi?: 0 | 1;
  playsinline?: 0 | 1;
  origin?: string;
  rel?: 0 | 1;
  showinfo?: 0 | 1;
}

interface YTPlayerEvents {
  onReady?: (event: { target: YTPlayer }) => void;
  onStateChange?: (event: { target: YTPlayer; data: number }) => void;
  onError?: (event: { target: YTPlayer; data: number }) => void;
}

interface YTAPI {
  Player: {
    new(elementId: string, options: YTPlayerOptions): YTPlayer;
  };
}

declare global {
  interface Window {
    YT: YTAPI;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  videoId = "DSWYAclv2I8"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          enablejsapi: 1,
          playsinline: 1, // จำเป็นมากสำหรับ Mobile
          rel: 0,
        },
        events: {
          onReady: () => setIsPlayerReady(true),
        },
      });
    };

    // If API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const togglePlay = () => {
    if (playerRef.current && isPlayerReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
        setHasInteracted(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Container สำหรับ YouTube Player (ซ่อนไว้แต่ไม่ใช้ display:none เพื่อให้ Mobile ยอมเล่น) */}
      <div className="fixed -top-10 -left-10 w-1 h-1 overflow-hidden pointer-events-none opacity-0">
        <div id="youtube-player"></div>
      </div>

      <div className="relative">
        <motion.button
          onClick={togglePlay}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl backdrop-blur-md border border-neutral-200 bg-white/90 text-neutral-800 ${!isPlayerReady && 'opacity-50 cursor-not-allowed'
            }`}
          disabled={!isPlayerReady}
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
        {!hasInteracted && isPlayerReady && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg sm:block hidden"
          >
            กดเพื่อเปิดเพลงจาก YouTube 🎵
          </motion.div>
        )}
        {!isPlayerReady && (
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

declare global {
  interface Window {
    YT: YTAPI;
    onYouTubeIframeAPIReady: () => void;
  }
}
