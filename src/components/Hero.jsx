import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Hero = () => {
  // State untuk animasi pergantian teks profesi
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["Backend Developer", "Mobile Developer"];

  // Efek untuk mengubah profesi setiap beberapa detik
  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000); // Ganti setiap 3 detik

    return () => clearInterval(interval);
  }, [professions.length]);
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hai, My Name Maptuhul Ihsan
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              <span className="text-primary font-medium transition-opacity duration-500">
                {professions[professionIndex]}
              </span>
            </p>
            <div className="mb-8">
              <p className="text-lg leading-relaxed">
                specializing in creating powerful applications with modern
                technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/Maptuhul_Ihsan_CV.pdf"
                download
                className="btn btn-primary gap-2"
                aria-label="Download CV"
              >
                <FaFileDownload /> Download CV
              </a>
              <a
                href="https://github.com/MapIhs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/maptuhul-ihsan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://github.com/MapIhs.png" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
