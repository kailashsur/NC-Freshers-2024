"use client"

import { useRef, useState, useEffect } from 'react';

export default function AutoPlayAudioWithUserInteraction() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Play failed:', error);
      }
    }
  };

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Autoplay failed:', error);
          // Fallback to user interaction
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('scroll', handleUserInteraction);
          document.addEventListener('mousemove', handleUserInteraction);
        }
      }
    };

    const handleUserInteraction = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('scroll', handleUserInteraction);
          document.removeEventListener('mousemove', handleUserInteraction);
        } catch (error) {
          console.error('Play failed:', error);
        }
      }
    };

    playAudio();

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/music/wo-din.mp3" preload="auto" loop />
      {!isPlaying && (
        <button onClick={handlePlay} className="bg-blue-500 text-white px-4 py-2 rounded">
          Play Music
        </button>
      )}
    </div>
  );
}