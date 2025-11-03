import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      backgroundColor: "rgba(14, 165, 233, 0.3)",
      border: "2px solid rgb(14, 165, 233)",
    }
  };

  useEffect(() => {
    const textEnter = () => setCursorVariant('text');
    const buttonEnter = () => setCursorVariant('button');
    const leave = () => setCursorVariant('default');

    const elements = document.querySelectorAll('a, button, .cursor-pointer');
    elements.forEach(element => {
      element.addEventListener('mouseenter', buttonEnter);
      element.addEventListener('mouseleave', leave);
    });

    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
    textElements.forEach(element => {
      element.addEventListener('mouseenter', textEnter);
      element.addEventListener('mouseleave', leave);
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', buttonEnter);
        element.removeEventListener('mouseleave', leave);
      });
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', textEnter);
        element.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="cursor fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 backdrop-filter backdrop-blur-sm"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default Cursor;