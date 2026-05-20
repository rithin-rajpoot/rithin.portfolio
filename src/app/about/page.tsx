"use client";
import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava,
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
  SiNodedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedExperiences, setExpandedExperiences] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
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
      ],
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
        {
          icon: SiExpress,
          name: "Express.js",
          color: "text-gray-900 dark:text-white",
        },
        {
          icon: SiNextdotjs,
          name: "Next.js",
          color: "text-gray-900 dark:text-white",
        },
        { icon: SiVite, name: "Vite", color: "text-[#646CFF]" },
      ],
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
        {
          icon: FaGithub,
          name: "GitHub",
          color: "text-gray-900 dark:text-white",
        },
        { icon: SiPostman, name: "Postman", color: "text-[#FF6C37]" },
        {
          icon: SiSocketdotio,
          name: "Socket.io",
          color: "text-gray-900 dark:text-white",
        },
        { icon: SiJsonwebtokens, name: "JWT", color: "text-[#823998]" },
      ],
    },
  ];

  type ExperienceItem = {
    title: string;
    company: string;
    location: string;
    duration: string;
    summary: string[];
    icon: IconType;
    side: "left" | "right";
    tag: string;
  };

  const experienceItems: ExperienceItem[] = [
    {
      title: "Software Engineering Intern",
      company: "Mittarv Technologies Pvt Ltd",
      tag: "Internship",
      location: "Hybrid · Hyderabad, Telangana, India",
      duration: "Oct 2025 – Mar 2026",
      icon: FaBriefcase,
      side: "left",
      summary: [
        "Developed UI features for web and mobile platforms using React, Redux, and Flutter while collaborating within a multi-developer codebase.",
        "Practiced Agile SCRUM methodology using Jira for sprint planning, task tracking, and backlog management.",
        "Contributed to debugging, feature development, and testing within a production-level application environment.",
        "Used Git and GitHub including feature branches, pull requests, and code reviews in collaborative development.",
      ],
    },
    {
      title: "Student",
      company: "Smart Interviews",
      tag: "Training",
      location: "Onsite · Hyderabad, Telangana, India",
      duration: "Sept 2024 – Mar 2026",
      side: "right",
      icon: FaGraduationCap,
      summary: [
        "Completed structured learning aligned with problem solving, interview preparation, and practical development workflows.",
      ],
    },
    {
      title: "Web Development Internship",
      company: "Future Interns",
      tag: "Project-based Internship",
      location: "Remote Internship",
      duration: "June 2025 – July 2025",
      side: "left",
      icon: FaLaptopCode,
      summary: [
        "Worked on project-based assignments focused on full stack web development, implementation, and delivery.",
      ],
    },
  ];

  const toggleExperience = (experienceKey: string) => {
    setExpandedExperiences((current) => ({
      ...current,
      [experienceKey]: !current[experienceKey],
    }));
  };

  const SkillSection: React.FC<SkillSectionType> = ({
    title,
    items,
    delay = 0,
  }) => (
    <div
      className="space-y-6 rounded-3xl"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
          <span className="ml-3 text-primary">→</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface/90 px-4 py-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
          >
            <item.icon
              className={`h-10 w-10 ${item.color} transition-transform duration-300 group-hover:scale-110`}
            />
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
        {/* Experience Section */}
        <section
          id="animate-experience"
          className={`mb-10 mx-[3.5rem] transform transition-all duration-1000 delay-300 ${
            isVisible["animate-experience"]
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            Experience <span className="ml-3 text-primary">→</span>
          </h2>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-accent-strong/70 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-0">
              {experienceItems.map((item) => {
                const isLeft = item.side === "left";
                const MarkerIcon = item.icon;
                const experienceKey = `${item.company}-${item.title}`;
                const isExpanded = expandedExperiences[experienceKey] ?? false;
                const preview = item.summary[0];
                const extraPoints = item.summary.slice(1);

                return (
                  <div
                    key={`${item.company}-${item.title}`}
                    className="relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-[1fr_5rem_1fr] md:gap-0"
                  >
                    <div className="relative flex items-start md:row-start-1 md:col-start-2 md:justify-self-center">
                      <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-strong text-primary shadow-[0_16px_40px_-24px_rgba(15,23,42,0.4)]">
                        <MarkerIcon className="h-5 w-5" />
                      </div>
                    </div>

                    <div
                      className={`md:row-start-1 ${isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-3 md:pl-12"}`}
                    >
                      <div
                        className={`relative rounded-3xl border border-border bg-surface/90 px-7 py-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}
                      >
                        <div
                          className={`flex flex-col gap-2 ${isLeft ? "md:items-end" : "md:items-start"} md:justify-between md:flex-row`}
                        >
                          <div
                            className={`w-full flex-col md:flex ${isLeft ? "md:items-end" : "md:items-start"}`}
                          >
                            <div className="w-full flex justify-between items-center mb-6">
                              <div
                                className={`w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase text-primary`}
                              >
                                {item.tag}
                              </div>
                              <div className="w-fit rounded-full border border-border bg-surface-strong/80 px-4 py-2 text-xs font-medium text-secondary">
                                {item.duration}
                              </div>
                            </div>
                            <h3 className="text-lg md:text-2xl font-semibold text-heading">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-primary font-medium text-md md:text-lg">
                              {item.company}
                            </p>
                            <p
                              className={`mt-1 flex items-center gap-2 text-secondary ${isLeft ? "justify-end" : "justify-start"}`}
                            >
                              <FaMapMarkerAlt className="h-4 w-4 shrink-0" />
                              <span>{item.location}</span>
                            </p>
                          </div>
                        </div>

                        <div className={`mt-6 text-secondary leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
                          <p className={isLeft ? "md:ml-auto md:max-w-xl" : "md:max-w-xl"}>
                            {preview}
                          </p>

                          {isExpanded && extraPoints.length > 0 && (
                            <ul className={`mt-4 space-y-3 ${isLeft ? "md:text-right" : ""}`}>
                              {extraPoints.map((point) => (
                                <li
                                  key={point}
                                  className={`flex gap-3 ${isLeft ? "md:flex-row-reverse md:justify-start" : ""}`}
                                >
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                  <span className={isLeft ? "md:max-w-xl" : ""}>
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {item.summary.length > 1 && (
                            <button
                              type="button"
                              onClick={() => toggleExperience(experienceKey)}
                              className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-strong ${isLeft ? "md:self-end" : ""}`}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                              <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="animate-education"
          className={`mt-22 mb-1 mx-[3.5rem] transform flex flex-col md:flex-row justify-center items-center md:justify-between transition-all duration-1000 delay-400 ${
            isVisible["animate-education"]
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            Education <span className="ml-3 text-primary">→</span>
          </h2>
          <div className="flex flex-col w-full max-w-2xl items-end gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-surface/90 px-8 py-10 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent-strong rounded-full"></div>
                <h3 className="text-lg md:text-2xl font-semibold mb-3 text-heading">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-primary font-medium mb-2 text-md md:text-lg">
                  CMR Technical Campus | 2023 - 2027
                </p>
                <p className="text-secondary flex items-center">
                  <FaDatabase className="mr-2" />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-surface/90 px-8 py-10 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent-strong rounded-full"></div>
                <h3 className="text-lg md:text-2xl font-semibold mb-3 text-heading">
                  Intermediate - MPC
                </h3>
                <p className="text-primary font-medium mb-2 text-md md:text-lg">
                  Keshav Memorial Junior College | 2021 - 2023
                </p>
                <p className="text-secondary flex items-center">
                  <FaDatabase className="mr-2" />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="animate-skills" className="my-20">
          <div className="sm:px-12 px-5 grid grid-cols-1 gap-8">
            {skillSections.map(({ key: sectionKey, ...sectionProps }) => (
              <SkillSection key={sectionKey} {...sectionProps} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
