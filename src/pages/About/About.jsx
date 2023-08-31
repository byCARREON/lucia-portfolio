import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/img/instagram/me.webp'; // Ruta de la imagen
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { logos } from '../../assets/img';
import { logos2 } from '../../assets/img';
import LineAnimation from '../../components/Animations/lineAnimation';

function About() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const logosArray = logos; // Cambiar esto a logos2 en la sección "EDUCATION"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logosArray.length);
    }, 3000); // Cambiar el valor de 3000 según la velocidad deseada en milisegundos

    return () => clearInterval(interval);
  }, [logosArray.length]);

  const textLines = [
    "De niña acompañaba a la oficina a mi mamá,",
    "y por iniciativa durante la tarde investigaba",
    "sobre algún tema y al final del día se lo exponía,",
    "casi siempre era sobre tortugas, muchos años después",
    "me enteré que en la cultura maya mi totem es la tortuga",
    "según el día que nací, curiosamente, actualmente,",
    "vivo en tierras Mayas, lo que ha sido una infinita",
    "fuente de inspiración, y no solo eso, si no que mi amor",
    "por la investigación fue creciendo y ahora lo utilizo",
    "en mi carrera como creativa y planner.",
    "Si me felicitas en mi cumpleaños, sabré que también",
    "te gusta investigar. Hay tanta información, que juntando",
    "las piezas que ya existen con las chispas de lo intangible",
    "(las ideas) la creatividad se vuelve un estilo de vida.",
    "Sueño con ser una eterna turista, y ser capaz de apreciar",
    "cada detalle ... me encanta estar en lo desconocido.",
    "Mi familia se cambiaba mucho de ciudad, por lo que",
    "tuve que desarrollar el don del camaleón y ser capaz",
    "de adaptarme a cualquier entorno.",
  ];

  const textLines2 = [
    "Si me felicitas en mi cumpleaños, sabré que también",
              "te gusta investigar. Hay tanta información, que juntando",
              "las piezas que ya existen con las chispas de lo intangible",
              "(las ideas) la creatividad se vuelve un estilo de vida.",
             "Sueño con ser una eterna turista, y ser capaz de apreciar",
              "cada detalle ... me encanta estar en lo desconocido.",
              "Mi familia se cambiaba mucho de ciudad, por lo que",
              "tuve que desarrollar el don del camaleón y ser capaz",
              "de adaptarme a cualquier entorno.",
  ]

  return (
    <div>
      <Navbar />
      <section className="lg:flex py-24 justify-center gap-24 container">
      <div className="max-w-xl mb-8">
          <motion.img
            src={aboutImage}
            alt="About Me"
            className="w-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
        <div className=''>
          <h2 className="text-4xl font-bold mb-6 mt-32">ABOUT ME</h2>
          <div className="max-w-2xl text-lg leading-relaxed mb-12">
            {textLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className=""
              >
                {line}
              </motion.p>
            ))}
            <div className='pt-4'>
            {textLines2.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className=""
              >
                {line}
              </motion.p>
            ))}
            </div>
          </div>
          <div className=''>

            <h2 className='text-5xl'>My Journey</h2>
            <LineAnimation />
            <div className=''>
              <motion.img
                src={logosArray[currentLogoIndex]}
                alt="Logo"
                className="w-[150px] h-[100px] mt-6 transition duration-300 ease-in-out"
              />
            </div>
          </div>
      <div className='mt-8'>
        <h2 className='text-5xl'>EDUCATION</h2>
        <LineAnimation />
        <div className='inline'>
          <motion.img
            src={logos2[currentLogoIndex]}
            alt="Logo"
            className="w-[200px] h-[100px] mt-6 transition duration-300 ease-in-out"
          />
        </div>
      </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

