import React, { useEffect } from 'react';
import { imagePaths } from './img/index'; // Ajusta la ruta según tu estructura de carpetas

function IntroAnimation() {
  useEffect(() => {
    // Deshabilita el scroll mientras se reproduce la animación
    document.body.style.overflow = 'hidden';

    const runAnimation = () => {
      gsap.to(".overlay", 2, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
      });

      gsap.to(".img", 2, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        stagger: {
          amount: 1.5,
        },
      });

      gsap.to(".loader", 2, {
        clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        delay: 2,
        onComplete: () => {
          // Habilita nuevamente el scroll después de que la animación haya terminado
          document.body.style.overflowY = 'auto';
        },
      });
    };

    setTimeout(runAnimation, 400); // Cambia el tiempo de retraso según sea necesario
  }, []);

  return (
    <div className="loader">
      {imagePaths.map((path, index) => (
        <div className="img" key={index}>
          <img src={path} alt="" />
        </div>
      ))}
      <div className="overlay"></div>
    </div>
  );
}

export default IntroAnimation;
