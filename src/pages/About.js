import React from 'react';
import FarisPhoto from '../assets/images/Faris.jpg';
import RestuPhoto from '../assets/images/Restu.jpg';

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Story</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Setiap kemajuan peradaban ditandai dengan kemajuan teknologi. Di era digital ini, teknologi informasi telah menjadi tulang punggung berbagai aspek kehidupan — mulai dari komunikasi, transportasi, hingga perdagangan. Seiring berkembangnya industri teknologi yang begitu pesat, kebutuhan akan pengembang teknologi pun meningkat tajam.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Indonesia, sebagai negara berkembang dengan potensi digital yang besar, menghadapi tantangan unik: banyak perusahaan membutuhkan pengembang perangkat lunak, namun di sisi lain, banyak individu yang antusias dan ingin terjun ke dunia teknologi, tetapi tidak memiliki latar belakang formal di bidang ini.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Makna Karya Tech Spark (MKTS) hadir sebagai jembatan antara semangat belajar dan kebutuhan industri. Kami membekali peserta dengan pelatihan praktis, bimbingan berkelanjutan, dan pengalaman nyata agar siap menjadi pengembang teknologi yang tidak hanya terampil, tapi juga bermakna kontribusinya.
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
        “Menjadi bagian dari perubahan yang lebih baik dengan fokus pada solusi — dimulai dari memahami akar masalah.”
      </blockquote>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Kami percaya bahwa teknologi informasi bukan sekadar tren, tetapi alat untuk menyelesaikan persoalan nyata di masyarakat. Dengan memahami pola pikir dan alat kerja seorang pengembang, siapa pun bisa ikut menciptakan dampak — lokal maupun global.
      </p>
      <h2 className="text-xl font-bold mb-2">Meet Our Team</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Tim MKTS adalah sekelompok individu yang passionate terhadap teknologi dan ingin menjadikannya solusi nyata untuk masa depan. Dengan latar belakang dan keahlian yang beragam, kami bersatu untuk membangun ekosistem edukasi yang menyenangkan, relevan, dan berdampak.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Kami percaya bahwa perubahan dimulai dari edukasi. Maka dari itu, melalui program pelatihan, mentoring, dan proyek nyata, kami membentuk talenta digital yang tidak hanya siap kerja, tapi juga siap berkontribusi.
      </p>

      {/* Profil CEO */}
      <h2 className="text-xl font-bold mb-4">Our Leaders</h2>
      <div className="flex space-x-8 mb-4">
        <div className="text-center max-w-xs">
          <img src={FarisPhoto} alt="Faris Sundara Putra" className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
          <h3 className="font-bold">Faris Sundara Putra</h3>
          <p className="text-gray-700 mb-2">Co-Founder & CMO</p>
          <p className="text-gray-600 text-sm">
            Aktif dalam membangun ekosistem bisnis. Seorang yang antusias, dan memiliki keahlian di bidang bisnis model dan customer acquisition. Memiliki pendidikan Master Bisnis dan memilih untuk menerapkan keilmuanya sebagai seorang entrepreneur. Teknologi menjadi pilihan industri yang didalami untuk memberi manfaat dan impact.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <img src={RestuPhoto} alt="Restu Arif Priyono" className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
          <h3 className="font-bold">Restu Arif Priyono</h3>
          <p className="text-gray-700 mb-2">Founder & CEO</p>
          <p className="text-gray-600 text-sm">
            Seorang tech enthusiast yang memiliki latar belakang pendidikan teknik informatika dan manajemen bisnis. Tertarik dalam pengembangan produk berbasis teknologi yang berorientasi pada solusi. Melihat kemajuan peradaban di masa depan terletak pada kemajuan teknologi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
