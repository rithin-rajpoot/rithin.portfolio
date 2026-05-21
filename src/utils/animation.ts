export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const cardHover = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 220 }
}

export const cardHoverSmall = {
  whileHover: { scale: 1.01 },
  transition: { type: "spring", stiffness: 220 }
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
}

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.35 }
}

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.35, ease: "easeOut" }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.35 }
} 

// Add these to your existing animation variants

export const magneticHover = {
  whileHover: { 
    scale: 1.1,
    rotate: [0, -1, 1, 0],
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10,
      rotate: {
        repeat: Infinity,
        duration: 0.2
      }
    }
  }
}

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(101, 216, 138, 0.45)",
      "0 0 0 8px rgba(101, 216, 138, 0)",
      "0 0 0 0 rgba(101, 216, 138, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const typewriterText = {
  initial: { width: 0 },
  animate: { width: "auto" },
  transition: { 
    duration: 2, 
    ease: "easeInOut",
    delay: 0.5
  }
}

export const floatingAnimation = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const morphingButton = {
  whileHover: { 
    scale: 1.03,
    borderRadius: "14px",
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  },
  transition: { 
    type: "spring", 
    stiffness: 300,
    damping: 20
  }
}

export const liquidHover = {
  whileHover: {
    scale: 1.01,
    borderRadius: ["10px", "14px", "10px"],
    transition: {
      borderRadius: {
        duration: 0.5,
        repeat: 0,
        ease: "easeInOut"
      },
      scale: {
        duration: 0.2
      }
    }
  }
}

export const socialIconHover = {
  whileHover: {
    scale: 1.08,
    color: "#65d88a",
    filter: "drop-shadow(0 0 8px rgba(101, 216, 138, 0.35))",
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 18
    }
  },
  whileTap: { 
    scale: 0.95
  }
}

export const rippleEffect = {
  whileTap: {
    scale: [1, 0.95, 1.02, 1],
    transition: { duration: 0.4 }
  }
}

export const slideUpStagger = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  }
}

export const rotateIn = {
  initial: { 
    opacity: 0, 
    rotate: -6,
    scale: 0.5
  },
  animate: { 
    opacity: 1, 
    rotate: 0,
    scale: 1
  },
  transition: { 
    duration: 0.4,
    ease: "easeOut"
  }
}

export const textReveal = {
  initial: { 
    opacity: 0,
    y: 24,
    clipPath: "inset(100% 0 0 0)"
  },
  animate: { 
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)"
  },
  transition: { 
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  }
}

export const elasticScale = {
  whileHover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 18
    }
  },
  whileTap: {
    scale: 0.97
  }
}