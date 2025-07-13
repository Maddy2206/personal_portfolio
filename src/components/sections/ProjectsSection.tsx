import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Github, Code, Sparkles, Play, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Import project preview images
import contentifyPreview from "@/assets/contentify-preview.jpg";
import matfixerPreview from "@/assets/matfixer-preview.jpg";
import portfolioPreview from "@/assets/portfolio-preview.jpg";
import taskManagerPreview from "@/assets/taskmanager-preview.jpg";
import cpTrackerPreview from "@/assets/cptracker-preview.jpg";
import ecommercePreview from "@/assets/ecommerce-preview.jpg";

const projects = [
  {
    title: "Contentify",
    description: "AI-powered content generator that creates high-quality, engaging content using advanced language models. Features real-time generation, multiple content types, and customizable templates.",
    fullDescription: "Contentify is a cutting-edge AI-powered content generation platform that leverages advanced language models to create high-quality, engaging content across multiple formats. Built with Next.js and integrated with the Gemini API, it offers real-time content generation with customizable templates, SEO optimization, and an intuitive user interface designed for both beginners and professionals.",
    technologies: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: [
      "Real-time AI content generation",
      "Multiple content templates",
      "SEO-optimized outputs",
      "User-friendly interface"
    ],
    image: contentifyPreview,
    github: "https://github.com/medhansh-rawat/contentify",
    live: "https://contentify-demo.vercel.app",
    featured: true
  },
  {
    title: "MatFixer",
    description: "AI assistant for MATLAB code debugging and optimization. Helps developers identify bugs, suggest improvements, and optimize MATLAB code performance.",
    fullDescription: "MatFixer is an intelligent AI assistant specifically designed for MATLAB developers. Using LangGraph and advanced language processing, it automatically detects bugs, provides optimization suggestions, and offers real-time debugging assistance. The platform includes performance analysis tools and integrates seamlessly with existing MATLAB workflows.",
    technologies: ["LangGraph", "Flutter", "FastAPI", "Python", "MATLAB API"],
    features: [
      "Automated bug detection",
      "Code optimization suggestions",
      "Real-time debugging",
      "Performance analysis"
    ],
    image: matfixerPreview,
    github: "https://github.com/medhansh-rawat/matfixer",
    live: null,
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and optimized performance.",
    fullDescription: "A sophisticated personal portfolio website showcasing modern web development practices. Built with React and enhanced with Framer Motion animations, it features a responsive design, dark theme, glassmorphism effects, and performance optimizations that deliver an exceptional user experience across all devices.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript", "Vite"],
    features: [
      "Smooth animations",
      "Responsive design",
      "Dark theme",
      "Performance optimized"
    ],
    image: portfolioPreview,
    github: "https://github.com/medhansh-rawat/portfolio",
    live: "https://medhansh-rawat.dev",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Full-stack task management application with real-time collaboration features. Built with modern web technologies and cloud infrastructure.",
    fullDescription: "A comprehensive task management platform designed for modern teams. Features real-time collaboration through Socket.io, advanced task tracking, team management capabilities, and robust cloud deployment on AWS. The application supports multiple workspaces, deadline tracking, and seamless team communication.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    features: [
      "Real-time collaboration",
      "Task tracking",
      "Team management",
      "Cloud deployment"
    ],
    image: taskManagerPreview,
    github: "https://github.com/medhansh-rawat/task-manager",
    live: "https://task-manager-demo.vercel.app",
    featured: false
  },
  {
    title: "Competitive Programming Tracker",
    description: "Platform to track competitive programming progress across multiple platforms. Features analytics, contest reminders, and performance insights.",
    fullDescription: "An advanced competitive programming analytics platform that aggregates data from multiple coding platforms including Codeforces, LeetCode, and AtCoder. Features comprehensive performance analytics, contest reminders, progress visualization, and detailed insights to help programmers improve their skills and track their journey.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
    features: [
      "Multi-platform tracking",
      "Performance analytics",
      "Contest notifications",
      "Progress visualization"
    ],
    image: cpTrackerPreview,
    github: "https://github.com/medhansh-rawat/cp-tracker",
    live: null,
    featured: false
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with advanced features like AI-powered recommendations, real-time inventory management, and secure payments.",
    fullDescription: "A full-featured e-commerce platform built with Next.js and modern web technologies. Includes AI-powered product recommendations, real-time inventory management, secure payment processing through Stripe, comprehensive admin dashboard, and advanced analytics. Designed for scalability and optimal user experience.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "AI recommendations",
      "Inventory management",
      "Secure payments",
      "Admin dashboard"
    ],
    image: ecommercePreview,
    github: "https://github.com/medhansh-rawat/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    featured: false
  }
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of my recent work in web development, AI/ML, and competitive programming.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  gyroscope={true}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 
                              hover:border-white/30 hover:bg-white/10 shadow-xl hover:shadow-2xl
                              transition-all duration-500 h-full flex flex-col group-hover:shadow-accent-primary/20 ${
                                project.featured ? 'ring-1 ring-accent-primary/30 shadow-accent-primary/10' : ''
                              }`}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold tracking-wide"
                        >
                          ⭐ FEATURED
                        </motion.div>
                      )}

                      {/* Project Actions Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-portfolio-surface border-white/20 max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                                {project.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl"
                              />
                              <p className="text-text-secondary leading-relaxed">
                                {project.fullDescription}
                              </p>
                              <div>
                                <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-text-muted">
                                      <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-portfolio-glass rounded-full text-xs text-accent-primary border border-accent-primary/30"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex space-x-4 pt-4">
                                {project.github && (
                                  <Button asChild className="flex-1">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="w-4 h-4 mr-2" />
                                      View Code
                                    </a>
                                  </Button>
                                )}
                                {project.live && (
                                  <Button asChild variant="outline" className="flex-1">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      Live Demo
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {project.live && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-accent-primary/20 backdrop-blur-sm border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-white hover:scale-110 transition-all"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <Play className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-extrabold text-text-primary group-hover:text-accent-primary transition-colors duration-300 mb-2">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          {project.github && (
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-sm text-text-secondary mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-text-secondary 
                                       border border-white/20 group-hover:border-accent-primary/40 group-hover:text-accent-primary 
                                       transition-all duration-300 hover:bg-accent-primary/10"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};