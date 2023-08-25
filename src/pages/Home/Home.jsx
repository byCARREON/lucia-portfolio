import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import IntroAnimation from '../../components/Animations/IntroAnimation';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';
import LineAnimation from '../../components/Animations/lineAnimation';

function Home() {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const introAnimationShown = localStorage.getItem('introAnimationShown');

    if (!introAnimationShown) {
      // Si la animación de introducción no se ha mostrado antes, la mostramos.
      const delay = setTimeout(() => {
        setShowComponents(true);
        localStorage.setItem('introAnimationShown', 'true'); // Marcar la animación como mostrada.
      }, 3250);

      return () => clearTimeout(delay); // Limpia el timeout si el componente se desmonta antes de ejecutarlo.
    } else {
      // Si la animación de introducción ya se ha mostrado antes, mostramos los componentes directamente.
      setShowComponents(true);
    }
  }, []);

  return (
    <div>
      {showComponents && (
        <>
          <Navbar />
          <Header />
          <Project />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
