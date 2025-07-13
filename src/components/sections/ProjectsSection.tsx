import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Contentify",
    description: "AI-powered content generator that creates high-quality, engaging content using advanced language models. Features real-time generation, multiple content types, and customizable templates.",
    technologies: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: [
      "Real-time AI content generation",
      "Multiple content templates",
      "SEO-optimized outputs",
      "User-friendly interface"
    ],
    github: "https://github.com/medhansh-rawat/contentify",
    live: "https://contentify-demo.vercel.app",
    featured: true
  },
  {
    title: "MatFixer",
    description: "AI assistant for MATLAB code debugging and optimization. Helps developers identify bugs, suggest improvements, and optimize MATLAB code performance.",
    technologies: ["LangGraph", "Flutter", "FastAPI", "Python", "MATLAB API"],
    features: [
      "Automated bug detection",
      "Code optimization suggestions",
      "Real-time debugging",
      "Performance analysis"
    ],
    github: "https://github.com/medhansh-rawat/matfixer",
    live: null,
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and optimized performance.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript", "Vite"],
    features: [
      "Smooth animations",
      "Responsive design",
      "Dark theme",
      "Performance optimized"
    ],
    github: "https://github.com/medhansh-rawat/portfolio",
    live: "https://medhansh-rawat.dev",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Full-stack task management application with real-time collaboration features. Built with modern web technologies and cloud infrastructure.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    features: [
      "Real-time collaboration",
      "Task tracking",
      "Team management",
      "Cloud deployment"
    ],
    github: "https://github.com/medhansh-rawat/task-manager",
    live: "https://task-manager-demo.vercel.app",
    featured: false
  },
  {
    title: "Competitive Programming Tracker",
    description: "Platform to track competitive programming progress across multiple platforms. Features analytics, contest reminders, and performance insights.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
    features: [
      "Multi-platform tracking",
      "Performance analytics",
      "Contest notifications",
      "Progress visualization"
    ],
    github: "https://github.com/medhansh-rawat/cp-tracker",
    live: null,
    featured: false
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with advanced features like AI-powered recommendations, real-time inventory management, and secure payments.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "AI recommendations",
      "Inventory management",
      "Secure payments",
      "Admin dashboard"
    ],
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`bg-portfolio-elevated rounded-xl p-8 border border-white/10 hover:border-accent-primary/30 
                            transition-all duration-300 h-full flex flex-col ${
                              project.featured ? 'ring-2 ring-accent-primary/20' : ''
                            }`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        project.featured ? 'bg-gradient-primary' : 'bg-portfolio-glass'
                      }`}>
                        {project.featured ? (
                          <Sparkles className="w-6 h-6 text-white" />
                        ) : (
                          <Code className="w-6 h-6 text-accent-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-xs text-accent-primary font-semibold">FEATURED</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-text-muted hover:text-accent-primary"
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
                          className="text-text-muted hover:text-accent-primary"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Project Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                          <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-portfolio-glass rounded-full text-xs text-text-secondary border border-white/10
                                   group-hover:border-accent-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};