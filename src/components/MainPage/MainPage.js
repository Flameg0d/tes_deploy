import React, { useState } from 'react';
import emailjs from 'emailjs-com';


// Hero Component
function Hero() {
  return (
    <section id="hero" className="bg-blue-600 text-white py-20 px-6 text-center mr-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">HERO SECTION</h1>
     </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 text-center mr-20">
      <h2 className="text-3xl font-bold mb-4">Tentang Kami ABOUT</h2>
      <p className="max-w-2xl mx-auto text-lg">
        Kami adalah komunitas yang terdiri dari individu kreatif, pengembang, dan pembelajar yang bersemangat untuk berkolaborasi, berbagi pengetahuan, dan tumbuh bersama. Kami percaya bahwa kekuatan komunitas dapat membawa perubahan positif.
      </p>
    </section>
  );
}

// Media Component
function Media() {
  return (
    <section id="media" className="py-20 px-6 bg-white text-center mr-20">
      <h2 className="text-3xl font-bold mb-4">Media Kami</h2>
      <p className="max-w-2xl mx-auto text-lg mb-6">
        Ikuti kami di berbagai platform untuk mendapatkan update terbaru, konten menarik, dan berbagai kegiatan komunitas.
        Test Test Test Test Test Test Test Test Test
        tkan update terbaru, konten menarik, dan berbagai kegiatan komunitas.
        Test Test Test Test Test Test Test Test Test 
        tkan update terbaru, konten menarik, dan berbagai kegiatan komunitas.
        Test Test Test Test Test Test Test Test Test 
        tkan update terbaru, konten menarik, dan berbagai kegiatan komunitas.
        Test Test Test Test Test Test Test Test Test 
         
      </p>
    </section>
  );
}

// Join Component

const Join = () => {
  return (
    <section id="join" className="min-h-screen flex items-center justify-center bg-gray-">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Bergabung Bersama Kami
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Siap berkembang di dunia teknologi? Daftar sekarang dan jadi bagian dari gerakan digital!
        </p>
        
        <form action="https://formsubmit.co/maxrahadian@gmail.com" method="POST" className="space-y-5">
          {/* Anti-bot & Redirect (optional) */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="email" required />

          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Alasan Ingin Bergabung</label>
            <textarea
              name="alasan"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};


// Sidebar Navigation
function Sidebar() {
  return (
    <nav className="fixed top-4 right-1/2 transform translate-x-1/2 flex flex-row justify-center space-x-10 z-50">
      <a href="#hero" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Hero</a>
      <a href="#about" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">About</a>
      <a href="#media" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Media</a>
      <a href="#join" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Join</a>
    </nav>
  );
}


// Main App Component
function App() {
  return (
    <div className="relative font-sans text-gray-800">
      <Sidebar />
      <Hero />
      <About />
      <Media />
      <Join />
    </div>
  );
}

export default App;
