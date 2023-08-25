import React from 'react';
import { motion } from 'framer-motion';

function LineAnimation() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0.17, 0.67, 0.67, 0.87],
        damping: 15,
        stiffness: 75,
      }}
      style={{
        height: '1px',
        backgroundColor: 'black',
        marginBottom: '10px',
      }}
    />
  );
}

export default LineAnimation;
