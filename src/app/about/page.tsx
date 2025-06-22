"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaCode, 
  FaLaptopCode, 
  FaTools, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaDatabase,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostman, 
  SiSocketdotio, 
  SiJsonwebtokens 
} from "react-icons/si";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const technologies = {
    frontend: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
      { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
      { icon: FaHtml5, name: "HTML5", color: "text-orange-600" },
      { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" }
    ],
    backend: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { icon: SiExpress, name: "Express.js", color: "text-gray-600 dark:text-gray-300" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-600" }
    ],
    tools: [
      { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
      { icon: FaGithub, name: "GitHub", color: "text-gray-800 dark:text-white" },
      { icon: SiPostman, name: "Postman", color: "text-orange-500" },
      { icon: SiSocketdotio, name: "Socket.io", color: "text-gray-800 dark:text-white" },
      { icon: SiJsonwebtokens, name: "JWT", color: "text-purple-600" }
    ]
  };

  type SkillCardProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;
    title: string;
    techs: { icon: React.ComponentType<{ className?: string }>; name: string; color: string }[];
    delay?: number;
  };

  const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, techs, delay = 0 }) => (
    <div 
      className={`bg-white dark:bg-gray-800/30 opacity p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:scale-105 backdrop-blur-xs border border-gray-200/20 dark:border-gray-700/30 ${
        isVisible['animate-skills'] 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 mx-auto shadow-lg">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3 mt-12">
        {techs.map((tech, index) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <tech.icon 
              className={`h-10 w-10 ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg`} 
            />
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-10 px-4">
        {/* Header */}
        <div 
          id="animate-header"
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['animate-header'] || true 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Bio Section */}
        <section 
          id="animate-bio"
          className={`mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible['animate-bio'] || true
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
           <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/30 backdrop-blur-xs rounded-2xl p-8 shadow-xl border border-gray-200/30 dark:border-gray-700/30">
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
              Passionate about creating <span className="font-semibold text-blue-600 dark:text-blue-400">dynamic and responsive web applications</span> using the MERN stack. I specialize in building <span className="font-semibold text-purple-600 dark:text-purple-400">scalable solutions</span> that deliver exceptional user experiences and robust backend functionality.
            </p>
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
              My journey in web development started with a curiosity for how things work behind the scenes. Today, I&apos;m proficient in <span className="font-semibold text-green-600 dark:text-green-400">MongoDB</span> for database management, <span className="font-semibold text-gray-600 dark:text-gray-300">Express.js</span> for server-side logic, <span className="font-semibold text-blue-500 dark:text-blue-400">React.js</span> for interactive frontends, and <span className="font-semibold text-green-500 dark:text-green-400">Node.js</span> for scalable backend services.
            </p>
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Beyond coding, I&apos;m a dedicated <span className="font-semibold text-orange-600 dark:text-orange-400">DSA enthusiast</span> who believes that strong problem-solving skills are the foundation of great software development. I continuously challenge myself with algorithmic problems to sharpen my logical thinking.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="animate-skills"
          className="mb-20"
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible['animate-skills'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={FaCode} 
              title="Frontend" 
              techs={technologies.frontend}
              delay={100}
            />
            <SkillCard 
              icon={FaLaptopCode} 
              title="Backend" 
              techs={technologies.backend}
              delay={200}
            />
            <SkillCard 
              icon={FaTools} 
              title="Tools & Others" 
              techs={technologies.tools}
              delay={300}
            />
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="animate-education"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible['animate-education'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-xs p-8 rounded-2xl shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-lg">
                  CMR Technical Campus | 2023 - 2027
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FaDatabase className="mr-2" />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default AboutPage;