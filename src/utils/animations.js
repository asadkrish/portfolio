/* ===================================================================
   ANIMATION VARIANTS — Framer Motion
   Shared across all components for consistency
   =================================================================== */

/* Easing curves */
const easeOut = [0.22, 1, 0.36, 1];
const easeSpring = [0.34, 1.56, 0.64, 1];

/* ===== Fade variants ===== */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: easeOut },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

/* ===== Scale variants ===== */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: easeOut },
};

export const scaleInSpring = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: easeSpring },
};

/* ===== Stagger container variants ===== */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ===== Stagger child variants ===== */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

/* ===== Viewport-triggered animation props ===== */
export const scrollReveal = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.2 },
};

export const scrollRevealDelayed = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.15 },
};

/* ===== Hover effects ===== */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: easeOut } },
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.3, ease: easeOut } },
  whileTap: { scale: 0.98 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.1)',
    transition: { duration: 0.3 },
  },
};

/* ===== Page transition ===== */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* ===== Navbar variants ===== */
export const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/* ===== Hero variants ===== */
export const heroTextVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: easeOut },
  }),
};

export const heroImageVariants = {
  initial: { opacity: 0, scale: 0.9, x: 40 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: easeOut },
  },
};
