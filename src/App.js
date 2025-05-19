import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./pages/news";
import Berita1 from "./components/Berita1/Berita1";
import Berita2 from "./components/Berita2/Berita2";
import Berita3 from "./components/Berita3/Berita3";
import Berita4 from "./components/Berita4/Berita4";
import Berita5 from "./components/Berita5/Berita5";
 

// code untuk scrollFeaturedNews
const About = () => <div></div>;
const Media = () => <div></div>;
const JoinUs = () => <div></div>
const Home = () => <div></div>;
<p className="text-gray-700 mb-4 leading-relaxed">
Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
</p>

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/joinus" element={<JoinUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/berita1" element={<Berita1 />} />
        <Route path="/berita2" element={<Berita2 />} />
        <Route path="/berita3" element={<Berita3 />} />
        <Route path="/berita4" element={<Berita4 />} />
        <Route path="/berita5" element={<Berita5 />} />
        </Routes>
    </Router>
  );
};

export default App;
