import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div className="container max-w-6xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-64 h-64 bg-ambient-a rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-ambient-b rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
          My Projects
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-strong to-primary mx-auto rounded-full mb-6" />

        <p className="text-lg text-secondary max-w-2xl mx-auto">
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
      className="relative bg-surface/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
      style={{
        background: "linear-gradient(135deg, rgba(52, 52, 52, 0.82) 0%, rgba(15, 15, 15, 0.62) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <Link
              href={project.githubLink}
              target="_blank"
              className="p-2 border bg-black/35 backdrop-blur-sm rounded-full text-white transition-colors duration-200 hover:bg-black/55"
            >
              <FaGithub className="w-4 h-4" />
            </Link>
            <Link
              href={project.demoLink || project.githubLink}
              target="_blank"
              className="p-2 bg-black/35 backdrop-blur-sm rounded-full text-white transition-colors duration-200 hover:bg-black/55"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-heading">
            {project.title}
          </h3>

          <p className="text-secondary mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-surface-strong/70 text-text rounded-full text-sm font-medium backdrop-blur-sm border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex border border-border transition-all duration-500 hover:border-primary/40 text-sm lg:text-lg items-center gap-2 px-6 py-3 bg-surface-strong/70 text-text rounded-lg font-medium transition-colors duration-200 hover:bg-surface-strong"
            >
              <FaGithub className="w-4 h-4" />
              <span>View Code</span>
            </Link>

            <Link
              href={project.demoLink || project.githubLink}
              target="_blank"
              className="flex text-sm lg:text-lg items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors duration-200 hover:bg-primary/90"
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