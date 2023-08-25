import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/img/instagram/me.jpg'; // Ruta de la imagen
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import InfoComponent from '../../components/InfoComponent/InfoComponent';
import { logos } from '../../assets/img';

function About() {
  return (
    <div>
      <Navbar />
      <section className="lg:flex py-24 justify-center gap-32 items-stretch h-[100vh]">
        <div className="max-w-xl mb-8">
          <motion.img
            src={aboutImage}
            alt="About Me"
            className="w-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
        <div className=''>
          <h2 className="text-4xl font-bold mb-6 mt-32">ABOUT ME</h2>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed">
            <p className='pb-8'>
              De niña acompañaba a la oficina a mi mamá,<br />
              y por iniciativa durante la tarde investigaba<br />
              sobre algún tema y al final del día se lo exponía,<br />
              casi siempre era sobre tortugas, muchos años después<br />
              me enteré que en la cultura maya mi totem es la tortuga<br />
              según el día que nací, curiosamente, actualmente,<br />
              vivo en tierras Mayas, lo que ha sido una infinita<br />
              fuente de inspiración, y no solo eso, si no que mi amor<br />
              por la investigación fue creciendo y ahora lo utilizo<br />
              en mi carrera como creativa y planner.
            </p>
            <p>
              Si me felicitas en mi cumpleaños, sabré que también<br />
              te gusta investigar. Hay tanta información, que juntando<br />
              las piezas que ya existen con las chispas de lo intangible<br />
              (las ideas) la creatividad se vuelve un estilo de vida.<br />
              Sueño con ser una eterna turista, y ser capaz de apreciar<br />
              cada detalle ... me encanta estar en lo desconocido.<br />
              Mi familia se cambiaba mucho de ciudad, por lo que<br />
              tuve que desarrollar el don del camaleón y ser capaz<br />
              de adaptarme a cualquier entorno.
            </p>
          </div>
        </div>
      </section>
      <div className='container'>
        <h2 className='text-[5vw]'>My Journey</h2>
        <InfoComponent
          image={logos[0]}
          description="General Manager"
          workType=""
        />
        <InfoComponent
          image={logos[1]}
          description="Profesional independiente"
          workType=""
        />
        <InfoComponent
          image={logos[2]}
          description="Retail Salesworker"
          workType=""
        />
        <InfoComponent
          image={logos[3]}
          description="Especialista de mercados"
          workType=""
        />
        <InfoComponent
          image={logos[4]}
          description="Investigadora de mercados"
          workType=""
        />
      </div>
      <div className='container'>
        <h2 className='text-[5vw] text-right'>EDUCATION</h2>
        <InfoComponent
          subtitle="Tecnológico de Monterrey"
          description="Administración y estrategia de negocios"
          date="2016 - 2020"
          workType=""
        />
        <InfoComponent
          subtitle="Universidad La Salle México"
          description="Diploma of Education, Administración de proyectos y Big Data"
          date="May 2021 - Jul 2022"
          workType=""
        />
        <InfoComponent
          subtitle="CENTRO diseño | cine | televisión"
          description="Certificación, Behavioral Design"
          date="Sept - Nov 2020"
          workType=""
        />
        <InfoComponent
          subtitle="UTEL Universidad"
          description="Psicología organizacional, Gestión y servicios de recursos humanos"
          date="Ago 2019 - Jun 2019"
          workType=""
        />
        <InfoComponent
          subtitle="EBAC - Escola Británica de Artes Creativas y Tecnología"
          description="Diseño de interiores"
          date="Feb 2020"
          workType=""
        />
        <InfoComponent
          subtitle="Repensar Educativo"
          description="Diploma of Education, Design management"
          date="Oct 2022 - May 2023"
          workType=""
        />
        <InfoComponent
          subtitle="Miami Ad School (M.A.D School)"
          description="Dirección de arte, publicidad y creatividad"
          date="Ene 2023 - Present"
          workType=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
