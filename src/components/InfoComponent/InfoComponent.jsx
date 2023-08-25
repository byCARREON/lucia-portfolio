import React from 'react';
import { easeInOut, motion } from 'framer-motion';
import LineAnimation from '../Animations/lineAnimation';
import arrow from '../../assets/icons/arrow.png'

function InfoComponent({ subtitle, image, description, date, workType }) {

  if(!image) {

  }

    return (
      <div className="cursor-pointer pt-6">
        <a href="https://www.linkedin.com/in/dianaluciacorrea/" target="_blank" rel="noopener noreferrer">
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 20, transition: { duration: 0.3, ease: 'easeInOut' } }}
            className="flex justify-between text-[1.2vw] mb-8"
          >
            {/* Parte Izquierda */}
            <div className="">
              {image && <img className='w-[125px] h-[125px]' src={image} alt="" />}
              <h3>{subtitle}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
            </div>
            {/* Parte Derecha */}
            <div className="flex flex-col items-end justify-between">
              <div>
                <p className="text-gray-700 mb-2">{date}</p>
                <p className="text-gray-700">{workType}</p>
              </div>
              <img className='arrow' src={arrow} alt="" />
            </div>
          </motion.div>
          <LineAnimation />
        </a>
      </div>

    );
}

export default InfoComponent;
