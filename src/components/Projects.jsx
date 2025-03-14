import { useRef, useEffect, useState } from "react";
import {
  FaTools,
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

const Projects = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = projectsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      setMaxScroll(currentRef.scrollWidth - currentRef.clientWidth);
      
      const handleScroll = () => {
        setScrollPosition(currentRef.scrollLeft);
      };
      
      currentRef.addEventListener('scroll', handleScroll);
      return () => {
        observer.unobserve(currentRef);
        currentRef.removeEventListener('scroll', handleScroll);
      };
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [projectsRef]);
  
  const scrollLeft = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const projects = [
    {
      title: "Conito",
      description:
        "Free Manhwa and Manhua Reading App Without Ads With more than 50+ Languages available. Conito offers a seamless reading experience with a vast collection of comics from various genres and languages.",
      image: "https://i.ibb.co.com/tTHYVf3q/741shots-so.png",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ihdev.conito",
      tags: ["Flutter", "NestJs", "GetX", "Firebase"],
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and experiences. Built with modern web technologies and hosted on Vercel.",
      image: "https://storage.ihview.live/images/1741968638497884762.png",
      tags: ["React", "Tailwind CSS", "Vercel", "DaisyUI"],
      github: "https://github.com/MapIHS/personal-portfolio",
      demo: "https://mapihs.vercel.app/",
    },
    {
      title: "Image Uploader",
      description:
        "A RESTful API for uploading and managing images. Built with Go and Fiber, utilizing Gorm for ORM and PostgreSQL for database management.",
      image: "https://storage.ihview.live/images/1741968027747612918.png",
      tags: ["Go", "Fiber", "Gorm", "PostgreSQL"],
      github: "https://github.com/MapIHS/go-image-uploader",
      demo: "https://storage.ihview.live/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {projects.length > 0 ? (
          <>
            <div
              ref={projectsRef}
              className={`
                flex flex-row gap-6 overflow-x-auto pb-6
                md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible
                snap-x snap-mandatory scrollbar-hide
                transition-opacity duration-700 ease-in-out
                ${isVisible ? "opacity-100" : "opacity-0"}
              `}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow snap-center min-w-[280px] w-[90%] flex-shrink-0 md:w-auto md:flex-shrink-1"
                >
                  <figure>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 my-3">
                      {project.tags.map((tag, idx) => (
                        <div key={idx} className="badge badge-outline">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-4 flex-wrap gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <FaGithub className="mr-2" /> GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          aria-label={`View ${project.title} demo`}
                        >
                          <FaExternalLinkAlt className="mr-2" /> Demo
                        </a>
                      )}
                      {project.playstore && (
                        <a
                          href={project.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          aria-label={`Download ${project.title} from Play Store`}
                        >
                          <FaGooglePlay className="mr-2" /> Play Store
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows - Only visible on mobile */}
            <div className="flex justify-between md:hidden mt-4">
              <button 
                onClick={scrollLeft} 
                className={`btn btn-circle btn-sm ${scrollPosition <= 10 ? 'opacity-50' : 'opacity-100'}`}
                disabled={scrollPosition <= 10}
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={scrollRight} 
                className={`btn btn-circle btn-sm ${scrollPosition >= maxScroll - 10 ? 'opacity-50' : 'opacity-100'}`}
                disabled={scrollPosition >= maxScroll - 10}
                aria-label="Next project"
              >
                <FaChevronRight />
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-sm text-gray-500 animate-pulse">
                Swipe or use arrows to explore projects
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FaTools className="text-6xl mb-4 animate-bounce text-primary" />
            <h3 className="text-2xl font-bold mb-2">Projects Coming Soon</h3>
            <p className="text-lg max-w-md">
              Currently being updated. Interesting projects will be displayed
              here soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;