
import { Project } from "@/types";

export const projects: Project[] = [
      {
        title: 'Gup Shup',
        description: 'Gup Shup is a real-time chat application built with the MERN stack and Redux Toolkit. It features secure authentication (JWT), real-time messaging (Socket.io), a fully responsive design using Tailwind CSS, and over 32 customizable UI themes to enhance user experience.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux Toolkit', 'Tailwind CSS'],
        githubLink: 'https://github.com/rithin-rajpoot/CHAT-APP',
        demoLink: 'https://chat-app-bhh8.vercel.app',
        image: '/projects/chat-app.png',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal Portfolio Website — Built using Next.js and Framer Motion, this personal portfolio showcases modern transitions, smooth animations, and a clean, responsive layout. Designed to highlight projects and skills with an engaging user experience.',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
        githubLink: 'https://github.com/rithin-rajpoot/rithin.portfolio',
        demoLink: 'https://rithin-portfolio.vercel.app/',
        image: '/projects/portfolio-website.png',
      },
      {
        title: 'UberForBlood',
        description: 'A MERN-based platform for real-time donor-seeker interaction, facilitating blood donation and emergency requests.',
        technologies: ['React.js', 'Redux toolkit', 'Socket.io', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js'],
        githubLink: 'https://github.com/rithin-rajpoot/UberForBlood',
        demoLink: 'https://github.com/rithin-rajpoot/UberForBlood',
        image: '/projects/UFB.png',
      },
      // {
      //   title: 'Blog Platform',
      //   description: 'A blogging platform with user authentication and markdown support.',
      //   technologies: ['Gatsby', 'GraphQL', 'Contentful'],
      //   githubLink: 'https://github.com',
      //   demoLink: 'https://demo.com',
      //   image: '/projects/blog-website.jpeg',
      // },
      
  ];