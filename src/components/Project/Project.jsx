import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';
import AnimatedText from '../Animations/AnimatedText';
import React from 'react';
import { menuItems, menuItems2, menuItems3 } from '../../constants';

function Project() {
  const menuRef = useRef(null);

  const [selectedMenu, setSelectedMenu] = useState('IDEAS & CONCEPTS'); // Agrega estado para el menú seleccionado
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const timeline = gsap.timeline();

  gsap.defaults({
    duration: 0.55,
    ease: "expo.out",
  });

  const handleMouseEnter = (item) => {
    const imageWrapper = item.querySelector(".menu__item-image_wrapper");
    gsap.set(imageWrapper, {
      scale: 0.8,
      xPercent: 25,
      yPercent: 50,
      rotation: -15,
    });
    gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
  };

  const handleMouseLeave = (item) => {
    const imageWrapper = item.querySelector(".menu__item-image_wrapper");
    gsap.to(imageWrapper, {
      opacity: 0,
      yPercent: -50,
      xPercent: 25,
      scale: 0.8,
      rotation: -15,
    });
  };

  const handleMouseMove = (item, { x, y }) => {
    const imageWrapper = item.querySelector(".menu__item-image_wrapper");
    const imageWrapperBounds = imageWrapper.getBoundingClientRect();
    const itemBounds = item.getBoundingClientRect();

    let yOffset = itemBounds.top / imageWrapperBounds.height;
    yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

    gsap.to(imageWrapper, {
      duration: 1.25,
      x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
      y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
    });
  };

  const handleResize = (item) => {
    const imageWrapper = item.querySelector(".menu__item-image_wrapper");
    const imageWrapperBounds = imageWrapper.getBoundingClientRect();
    const itemBounds = item.getBoundingClientRect();

    let yOffset = itemBounds.top / imageWrapperBounds.height;
    yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

    gsap.to(imageWrapper, {
      duration: 1.25,
      x: Math.abs(itemBounds.left - itemBounds.left) - imageWrapperBounds.width / 1.55,
      y: Math.abs(itemBounds.top - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container-2 h-[90vh] flex flex-col justify-between pb-24 pt-12">
      <div className="">
        <AnimatedText>
          <div className='flex flex-col items-end'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            >
              <button
                onClick={() => handleMenuClick('IDEAS & CONCEPTS')}
                className={`mr-2 mb-5 transition-all duration-700 ease-in-out ${
                  selectedMenu === 'IDEAS & CONCEPTS'
                    ? 'font-bold text-5xl'
                    : 'text-2xl'
                } cursor-pointer`}
              >
                <h2>IDEAS & CONCEPTS</h2>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            >
              <button
                onClick={() => handleMenuClick('EXPERIENCES & STYLING')}
                className={`mr-2 mb-5 transition-all duration-700 ease-in-out ${
                  selectedMenu === 'EXPERIENCES & STYLING'
                    ? 'font-bold text-5xl'
                    : 'text-2xl'
                } cursor-pointer`}
              >
                <h2>EXPERIENCES & STYLING</h2>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            >
              <button
                onClick={() => handleMenuClick('PHOTOGRAPHY')}
                className={`transition-all duration-700 ease-in-out ${
                  selectedMenu === 'PHOTOGRAPHY'
                    ? 'font-bold text-5xl'
                    : 'text-2xl'
                } cursor-pointer`}
              >
                <h2>PHOTOGRAPHY</h2>
              </button>
            </motion.div>
          </div>
        </AnimatedText>
      </div>
      
      <nav ref={menuRef} className="menu">
  {selectedMenu === 'IDEAS & CONCEPTS'
    ? menuItems.map((item, index) => (
        <div
          key={index}
          className="menu__item w-max"
          onMouseEnter={() => handleMouseEnter(menuRef.current.children[index])}
          onMouseLeave={() => handleMouseLeave(menuRef.current.children[index])}
          onMouseMove={(e) => handleMouseMove(menuRef.current.children[index], e)}
        >
          <div className="menu__item-image_wrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none opacity-0">
            <div className="menu__item-image_inner">
              <img
                className="menu__item-image absolute left-0 top-0 h-[30vh] w-full object-cover"
                src={item.imageSrc}
                alt=""
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            className={`menu__item-text relative uppercase text-[5vw] ${
              isVisible ? 'opacity-100 transition-opacity duration-350' : 'opacity-0'
            } whitespace-nowrap cursor-pointer menu__item-innertext`}
          >
            <Link
              to={
                selectedMenu === 'EXPERIENCES & STYLING'
                  ? `/styling/${item.id}`
                  : selectedMenu === 'PHOTOGRAPHY'
                  ? `/photography/${item.id}` // Cambia esto con la ruta correcta para Photography
                  : `/project/${item.id}`
              }
            >
              {item.text}
            </Link>
          </motion.div>
        </div>
      ))
    : selectedMenu === 'PHOTOGRAPHY'
    ? menuItems3.map((item, index) => (
        <div
          key={index}
          className="menu__item w-max"
          onMouseEnter={() => handleMouseEnter(menuRef.current.children[index])}
          onMouseLeave={() => handleMouseLeave(menuRef.current.children[index])}
          onMouseMove={(e) => handleMouseMove(menuRef.current.children[index], e)}
        >
          <div className="menu__item-image_wrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none opacity-0">
            <div className="menu__item-image_inner">
              <img
                className="menu__item-image absolute left-0 top-0 h-[30vh] w-full object-cover"
                src={item.imageSrc}
                alt=""
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            className={`menu__item-text relative uppercase text-[5vw] ${
              isVisible ? 'opacity-100 transition-opacity duration-350' : 'opacity-0'
            } whitespace-nowrap cursor-pointer menu__item-innertext`}
          >
            <Link
              to={
                selectedMenu === 'PHOTOGRAPHY'
                  ? `/photography/${item.id}`
                  : `/project/${item.id}`
              }
            >
              {item.text}
            </Link>
          </motion.div>
        </div>
      ))
    : menuItems2.map((item, index) => (
        <div
          key={index}
          className="menu__item w-max"
          onMouseEnter={() => handleMouseEnter(menuRef.current.children[index])}
          onMouseLeave={() => handleMouseLeave(menuRef.current.children[index])}
          onMouseMove={(e) => handleMouseMove(menuRef.current.children[index], e)}
        >
          <div className="menu__item-image_wrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none opacity-0">
            <div className="menu__item-image_inner">
              <img
                className="menu__item-image absolute left-0 top-0 h-full w-full object-cover"
                src={item.imageSrc}
                alt=""
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 35, transition: { duration: 0.24, ease: 'easeInOut' } }}
            className={`menu__item-text relative uppercase text-[5vw] ${
              isVisible ? 'opacity-100 transition-opacity duration-350' : 'opacity-0'
            } whitespace-nowrap cursor-pointer menu__item-innertext`}
          >
            <Link
              to={
                selectedMenu === 'EXPERIENCES & STYLING'
                  ? `/styling/${item.id}`
                  : `/project/${item.id}`
              }
            >
              {item.text}
            </Link>
          </motion.div>
        </div>
      ))}
</nav>


    </div>
  );
}

export default Project;
