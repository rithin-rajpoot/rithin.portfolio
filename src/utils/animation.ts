export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
}

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 }
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOutIn" }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
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
      "0 0 0 0 rgba(59, 130, 246, 0.7)",
      "0 0 0 10px rgba(59, 130, 246, 0)",
      "0 0 0 0 rgba(59, 130, 246, 0)"
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
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const morphingButton = {
  whileHover: { 
    scale: 1.05,
    borderRadius: "50px",
    background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
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
    scale: 1.02,
    borderRadius: ["8px", "20px", "8px"],
    transition: {
      borderRadius: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      },
      scale: {
        duration: 0.3
      }
    }
  }
}

export const socialIconHover = {
  whileHover: {
    scale: 1.2,
    rotate: 360,
    color: "#3b82f6",
    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  whileTap: { 
    scale: 0.9,
    rotate: -10
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
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99]
  }
}

export const rotateIn = {
  initial: { 
    opacity: 0, 
    rotate: -180,
    scale: 0.5
  },
  animate: { 
    opacity: 1, 
    rotate: 0,
    scale: 1
  },
  transition: { 
    duration: 0.8,
    ease: "backOut"
  }
}

export const textReveal = {
  initial: { 
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0 0 0)"
  },
  animate: { 
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)"
  },
  transition: { 
    duration: 1,
    ease: [0.76, 0, 0.24, 1]
  }
}

export const elasticScale = {
  whileHover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 10
    }
  },
  whileTap: {
    scale: 0.95
  }
}