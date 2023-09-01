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
    "My name is Diana Lucía, and I'm on a journey to blend my love for concept",
    "development with the art of direction.",
    "I find inspiration in the everyday, and I believe that life is a canvas waiting to be",
    "adorned with unforgettable moments.I thrive on crafting spaces and experiences",
    "that resonate with people on a deeply emotional level.",
    "My fascination with creativity isn't just about aesthetics; it's about creating",
    "environments that tell stories and evoke feelings.",
    "I’m trying to develop everything since the narrative, a chapter in a larger story where",
    "every detail matters. From the concept to the campaign or execution, it's all part of",
    "the artistry that transforms an idea into something truly special.",
    "As I embark on my journey in art direction, I'm excited to bring my passion for market",
    "research and design to a broader canvas. I see art direction as the perfect",
    "intersection of my love for aesthetics and my desire to create meaningful, immersive",
    "experiences. It's about shaping visual narratives that captivate, inspire, and leave a",
    "lasting impression.",
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
      <section className="xl:flex xl:flex-row flex flex-col items-center xl:items-stretch py-24 justify-center gap-24 container">
      <div className="max-w-xl mb-8">
          <motion.img
            src={aboutImage}
            alt="About Me"
            className="w-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
        <div className=''>
          <h2 className="text-4xl font-bold mb-6 xl:mt-32">ABOUT ME</h2>
          <div className="max-w-2xl text-lg leading-relaxed mb-12">
          <p>My name is Diana Lucía, and I'm on a journey to blend my love for concept development with the art of direction.</p> <br />

          <p>
            I find inspiration in the everyday, and I believe that life is a canvas waiting to be
            adorned with unforgettable moments.I thrive on crafting spaces and experiences
            that resonate with people on a deeply emotional level.
          </p> <br />

          <p>
            My fascination with creativity isn't just about aesthetics; it's about creating
            environments that tell stories and evoke feelings.
            I’m trying to develop everything since the narrative, a chapter in a larger story where
            every detail matters. From the concept to the campaign or execution, it's all part of
            the artistry that transforms an idea into something truly special.
          </p> <br />

          <p>
          As I embark on my journey in art direction, I'm excited to bring my passion for market
research and design to a broader canvas. I see art direction as the perfect
intersection of my love for aesthetics and my desire to create meaningful, immersive
experiences. It's about shaping visual narratives that captivate, inspire, and leave a
lasting impression.
          </p><br />

          <p>
          I see my job as a lifestyle, you'll find me exploring art galleries, doing some market
research while sipping on a cup of artisanal herbal infusion, or wandering through
nature to soak up inspiration from the world around me.
          </p><br />

          <p>
          I believe that every moment, whether big or small, is an opportunity to curate a
beautiful experience.
          </p><br />

          <p>
          Join me on this exciting journey as I continue to explore the boundless possibilities
of advertising and art direction. Let's create, inspire, and make every moment a
masterpiece.
          </p>
          
          </div>
          <div className=''>

            <h2 className='text-5xl'>My Journey</h2>
            <LineAnimation />
            <div className=''>
              <a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">
                  <motion.img
                      src={logosArray[currentLogoIndex]}
                      alt="Logo"
                      className="w-[150px] h-[100px] mt-6 transition duration-300 ease-in-out"
                  />
              </a>
            </div>
          </div>
      <div className='mt-8'>
        <h2 className='text-5xl'>EDUCATION</h2>
        <LineAnimation />
        <div className='inline'>
          <a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">
              <motion.img
                  src={logos2[currentLogoIndex]}
                  alt="Logo"
                  className="w-[200px] h-[100px] mt-6 transition duration-300 ease-in-out"
              />
          </a>
        </div>
      </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

