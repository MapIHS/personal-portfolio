import { FaTools, FaGithub, FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Conito",
      description: "Aplikasi Baca Manhwa dan Manhua Terbaik Dengan lebih dari 50+ Bahasa",
      image: "https://i.ibb.co.com/tTHYVf3q/741shots-so.png",
      playstore: "https://play.google.com/store/apps/details?id=com.ihdev.conito",
      tags: ["Flutter", "NestJs", "GetX"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2 my-3">
                    {project.tags.map((tag, idx) => (
                      <div key={idx} className="badge badge-outline">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm"
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
                      >
                        <FaGooglePlay className="mr-2" /> Play Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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