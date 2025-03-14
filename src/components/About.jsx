import {
  FaMobileAlt,
  FaDatabase,
  FaReact,
  FaServer,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  const techStacks = [
    { name: "Backend Development", icon: <FaServer className="text-xl" />, 
      technologies: ["Node.js", "Express", "Go", "Fiber", "RESTful APIs"] },
    { name: "Database", icon: <FaDatabase className="text-xl" />, 
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"] },
    { name: "Mobile Development", icon: <FaMobileAlt className="text-xl" />, 
      technologies: ["Flutter", "Jetpack Compose", "Android SDK"] },
    { name: "Frontend", icon: <FaReact className="text-xl" />, 
      technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript"] },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Tech badge hover animation variants
  const badgeVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      backgroundColor: "rgba(var(--p-rgb), 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      } 
    }
  };

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
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {techStacks.map((stack, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-4"
                    variants={itemVariants}
                  >
                    <div className="flex items-center mb-3">
                      <span className="mr-2 text-primary">{stack.icon}</span>
                      <span className="font-semibold">{stack.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {stack.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="badge badge-primary badge-outline py-3 px-4 cursor-pointer"
                          variants={badgeVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;