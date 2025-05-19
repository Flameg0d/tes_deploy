

import React from 'react';
import { Link } from 'react-router-dom';

const GambarSejajar = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h1>FEATURED NEWS</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gambar Kiri"
            style={{ width: '80%', height: 'auto', display: 'block' }}
          />
        </div>

        <div>
        <h1>FEATURED NEWS: Makin Produktif, Ini Cara Kolaborasi Programmer dengan AI</h1>


        <p className="text-gray-700 mb-4 leading-relaxed">
          Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
        </p>
    
        <p className="text-gray-700 mb-4 leading-relaxed">
          Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
        </p>

          <br/>
          <Link to="/news" className="text-black hover:text-gray-500">Kembali ke Menu News</Link>
        </div>

        <div style={{ flex: 1 }}>
      <h1>RECENT NEWS</h1>
      <ul>
        <li><Link to="/berita1">1. Indonesia siap merilis AI Garuda, Setara ChatGPT</Link></li>
        <li><Link to="/berita2">2. Pertimbangan jadi ahli Front End, Back End, atau DevOPS?</Link></li>
        <li><Link to="/berita3">3. 5 Tips untuk menjadi Programmer yang lebih baik</Link></li>
        <li><Link to="/berita4">4. Game Developer asal Indonesia jadi Finalis USA Game Award 2025</Link></li>
        <li><Link to="/berita5">5. Klarifikasi, Elaborasi, dan Editing: Teknik bagi Content Writer yang Menggunakan AI</Link></li>
      </ul>
</div>

      </div>
 </div>
  );
};

export default GambarSejajar;
