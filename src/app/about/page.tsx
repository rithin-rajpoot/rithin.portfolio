"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava
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
  SiJsonwebtokens,
  SiPython,
  SiC,
  SiFlutter,
  SiVite,
  SiNodedotjs
} from "react-icons/si";
import type { IconType } from "react-icons";


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

  type SkillItem = {
    icon: IconType;
    name: string;
    color: string;
  };

  type SkillSectionType = {
    key: string;
    title: string;
    items: SkillItem[];
    delay?: number;
  };

  const skillSections: SkillSectionType[] = [
    {
      key: "languages",
      title: "Programming Languages",
      delay: 100,
      items: [
        { icon: FaJava, name: "Java", color: "text-[#F89820]" },
        { icon: FaJs, name: "JavaScript", color: "text-[#F7DF1E]" },
        { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
        { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
        { icon: SiC, name: "C", color: "text-[#A8B9CC]" },
      ]
    },
    {
      key: "web-dev",
      title: "Web Development",
      delay: 200,
      items: [
        { icon: SiNodedotjs, name: "Node.js", color: "text-[#3C873A]" },
        { icon: FaHtml5, name: "HTML", color: "text-[#E34F26]" },
        { icon: FaCss3Alt, name: "CSS3", color: "text-[#1572B6]" },
        { icon: FaReact, name: "React", color: "text-[#61DAFB]" },
        { icon: SiFlutter, name: "Flutter", color: "text-[#02569B]" },
        { icon: SiExpress, name: "Express.js", color: "text-gray-900 dark:text-white" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900 dark:text-white" },
        { icon: SiVite, name: "Vite", color: "text-[#646CFF]" },
      ]
    },
    {
      key: "tools",
      title: "Tools & Platforms",
      delay: 300,
      items: [
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#38BDF8]" },
        { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
        { icon: SiMysql, name: "MySQL", color: "text-[#005C84]" },
        { icon: FaGitAlt, name: "Git", color: "text-[#F05032]" },
        { icon: FaGithub, name: "GitHub", color: "text-gray-900 dark:text-white" },
        { icon: SiPostman, name: "Postman", color: "text-[#FF6C37]" },
        { icon: SiSocketdotio, name: "Socket.io", color: "text-gray-900 dark:text-white" },
        { icon: SiJsonwebtokens, name: "JWT", color: "text-[#823998]" }
      ]
    }
  ];

  const SkillSection: React.FC<SkillSectionType> = ({ title, items, delay = 0 }) => (
    <div
      className="space-y-6 rounded-3xl"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
          <span className="ml-3 text-emerald-500">→</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-300/40 dark:border-white/10 bg-white/90 dark:bg-white/5 px-4 py-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/70 dark:hover:border-emerald-300/60"
          >
            <item.icon className={`h-10 w-10 ${item.color} transition-transform duration-300 group-hover:scale-110`} />
            <span className="text-sm font-medium text-gray-700 dark:text-slate-200 tracking-wide text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-10 px-auto">
    
         {/* Education Section */}
        <section 
          id="animate-education"
          className={`mt-22 mb-1 mx-[3.5rem] transform flex flex-col md:flex-row justify-center items-center md:justify-between transition-all duration-1000 delay-400 ${
            isVisible['animate-education'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Education <span className="ml-3 text-emerald-500">→</span>

          </h2>
          <div className='flex flex-col w-full max-w-2xl items-end  gap-4'>
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/40 dark:border-white/10 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-900 px-8 py-10 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/70 dark:hover:border-emerald-300/60">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h3 className="text-lg md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-md md:text-lg">
                  CMR Technical Campus | 2023 - 2027
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FaDatabase className="mr-2" />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/40 dark:border-white/10 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-900 px-8 py-10 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/70 dark:hover:border-emerald-300/60">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h3 className="text-lg md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Intermediate - MPC
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-md md:text-lg">
                  Keshav Memorial Junior College | 2021 - 2023
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FaDatabase className="mr-2" />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Skills Section */}
        <section 
          id="animate-skills"
          className="my-20"
        >
          <div className="sm:px-12 px-5 grid grid-cols-1 gap-8">
            {skillSections.map(({ key: sectionKey, ...sectionProps }) => (
              <SkillSection
                key={sectionKey}
                {...sectionProps}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;