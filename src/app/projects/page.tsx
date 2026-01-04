import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div className="container max-w-6xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          My Projects
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects. Click on the links to view the code or live.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
  technologies: string[];
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <article
      className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-gray-200/40 dark:border-white/10 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-900 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/70 dark:hover:border-emerald-300/60"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <Link
              href={project.githubLink}
              target="_blank"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors duration-200 hover:bg-black/70"
            >
              <FaGithub className="w-4 h-4" />
            </Link>
            <Link
              href={project.demoLink || project.githubLink}
              target="_blank"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors duration-200 hover:bg-black/70"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex text-sm lg:text-lg items-center gap-2 px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <FaGithub className="w-4 h-4" />
              <span>View Code</span>
            </Link>

            <Link
              href={project.demoLink || project.githubLink}
              target="_blank"
              className="flex text-sm lg:text-lg items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-blue-700"
            >
              <span>View Live</span>
              <FaExternalLinkAlt className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;