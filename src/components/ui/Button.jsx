import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15; // sublte multiplier for magnetic effect
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <>
      <span className="btn-text">{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  const classes = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    // If it's an external link or anchor link
    if (href.startsWith('#')) {
      return (
        <motion.a
          ref={buttonRef}
          href={href}
          className={classes}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
          {...props}
        >
          {buttonContent}
        </motion.a>
      );
    }
    return (
      <motion.a
        ref={buttonRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      type="button"
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
