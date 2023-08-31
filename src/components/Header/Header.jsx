import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { headerImages } from '../../assets/img';
import icon from '../../assets/icons/sun-and-moon.png'

function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollValue / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % headerImages.length;
      setCurrentImageIndex(nextIndex);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    // Animación de las letras en el título
    const textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
      targets: '.title .letter',
      translateY: [-200, 0],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: (el, i) => 500 + 30 * i,
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  const minScale = 0.8;
  const maxScale = 1.2;
  const imageScale = scrollProgress < 1 ? minScale + (maxScale - minScale) * scrollProgress : maxScale;

  return (
    <header className="flex flex-col justify-center py-24 text-center">
      <h1 className="title text-[9vw] font-bold leading-[0.75] mb-12">
        Diana ✺ Lucia 
      </h1>
      <div className='flex justify-center'>
        <h2 className='text-[1.5vw] mx-8'>Concept Development</h2>
        <h2 className='text-[1.5vw] mx-8'>Planning</h2>
        <h2 className='text-[1.5vw] mx-8'>Art Direction</h2>
      </div>
      <motion.div
        initial={{ scale: minScale, y: 100, opacity: 0 }}
        animate={{ scale: imageScale, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full"
      >
        <img className='h-[1600px]' src={headerImages[currentImageIndex]} alt="" />
      </motion.div>
    </header>
  );
}

export default Header;
