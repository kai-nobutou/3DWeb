import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import NavBar from '../common/NavBar';
import ThreeCanvas from '../common/TreeCavas';
import KaiBox from '../common/KaiBox';
import Profile from '../common/Profile';
import Footer from '../footer/Footer';
import BlogList from '../Blog/BlogList';
import './Home.css';
import LeftKaiBox from '../common/LeftKaiBox';

function Home({ blogs }) {
    return (
        <div className="Home">
          <div className="canvas-container">
            <Canvas
              className="canvas"
              camera={{ position: [0, 2, 5], fov: 50 }}
              style={{ background: '#282c34' }}
            >
              <ThreeCanvas />
            </Canvas>
          </div>
          
          <NavBar />

          <header className="Home-header" id="header">
            <LeftKaiBox />
          </header>

          <div className="Home-body">
            <div id="profile">
              <KaiBox />
              <Profile />
            </div>

            <div id="blog-list">
              <Routes>
                <Route path="/" element={<BlogList blogs={blogs} />} />
              </Routes>
            </div>
          </div>
          
          <Footer />
        </div>
    );
}

export default Home;