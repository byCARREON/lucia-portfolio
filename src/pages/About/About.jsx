import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { meImg } from '../../assets/img';// Ruta de la imagen
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { logos } from '../../assets/img';
import { logos2 } from '../../assets/img';
import LineAnimation from '../../components/Animations/lineAnimation';

function About() {
  const [currentLogoIndex1, setCurrentLogoIndex1] = useState(0);
  const [currentLogoIndex2, setCurrentLogoIndex2] = useState(0);
  const logosArray = logos;
  const logosArray2 = logos2;

  // Carousel para "My Journey"
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentLogoIndex1((prevIndex) => (prevIndex + 1) % logosArray.length);
    }, 2500);

    return () => clearInterval(interval1);
  }, [logosArray.length]);

  // Carousel para "EDUCATION"
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentLogoIndex2((prevIndex) => (prevIndex + 1) % logosArray2.length);
    }, 2500);

    return () => clearInterval(interval2);
  }, [logosArray2.length]);

  const handleNextImage1 = () => {
    setCurrentLogoIndex1((prevIndex) => (prevIndex + 1) % logosArray.length);
  };

  const handlePrevImage1 = () => {
    setCurrentLogoIndex1((prevIndex) =>
      prevIndex === 0 ? logosArray.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage2 = () => {
    setCurrentLogoIndex2((prevIndex) => (prevIndex + 1) % logosArray2.length);
  };

  const handlePrevImage2 = () => {
    setCurrentLogoIndex2((prevIndex) =>
      prevIndex === 0 ? logosArray2.length - 1 : prevIndex - 1
    );
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = meImg;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000); // Cambia el tiempo de cambio de imagen en milisegundos

    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <div>
      <Navbar />
      <section className="xl:flex xl:flex-row flex flex-col items-center py-24 justify-center gap-24 container ">
      <div className="max-w-xl mb-8">
          <motion.img
            src={imageArray[currentImageIndex]}
            alt="About Me"
            className="w-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
        <div className=''>
          <h2 className="text-4xl font-bold mb-6 xl:mt-32">ABOUT ME</h2>
          <div className="max-w-2xl text-lg leading-relaxed mb-12">
          <p>Hello there!</p> <br />

          <p>
            My name is Diana Lucía, and I'm on a journey to blend my love for concept development with the art of direction.
          </p> <br />

          <p>
          I believe that life is a canvas waiting to be adorned with unforgettable moments. I thrive on crafting spaces and experiences that resonate with people on a deeply emotional level.
          </p> <br />

          <p>
          My fascination with creativity isn't just about aesthetics; it's about creating environments that tell stories and evoke feelings. I’m trying to develop everything since the narrative, a chapter in a larger story where every detail matters. From the concept to the campaign or execution, it's all part of the artistry that transforms an idea into something truly special.
          </p><br />

          <p>
          I see my job as a lifestyle, you'll find me exploring art galleries, doing some market research while sipping on a cup of artisanal herbal infusion, or wandering through nature to soak up inspiration from the world around me.
          </p><br />

          <p>Join me on this exciting journey as I continue to explore the boundless possibilities of advertising and art direction. Let's create, inspire, and make every moment a masterpiece.
          </p><br />
          
          </div>
          <div className=''>

            <h2 className='text-5xl'>My Journey</h2>
            <LineAnimation />
            <div className='flex gap-12'>
              {/*<a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">*/}
              <button className='text-[3rem] hover:opacity-10 transition-all easeIn' onClick={handlePrevImage1}>&#8249;</button>
                <div className='flex flex-col items-center'>
                  <a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={logosArray[currentLogoIndex1].src}
                      alt="Logo"
                      className="w-[150px] h-[100px] mt-6 transition duration-300 ease-in-out"
                    />
                  </a>
                  <p className='mt-3'>{logosArray[currentLogoIndex1].text}</p>
                </div>
              <button className='text-[3rem] hover:opacity-10 transition-all easeIn' onClick={handleNextImage1}>&#8250;</button>
            </div>
          </div>
      <div className='mt-8'>
        <h2 className='text-5xl'>EDUCATION</h2>
        <LineAnimation />
        <div className='flex gap-12'>
          <button className='text-[3rem]  hover:opacity-10 transition-all easeIn' onClick={handlePrevImage2}>&#8249;</button>
            <div className='flex flex-col items-center'>
              <a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={logosArray2[currentLogoIndex2].src}
                  alt="Logo"
                  className="w-[150px] h-[100px] mt-6 transition duration-300 ease-in-out"
                />
              </a>
              <p className='mt-3'>{logosArray2[currentLogoIndex2].text}</p>
            </div>
          <button className='text-[3rem] hover:opacity-10 transition-all easeIn' onClick={handleNextImage2}>&#8250;</button>
        </div>
      </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

