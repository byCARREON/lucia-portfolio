import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuItems3 } from '../../constants';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function findProjectById(id) {
  return menuItems3.find((item) => item.id === parseInt(id, 10));
}
  
function PhotographyPage() {
  const { id } = useParams();
  const project = findProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    
    <div className="">
      <Navbar />
      <div className="flex justify-center items-end my-[8vh]">
        <h2 className="text-[9vw] leading-[1.2]">{project.text}</h2>
        <h3 className="text-[1.12vw]">{project.category}</h3>
      </div>
      <div className="container grid grid-cols-2 gap-4">
        {project.galleryImages.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1 relative" onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}>
            <img className='rounded-lg' src={image.src} alt={`Gallery Image ${index + 1}`} />
            <div className={`absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white text-lg">{image.imgText}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PhotographyPage;

