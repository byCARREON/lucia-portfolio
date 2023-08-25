// src/components/PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black', // Color de fondo negro
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', // Oculta el desbordamiento de las hileras
      }}
    >

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1.25, ease: 'easeInOut', delay: 0.6 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ background: "#EBE4DA" }}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
