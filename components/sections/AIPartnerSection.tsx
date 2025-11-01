'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  }
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const
    }
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  }
};

// Gradient circle rotation animation
const gradientCircleVariants = {
  initial: {
    rotate: 18.11
  },
  animate: {
    rotate: [18.11, 378.11],
    transition: {
      duration: 20,
      ease: "linear" as const,
      repeat: Infinity
    }
  },
  hover: {
    scale: 1.08,
    // Removed rotate to avoid conflict with continuous animation
    transition: {
      scale: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  }
};

// Gradient pulsing effect (optional)
const gradientPulseVariants = {
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 4,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

// Icon floating animation
const iconFloatVariants = {
  float: {
    y: [-3, 3, -3],
    transition: {
      duration: 3,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

// Chat bubble special animation (first card) - includes counter-rotation
const chatBubbleVariants = {
  initial: {
    rotate: 0  // Chat bubble starts at 0 since it's positioned differently
  },
  animate: {
    rotate: [-18.11, -378.11],  // Counter-rotation to stay upright
    y: [-4, 4, -4],
    scale: [1, 1.02, 1],
    transition: {
      rotate: {
        duration: 20,
        ease: "linear" as const,
        repeat: Infinity
      },
      y: {
        duration: 3.5,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      },
      scale: {
        duration: 3.5,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      scale: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  }
};

// Standard icon hover effect
const iconHoverVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const
    }
  }
};

// Counter-rotation animation for icons to stay upright
const iconCounterRotateVariants = {
  initial: {
    rotate: 341.89
  },
  animate: {
    rotate: [341.89, -18.11],
    transition: {
      duration: 20,
      ease: "linear" as const,
      repeat: Infinity
    }
  }
};

// Combined animation for icons (counter-rotation + float + hover)
const iconCombinedVariants = {
  initial: {
    rotate: 341.89
  },
  animate: {
    rotate: [341.89, -18.11],
    y: [-3, 3, -3],
    transition: {
      rotate: {
        duration: 20,
        ease: "linear" as const,
        repeat: Infinity
      },
      y: {
        duration: 3,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      scale: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  }
};

// Content animation variants
const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function AIPartnerSection() {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cards = [
    {
      title: '24/7 Research Analyst',
      description: 'Turn hours of research into seconds. Ask about any company metric, trend, or comparison with full citations',
      icon: '/images/ai-partners/chat-bubble.png',
      iconSize: 'size-[135px]',
      iconLeft: '134px',
      iconTop: '8px',
      iconBlendMode: 'mix-blend-soft-light',
      descriptionWidth: 'w-[265px]',
      descriptionSize: 'text-[14px]',
      titleWidth: 'min-w-full w-[min-content]'
    },
    {
      title: 'Key Metrics, Zero Effort',
      description: 'Auto-generated financial profiles with every key metric, always up to date',
      icon: '/images/ai-partners/bar-chart.png',
      iconSize: 'size-[180px]',
      iconLeft: '51.27px',
      iconTop: '214.51px',
      iconBlendMode: '',
      descriptionWidth: 'w-[238px]',
      descriptionSize: 'text-[16px]',
      titleWidth: 'w-auto'
    },
    {
      title: 'Never Miss a Market-Moving Event',
      description: 'Track filings and news in real time. Get instant alerts and AI-summarized insights',
      icon: '/images/ai-partners/notification-bell.svg',
      iconSize: 'size-[200px]',
      iconLeft: '104.63px',
      iconTop: '168.75px',
      iconBlendMode: '',
      descriptionWidth: 'w-[254px]',
      descriptionSize: 'text-[16px]',
      titleWidth: 'w-[208px]'
    },
    {
      title: 'Industry Benchmarking, Automated',
      description: 'Compare companies across revenue, growth, and margins, no spreadsheets, no manual work',
      icon: '/images/ai-partners/graph-benchmark.png',
      iconSize: 'size-[200px]',
      iconLeft: '104.63px',
      iconTop: '168.75px',
      iconBlendMode: '',
      descriptionWidth: 'w-[254px]',
      descriptionSize: 'text-[16px]',
      titleWidth: 'min-w-full w-[min-content]'
    }
  ];

  // If user prefers reduced motion, render without animations
  if (prefersReducedMotion) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] leading-normal">
              Your AI Partner for Faster, Smarter Company Research
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex justify-center gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-[304px] h-[380px] bg-[#fbf8ef] border border-[rgba(255,92,53,0.12)] overflow-hidden shadow-[0px_4px_12px_rgba(255,61,0,0.08)] hover:shadow-[0px_12px_24px_rgba(255,61,0,0.15)] transition-shadow duration-300"
              >
                <div className="relative w-full h-full">
                  {/* Gradient Circle Container - positioned relative to card */}
                  <div
                    className="absolute left-[52px] top-[-252px] flex items-center justify-center"
                    style={{
                      width: 'calc(1px*((400*0.3108423352241516)+(400*0.9504615068435669)))',
                      height: 'calc(1px*((400*0.3108423352241516)+(400*0.9504615068435669)))'
                    }}
                  >
                    <div className="flex-none rotate-[18.11deg]">
                      {/* Gradient Circle with proper overflow */}
                      <div className={`bg-gradient-to-b from-50% from-[#ff3d00] to-[#ffab66] relative rounded-[1000px] size-[400px] ${index === 0 ? '' : 'overflow-clip'}`}>
                        {/* Icon positioning - counter-rotated */}
                        {index === 0 ? (
                          // First card: chat bubble with special positioning
                          <div
                            className={`absolute h-[135px] w-[200px] ${card.iconBlendMode}`}
                            style={{
                              left: card.iconLeft,
                              top: card.iconTop
                            }}
                          >
                            <img
                              src={card.icon}
                              alt={card.title}
                              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                            />
                          </div>
                        ) : (
                          // Other cards: standard icon positioning
                          <div
                            className="absolute flex items-center justify-center"
                            style={{
                              left: card.iconLeft,
                              top: card.iconTop,
                              width: 'calc(1px*((0*0.3108423352241516)+(0*0.9504614472389221)))',
                              height: 'calc(1px*((0*0.3108423352241516)+(0*0.9504614472389221)))'
                            }}
                          >
                            <div className="flex-none rotate-[341.89deg]">
                              <div className={`relative ${card.iconSize}`}>
                                <img
                                  src={card.icon}
                                  alt={card.title}
                                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Content - positioned at bottom */}
                  <div className={`absolute flex flex-col gap-1 items-center text-center ${
                    index === 0 ? 'left-[19px] top-[241px]' :
                    'left-1/2 -translate-x-1/2 top-[238px] w-[265px]'
                  }`}>
                    <h3 className={`text-[#ff3d00] text-[20px] font-semibold leading-normal flex flex-col justify-center relative shrink-0 ${card.titleWidth}`}>
                      {card.title}
                    </h3>
                    <p className={`text-[#444444] ${card.descriptionSize} leading-normal flex flex-col justify-center relative shrink-0 ${card.descriptionWidth}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          variants={headerVariants}
        >
          <h2 className="text-[28px] font-semibold text-[#1a1a1a] leading-normal">
            Your AI Partner for Faster, Smarter Company Research
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="flex justify-center gap-5"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-[304px] h-[380px] bg-[#fbf8ef] border border-[rgba(255,92,53,0.12)] overflow-hidden shadow-[0px_4px_12px_rgba(255,61,0,0.08)] hover:shadow-[0px_12px_24px_rgba(255,61,0,0.15)] transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={cardHoverVariants}
                className="relative w-full h-full"
              >
                {/* Gradient Circle Container - positioned relative to card */}
                <div
                  className="absolute left-[52px] top-[-252px] flex items-center justify-center"
                  style={{
                    width: 'calc(1px*((400*0.3108423352241516)+(400*0.9504615068435669)))',
                    height: 'calc(1px*((400*0.3108423352241516)+(400*0.9504615068435669)))'
                  }}
                >
                  <motion.div
                    className="flex-none"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    variants={gradientCircleVariants}
                  >
                    {/* Gradient Circle with proper overflow */}
                    <motion.div
                      className={`bg-gradient-to-b from-50% from-[#ff3d00] to-[#ffab66] relative rounded-[1000px] size-[400px] ${index === 0 ? '' : 'overflow-clip'}`}
                      animate="animate"
                      variants={gradientPulseVariants}
                    >
                      {/* Icon positioning - counter-rotated */}
                      {index === 0 ? (
                        // First card: chat bubble with special positioning
                        <motion.div
                          className={`absolute h-[135px] w-[200px] ${card.iconBlendMode}`}
                          style={{
                            left: card.iconLeft,
                            top: card.iconTop
                          }}
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          variants={chatBubbleVariants}
                        >
                          <img
                            src={card.icon}
                            alt={card.title}
                            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                          />
                        </motion.div>
                      ) : (
                        // Other cards: standard icon positioning
                        <div
                          className="absolute flex items-center justify-center"
                          style={{
                            left: card.iconLeft,
                            top: card.iconTop,
                            width: 'calc(1px*((0*0.3108423352241516)+(0*0.9504614472389221)))',
                            height: 'calc(1px*((0*0.3108423352241516)+(0*0.9504614472389221)))'
                          }}
                        >
                          <motion.div
                            className="flex-none"
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            variants={iconCombinedVariants}
                          >
                            <div className={`relative ${card.iconSize}`}>
                              <img
                                src={card.icon}
                                alt={card.title}
                                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                              />
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Card Content - positioned at bottom */}
                <motion.div
                  className={`absolute flex flex-col gap-1 items-center text-center ${
                    index === 0 ? 'left-[19px] top-[241px]' :
                    'left-1/2 -translate-x-1/2 top-[238px] w-[265px]'
                  }`}
                  variants={contentVariants}
                >
                  <h3 className={`text-[#ff3d00] text-[20px] font-semibold leading-normal flex flex-col justify-center relative shrink-0 ${card.titleWidth}`}>
                    {card.title}
                  </h3>
                  <p className={`text-[#444444] ${card.descriptionSize} leading-normal flex flex-col justify-center relative shrink-0 ${card.descriptionWidth}`}>
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}