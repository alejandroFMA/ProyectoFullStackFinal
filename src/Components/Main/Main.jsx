import React from "react";
import Frontpage from "./Frontpage/Frontpage";
import About from "./About";
import Newsfeed from "./Newsfeed";
import Programs from "./Programs";
import { Routes, Route } from "react-router-dom"; 

const Main = () => {
  return (
    <main> 
      <Routes>
        <Route path="/" element={<Frontpage />} /> 
        <Route path="/filmoteca" element={<About />} />
        <Route path="/noticias" element={<Newsfeed />} />
        <Route path="/programas" element={<Programs />} />
      </Routes>
    </main>
  );
};

export default Main;

