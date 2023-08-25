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
    const delay = setTimeout(() => {
      setShowComponents(true);
    }, 3500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      <IntroAnimation />
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