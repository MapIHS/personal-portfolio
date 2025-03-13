import {
    FaMobileAlt,
    FaDatabase,
    FaNodeJs,
  } from "react-icons/fa";
  
  const About = () => {
    const skills = [
      { name: "Node.js/Express", icon: <FaNodeJs />, level: 85 },
      { name: "Database Management", icon: <FaDatabase />, level: 88 },
      { name: "Flutter", icon: <FaMobileAlt />, level: 75 },
    ];
  
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6">
                I am an experienced backend and mobile developer specializing in building modern applications. 
                With expertise in databases, REST APIs, and mobile app development, I focus on creating 
                efficient, secure, and scalable solutions.
              </p>
              <p className="text-lg mb-6">
                With experience using technologies such as Node.js, Express, MongoDB, Firebase, 
                and Flutter, I am capable of delivering high-quality applications 
                that meet both business needs and user requirements.
              </p>
            </div>
  
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-2">
                        <span className="mr-2">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <progress
                        className="progress progress-primary w-full"
                        value={skill.level}
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;