import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './components/Project/Project';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import StylingPage from './pages/StylingPage/StylingPage';
import PhotographyPage from './pages/PhotographyPage/PhotographyPage';
import PageTransition from './components/Animations/PageTransition';
import Cursor from './components/Cursor/Cursor';
import { ColorProvider } from './constants/colorContext';
import Scroll from './components/Animations/SmoothScroll';

function App() {

  return (
      <Router>
          {/*¿<Scroll />*/}
          <Routes>
            <Route index path="/" 
              element={
                <Home />
              } />
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
            <Route path="/project" element={<Project />} />
            <Route
              path="/project/:id"
              element={
                <PageTransition>
                  <ProjectPage />
                </PageTransition>
              }
            />
            <Route 
              path="/styling/:id" 
              element={
                <PageTransition>
                  <StylingPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/photography/:id" 
              element={
                <PageTransition>
                  <PhotographyPage />
                </PageTransition>
              } 
            />
          </Routes>
          <Cursor />
      </Router>
  );
}

export default App;
