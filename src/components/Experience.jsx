import { useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaLaptopCode, FaExclamationTriangle } from "react-icons/fa";

function Experience() {
  const [activeTab, setActiveTab] = useState("freelance"); // 'work', 'freelance', or 'education'
  const [showMore, setShowMore] = useState(false);

  const experienceData = {
    work: [
    ],
    freelance: [
      {
        id: 1,
        title: "Backend Development",
        client: "Undisclosed",
        duration: "May 2023 - Oct 2024",
        location: "Remote",
        description: [
          "Developed RESTful APIs for client's web application",
          "Implemented authentication and authorization mechanisms",
          "Optimized database queries for better performance",
          "Collaborated with frontend developers to integrate APIs",
        ],
      },
    ],
    education: [
      {
        id: 1,
        title: "Social Sciences",
        institution: "SMAN 1 Bantarbolang",
        duration: "2021 - 2024",
        location: "Bantarbolang, Pemalang, Central Java, Indonesia",
        description: [
            "Studied social sciences with a focus on economics and history",
            "Participated in various extracurricular activities and clubs",
            "Completed a research project on local economic development",
            "Graduated with honors and received a scholarship for further studies",
        ],
      },
      {
        id: 2,
        title: "Belajar Fundamental Aplikasi Flutter",
        institution: "Dicoding Academy",
        duration: "12 Jan 2025 - 11 Mar 2025",
        location: "Remote",
        description: [
          "Fundamental Flutter: Implemented lifecycle and widget interactions to enhance user experience. (8 hours 30 minutes)",
          "UI Design with Widgets: Applied effective and efficient widgets to create attractive UI. (10 hours 00 minutes)",
          "State Management: Implemented basic State Management concepts in app development. (5 hours 35 minutes)",
          "Networking: Diagnosed external API needs to fetch data from the internet. (6 hours 55 minutes)",
          "Local Storage: Evaluated suitable local storage technologies for app needs. (8 hours 20 minutes)",
          "Testing: Validated app functionality through automated testing. (8 hours 5 minutes)",
          "Notification & Scheduler: Designed scheduling features to enhance user productivity. (7 hours 10 minutes)",
          "Firebase in Flutter: Integrated various Firebase features in app development. (5 hours 5 minutes)",
        ],
      },
    ],
  };

  const currentExperience = experienceData[activeTab];
  const visibleExperience = showMore ? currentExperience : currentExperience.slice(0, 2);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-base-100 rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "work"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("freelance")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "freelance"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Freelance
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          {currentExperience.length > 0 && (
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-20 dark:bg-opacity-30"></div>
          )}

          {/* Timeline Items */}
          {currentExperience.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <FaExclamationTriangle className="inline-block mr-2" />
              No experience data available for this category.
            </div>
          ) : (
            <div className="space-y-12">
              {visibleExperience.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center`}
                >
                  {/* Timeline Circle */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white shadow-lg z-10 border-4 border-white dark:border-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeTab === "work" && <FaBriefcase size={14} />}
                      {activeTab === "freelance" && <FaLaptopCode size={14} />}
                      {activeTab === "education" && <FaCalendarAlt size={14} />}
                    </div>
                  </div>

                  {/* Left Side (Even Items) */}
                  <div
                    className={`w-full md:w-1/2 md:px-6 ${
                      index % 2 === 1
                        ? "md:text-right md:self-end md:items-end"
                        : "md:text-left"
                    } ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div
                      className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow p-6 mb-6 md:mb-0 ${
                        index % 2 === 0
                          ? "md:ml-auto md:mr-0"
                          : "md:ml-0 md:mr-auto"
                      }`}
                    >
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <h4 className="text-primary font-semibold mt-1">
                        {activeTab === "work" && item.company}
                        {activeTab === "freelance" && item.client}
                        {activeTab === "education" && item.institution}
                      </h4>
                      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400 text-sm">
                      <FaCalendarAlt className="mr-2" /> 
                      {item.duration}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-4">
                      {item.location}
                    </div>
                    <ul className={`space-y-2 text-gray-600 dark:text-gray-400 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-full">{desc}</div>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>

                  {/* Right Side (Odd Items) - This is empty for even items */}
                  <div
                    className={`w-full md:w-1/2  ${
                      index % 2 === 0
                        ? "md:text-left md:self-end md:items-start"
                        : "md:text-right"
                    } `}
                  >
                    {index % 2 === 1 && <div className="hidden md:block"></div>}
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentExperience.length > 2 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn btn-sm btn-primary"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;