"use client";
import { featuredProjects } from '@/contents/featuredProjects'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState, useEffect, memo } from 'react'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'

// Individual project card component
type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
  technologies: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const isInView = useInView(cardRef, { 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })

  // Only animate once when first coming into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setIsVisible(true)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div
      ref={cardRef}
      className={`group perspective-1000 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-15'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      <article 
        className='relative bg-surface/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-border transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 hover:rotate-x-2 project-card'
        style={{
          background: 'linear-gradient(135deg, var(--page-surface) 0%, var(--page-surface-strong) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-strong/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/15 via-accent-strong/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className='relative h-64 md:h-full overflow-hidden'>
            <div className="relative w-full h-full transition-transform duration-500 ease-out hover:scale-105">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className='object-cover' 
                sizes='(max-width: 768px) 100vw, 50vw' 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className='p-8 flex flex-col justify-center relative z-10'>
            <h3 className='text-2xl font-bold mb-4 text-heading group-hover:text-primary transition-colors duration-300'>
              {project.title}
            </h3>

            <p className='text-secondary mb-6 leading-relaxed'>
              {project.description}
            </p>

            {/* Modern tech tags */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span 
                  key={tech}
                  className='px-3 py-1 bg-surface-strong/70 text-text rounded-full text-sm font-medium backdrop-blur-sm border border-border hover:border-primary/30 hover:scale-105 hover:bg-primary/10 transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action buttons - Optimized for performance */}
            <div className='flex gap-4'>
              <Link 
                href={project.githubLink} 
                target='_blank' 
                className='flex text-sm md:text-lg items-center gap-2 px-6 py-3 bg-surface-strong/70 text-text rounded-lg font-medium hover:bg-surface-strong transition-all duration-300 backdrop-blur-sm transform hover:scale-105 active:scale-95 project-button'
              >
                <FaGithub className='w-4 h-4'/>
                <span>Code</span>
              </Link>

              <Link 
                href={project.demoLink || project.githubLink} 
                target='_blank' 
                className='flex text-sm md:text-lg items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 project-button'
              >
                <FaExternalLinkAlt className='w-4 h-4'/>
                <span>View Live</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-12 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out] pointer-events-none" />
      </article>
    </div>
  )
})

// Add display name for debugging
ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  const headerRef = useRef(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [hasHeaderAnimated, setHasHeaderAnimated] = useState(false)
  
  const isHeaderInView = useInView(headerRef, { 
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  })

  // Header animation logic
  useEffect(() => {
    if (isHeaderInView && !hasHeaderAnimated) {
      setIsHeaderVisible(true)
      setHasHeaderAnimated(true)
    }
  }, [isHeaderInView, hasHeaderAnimated])

  // Only show first 3 projects
  const projects = featuredProjects.slice(0, 3)

  return (
    <section className='py-20 container max-w-6xl mx-auto px-4 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-ambient-a rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-ambient-b rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Header - Optimized */}
      <div
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ease-out ${
          isHeaderVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent'>
          Featured Projects
        </h2>
        
        <div
          className={`w-32 h-1 bg-gradient-to-r from-primary via-accent-strong to-primary mx-auto rounded-full transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        />
        
        <p
          className={`text-secondary mt-4 text-lg max-w-2xl mx-auto transition-all duration-600 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          A showcase of my latest work that demonstrates my skills and passion for creating exceptional digital experiences
        </p>
      </div>

      {/* Projects - Single Column */}
      <div className='space-y-8 mb-16'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <div className="inline-block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.0, repeat: Infinity }}
              className="text-lg"
            >
              <FaArrowRight />
            </motion.span>
          </Link>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(12deg); }
          100% { transform: translateX(300%) translateY(300%) rotate(12deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .project-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .project-button {
          will-change: transform;
          backface-visibility: hidden;
        }
        .translate-y-15 {
          transform: translateY(3.75rem);
        }
        .rotate-x-2 {
          transform: rotateX(2deg);
        }
      `}</style>
    </section>
  )
}

export default Projects