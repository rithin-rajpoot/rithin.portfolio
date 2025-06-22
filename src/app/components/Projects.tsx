"use client";
import { projects } from '@/contents/projects'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { 
    once: true, // Only animate once
    amount: 0.2, // Trigger when 20% is visible (more forgiving on mobile)
    margin: "0px 0px -100px 0px" // Start animation before fully in view
  })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="group perspective-1000"
    >
      <motion.article 
        whileHover={{
          y: -8,
          rotateX: 2,
          transition: { 
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        className='relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu'
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className='relative h-64 md:h-full overflow-hidden'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className='object-cover' 
                sizes='(max-width: 768px) 100vw, 50vw' 
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className='p-8 flex flex-col justify-center relative z-10'>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
              {project.title}
            </h3>

            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              {project.description}
            </p>

            {/* Modern tech tags */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {project.technologies.slice(0, 4).map((tech: string) => (
                <motion.span 
                  key={tech}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  className='px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300'
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className='px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium'>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className='flex gap-4'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={project.githubLink} 
                  target='_blank' 
                  className='flex text-sm md:text-lg items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 backdrop-blur-sm'
                >
                  <FaGithub className='w-4 h-4'/>
                  <span>Code</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={project.demoLink || project.githubLink} 
                  target='_blank' 
                  className='flex text-sm md:text-lg items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <FaExternalLinkAlt className='w-4 h-4'/>
                  <span>Live Demo</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out] pointer-events-none" />
      </motion.article>
    </motion.div>
  )
}

const Projects = () => {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { 
    once: true, // Only animate once
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  })

  // Only show first 3 projects
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className='py-20 container max-w-6xl mx-auto px-4 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent'>
          Featured Projects
        </h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeaderInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto"
        >
          A showcase of my latest work that demonstrates my skills and passion for creating exceptional digital experiences
        </motion.p>
      </motion.div>

      {/* Projects - Single Column */}
      <div className='space-y-8 mb-16'>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
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
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
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
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(12deg); }
          100% { transform: translateX(300%) translateY(300%) rotate(12deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}

export default Projects