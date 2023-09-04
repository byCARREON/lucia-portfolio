import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../../constants';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function findProjectById(id) {
  return menuItems.find((item) => item.id === parseInt(id, 10));
}

function Gallery({ images }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`col-span-${(index % 3 === 0) ? 2 : 1} relative`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img src={image.src} alt={image.imgText} className="w-full rounded-md transform hover:scale-105 transition-transform duration-300" />
          <div className={`text-white absolute inset-0 rounded-md bg-black bg-opacity-50 transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <div className='p-6 absolute bottom-0'>
              <h3 className='text-[30px] text-left'>{image.imgTitle}</h3>
              <p className=" text-xl">{image.imgText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectPage() {
  const { id } = useParams();
  const project = findProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-end my-[8vh]">
        <h2 className="text-[9vw] leading-[1.2]">{project.text}</h2>
        <div className='flex justify-center items-center gap-4'>
          <h3 className="text-[1.12vw]">{project.category}</h3>
          {project.instagram}
        </div>
      </div>
      <div>
        <img className="h-[800px]" src={project.imageSrc} alt={project.text} />
      </div>
      <div className="container">
        <h3 className='py-[80px] text-[3rem] leading-[1.2]'>{project.title}</h3>
        <div className="flex pb-[60px]">
          <h3 className="pr-64 text-[1.12vw]">Project Details</h3>
          <p className="text-[1.111vw]">{project.description}</p>
        </div>
        <Gallery images={project.galleryImages} />
        <div className='text-xl'>
          {project.conclusion}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
