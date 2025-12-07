"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Snowflake = {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  blur: boolean;
};

const createSnowflakes = () =>
  Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 15,
    size: 2 + Math.random() * 4,
    opacity: 0.4 + Math.random() * 0.5,
    blur: Math.random() > 0.5,
  }));

const SnowBackground = () => {
  // Generate snowflakes client-side to keep SSR markup stable
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    setSnowflakes(createSnowflakes());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className={`absolute w-1 h-1 bg-primary dark:bg-white/60 rounded-full ${
            flake.blur ? 'blur-[0.5px]' : ''
          }`}
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, Math.sin(flake.id) * 50, 0],
            opacity: [0, flake.opacity, flake.opacity, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: flake.duration * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-black/10 pointer-events-none" />
    </div>
  );
};

export default SnowBackground;