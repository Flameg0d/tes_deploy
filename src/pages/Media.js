import React from 'react';
import Foto1 from '../assets/images/foto1.png'; // Ganti dengan path yang sesuai
import Foto2 from '../assets/images/foto2.png'; // Ganti dengan path yang sesuai
import Foto3 from '../assets/images/foto3.png'; // Ganti dengan path yang sesuai
import Foto4 from '../assets/images/foto4.png'; // Ganti dengan path yang sesuai
import Foto5 from '../assets/images/foto5.png'; // Ganti dengan path yang sesuai

const Media = () => {
  const mediaContent = [
    {
      imgSrc: Foto1,
      title: "Diskusi Tim",
      description: "Di Makna Karya Tech Spark, kolaborasi adalah kunci. Kami mendorong peserta untuk aktif berdiskusi, bertukar ide, dan menyusun solusi secara tim. Setiap proyek bukan hanya tentang coding, tapi juga tentang membangun cara berpikir kritis dan kerja sama yang solid."
    },
    {
      imgSrc: Foto2,
      title: "Presentasi / Pitching Project",
      description: "Kami percaya bahwa kemampuan komunikasi teknis sama pentingnya dengan kemampuan teknis itu sendiri. Dalam sesi presentasi proyek, peserta diberi kesempatan untuk memaparkan ide, mendapatkan feedback, dan belajar menyampaikan solusi secara profesional dan meyakinkan."
    },
    {
      imgSrc: Foto3,
      title: "Ngoding Bareng",
      description: "Suasana ngoding bareng jadi salah satu rutinitas seru di MKTS. Dengan bimbingan mentor dan dukungan komunitas, peserta belajar menyelesaikan tantangan nyata dalam dunia pengembangan perangkat lunak. Belajar jadi menyenangkan ketika dilakukan bersama."
    },
    {
      imgSrc: Foto4,
      title: "Foto Bareng Tim MKTS",
      description: "Makna Karya Tech Spark bukan hanya tempat belajar, tapi juga tempat tumbuh bersama. Kami membangun komunitas yang saling mendukung, terbuka, dan penuh semangat. Setiap peserta adalah bagian penting dari perjalanan ini, dan kebersamaan adalah fondasinya."
    },
    {
      imgSrc: Foto5,
      title: "Hands-on Workshop",
      description: "Belajar di MKTS bersifat praktikal dan aplikatif. Dalam setiap workshop, peserta diajak memahami alur kerja nyata seorang developer – mulai dari merancang solusi, mengimplementasikan teknologi, hingga menguji hasilnya. Inilah ruang belajar yang penuh aksi."
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaContent.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
