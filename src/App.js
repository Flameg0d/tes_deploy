import React from "react";

export default function TechlabLandingPage() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rotate-45"></div>
          <h1 className="text-xl font-bold">TECHLAB</h1>
        </div>
        <ul className="flex gap-8 text-gray-800 font-medium">
          <li><a href="#">Institute</a></li>
          <li><a href="#">Program</a></li>
          <li><a href="#">Hiring Network</a></li>
          <li><a href="#">Media</a></li>
        </ul>
        <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded">Daftar</button>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-2 px-20 py-16 bg-white relative">
        <div className="pr-12">
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Edukasi pemograman s/w <br /> yang tepat bagi industri.
          </h2>
          <p className="text-xl font-semibold text-red-600 mb-4">#do<span className="text-black">IT</span>smart</p>
          <p className="text-lg text-gray-700">
            Techlab memiliki visi untuk, <span className="font-bold text-black">membentuk masyarakat sadar teknologi</span>. 
            Techlab hadir sebagai solusi dengan produk dalam bentuk program edukasi programming.
          </p>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f" 
            alt="Reading" 
            className="rounded shadow-lg"
          />
          <div className="absolute top-8 right-8 w-24 h-24 border-2 border-red-600 grid grid-cols-2 grid-rows-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border border-red-600"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
